---
title: '[운영체제] Test-and-Set 과 Compare-and-Swap'
date: 2020-05-18 19:05:26
category: Operating-Systems
thumbnail: { thumbnailSrc }
draft: false
---

참고도서: _Operating System Concepts (10/E) Abraham Silberschatz, Peter B. Galvin, Greg Gagne_

임계구역 문제에 대한 해결책으로 피터슨의 해결안이 제안되었지만 최신의 OS와 시스템들은 필요에 따라 명령어의 순서를 변경해서 실행하기 때문에 피터슨의 해결안이 항상 임계구역 문제를 해결한다는 보장이 없었다. 따라서 소프트웨어적으로가 아니라, 하드웨어적으로 임계구역에 진입하는 연산이 한번에 이루어지도록 하는 것이 필요하다. 이렇게 모든 작업이 쪼개어지지 않고 한번에 수행되는 것을 `actomic operation` 이라고 한다.

## test-and-set

test-and-set 명령어는 한번에 하나의 test-and-set 명령만이 수행된는 것을 보장한다. 따라서 임계구역에 진입하는 연산을 test-and-set을 통해서 수행하게 되면, atomic한 실행이 보장되기 때문에 다른 명령어와 순서가 바뀔 가능성이 없어진다. 아래 구조를 보자.

```java
boolean test_and_set(boolean * target){
    boolean rv = *target;
    *target = true;

    return rv;
}
```

기본적인 test-and-set의 구조는 위와 같다. test_and_set의 역할은 단순히 자신에게 들어오는 값을 true 로 만들고 내보내는 것이다. 이 연산을 임계구역 관리에 적용해보면 다음과 같은 구조를 만들 수 있다.

```java
do{
    while (test_and_set(&lock)) ;

    /* critical section */

    lock = false ;

    /* reaminder section */

} while (true)
```

가장 초기에 lock 은 `FALSE` 로 초기화 되어있을 것이다. 따라서 while문의 test_and_lock에 진입하게 되면 rv에는 `FALSE` 가 저장되고 target 인 lock은 `TRUE`로 변경된다. 반환값은 rv이기 때문에 `FALSE` 가 반환되면서 해당 프로세스는 while문을 빠져나와 임계구역에 진입하게 된다.

반면에 다른 프로세스들은 lock 이 TRUE인 상태에서 test_and_set에 진입하게 되기 때문에 while문의 값이 `TRUE`가 되어 무한루프를 돌게된다. 임계구역에서 작업했던 프로세스는 임계구역을 빠져나오면서 lock을 다시 false로 만들기 때문에 무한루프 안에서 대기 중이던 프로세스 하나가 임계구역으로 진입할 수 있게된다.

### Bounded Waiting Problem

이런 방식은 임계구역에 여러 프로세스가 동시에 진입하는 문제는 해결하지만 bounded waiting 의 요구사항을 만족시키지는 못한다. 즉 대기 중인 프로세스가 임계구역으로 진입하지 못하고 다른 프로세스에게 계속 진입순서를 양보하는 경우가 생길 수도 있다. 위 코드를 보면 사실 매우 당연한 일인데, 만약에 여러 프로세스가 무한루프를 돌면서 계속 test_and_set을 수행할 때 그 시점에 운좋게 임계구역이 비게되면, 어떤 프로세스가 먼저 기다리고 있는지에 상관없이 바로 임계구역으로 진입하는 구조로 만들어져 있다.

### Solution

bounded waiting 까지 보장하기 위해서는 다음과 같이 코드를 수정해야한다.

```java
waiting[i] = true
key = true;

while(waiting[i] && key)
    key = test_and_set(&lock);
waiting[i] = false;

/* critical section */

j = (i + 1) % n;
while((j != i) && !waiting[j])
    j = (j + 1) % n;

if (j == i)
    lock = false;
else
    waiting[j] = false;

/* remainder section */

} while (true);
```

프로세스 간 공유자원으로 waiting 배열과 key 가 변수로 추가되었다. 임계 구역에 진입하기 전에는 `waiting[i] && key` 조건을 계속 확인하면서 무한루프를 돌게된다. 초기에 각 waiting 요소들은 true를 가지고 lock과 key는 false 값을 가지기 때문에 가장 처음 이 구간에 진입하는 프로세스는 항상 임계구역에 진입하게 된다. 그리고 다른 프로세스들은 true 값을 가지는 lock에 따라 무한루프를 돌게 된다. 따라서 한번에 한 프로세스만 임계구역 진입을 허용하는(mutual-exclusion)이 보장되게 된다.

임계구역에서 작업을 마친 프로세스는 waiting 배열 상에서 자기자신의 바로 다음에 있는 프로세스부터 전체 배열을 순회하면서 임계구역 진입을 기다리고 있는 프로세스가 있는지 확인한다. 기존의 test-and-set과의 차별점이 여기에 있다. 기존 test-and-set은 대기중인 프로세스들이 무한로프를 돌다가 우연히 lock이 해제되는 타이밍에 맞게 test_and_set을 실행한 프로세스가 임계구역으로 진입하게 된다. 하지만 위 코드에서는 랜덤하지 않고 순서대로 모든 프로세스를 확인해서 특정한 프로세스가 운이 나빠 무한히 lock을 위해 대기하는 상황을 막을 수 있다.

## Compare and Swap

```java
int comapre_and_swap(int *value, int expected, int new_value){
    int temp = *value;
    if (*value == expected)
        *value = new_value;

    return temp;
}
```

comapre-and-swap 역시 test-and-set과 비슷하게 atomic한 연산을 보장하는 방식이다. 이 함수는 세 개의 인자를 받게되는데, value 에는 lock 이 전달되고 expected 에는 0, new_value 에는 1이 전달된다. 따라서 lock 을 아무도 소유하고 있지 않을 때만 lock의 값을 1로 바꿔서 lock을 획득하는 하게 된다. 아래 예시코드를 보면서 자세히 확인해보자.

```java
do{
    while(compare_and_swap(&lock, 0, 1) != 0) ;

    /* critical section */

    lock = 0;

    /* remainder section */

}while (true);
```

이 프로그램이 실행될 때 lock의 값은 false(0) 으로 초기화 되기 때문에 임계구역 구간에 처음으로 도착한 프로세스는 항상 compare_and_swap 에 성공하게 된다. 이때 lock 의 값이 1로 바뀌게 되기 때문에 이 프로세스가 임계구역 안에 있는 동안은 compare_and_swap 에서 계속 lock의 값인 true(1) 가 반환되면서 다른 프로세스들은 무한루프에 빠지게 된다.

실행 구조가 test-and-set과 유사하기 때문에 test-and-set과 동일은 bounded-waiting 문제는 이번에도 역시 발생하다.
