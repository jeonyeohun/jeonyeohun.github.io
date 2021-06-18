---
title: '[JavaScript] 자바스크립트 동작원리 - 스코프(Scope)'
date: 2021-05-27 13:05:62
category: JavaScript
thumbnail: { thumbnailSrc }
draft: false
---

## 전역 변수, 지역 변수

자바스크립트에서 전역변수는 함수 내에 포함되지 않는 변수를 의미한다. 따라서 전역 변수로 선언된 변수는 전역 객체인 `window` 에 바인딩된다.

## 스코프

자바스크립트는 `전역 스코프`, `블록 스코프`, `함수 스코프` 로 나눌 수 있다. 전역 스코프는 코드의 모든 부분에서 접근이 가능한 영역, 블록스코프는 중괄호로 둘러쌓은 코드영역을 의미하고, 함수 스코프는 함수의 선언에 만들어져있는 블록을 의미한다.

## 함수 레벨 스코프

자바스크립트의 함수 레벨 스코프는 어떤 변수가 해당 함수 내에서 유효하다는 것을 의미한다. 블록 레벨 스코프와 헷갈릴 수도 있지만 함수 내부에 그 어떤 블록 스코프가 있더라도 접근이 가능하다고 생각하면 단순하다.

```js
function func(showContent) {
  if (showContent) {
    var content = 'Hello World!'
  }

  console.log(content)
}

func(true)
```

위 코드에서 `content` 변수는 함수 스코프 내부의 블록 스코프에 존재하는 변수이다. 실제로 content 변수의 값을 출력하는 함수는 if의 블록스코프 외부에 있지만 정상적으로 content가 출력되는 이유는 `var` 로 선언된 변수가 함수 스코프를 가지기 때문이다. 이 변수는 함수 스코프를 가지기 때문에 함수 내부에서는 항상 참조가 가능하기 때문에 if 블록 외부에서도 출력이 가능하다.

## 블록 레벨 스코프

함수 스코프는 개발자의 의도와 다른 결과를 만들 수도 있다. 예를 들어 어떤 함수 내에서 실수로 같은 변수 이름을 var로 다른 블록에서 사용했다고 하더라도, 두 변수는 함수 스코프를 가지기 때문에 결과가 이상해진다.

```js
function func(showContent) {
  if (showContent) {
    var content = 'Hello World!'
  }
  if (showContent) {
    var content = 'hey'
    console.log(content)
  }
  console.log(content)
}

func(true)
```

위 코드의 결과는

```
hey
hey
```

이다. 이런 문제를 막기 위해 블록 스코프에서만 유효범위를 가지는 `let` 이나 `const` 를 사용해서 변수를 선언한다.

### var / let / const

스코프와 뗄레야 뗼 수 없는 것이 var, let, const 의 차이점을 설명해보라는 질문이다. 크게 나눠보면 let, const의 유효 범위는 `블록 스코프`, var의 유효범위는 `함수 스코프`이다.

그리고 let 과 const 의 차이는 재할당이 가능한지 여부이다. let 은 재할당이 가능하지만 const 는 재할당이 불가능하다.

## 정적스코프(Lexical Scope)

자바스크립트의 눈에 띄는 특징 중 하나가 `렉시컬 스코프` (정적 스코프) 이다. 쉽게 말하면 소스코드가 작성된 순간에 이미 변수의 스코프가 결정된다는 것이다.

```js
var message = 'Hello Global!'

function print() {
  console.log(message)
}

function func() {
  var message = 'Hello Block!'
  print()
}

console.log(message)
func()
```

위 코드의 결과는

```
Hello Global!
Hello Global!
```

이다. print 함수가 작성된 시점에 이미 message 는 `Hello Global!` 로 결정이 되었기 때문에 print() 가 불려지는 시점과 상관없이 전역 변수인 `message` 를 참조한다.
