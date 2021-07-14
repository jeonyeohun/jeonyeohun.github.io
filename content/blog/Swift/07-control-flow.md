---
title: '[공식문서로 Swift 공부하기] 7. Control Flow'
date: 2021-07-14 09:56:10
category: Swift
thumbnail: { thumbnailSrc }
draft: false
---

# Control Flow

## For-In Loops

- 배열의 요소나, 범위 내의 숫자, 문자열의 문자를 순차적으로 순회하기 위해서 `for-in` 구문을 사용할 수 있다.

  ```swift
  let names = ["Anna", "Alex", "Brian", "Jack]

  for name in names {
      print("Hello, \(name)!")
  }
  ```

- dictionary 타입의 변수가 가진 (key, value) 튜플을 순회하는 용도로 사용할 수도 있다. Collection Types 챕터에서 이미 다루었지만, 딕셔너리는 순서를 보장하지 않기 때문에, for-in을 통해서 순회할 때마다 다른 순서로 튜플들이 나올 수 있다.

  ```swift
  let numberOfLegs = ["spider": 8, "ant": 6, "cat": 4]
  for (animalName, legCount) in numberOfLegs {
      print("\(animalName)s have \(legCount) legs")
  }
  ```

- 범위 연산자 (`..<`, `...`) 를 사용하면 범위 내의 숫자를 순회하는 것도 가능하다.

  ```swift
  for index in 1...5 {
      print(index)
  }

  // 1
  // 2
  // 3
  // 4
  // 5
  ```

- 만약 범위 연산자를 이용해서 루프 횟수를 지정할 때 인덱스 값이 필요가 없다면 `언더스코어(_)` 를 사용하면 무시할 수 있다.

  ```swift
  let base = 3
  let power = 10
  var answer = 1
  for _ in 1...power {
      answer *= base
  }
  print("\(base) to the power of \(power) is \(answer)")
  // Prints "3 to the power of 10 is 59049"
  ```

- 만약 범위 내의 숫자를 특정 개수만큼 건너뛰면서 접근하고 싶다면, `stride()` 함수를 사용할 수 있다. form 부터 to 까지 `half-open` 으로 by씩 증가한다.

  ```swift
  let minuteInterval = 5
  let minutes = 60
  for tickMark in stride(from: 0, to: minutes, by: minuteInterval) {
      print(tickMark)
  }

  // 0
  // 5
  // 10
  // 15
  // ... 55까지 출력된다.
  ```

- half-open이 아닌 `closed`를 사용하려면 stride 함수를 사용할 때, 두번째 파라메터를 to 대신 `through`를 사용하면 된다.

  ```swift
  let hours = 12
  let hourInterval = 3
  for tickMark in stride (from: 3, through: hours, by: hourInterval){
      print("\(tickMark) ", terminator: "")
  }

  // 3 6 9 12
  ```

- for-in 구문은 Sequence 프로토콜을 conform하고 있다면 어떤 데이터 타입이던지 사용할 수 있다.

## While Loops

### While vs. Repeat-While

- While과 repeat-while 은 다른 언어의 while과 do-while의 차이와 같다.
- while 은 조건을 `먼저` 검사한 뒤 내부 로직을 실행하고, do-while은 내부로직은 우선 실행하고 조건을 `마지막에` 검사한다.

## Conditional Statement

## if

- 가장 간단한 조건문이다. C와 같은 언어들과는 다르게 조건부분에는 항상 `Bool` 타입의 데이터가 와야한다. 0, 1 같은 값을 가지는 변수는 Int 타입이기 때문에 오류가 발생한다.
- 이어지는 분기문은 `else if` 와 `else`를 이용한다.

  ```swift
  temperatureInFahrenheit = 90
  if temperatureInFahrenheit <= 32 {
      print("It's very cold. Consider wearing a scarf.")
  } else if temperatureInFahrenheit >= 86 {
      print("It's really warm. Don't forget to wear sunscreen.")
  } else {
      print("It's not that cold. Wear a t-shirt.")
  }
  ```

## switch

- switch 문은 특정한 패턴을 통해서 패턴과 매칭되는 case 문의 로직을 실행한다.
- switch 내부에는 여러개의 case가 존재할 수 있고, `case 패턴1, 패턴2:` 로 작성할 수 있다.
- switch 는 무조건 하나의 case에는 도달해야한다. 따라서 `default` 키워드를 통해 아무 패턴과도 매치되지 않는 조건을 처리해야힌다.

  ```swift
  let someCharacter: Character = "z"
  switch someCharacter {
  case "a":
      print("The first letter of the alphabet")
  case "z":
      print("The last letter of the alphabet")
  default:
      print("Some other character")
  }
  // Prints "The last letter of the alphabet"
  ```

- C와 같은 언어와는 다르게 각 케이스 처리로직에 끝에 도달하면 switch 문을 빠져나간다. 즉, `break`가 필요하지 않다.
- 또한, case 의 body 영역을 비워둘 수 없다.

  ```swift
  let anotherCharacter: Character = "a"
  switch anotherCharacter {
  case "a": // 불가능한 코드
  case "A":
      print("The letter A")
  default:
      print("Not the letter A")
  }
  // This will report a compile-time error.
  ```

- 위와 같은 코드는 타 언어에서 여러 케이스에 동일한 로직을 적용하고 싶을 때 사용되는데, 스위프트에서는 대신 `,` 로 여러 패턴을 한 케이스에 구분하여 넣을 수 있다. 두 패턴 중 하나에만 매칭되어도 케이스가 실행된다.

  ```swift
  let someCharacter: Character = "e"
  switch someCharacter {
  case "a", "e", "i", "o", "u":
      print("\(someCharacter) is a vowel")
  case "b", "c", "d", "f", "g", "h", "j", "k", "l", "m",
      "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z":
      print("\(someCharacter) is a consonant")
  default:
      print("\(someCharacter) isn't a vowel or a consonant")
  }
  // Prints "e is a vowel"
  ```

- 이렇게 하는 이유는 개발자가 의도하지 않은 `fall through` 를 방지하기 위해서이다.

  ```swift
  let anotherCharacter: Character = "a"
  switch anotherCharacter {
  case "a", "A":
      print("The letter A")
  default:
      print("Not the letter A")
  }
  // Prints "The letter A"
  ```

### Interval Matching

- switch 와 범위 연산자를 사용하면 가독성이 매우 좋은 조건문을 만들 수 있다.

  ```swift
  let approximateCount = 62
  let countedThings = "moons orbiting Saturn"
  let naturalCount: String
  switch approximateCount {
  case 0:
      naturalCount = "no"
  case 1..<5:
      naturalCount = "a few"
  case 5..<12:
      naturalCount = "several"
  case 12..<100:
      naturalCount = "dozens of"
  case 100..<1000:
      naturalCount = "hundreds of"
  default:
      naturalCount = "many"
  }
  print("There are \(naturalCount) \(countedThings).")
  // Prints "There are dozens of moons orbiting Saturn."
  ```

### Tuples

- case 의 패턴에 튜플을 사용할 수 있다.
- tuple 내부에는 범위 연산자도 올 수 있고, 어느 값이든 무조건 매칭되게 만드려면 `언더스코어(_)` 를 사용한다.

  ```swift
  let somePoint = (1, 1)
  switch somePoint {
  case (0, 0):
      print("\(somePoint) is at the origin")
  case (_, 0):
      print("\(somePoint) is on the x-axis")
  case (0, _):
      print("\(somePoint) is on the y-axis")
  case (-2...2, -2...2):
      print("\(somePoint) is inside the box")
  default:
      print("\(somePoint) is outside of the box")
  }
  // Prints "(1, 1) is inside the box"
  ```

- 위 예에서 somePoint 를 (0, 0) 으로 바꾼다면, 모든 케이스들과 매칭이 된다. 하지만 `가장 먼저 매칭되는 케이스`의 로직을 수행한다. 이 로직이 수행되면 자동으로 switch 문에서 빠져나오기 때문에 나머지 케이스들과의 매칭은 무시한다.

### Value Bindings

- switch 문에서는 케이스의 body에서 매칭된 값을 사용할 수 있도록 변수를 선언할 수 있다.

  ```swift
  let anotherPoint = (2, 0)
  switch anotherPoint {
  case (let x, 0):
      print("on the x-axis with an x value of \(x)")
  case (0, let y):
      print("on the y-axis with a y value of \(y)")
  case let (x, y):
      print("somewhere else at (\(x), \(y))")
  }
  // Prints "on the x-axis with an x value of 2"
  ```

- 변수가 선언된 튜플 요소는 아무 패턴이나 다 받을 수 있다. 따라서 두번쨰 요소인 0과 매치만 되면 이 케이스에 매칭되고, x변수에 2라는 값이 할당된다.
- 위 예시의 경우에는 default 케이스가 필요없다. 모든 패턴은 항상 마지막 케이스인 let (x, y)에 마지막으로 매칭된다. 따라서 예외 패턴이 발생할 수가 없다.

### Where

- 스위프트의 switch 는 패턴에 조건을 추가적으로 붙여서 사용할 수 있다. case 의 패턴 옆에 `where` 키워드를 붙여 사용한다.

  ```swift
  let yetAnotherPoint = (1, -1)
  switch yetAnotherPoint {
  case let (x, y) where x == y:
      print("(\(x), \(y)) is on the line x == y")
  case let (x, y) where x == -y:
      print("(\(x), \(y)) is on the line x == -y")
  case let (x, y):
      print("(\(x), \(y)) is just some arbitrary point")
  }
  // Prints "(1, -1) is on the line x == -y"
  ```

## Control Transfer Statement

### Continue

- `continue` 키워드는 루프 내에서 더 이상 로직을 진행하지 않고 다음번 iteration 으로 넘어가는 것을 의미한다.

  ```swift
  let puzzleInput = "great minds think alike"
  var puzzleOutput = ""
  let charactersToRemove: [Character] = ["a", "e", "i", "o", "u", " "]
  for character in puzzleInput {
      if charactersToRemove.contains(character) {
          continue
      }
      puzzleOutput.append(character)
  }
  print(puzzleOutput)
  // Prints "grtmndsthnklk"
  ```

- 이렇게 사용하면 모음을 만나면 continue를 통해 더 이상 진행하지 않고 다음 반복으로 넘어가므로 모음을 제외한 문자를 모두 출력하게 된다.

### Break

- `break`는 우리가 잘 아는대로 반복문을 완전히 빠져나가는 용도로 사용된다. 이 키워드를 포함하고 있는 가장 가까운 반복문 블록을 빠져나간다.

  ```swift
  let numberSymbol: Character = "三"  // Chinese symbol for the number 3
  var possibleIntegerValue: Int?
  switch numberSymbol {
  case "1", "١", "一", "๑":
      possibleIntegerValue = 1
  case "2", "٢", "二", "๒":
      possibleIntegerValue = 2
  case "3", "٣", "三", "๓":
      possibleIntegerValue = 3
  case "4", "٤", "四", "๔":
      possibleIntegerValue = 4
  default:
      break
  }
  if let integerValue = possibleIntegerValue {
      print("The integer value of \(numberSymbol) is \(integerValue).")
  } else {
      print("An integer value couldn't be found for \(numberSymbol).")
  }
  // Prints "The integer value of 三 is 3."
  ```

- 위 예시에서는 default에 break가 들어갔다. 스위프트의 switch는 예외케이스가 있으면 안되기 때문에 모든 예외 케이스를 처리하기 위해 default를 쓰고, 빈 body를 만들 수 없기 때문에 별도의 로직없이 switch를 끝내기 위해 break를 사용했다.

### Fallthrough

- fallthrough 는 스위치의 케이스 바디에 마지막에 위치했을 때, 스위치문을 끝내지 않고 다음에 위치한 케이스로 이동한다. C에서 break를 케이스 바디에 포함시키지 않았을 때의 동작과 같다.

  ```swift
  let integerToDescribe = 5
  var description = "The number \(integerToDescribe) is"
  switch integerToDescribe {
  case 2, 3, 5, 7, 11, 13, 17, 19:
      description += " a prime number, and also"
      fallthrough
  default:
      description += " an integer."
  }
  print(description)
  // Prints "The number 5 is a prime number, and also an integer."
  ```

### Labeled Statements

- 스위프트에서는 `statement label`을 통해서 루프나 조건문에 라벨링을 할 수 있다.
- 여러 루프가 중첩되어 있을 때 라벨을 통해 쉽게 break 나 continue를 사용할 수 있다.
- Labeled Statement 는 다음과 같이 만든다.

  ```swift
  label name: while condition {
      statements
  }
  ```

- 아래 예시를 살펴보자


    ```swift
    let finalSquare = 25
    var board = [Int](repeating: 0, count: finalSquare + 1)
    board[03] = +08; board[06] = +11; board[09] = +09; board[10] = +02
    board[14] = -10; board[19] = -11; board[22] = -02; board[24] = -08
    var square = 0
    var diceRoll = 0

    gameLoop: while square != finalSquare {
        diceRoll += 1
        if diceRoll == 7 { diceRoll = 1 }
        switch square + diceRoll {
        case finalSquare:
            // diceRoll will move us to the final square, so the game is over
            break gameLoop
        case let newSquare where newSquare > finalSquare:
            // diceRoll will move us beyond the final square, so roll again
            continue gameLoop
        default:
            // this is a valid move, so find out its effect
            square += diceRoll
            square += board[square]
        }
    }
    print("Game over!")
    ```

- gameLoop 로 라벨이 붙은 while 문을 case 내부에서 break와 함께 사용한다.
- break gameLoop 로 작성되었기 때문에 케이스의 끝에 도달하면 switch 문을 빠져나오는 것이 아니라 gameLoop 로 라벨링된 루프전체를 빠져나오게 된다.

## Early Exit

- `guard` 문을 사용하면 guard 키워드 뒤에 오는 조건이 참일 때만 전체 블록을 실행하게끔 할 수 있다.
- guard 의 조건 뒤에는 항상 else 문이 따라와야 한다. 이 else 구문은 guard 이후의 조건이 거짓을 때 실행된다.

  ```swift
  func greet(person: [String: String]) {
      guard let name = person["name"] else {
          return
      }

      print("Hello \(name)!")

      guard let location = person["location"] else {
          print("I hope the weather is nice near you.")
          return
      }

      print("I hope the weather is nice in \(location).")
  }

  greet(person: ["name": "John"])
  // Prints "Hello John!"
  // Prints "I hope the weather is nice near you."
  greet(person: ["name": "Jane", "location": "Cupertino"])
  // Prints "Hello Jane!"
  // Prints "I hope the weather is nice in Cupertino."
  ```

## Checking API Availability

- 스위프트는 OS 타켓 버전에 따라 사용가능한 API인지 먼저 체크한 뒤에 실행하도록 할 수 있다.

  ```swift
  if #available(platform name version, ..., *) {
      statements to execute if the APIs are available
  } else {
      fallback statements to execute if the APIs are unavailable
  }
  ```
