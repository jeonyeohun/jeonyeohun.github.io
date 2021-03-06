---
title: '[JavaScript] 자바스크립트 동작원리 - Web API와 이벤트 루프'
date: 2021-05-22 19:05:98
category: JavaScript
thumbnail: { thumbnailSrc }
draft: false
---

## 자바스크립트 엔진은 싱글스레드이다.

자바스크립트 언어를 파싱하고 실행하는 자바스크립트 엔진은 싱글스레드로 구성되어 있다. 따라서 동기적으로 코드가 처리되어야 한다. 자바스크립트 엔진'만' 사용한다면 말이다.

## 자바스크립트 엔진의 메모리 구조.

자바스크립트 엔진은 두 종류의 메모리 구조를 가진다.

1. 메모리 힙 : 메모리 힙은 객체나 변수 등의 할당을 위해 사용하는 메모리 공간이다.
2. 콜 스택 : 실행되어야 하는 함수가 담기는 스택형태의 자료구조이다. 마지막에 들어온 함수부터 pop 한다. 즉, 뒤에 실행된 함수가 종료되지 않으면 먼저 호출된 함수가 종료되지 않는다.

## 자바스크립트 엔진의 좋은 친구, Web API

비동기 처리 환경이나, AJAX, DOM을 조작하는 등 더 다양한 기능을 자바스크립트 엔진이 수행하도록 하기 위해서 자바스크립트 런타임에는 `Web API` 가 함께 동작한다. Web API는 자바스크립트 엔진의 일부는 아니지만 밀접하게 연결되어 동작한다.

### 콜백 큐 (Callback Queue)

Web API 에는 Callback Queue 가 존재한다. 콜백 큐는 Web API 가 콜백 함수를 저장하는, 선입선출로 동작하는 자료구조이다.

### 이벤트 루프 (Event Loop)

이벤트 루프는 콜백 큐에 저장된 콜백 함수를 자바스크립트 엔진의 `콜 스택이 비어있을 때` 콜 스택으로 집어넣는 역할을 한다. 이를 위해 런타임에 이벤트 루프는 콜백 큐와 콜 스택을 계속해서 지켜보고 있는다.

### 비동기 처리

이제 자바스크립트에서 비동기 처리가 어떻게 일어나는지 설명할 수 있다. Web API에서 제공하는 콜백 함수를 콜백 큐에 넣고 다른 작업들을 수행한 뒤에 콜 스택이 완전히 비게 되면 콜백 큐에 있던 함수가 콜 스택으로 이벤트 루프에 의해 이동되어 실행된다. 실제로 자바스크립트 엔진은 한번에 하나의 작업을 수행하지만, 비동기적으로 처리되는 것이다.

## 정리

1. 자바스크립트 엔진은 싱글스레드 엔진이다.
2. 브라우저 런타임에서 자바스크립트 엔진에 더 다양한 기능을 더하기 위해 Web API가 항상 함께 동작한다.
3. 자바스크립트 엔진의 콜 스택은 실행할 함수를 저장한다.
4. Wen API의 함수가 콜 스택에서 실행되면, Web API에게 전달된다.
5. Web API는 함수를 처리하고 필요하다면 콜백 큐에 콜백 함수를 넣는다.
6. 이벤트 루프는 콜 스택과 콜백 큐를 지켜보다가 콜 스택이 비었을 때, 콜백 큐에 있는 함수를 콜 스택으로 이동시킨다.

setTimeout 함수 예제를 통해 정리해보자.

```javascript
console.log('hi,')

setTimeout(function() {
  console.log('hello')
}, 0)

console.log('bye.')
```

위 코드의 결과를 생각해보자. 상식적으로는 timeout 을 0초로 걸었기 때문에 다음과 같이 나올 것 같다는 생각이 든다.

```
hi,
hello
bye.
```

하지만 실행 결과는 이렇다.

```
hi,
bye
hello
```

면접에서 이 질문을 받았지만, 이벤트 루프에 대한 공부가 전혀되어 있지 않아 대답하지 못했다. 하지만 이제는 이벤트 루프를 알고있으니 대답할 수 있다..!

자바스크립트 엔진과 Web API 를 생각하면서 따라가보자.

1. `console.log('hi,')` 가 실행되어 콜 스택에 들어간다.

   ```
     |      콜 스택         | 콜백 큐 |
     | :----------------: | :-----: |
     | console.log('hi,') |         |
   ```

2. 콜 스택에서 console.log('hi') 가 실행되며 문자열 `hi,` 가 리턴되고 pop 된다.

   ```
     |   콜 스택      | 콜백 큐 |
     | :----------: | :-----: |
     | return 'hi,' |         |
   ```

3. setTimeout 함수가 실행되어 콜 스택에 들어간다.

   ```
     |         콜 스택            | 콜백 큐 |
     | :----------------------: | :-----: |
     | setTimeout(function(){}) |         |
   ```

4. setTimeout 함수는 Web API 함수이기 때문에 자바스크립트 엔진은 Web API 에게 함수를 넘기고 리턴한다.

   ```
     | 콜 스택   | 콜백 큐 |
     | :-----: | :-----: |
     | return  |         |
   ```

5. Web API는 setTimeout 함수의 두 인자를 받는다. 백그라운드에서 전달받은 시간만큼 타이머를 시작한다.

   ```
     | 콜 스택   | 콜백 큐 |
     | :-----: | :-----: |
     |         |         |
   ```

6. Web API가 타이머를 실행하는 동안 자바스크립트 엔진은 다음에 처리할 `console.log('bye')` 함수를 읽어서 콜 스택에 넣는다.

   ```
     |      콜 스택         | 콜백 큐 |
     | :----------------: | :-----: |
     | console.log('bye') |         |
     |                    |         |
   ```

7. 타이머는 0초였기 때문에 곧바로 종료되고, Web API는 콜백 큐에 setTimeout의 인자로 넘어왔던 콜백 함수를 넣는다.

   ```
     |      콜 스택         |       콜백 큐        |
     | :----------------: | :------------------: |
     | console.log('bye') | console.log('hello') |
     |                    |                      |
   ```

8. 콜 스택에 들어가 있던 `console.log('bye')` 가 실행되고 리턴된다.

   ```
     |   콜 스택      |       콜백 큐        |
     | :----------: | :------------------: |
     | return 'bye' | console.log('hello') |
     |              |                      |
   ```

9. 콜 스택이 비었다. 이벤트 루프는 콜백 큐에 남은 함수가 있고, 콜 스택이 비어있다는 것을 감지했으므로 이 콜백함수를 콜 스택에 집어넣는다.

   ```
   |       콜 스택        | 콜백 큐 |
   | :------------------: | :-----: |
   | console.log('hello') |         |
   |                      |         |
   ```

10. 마지막으로 `console.log('hello')` 가 실행되고 리턴된다.

11. 사용자는 결과를 다음과 같이 본다.

```
hi,
bye
hello

```
