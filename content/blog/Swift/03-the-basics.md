---
title: '[공식문서로 Swift 공부하기] 3. The Basics'
date: 2021-06-23 19:06:10
category: Swift
thumbnail: { thumbnailSrc }
draft: false
---

# The Basics

> https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html

스위프트는 C, Objective-C 와 유사하지만 더 강력한 기능들을 제공한다. 스위프트가 제공하는 자료형은 다음과 같다:

1. Int
2. Double
3. Float
4. Bool
5. Array
6. Set
7. Dictionary
8. Tuple

Array, Set, Dictionary는 `Collection Types` 이며 Tuple은 여러 데이터를 한번에 전달하고 반환할 때 사용하기에 용이한 타입이다.

## Constant and Variable

### Declaring Constants and Variable

- `Constant` 는 한번 데이터를 할당한 이후에는 재할당할 수 없는 `상수`이며, `Variable은` 값의 변경이 가능한 `변수`이다.
- Constant 는 `let` 키워드를 통해 선언하고, variable은 `var` 키워드를 통해 선언한다.

### Type Annotations

- 변수 선언문 뒤에 세미콜론과 타입의 이름을 붙이면 타입을 선언할 수 있다.

  ```swift
  var welcomeMessage: String
  ```

- 콤마로 구분해서 한줄에 같은 타입의 변수를 여러개 선언하는 것도 가능하다.

  ```swift
  var red, green, blue: Double
  ```

### Naming Constants and Variables

- 변수와 상수의 이름은 문자로 만들 수 있다. 심지어 유니코드로 만드는 것도 가능하다..!

  ```swift
  let 🐶🐮 = "dogcow"
  ```

  > 엄청난 변수..

- 변수와 상수의 이름은 `공백문자`, `수학기호`, `화살표`가 포함되면 안된다.
- 변수와 상수의 이름은 `숫자로 시작할 수 없다`.
- Swift 문법 키워드를 변수나 상수로 지정하고 싶을 때는 ` `` ` 문자로 감까서 사용할 수 있지만 이런 변수명을 사용하는 것은 좋은 방법이 아니다.

### Printing Constants and Variables

- 변수나 상수를 출력할 때는 `print` 함수를 사용한다.
- print 함수는 `terminator` 를 인자로 받는데 기본 값으로 개행이 들어가 있다. 개행 없이 출력하고 싶다면,

  ```swift
  print("hi", terminator: "")
  ```

이렇게 직접 terminator를 지정해주면 된다.

- 스위프트는 `string interpolation`을 통해 변수나 상수의 이름을 문자열에 집어넣어 출력할 수 있게 한다. `\(변수이름)` 문법을 사용하면 된다.

  ```swift
  print("The current value of friendlyWelcome is \(friendlyWelcome)")
  ```

## Integers

- 스위프트는 8, 16, 32, 64 비트, unsigned 와 signed 정수를 표현할 수 있다.
- 최대 표현가능 비트수를 `Int` 뒤에 붙이고, unsigned로 제한하고 싶을 때는 `Int` 앞에 `U`를 붙인다.

  ```swift
    let signedInt8: Int8
    let unsignedInt8: UInt8
    let signedInt16: Int16
    let unsignedInt16: Int16
    let signedInt32: Int32
    let unsignedInt32: Int32
    let signedInt64: Int64
    let unsignedInt64: Int64
  ```

### Integer Bounds

- 최댓값과 최소값을 `min` 과 `max` 프로퍼티를 사용해 얻을 수 있다.
  ```swift
  let minValue = UInt8.min
  let maxValue = UInt8.max
  ```

### Int & UInt

- `Int(UInt)` 타입의 기본 범위는 OS에 따라 달라진다. 32-bit OS에서 Int 는 `Int32` 와 같은 범위를 가지고, 64-bit OS에서 Int는 `Int64`의 범위를 가진다.
- 정수의 범위를 특정해야하는 상황이 아니라면, Int의 범위를 지정해서 사용하지 않고 기본값 Int를 사용하는 것이 `일관성과 상호운용성(consistency and interoperability)` 측면에서 바람직하다.

## Floating-Point Numbers

- `Double`은 64-bit 로 실수를 표현한다.
- `Float`는 32-bit 로 실수를 표현한다.
- Double 과 Float 을 둘 다 사용해도 괜찮은 환경이라면 Float 보다는 Double을 사용하는 것이 권장된다.

## Type Safety and Type Inferance

- 스위프트는 컴파일 시점에서 타입체킹을 수행한다.
- 만약 타입이 명시되어 있지 않다면 `type inference`를 통해 컴파일러가 타입을 부여한다.
- type inference 가 있기 때문에 상수나 변수를 선언과 동시에 초기화 할 때는 타입을 명시할 필요가 없다.
- 스위프트는 실수에 대해 항상 `Double` 타입으로 inferring 한다.
- 정수와 실수의 합 역시 `Double` 타입으로 inferring 한다.

  ```swift
  let anotherPi = 3 + 0.14159 // anotherPu is inffered as Double
  ```

## Numeric Literals

- 10진수는 일반 표기로 표현한다.
- 2진수는 앞에 `0b`를 붙여 표현한다.
- 8진수는 앞에 `0o`를 붙여 표현한다.
- 16진수는 앞에 `0x`를 붙여 표현한다.

  ```swift
  let decimalInteger = 17
  let binaryInteger = 0b10001
  let octalInteger = 0o21
  let hexadecimalInteger = 0x11
  ```

## Type Conversion

### Integer and Floating Point Conversion

- 정수에서 실수로의 형변환은 항상 명시적으로 이루어져야한다.

  ```swift
  let three = 3
  let pointOneFourOneFiveNine = 0.14159
  let pi = Double(three) + pointOneFoutOneFiveNine
  ```

  three 를 형변환 하지 않고는 계산이 불가능하다.

- 실수에서 정수로의 형변환 역시 명시적으로 이루어져야한다.

  ```swift
  let integerPi = Int(pi);
  ```

## Type Aliases

- `typealias` 키워드를 사용하면 이미 존재하는 타입들에 대해 다른 이름을 부여할 수 있다.

  ```swift
  typealias AudioSample = UInt16
  print(AudioSample.min) // "0"
  ```

## Booleans

- Bool 타입은 `true` 나 `false` 인 논리 값을 가진다.
- 스위프트는 다른 타입의 값을 Bool 타입으로 변환하지 않는다. 즉, 0이나 1을 Bool 타입 값으로 사용할 수 없다.

## Tuples

- tuples 는 여러 값들을 하나의 값으로 묶어주는 역할을 한다.
- `()` 를 통해 생성한다.
- tuple로 묶이는 값들은 `서로 다른 타입이라도 상관없다`.
- Tuple 에 들어있는 값들을 분해하기 위해서는 다음과 같이 사용할 수 있다.

  ```swift
  let http404Error = (404, "Not Found")

  let (statusCode, statusMessage) = http404Error
  print(statusCode) // "404"
  print(statusMessage) // "Not Found"
  ```

- Tuple을 분해할 때, 필요없는 값이 있다면, `_` 를 사용해서 무시할 수 있다.

  ```swift
  let (justTheStatusCode, _) = http404Error
  ```

- Tuple의 요소에 접근하기 위해서 요소 번호로 접근하는 것도 가능하다.

  ```swift
  print(http404Error.0) // "404"
  print(http404Error.1) // "Not Found"
  ```

- Tuple의 요소에 이름을 붙여서 사용하는 것도 가능하다.

  ```swift
  let http200Status = (statusCode: 200, description: "OK")
  print(http200Status.statusCode) // "200"
  print(http200Status.description) // "OK"
  ```

## Optionals

- Optional 은 변수에 값이 있어 내부에 접근하여 값을 가져올 수 있거나, 변수에 값이 없음을 표현한다.

  ```swift
  let possibleNumber = "123"
  let convertedNumber = Int(possibleNumber)
  ```

  이 예시에서 convertedNumber는 `Optional Int(Int?)`로 inferring 된다. possibleNumber는 String 으로 inferring 되는데, String 의 값은 정수로 변환이 될 수도 있고, 불가능할 수도 있기 때문이다.

### nil

- `nul`은 Optional 타입 변수에 statless 를 저장할 떄 사용한다.
- Optional 변수를 초기화 하지 않으면 자동으로 `nil` 이 초기값으로 설정된다.

  ```swift
  var surveyAnswer: String?
  print(surveryAnswer) // "nil"
  ```

### If Statements and Forced Unwrapping

- `if` 문을 통해 Optional이 값을 가지고 있는지 nil을 가지고 있는지 확인할 수 있다.

  ```swift
  if convertedNumber != nil {
      print("There is a value")
  }
  ```

- Optional 변수 끝에 `!` 를 붙이면 Optional이 가지고 있는 변수를 사용하도록 할 수 있다

  ```swift
  if convertedNumber != nil {
      print(convertedNumber!)
  }
  ```

### Optional Binding

- `optional binding` 을 사용하면 optional 변수가 값을 가지고 있을 때, 해당 값을 새로운 변수에 임시적으로 할당하여 사용하게 할 수 있다.
- optional binding은 `if` 와 `while`에서 사용할 수 있다. 아래와 같은 형태로 사용한다.

  ```swift
  if let constantName = someOptional {
      statements
  }
  ```

- 위에서 사용한 possibleNumber 에 대한 예제를 다음처럼 작성할 수 있다.

  ```swift
  if let actualNumber = Int(possibleNumber) {
      print(actualNumber);
  }
  else {
      print("There is no possible number: \(possibleNumber)")
  }
  ```

  이렇게 코드를 작성하면, possibleNumber에 정수로 변환할 수 있는 문자열이 들어오면 let으로 선언한 actualNumber 변수에 값이 들어가 출력되고, 정수로 변환할 수 있는 문자열이 들어오지 않아 nil이 되면 else 구분으로 들어가게 된다.

- `if` 구문에는 optional binding 이나 boolean condition을 여러개 작성할 수 있다. `콤마(,)`를 통해 구분하고 만약 하나의 optional binding이나 boolean condition 이라도 `nil` 이나 `false`가 되면 모든 조건이 false 가 된다.

  ```swift
  if let firstNumber = Int("4"), let secondNumber = Int("42"), firstNumber < secondNumber && secondNumber < 100 {
      print("\(firstNumber) < \(secondNumber) < 100")
  }
  // Prints "4 < 42 < 100"

  if let firstNumber = Int("4") {
      if let secondNumber = Int("42") {
          if firstNumber < secondNumber && secondNumber < 100 {
              print("\(firstNumber) < \(secondNumber) < 100")
          }
      }
  }
  // Prints "4 < 42 < 100"

  ```

### Implicitly Unwrapped Optionals

- 만약 Optional 변수에 항상 값이 할당되어 `nil`을 가질 일이 없다면 매번 실제 값에 접근하기 위해 Optional을 unwrap 하는 것은 낭비이다.
- 이런 종류의 Optional 을 `implicitly unwrapped optionals` 라고 한다.
- implicitly unwrapped optionals 는 optional 타입 선언시 타입 이름 뒤에 느낌표를 붙이는 것으로 작성할 수 있다.

  ```swift
  let assumedString: String! = "An implicitly unwrapped optional string."
  ```

- implicitly unwrapped optionals 는 주로 클래스 인스턴스 생성시에 사용된다.
- 스위프트 컴파일러는 implicitly unwrapped optionals 를 `optional value` 취급하고 optional value로 사용할 수 없는 경우에는 강제로 unwrap을 하여 값을 사용한다.

  ```swift
  let assumedString: String! = "An implicitly unwrapped optional string."
  let implicitString: String = assumedString // no need for an exclamation point
  ```

  이 예제에서 implicitString 에 assumedString의 값을 할당할 수 있는 이유는 implicitString 이 optional value를 저장할 수 없기 때문에 assumedString을 강제로 wrap해서 내부의 값을 사용했기 때문이다.

- 만약 implicit unwrapped optional이 nil이고 이 optional을 unwrap 하려고 하면 `런타임 오류`가 발생한다.

## Error Handling

- 함수 내부에서 에러가 발생하면 해당 함수는 error를 `throw` 한다. 그리고 해당 함수를 호출한 caller 가 `catch` 를 통해 error handling 을 하게된다.
- 에러 발생 시 throw를 하도록 하기위해 함수 선언에 `throws` 키워드를 붙여준다.

  ```swift
  func canThrowAnError() throws {

  }
  ```

- 에러를 throw 하는 함수를 호출하고 에러를 인지하기 위해서 함수 호출 구문 앞에 `try` 키워드를 붙여준다.
- 스위프트는 에러가 발생한 현재 스코프에서 빠져나와 `catch` 구문을 자동으로 찾아간다.
- catch 구문이 있는 스코프를 정해주기 위해 `do-catch` 블록을 만든다.

  ```swift
  func makeASandwich() throws {
    // ...
  }

  do {
      try makeASandwich()
      eatASandwich()
  } catch SandwichError.outOfCleanDishes {
      washDishes()
  } catch SandwichError.missingIngredients(let ingredients) {
      buyGroceries(ingredients)
  }
  ```

## Assertions and Preconditions

- `Assertion` 과 `precondition`은 실행 중에 이 구문 이후의 코드를 계속 실행하기 전에 검사할 조건을 정의하기 위해 사용한다.
- assertion과 precondition이 `false` 가 되면 더 이상 코드를 실행하지 않고 프로그램을 종료시킨다.
- assertion과 precondition은 잘못된 조건이 발생하는 것을 막기 위해서 사용하는 것이 아니라, 프로그램이 잘못된 상태에 들어섰을 때, 프로그램을 정상적으로 종료시키기 위한 목적에 가깝다.
- assertion과 precondition의 차이는 조건 검사를 수행하는 모드에 있다. assertion은 `debug build` 일 때만 조건을 검사하고, precondition은 `debug build` 와 `production build`에서 모두 조건검사를 수행한다. 따라서, assertion은 실제 배포시에는 프로그램 성능에 영향을 미치지 않기 때문에 자유롭게 사용할 수 있다.

### Debugging with Assertions/Preconditions

- assertion은 `assert(_:-:file:line:)` 을 사용해서 작성할 수 있다. assert 함수의 인자로 검사할 조건과, 조건이 false가 되었을 때 출력할 메세지를 작성하는 것으로 정의할 수 있다.
- 메세지는 생략할 수 있다.

  ```swift
  let age = 3
  assert(age >= 0, "A person's age can't be less than zero")
  ```

- assertion 조건을 assert 함수가 아닌 다른 방법으로 이미 검사했다면, `assertionFailure(_:file:line)` 함수를 호출하여 assertion을 일으킬 수 있다.

  ```swift
  if age > 10 {
      print("you can ride the roller-coaster")
  } else if age >= 0 {
      print("You can ride the ferris wheel")
  } else {
      assertionFailure("A person's age cannot be less than zero")
  }
  ```

- precondition은 assertion과 모든 내용이 같고 assert 함수 대신 `precondition(_:_:file:line:)`을 사용하고, assertionFailure 대신 `preconditionFailure(_:file:line:)`을 사용한다.
