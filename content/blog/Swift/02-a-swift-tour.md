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

  ```swift
  let individualScores = [75, 43, 103, 87, 12]
  var teamScore = 0

  for score in individualScores { // for-in statement
      if score > 50 {
          teamScore += 3
      }
      else {
          teamScore += 1
      }
  }

  print(teamScore)
  // Prints "11"
  ```

- `if` 와 `let`을 함께 쓰면 Optional에 대한 처리를 할 수 있다. Optional은 값을 가지거나 `nil`을 가진다. `nil` 은 값이 없음을 의미한다.

  ```swift
  var optionalString: String? = "Hello"
  print(optionalString == nil) // false

  var optionalName: String? = "Hun"
  var greeting = "Hello!"

  if let name = optionalName{
      greeting = "Hello, \(name)"
  }

  print(greeting) // "Hello, Hun"
  ```

  OptionalName 이 nil이 아닌 값을 가지고 있을 때, 해당 값이 let으로 선언된 변수에 할당되고 조건문 내부로 들어간다.

- Optional 타입 변수에 default 값을 사용하고 싶을 때는 `??` 연산자를 사용하여 다음과 같이 코드를 구성할 수 있다.

  ```swift
  let nickname: String? = nil
  let fullName: String = "Hun"
  let informalGreeting = "Hi \(nickname ?? fullname)"
  ```

  이렇게 하면 만약 nickname이 nil 을 가질 때는 fullname 이 사용된다.

- 스위프트에서 `switch`는 case로 어떤 데이터이던지 사용할 수 있다.

  ```swift
  let vegetable = "red pepper"
  switch vegetable {
      case "celery":
          print("Add some raisins and make ants on a log")
      case "cucumber", "watercress":
          print("That would make a good tea sandwich.")
      case let x where x.hasSuffix("pepper"):
          print("Is it a spicy \(x)?")
      default:
          print("Everything tastes good in soup.")
  }

  // prints: "Is it a spicy red pepper?"
  ```

  "cucumber", "watercress" 처럼 여러 값을 하나의 케이스에 넣는 것도 가능하다.

- switch 는 반드시 `default case`를 가져야 한다.
- c 나 java 언어와 달리 한 케이스가 실행되면 곧바로 switch 조건이 종료되기 때문에 break를 하지 않아도 된다.
- `for-in`을 사용하면 dictionary의 요소들을 key-value를 사용하여 접근할 수 있다.

  ```swift
  let interestingNumbers = [
      "Prime" : [2, 3, 5, 7, 1, 13],
      "Fibonacci" : [1, 1, 2, 3, 5, 8],
      "Square" : [1, 4, 9, 16, 25],
  ]

  var largest = 0

  for (key, value) in interestingNumbers {
      print(key)
      for number in value {
        if largest < number {
            largest = number
        }
        print(number)
      }
  }

  // Fibonacci
  // 1
  // 1
  // 2
  // 3
  // 5
  // 8
  // Square
  // 1
  // .
  // .
  // .
  ```

- `while` 이나 `repeat-while` 을 사용하여 반복문을 구현할 수도 있다. repeat-while은 타 언어의 do-while과 같다.

  ```swift
  var n = 2
  while n < 100 {
      n *= 2
  }
  print(n)
  // Prints "128"

  var m = 2
  repeat {
      m *= 2
  } while m < 100
  print(m)
  // Prints "128"

  ```

- 반복 횟수를 지정하기 위해서 `..<`, `..>` 연산자나 `...` 연산자를 사용할 수 있다. `..<`, `..>` 연산자는 범위의 마지막 값을 포함하지 않은 채로 반복하고, `...` 연산자는 마지막 값까지 포함하여 반복한다.

  ```swift
  for i in 0...4 {
      print(i)
  }
  // prints:
  // 0
  // 1
  // 2
  // 3

  for i in 0..<4 {
    print(i)
  }
  //prints:
  // 0
  // 1
  // 2
  // 3
  // 4
  ```

## Functions and Closure

- 함수를 만들기 위해서는 `func` 키워드를 사용한다. 함수의 이름과 파라메터를 정의한 뒤, `->`를 사용하여 리턴타입을 지정한다.

  ```swift
  func greet (person: String, day: String) -> String {
      return "Hello \(person), today is \(day)."
  }

  print(greet(person: "bob", day: "tuesday"))
  //prints: Hello bob, today is tuesday.
  ```

- 함수 파라메터에는 `label` 을 달 수 있다. 기본값으로 파라메터의 이름이 라벨이 되지만, 파라메터의 이름 앞에 라벨을 따로 선언하거나 `_` 를 붙여 라벨을 생략하도록 할 수 있다.

  ```swift
  func great(_ person: String, on day: String) -> String {
      return "Hello \(person), today is \(day)"
  }

  great("John", on: "Wednesday")
  ```

- `tuple`을 리턴타입으로 사용해서 여러 값들을 한번에 리턴할 수 있다.

  ```swift
  func calculateStatistics (scores: [Int]) -> (min: Int, max: Int, sum: Int){
      var min = scores[0]
      var max = scores[0]
      var sum = 0

      for score in scores {
          if score < max {
              max = score
          }
          else if score < min {
              min = score
          }
          sum += score
      }

      return (min, max, sum)
  }

  let statistics = calculateStatistics(scores: [5, 3, 100, 3, 9])
  print(statistics.sum) // prints: 120
  print(statistics.2) // prints: 120
  ```

  반환된 tuple은 key로 접근하거나 번호로 접근할 수 있다.

- 함수는 `중첩`될 수 있다. 내부에 선언된 함수는 자신을 포함하는 외부함수의 변수에 접근할 수 있다.

  ```swift
  func returnFifteen() -> Int {
      var y = 10
      func add() {
          y += 5 // 외부에 선언된 변수 y에 접근한다
      }
      add()
      return y
  }

  var res = returnFifteen()
  print(res) // prints: 15
  ```

- 함수는 `first-class type` 이다. 즉, 함수는 함수를 값의 형태로 반환할 수 있다.

  ```swift
  func makeIncrementer() -> ((Int) -> Int) { // 정수를 반환하는 함수를 리턴타입으로 설정
      func addOne(number: Int) -> Int {
          return 1 + number
      }
      return addOne
  }
  var increment = makeIncrementer()
  print(increment(7)) // prints: 8
  ```

- 같은 맥락으로 함수는 인자로 `함수`를 받을 수 있다.

  ```swift
  func hasAnyMatches(list: [Int], condition: (Int) -> Bool) -> Bool { // 파라메터로 정수를 입력으로 받아 Bool 타입을 반환하는 함수를 받는다.
      for item in list {
          if condition (item) {
              return true
          }
      }
      return false
  }

  func lessThenTen(number: Int) -> Bool {
      return number < 10
  }

  var numbers = [20, 19, 7, 12]
  var res = hasAnyMatches(list: numbers, condition: lessThenTen)

  print(res) // prints: true
  ```

- 함수는 `closure`의 특별한 경우이다. closure 란 현재 진행중이던 코드시점이 아니라 나중에 불러서 사용할 수 있는 코드를 의미한다. closure 가 생성되면 closure 내부에 있는 변수나 함수는 `다른 유효범위` 내에서 불러서 사용할 수 있게 된다. 즉, `이름이 없는 함수`이다.
- 익명의 closure 는 `{}`를 통해 생성할 수 있다.

  ```swift
  var numbers = [20, 19, 7, 12]
  numbers.map({ (number: Int) -> Int in
      let result = 3 * number
      return result
  })
  ```

  closure 선언부와 바디를 구분하기 위해서 `in` 을 사용한다.

- closure 를 더 간결하게 작성하는 방법도 있다. 만약 closure 의 타입을 알고 있다면, 파라메터나 리턴타입을 `생략`하는 것이 가능하다.

  ```swift
  var numbers = [20, 19, 7, 12]
  let mappedNumbers = numbers.map({ number in 3 * number})
  print(mappedNumbers)
  ```

  numbers에 있는 값들에 3을 곱해 얻은 새로운 배열을 반환하는 closure 이다. 입력값과 출력값이 `Int`로 결정되기 때문에 파라메터 타입과 리턴타입을 생략해도 된다.

- 파라메터를 라벨이 아는 번호로 접근할 수 있다 `$번호`의 형태로 접근한다.

  ```swift
  let sortedNumbers = numbers.sorted{ $0 > $1 }
  print(sortedNumbers)

  // prints: [20, 19, 12, 7]
  ```

## Object and Classes

- `class` 키워드로 클래스를 생성할 수 있다.

  ```swift
  class Shape {
      var numberOfSides = 0
      func simpleDescription() -> String {
          return "A shape with \(numberOfSides) sides."
      }
  }
  ```

- 클래스 이름에 `()`를 붙여 클래스 인스턴스를 생성할 수 있다. 프로퍼티와 메서드에 접근하기 위해서는 `.` 문법을 사용한다.

  ```swift
  class NamedShape {
      var numberOfSides: Int = 0
      var name: String

      init(name: String){
          self.name = name
      }

      func simpleDescription() -> String {
          return "A shape with \(numberOfSides) sides."
      }
  }
  ```

- 인스턴스 생성과 함께 값을 초기화할 때는 `init` 메서드를 정의하는 것으로 생성자를 구현할 수 있다.

  ```swift
    class NamedShape {
        var numberOfSides: Int = 0
        var name: String

        init(name: String){
            self.name = name
        }

        func simpleDescription() -> String {
            return "A \(name) shape with \(numberOfSides) sides."
        }
    }

  var rectangle = NamedShape(name: "Rectangle")
  rectangle.numberOfSides = 4

  print(rectangle.simpleDescription())

    // prints: "A Rectangle shape with 4 sides."
  ```

- `self` 키워드는 인스턴스 자기 자신을 가르키는 용도로 사용된다.
- `deinit` 메서드를 정의하면 인스턴스가 할당 해제될 때의 작업을 정의할 수 있다.
- `Subclass`는 자신의 상위 클래스이름을 클래스 선언 뒤에 붙여주는 것으로 정의할 수 있다.
- `overrride` 키워드를 사용하면 상위 클래스에서 정의된 메서드를 재정의할 수 있다.

  ```swift
  class Square: NamedShape { // NamedShape 의 subclass
      var sideLength: Double

      init(sideLength: Double, name: String) {
          self.sideLength = sideLength
          super.init(name: name)
          numberOfSides = 4;
      }

      func area() -> Double {
          return sideLength * sideLength
      }

      override func simpleDescription() -> String {
          return "A square with sides of length \(sideLength)"
      }
  }

  let test = Square(sideLength: 5.2, name: "Square")
  test.area()
  test.simpleDescription()
  ```

- 클래스의 프로퍼티에 대한 getter 와 setter 를 정의할 수도 있다.

  ```swift
  class EquilateralTriangle: NamedShape {
      var sideLength: Double = 0.0

      init(sideLength: Double, name: String) {
          self.sideLength = sideLength
          super.init(name: name)
          numberOfSides = 3
      }

      var perimeter: Double {
          get {
              return 3.0 * sideLength
          }
          set {
              sideLength = newValue / 3.0
          }
      }

      override func simpleDescription() -> String {
          return "An equilateral triangle with sides of length \(sideLength)."
      }
  }
  var triangle = EquilateralTriangle(sideLength: 3.1, name: "a triangle")
  print(triangle.perimeter)
  // Prints "9.3"
  triangle.perimeter = 9.9
  print(triangle.sideLength)
  // Prints "3.3000000000000003"
  ```

- `perimeter`는 setter 와 getter를 제공하는 프로퍼티이다.
- 위 클래스의 인스턴스를 생성하면 초기화는 다음과 같은 과정으로 진행된다.

  1. `EquilateralTriangle` 클래스가 선언한 프로퍼티의 값을 초기화한다. -> sideLength
  2. 상위 클래스인 `NamedShape`의 `init` 메서드를 호출한다.
  3. 상위 클래스에서 선언한 프로퍼티를 초기화 한다.

- 만약 프로퍼티 연산이 필요가 없지만 프로퍼티에 새로운 값이 할당 된 이후에 대한 코드를 작성해야한다면, `willSet` 과 `didSet`을 사용하면 된다. 이렇게 하면 `init` 생성자가 아닌 다른 방법으로 프로퍼티 값이 갱신되었을 때, 연산이 수행된다.

  ```swift
  class TriangleAndSquare {
    var triangle: EquilateralTriangle {
        willSet {
            square.sideLength = newValue.sideLength
        }
    }
    var square: Square {
        willSet {
            triangle.sideLength = newValue.sideLength
        }
    }
    init(size: Double, name: String) {
        square = Square(sideLength: size, name: name)
        triangle = EquilateralTriangle(sideLength: size, name: name)
    }
  }
  var triangleAndSquare = TriangleAndSquare(size: 10, name: "another test shape")
  print(triangleAndSquare.square.sideLength)
  // Prints "10.0"
  print(triangleAndSquare.triangle.sideLength)
  // Prints "10.0"
  triangleAndSquare.square = Square(sideLength: 50, name: "larger square")
  print(triangleAndSquare.triangle.sideLength)
  // Prints "50.0"
  ```
