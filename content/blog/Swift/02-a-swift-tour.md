---
title: '[공식문서로 Swift 공부하기] 2. A Swift Tour'
date: 2021-06-21 19:06:10
category: Swift
thumbnail: { thumbnailSrc }
draft: false
---

# A Swift Tour

> https://docs.swift.org/swift-book/GuidedTour/GuidedTour.html

간단한 문법들과 기초가 되는 개념들은 먼저 알아보자.

## Simple Values

- `let` 키워드를 통해 상수(constant)를, `var` 키워드를 통해 변수(variable)를 선언할 수 있다. Constant는 값을 한 번만 대입할 수 있는 변수를 의미한다.
- 스위프트에도 타입이 존재하기 때문에 변수를 선언할 때 타입을 지정해주어야 하지만, `명시적으로 타입을 적어주지 않아도` 스위프트 컴파일러가 대입된 값에 따라 타입을 지정한다.

  ```swift
    var myVariable = 42
  ```

  이렇게 선언된 변수 myVariable 은 명시적으로 지정되지 않았지만, 정수타입으로 선언된다.

- 만약 변수에 초기 값이 없거나, 데이터 타입을 명확하게 지정해줄 때는 다음과 같이 타입을 지정할 수 있다.

  ```swift
    let implicitInteger = 70 // 정수 타입
    let implicitDouble = 70.0 // 실수 타입
    let explicitDouble: Double = 70 // Double 형을 명시적으로 선언했다.
    let explicitFloat: Float = 4
  ```

- 스위프트의 값들은 절대 `암묵적 형변환을 하지 않는다`.

  ```swift
    let label = "The width is "
    let width = 94
    let widthLabel = label + String(width)
  ```

  만약 String으로 형변환을 하는 괄호를 없애면 Int 와 String 은 `+` 연산으로 더할 수 없다는 오류가 발생한다.

- 더하기 연산을 사용하지 않고 쉽게 문자열에 값을 넣을 때는 `백슬래시(\)` 를 괄호 앞에 두는 `\(데이터)` 형태를 사용하여 쉽게 넣을 수 있다.

  ```swift
  let apples = 3
  let oranges = 5
  let appleSummary = "I have \(apples) apples."
  let fruitSummary = "I have \(apples + oranges) pieces of fruit."
  ```

- Multiline 의 문자열을 변수에 저장하기 위해서는 세개의 쌍따음표(`"""`)를 사용하면 된다.

  ```swift
    let apples:Int = 8
  let oranges:Int = 10
  let quotation = """
    I said "I have \(apples) apples."
    And then I said "I have \(apples + oranges) pieces of fruit."
  """

  print(quotation)

  // 결과:
    // I said "I have 8 apples."
    // And then I said "I have 18 pieces of fruit."
  ```

- 배열과 딕셔너리를 만들 때는 `[]` 를 사용한다. 배열의 요소에 접근할 때는 `인덱스`를 사용하고, 딕셔너리의 요소에 접근할 때는 `key` 를 사용한다.

  ```swift
  var shoppingList = ["catfish", "water", "tulips"]
  shoppingList[1] = "bottle"

  print(shoppingList)

  // 결과: ["catfish", "bottle", "tulips"]

  var occupations = [
      "Malcolm" : "Captain",
      "Kaylee" : "Mechanic",
  ]

  occupations["Jayne"] = "Relations"

  print(occuptions)

  // 결과: ["Jayne": "Relations", "Malcolm": "Captain", "Kaylee": "Mechanic"]
  ```

- 배열은 `append()` 를 통해 데이터를 추가할 때마다 길이가 늘어난다.
- 빈 배열이나 딕셔너리를 만들고 싶다면 다음과 같이 초기화를 할 수 있다.

  ```swift
      let emptyArray: [String] = []
      let emptyDictionary: [String : Float] = [:]
  ```

## Control Flow

- 반복문은 `for-in`, `while`, `repeat-while` 로 구현한다.
- 조건문은 `if`, `switch` 로 구현한다.
