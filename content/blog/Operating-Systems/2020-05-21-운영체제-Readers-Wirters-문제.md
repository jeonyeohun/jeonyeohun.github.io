---
title: '[운영체제] 고전적 동기화 문제-2 : 독자와 저자 문제(The Readers-Writers Problem)'
date: 2020-05-23 19:05:26
category: Operating-Systems
thumbnail: { thumbnailSrc }
draft: false
---

참고도서: _Operating System Concepts (10/E) Abraham Silberschatz, Peter B. Galvin, Greg Gagne_

## 독자와 저자 문제

한국어로 직역해서 독자와 저자라고 했지만, 우리에게 더 편한 데이터베이스를 한번 생각해보자. 독자는 데이터베이스를 read 하는 요청, 저자는 데이터베이스를 write 하는 요청이라고 한다면 우리는 다음과 같은 충돌 상황에 대한 대체가 필요하다.

1. Write 하고 있는 중에 Read가 되는 경우
2. Write 하고 있는 중에 또 다른 Write 가 요청된 경우

위 두가지 충돌 상황을 보게되면 가장 문제를 크게 야기하는 부분이 write라는 생각이 들었을 것이다. 상식적으로 생각했을 때도, 동시에 여러 읽기 작업이 일어나는 것은 데이터의 변형을 일으키지 않으니 전혀 문제가 될 것이 없다. 결국 이 문제를 해결하기 위해서는 다음과 같은 대처가 필요하다.

1. Write가 수행되고 있는 동안에는 Read가 접근하지 못하게 한다.
2. 한번에 하나의 Write 만 접근을 허용한다.

그럼 이 내용을 세마포어를 이용해서 구현해보자.

## 자료구조(Data Structure)

동기화를 위한 변수는 다음과 같이 사용한다

```cpp
semaphore rw_mutex = 1;
semaphore mutex = 1;
int read_count = 0;
```

1. `rw_mutex` : Writer 와 Reader 사이에 공유되는 변수이다. 공유 데이터에 Writer와 Reader 가 함께 존재하는 경우는 있으면 안되기 때문에 semaphore 값을 1로 초기화 한다. lock을 획득할 수 있는 프로세스의 개수가 최대 한 개라는 뜻이다.
2. `mutex` : read_count 의 값 갱신이 atomic 하게 일어날 수 있게끔 writer 의 접근을 차단하기 위한 lock이다.
3. `read_count` : 현재 Read 를 수행하는 프로세스의 개수를 기록하는 변수이다.

## Writer

쓰기 작업을 수행하는 Writer 의 구조는 다음과 같다.

```cpp
do {
    wait (rw_mutex); // 쓰기를 위한 lock 획득
    ...
    /* 쓰기 작업 수행 */
    ...
    signal (rw_mutex); // lock 반납
}
```

1. Writer는 일단 `rw_mutex`가 사용가능한 상태인지 확인한다. 만약 Reader가 데이터를 읽고 있다면, `rw_mutex`의 값이 음수가 되기 때문에 Writer는 대기하게 된다.
2. lock을 획득하게 되면 임계구역으로 진입해서 쓰기 작업을 수행한다. `rw_mutex`는 `binary semaphore`이기 때문에 만약 Writer가 lock을 획득했다면, Reader는 임계구역에 접근할 수 없게된다.
3. 쓰기 작업을 마치면 signal을 실행하면서 lock을 방출하고 작업을 종료한다.

## Reader

읽기 작업을 수행하는 Reader 의 구조는 다음과 같다.

```cpp
do {
    wait (mutex);           // read_count 의 증가 연산이 다른 프로세스의 영향을 받지 않게 하기 위해 lock 획득
    read_count++            // 증가. mutex 세마포어 덕분에 한번에 하나의 증가만 일어난다
    if (read_count == 1){   // read_count 가 1이라면 제일 처음 읽기를 시도하는 프로세스
        wait(rw_mutex);     // Writer 가 작업중인지 확인하고 작업중이면 대기상태로 넣기
    }
    signal(mutex);          // lock 반환

    /* 읽기 작업 수행 */

    wait(mutex);            // read_count 의 값을 줄이기 위해 lock 획득
    read_count--;           // 연산 수행
    if(read_count == 0){    // 만약 read_count가 0이라면, 현재 읽기 작업을 수행중인 프로세스가 없다
        signal(rw_mutex);   // 대기중인 Writer 에 signal을 보낸다
    }
    signal(mutex);          // lock 반환
} while (true);
```

Writer 는 매우 직관적이고 단순한 구조였지만, Reader 는 조금 복잡해졌다. 임계구역 앞뒤로 나누어서 과정을 한번 따라가 보자.

### 읽기 작업 진입 전

```cpp
    wait (mutex);           // read_count 의 증가 연산이 다른 프로세스의 영향을 받지 않게 하기 위해 lock 획득
    read_count++            // 증가. mutex 세마포어 덕분에 한번에 하나의 증가만 일어난다
    if (read_count == 1){   // read_count 가 1이라면 제일 처음 읽기를 시도하는 프로세스
        wait(rw_mutex);     // Writer 가 작업중인지 확인하고 작업중이면 대기상태로 넣기
    }
    signal(mutex);          // lock 반환

    /* 읽기 작업 수행 */

    ...
```

1. 다수의 Reader가 임계구역 진입을 시도할 수 있다. 이때 read_count 의 값을 증가시키는 것이 atomic 하게 수행되어야 하는데 `++` 연산은 atomic 한 연산이 아니다.
2. 따라서 mutex로 lock을 획득해서 read_count 를 한번에 한 프로세스에서만 증가시킬 수 있게 한다.
3. read_count 를 증가시킨 시점에서 read_count의 값이 `1`이라면, 해당 프로세스가 임계구역에 진입하는 `최초의 Reader`임을 의미한다. lock 을 획득해서 read_count 값을 올리는 이유가 바로 여기에 있다. 만약 lock이 없었다면 여러 Reader가 read_count의 값을 증가시켜서 최초의 프로세스가 누구였는지 판단할 수 없게 될 것이다.
4. 진입을 시도하는 프로세스가 최초의 Reader 라면 Writer가 작업중일 가능성이 있기 때문에 `rw_mutex` 를 확인해서 Writer가 작업중이라면 Reader를 대기 큐에 넣는다.
5. 만약 이 프로세스가 읽기를 처음 시작하는 프로세스가 아니라면 이미 임계구역 내에서 읽기 작업을 수행중인 프로세스가 있다는 것이기 때문에 `rw_mutex`를 검사할 필요없이 곧바로 임계구역으로 진입한다.
6. 임계구역으로 진입하면서 다른 Reader 의 접근을 허용하기 위해 `signal(mutex)`를 실행한다.

### 읽기 작업 후

```cpp
    ...

    /* 읽기 작업 수행 */

    wait(mutex);            // read_count 의 값을 줄이기 위해 lock 획득
    read_count--;           // 연산 수행
    if(read_count == 0){    // 만약 read_count가 0이라면, 현재 읽기 작업을 수행중인 프로세스가 없다
        signal(rw_mutex);   // 대기중인 Writer 에 signal을 보낸다
    }
    signal(mutex);          // lock 반환
```

1. 읽기 작업이 끝나면, Reader는 임계구역을 빠져나오면서 reader_count 를 하나 감소시켜야 한다.
2. 이때 역시 reader_count 의 감소연산을 atomic하게 만들기 위해 mutex 세마포어를 통해 다른 Reader의 접근을 제한한다.
3. reader_count의 값을 하나 줄였을 때 결과 값이 0이 된다면 방금 임계구역을 빠져나온 프로세스가 실행중이던 `마지막 Reader`가 된다.
4. 따라서 rw_mutex의 값을 증가시켜서 Writer가 lock을 획득할 수 있게한다.
5. 마지막 Reader가 아니라면 아직 임계구역에서 작업중인 Reader가 있다는 것을 의미하고 Writer 의 접근이 제한되어야 하기 때문에 다른 mutex만 signal 해주고 종료된다.
