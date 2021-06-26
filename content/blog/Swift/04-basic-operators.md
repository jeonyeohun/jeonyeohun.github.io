---
title: '[공식문서로 Swift 공부하기] 4. Basic Operators'
date: 2021-06-26 13:37:10
category: Swift
thumbnail: { thumbnailSrc }
draft: false
---

# Basic Operators

> https://docs.swift.org/swift-book/LanguageGuide/BasicOperators.html

## Terminology

- Operator는 `unary`, `binary`, `tenary` 세 가지 종류로 구분할 수 있다.
- `Unary operator`는 피연산자를 하나만 가지는 연산자이다. 연산자가 피연산자 앞에 위치할 경우에는 `prefix operator`, 연산자가 피연산자 뒤에 위치할 경우는 `postfix oeprator`라고 한다.
- `Binary operator`는 두개의 피연산자를 가지는 연산자이다. 동시에 binary operator 는 `infix` 라고도 하는데, 두 피연산자 사이에 연산자가 위치하기 때문이다.
- `Ternary operator` 는 세 개의 피연산자를 가지는 연산자이다.

## Assignment Operator

- 다른 언어와 마찬가지로 `=` 를 통해 대상 변수에 값을 업데이트 할 수 있다.
- 만약 오른쪽에 여러 값을 가진 tuple이 오면, 왼쪽에는 tuple의 원소개수 만큼의 변수를 주어서 대입할 수 있다.
- 스위프트에서 모든 연산자는 연산자의 양쪽에 같은 개수만큼의 공백이 있어야한다.

  ```swift
  let (x, y) = (1, 2)

  let a=1 // ok
  let b =1 // error
  let c= 1 // error
  ```

## Arithmetic Operator

- 다른 언어와 마찬가지로 사칙연산과 모듈로 연산을 제공한다.

  ```swift
  let addition = 1 + 2 // 3
  let subtraction = 1 - 2 // -1
  let multiplication = 1 * 2 // 2
  let division = 1.0 / 2.0 // 0.5
  let modulus = 1.0 % 2.0 // 1
  ```

- `+` 연산자는 문자열을 합치는 연산으로도 사용된다.

  ```swift
  let stringConcat = "hello " + "world"
  ```

### Unary Minus Operator

- `unary minus` 연산은 피연산자앞에 `-` 를 붙여 사용할 수 있다. 공백없이 붙여 써야하며 피연산자에 -1을 곱한 결과를 반환한다.

  ```swift
  let three = 3
  let minusThree = -three // -3
  let plusThree = -minusThree // 3
  ```

### Unary Plus Operator

- `unary plus` 연산은 피연산자에 `+`를 붙여 사용할 수 있다. 공백없이 붙여 써야하며 피연산자에 +1을 곱한 결과를 반환한다.

  ```swift
  let minusSix = -6;
  let alsoMinusSix = +minusSix // -6
  ```

## Compound Assignment Operators

- C언어와 마찬가지로 `+=`, `-=`, `*=`, `/=`, `%=` 의 복합 연산자를 사용할 수 있다.
- Compound Assignment oeprator는 `리턴값을 가지지 않는다`.

  ```swift
  var a = 1
  a += 2 // a == 3

  let b = a+=2 // error
  ```

## Comparison Operators

- 스위프트가 제공하는 비교연산은 아래와 같다.

  - Equal to `(a == b)`
  - Not equal to `(a != b)`
  - Greater than `(a > b)`
  - Less than `(a < b)`
  - Greater than or equal to `(a >= b)`
  - Less than or equal to `(a <= b)`
  - Reference is eqaul to `(a === b)`
  - Reference is not eqaul to `(a !== b)`

- 비교 연산자는 두 tuple을 비교할 때도 사용할 수 있다. tuple의 가장 왼쪽 요소부터 하나씩 서로 비교해가면서 두 값이 같지 않을 때까지 비교연산을 진행한다.

  ```swift
  (1, "zebra") < (2, "apple")   // true. 1이 2보다 작기때문에 true가 되고 첫번째 비교연산을 통해 비교가 끝났기 때문에 두번째 tuple 요소에 대한 비교연산은 수행하지 않는다.
  (3, "apple") < (3, "bird")    // true. 첫번째 요소인 3이 같기 때문에 다음요소로 넘어가고 apple은 bird보다 알파벳 순서상 작기때문에 true가 된다.
  (4, "dog") == (4, "dog")      // true. tuple 내의 모든 요소들의 값이 같기 때문에 true가 된다.
  ```

- tuple에 비교연산을 수행할 때는, tuple 내부에 있는 값의 타입을 고려해야 한다.

  ```swift
  ("blue", -1) < ("purple", 1) // ok
  ("blue", false) < ("purple", true) // error. Bool 타입은 < 연산이 불가능하다.
  ```

- tuple 에 대한 비교연산은 최대 6개의 요소를 가지는 tuple에 대해서만 지원한다. 7개 이상의 요소를 가지는 tuple에 비교연산을 수행하려면 비교연산자를 직접 정의해야한다.

## Ternary Conditional Operator

- C언어처럼 `question ? answer1 : answer2` 의 형태로 정의한다. question이 `true`면 answer1 을 사용하고, `false`면 answer2를 사용한다.
- Ternary Conditional 연산을 사용하면 코드를 짧고 간단하게 작성할 수 있지만, 과도하게 사용하면 오히려 가독성이 떨어지는 코드가 될 수 있다.

## Nil-Coalescing Operator

- `nil-coalescing` 연산은 `a ?? b` 로 작성할 수 있고, 만약 optional 변수 `a`에 값이 있다면 a를 unwrap 하여 내부 값을 반환하고, a가 nil이라면 `b`의 값을 반환한다.
- 아래 코드를 단축어로 만든 것과 같다.

  ```swift
  a != nil ? a! : b
  ```

- 이 연산을 사용해서 변수의 기본 값을 설정해주는 코드를 만들 수 있다.

  ```swift
  let defaultColorName = "red"
  var userDefinedColorName: String?

  var colorNameToUse = userDefinedColorName ?? defaultColorName
  ```

## Range Operators

### Closed Range Operator

- `a...b` 연산자를 통해 a와 b를 포함해 a부터 b까지로 범위를 지정할 수 있다.

  ```swift
  for index in 1...5 {
    print("index: \(index)")
    // index: 1
    // index: 2
    // index: 3
    // index: 4
    // index: 5
  }
  ```

### Half-Open Range Operator

- `a..<b` 연산자를 통해 a는 포함하고 b는 포함하지 않는 범위를 지정할 수 있다.
- 배열의 인덱스가 0부터 시작하기 때문에 모든 배열요소를 탐색하는데 유용하게 사용할 수 있다.

  ```swift
  let names = ["Anna", "Alex", "Brian", "Jack"]
  let count = names.count
  for i in 0..<count {
      print("Person \(i + 1) is called \(names[i])")
  }
  // Person 1 is called Anna
  // Person 2 is called Alex
  // Person 3 is called Brian
  // Person 4 is called Jack
  ```

### One-Sided Ranges

- one-sided range 를 사용해서 배열에 접근하는 것도 가능하다.

  ```swift
  for name in names[2...] {
    print(name)
  }
  // names 배열의 2번째 인덱스부터 끝까지 접근해서 값을 name에 저장한다.

  for name in names[...2] {
    print(name)
  }
  // names 배열의 0번째 인덱스부터 2번째 인덱스까지 접근해서 값을 name에 저장한다.
  ```

- half-open range 와 섞어서 사용할 수도 있다.

  ```swift
  for name in names[..<2] {
    print(name)
  }
  // 2번째 인덱스는 포함하지 않는다.
  ```

## Logical Operators

### Logical NOT Operator

- NOT 은 `!`를 값 앞에 붙여주는 것으로 사용할 수 있다.

  ```swift
  let allowedEntry = false
  if !allowedEntry {
      print("ACCESS DENIED")
  }
  // Prints "ACCESS DENIED"
  ```

### Logical AND Operator

- AND는 `&&` 를 두 값 사이에 넣어주는 것으로 사용할 수 있다. 양쪽 값이 모두 true일 때만 true를 반환한다.
- 첫번째 값이 false면 두번째 값은 체크하지 않고 곧바로 false를 반환한다. 이런 방식의 계산을 `short-circuit evaluation`이라고 한다.

  ```swift
  let enteredDoorCode = true
  let passedRetinaScan = false
  if enteredDoorCode && passedRetinaScan {
      print("Welcome!")
  } else {
      print("ACCESS DENIED")
  }
  // Prints "ACCESS DENIED"
  ```

### Logical OR Operator

- OR는 `||` 를 두 값 사이에 넣어주는 것으로 사용할 수 있다. 양쪽 값 중 하나라도 true면 true를 반환한다.
- short-circuit evaluation은 OR 연산에도 적용된다. 만약 첫번째 값이 true 라면, 두번째 값을 검사하지 않고 곧바로 true를 반환한다.

  ```swift
  let hasDoorKey = false
  let knowsOverridePassword = true
  if hasDoorKey || knowsOverridePassword {
    print("Welcome!")
  } else {
    print("ACCESS DENIED")
  }
  // Prints "Welcome!"

  ```

### Combining Logical Operators

- 스위프트의 논리연산은 항상 왼쪽 값을 기준으로 진행된다. 여러개의 논리연산이 합쳐져 있는 경우에는 가장 왼쪽의 논리연산이 먼저 수행된다.

### Explicit Parentheses

- 복합 논리연산에 괄호를 사용하면 더 가독성이 좋은 코드를 생산할 수 있다.

  ```swift
  if (enteredDoorCode && passedRetinaScan) || hasDoorKey || knowsOverridePassword {
      print("Welcome!")
  } else {
      print("ACCESS DENIED")
  }
  // Prints "Welcome!"
  ```

  AND 연산과 OR 연산 사이에 괄호는 반드시 필요하지 않지만 괄호를 사용하면 개발자의 의도를 더 명확하게 표현할 수 있다.
