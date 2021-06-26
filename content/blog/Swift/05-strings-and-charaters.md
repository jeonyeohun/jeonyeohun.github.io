---
title: '[공식문서로 Swift 공부하기] 5. Strings and Characters'
date: 2021-06-26 15:10:10
category: Swift
thumbnail: { thumbnailSrc }
draft: false
---

# Strings and Chracters

> https://docs.swift.org/swift-book/LanguageGuide/StringsAndCharacters.html

- 문자열은 `series of characters` 이다.
- 스위프트의 String 타입은 Fountdation의 `NSSring` 클래스와 연결되어 있다. 따라서 Foundation 을 임포트하면 NSString 메서드를 String 타입에서 별도의 캐스팅 없이 사용할 수 있다.

## String Literals

### Multiline String Literals

- `"""` 를 사용하면 여러줄의 문자열을 선언할 수 있다.
- multiline string literal은 `"""` 내부에 사용한 공백문자를 포함한 모든 문자를 저장한다.

  ```swift
  let quotation = """
  The White Rabbit put on his spectacles.  "Where shall I begin,
  please your Majesty?" he asked.

  "Begin at the beginning," the King said gravely, "and go on
  till you come to the end; then stop."
  """
  ```

- multiline string literal에 개행을 포함시키고 싶지 않을 때는 줄의 끝에 `\`를 사용한다.

  ```swift
  let quotation = """
  The White Rabbit put on his spectacles.  "Where shall I begin, \
  please your Majesty?" he asked.
  "Begin at the beginning," the King said gravely, "and go on \
  till you come to the end; then stop."
  """
  ```

- multiline string literal 의 indentation은 닫는 `"""`의 위치에 따라 결정된다.

### Special Characters in String Literals

- escape 문자들은 다음과 같다.

  - `\0` : 널 문자
  - `\\` : 백슬래시
  - `\t` : 탭
  - `\n` : 개행
  - `\r` : 캐리지 리턴
  - `\"` : 쌍따음표
  - `\'` : 따음표

- 유니코드를 표현하기 위해서는 `\u{n}`을 사용하면 된다. n에는 1~8자리 16진수가 들어간다.

  ```swift
  let wiseWords = "\"Imagination is more important than knowledge\" - Einstein"
  // "Imagination is more important than knowledge" - Einstein
  let dollarSign = "\u{24}"        // $,  Unicode scalar U+0024
  let blackHeart = "\u{2665}"      // ♥,  Unicode scalar U+2665
  let sparklingHeart = "\u{1F496}" // 💖, Unicode scalar U+1F496
  ```

### Extended String Delimiters

- escape 문자를 있는 그대로 출력하고 싶다면, 문자열을 감싸는 쌍따음표 밖에 `#`로 전체 문자열을 감싸주면 된다.

  ```swift
   print(#"Line 1\nLine 2"#) // Line 1\nLine 2
  ```

- `#`로 감싸진 문자열에서 escape 문자를 그대로 사용하려면 `\` 뒤에 `#`을 다시 붙여주면 된다.

  ```swift
   print(#"Line 1\#nLine 2"#) // Line 1\nLine 2
  ```

## Initializing an Empty String

- 비어있는 문자열을 만들기 위해서는 `빈 문자열("")`을 할당하거나 String 타입의 `initializer`를 사용하면 된다.

  ```swift
  var emptyString = ""
  var anotherEmptyString = String()
  ```

- 문자열이 비어있는지 확인하기 위해서는 `isEmpty` 프로퍼티를 상요하면 된다.

  ```swift
  if emptyString.isEmpty {
      print("empty")
  }
  ```

## String Mutability

- 문자열의 수정은 문자열 변수가 `let` 으로 선언된 상수인지, `var`로 선언된 변수인지에 따라 결정된다. let으로 선언된 경우는 수정이 불가능하고, var로 선언된 경우에는 수정이 가능하다.

  ```swift
  var variableString = "Horse"
  variableString += " and carriage"
  // variableString is now "Horse and carriage"

  let constantString = "Highlander"
  constantString += " and another Highlander"
  // this reports a compile-time error - a constant string cannot be modified
  ```

## Strings Are Value Types

- 스위프트에서 String 은 value 타입이다. 함수나 메서드에 전달되거나 변수에 할당될 때 `값이 복사되어 전달된다.`

## Wokring with Characters

- `for-in` 반복문을 사용해서 문자열의 각 문자를 읽을 수 있다.

  ```swift
  for character in "DOG" {
      print(character)
  }
  ```

- Character 타입으로 변수나 상수를 선언하고 정의하는 것도 가능하다.
- 문자열과 다르게 `Character` 타입을 명시해주어야 한다.

  ```swift
  let char: Character = "!"
  ```

- String 타입의 initializer 에 Character의 배열을 전달하는 것으로도 문자열을 생성할 수 있다.

```swift
let dog: [Character] = ["D", "O", "G"]
let dogString = String(dog)

print(dogString)
```

## Concatenating Strings and Characters

- `+` 연산자를 사용하면 두 문자열을 합쳐 새로운 문자열을 만들 수 있다.

  ```swift
  let left = "hello"
  let right = " world"

  let leftAndRight = left + right // "hello world"
  ```

- `+=` 연산자를 사용해서 기존 문자열에 새로운 문자열을 붙이는 것도 가능하다.

  ```swift
  var instruction = "look over"
  instruction += right // "look over world"
  ```

- Character 타입의 변수가 있다면, String 타입의 `append` 메서드를 통해 기존 문자열에 문자를 뒤에 붙일 수도 있다.

  ```swift
  let exclamationMark: Character = "!"
  leftAndRight.append(exclamationMark)
  // welcome now equals "hello world!"
  ```

- multiline string literal 도 위와 같은 방법으로 합칠 수 있다.

## Unicode

- 스위프트의 String과 Character 타입은 Unicode를 완전하게 지원한다.

### Unicode Scalar Values

- Unicode를 표현하기 위해서 스위프트는 `21비트 숫자`로 문자를 표현한다.

### Extended Grapheme Clusters

- 스위프트의 Charater 타입 인스턴스는 항상 하나의 `extended grapheme cluster`를 표현한다.
- `extended grapheme cluster`는 하나 이상의 유니코드 값(Unicode scalar)를 의미한다.
- 어떤 문자는 하나의 유니코드로도 표현할 수 있고, 여러개의 유니코드의 조합으로도 표현할 수 있다.

  ```swift
  let eAcute: Character = "\u{E9}"
  let combinedEAcute: Character = "\u{65}\u{301}"
  ```

  두 문자는 모두 같은 문자를 의미한다.

## Counting Characters

- 문자열에 포함된 문자의 수를 알기 위해서는 String에 포함된 count 프로퍼티를 사용하면 된다.

  ```swift
  let unusualMenagerie = "Koala 🐨, Snail 🐌, Penguin 🐧, Dromedary 🐪"
  print("unusualMenagerie has \(unusualMenagerie.count) characters")
  // Prints "unusualMenagerie has 40 characters"
  ```

- 스위프트는 문자를 표현하기 위해 extended grapheme cluster 를 사용하기 때문에 새로운 문자를 뒤에 추가했을 때, 항상 문자열의 길이가 변하지는 않는다.

  ```swift
  var word = "cafe"
  print("the number of characters in \(word) is \(word.count)")
  // Prints "the number of characters in cafe is 4"

  word += "\u{301}"    // COMBINING ACUTE ACCENT, U+0301

  print("the number of characters in \(word) is \(word.count)")
  // Prints "the number of characters in café is 4"
  ```

  기존 문자에 유니코드가 추가되어 새로운 하나의 다른 문자로 바뀌었기 때문에 문자열의 길이에는 변함이 없다.

- extended grapheme cluster는 하나의 문자를 여러 방법으로 표현할 수 있기 때문에, 같은 문자열이라도 `사용하는 메모리의 크기가 다를 수 있다`.
- 이 때문에, 문자열의 길이를 계산하기 위해서는 문자열에 있는 모든 `exteded grapheme cluster boudnary` 를 확인해야한다. 만약 길이가 매우 긴 문자열의 길이를 알기 위해 count 프로퍼티를 사용한다면, 이 점을 유의해야한다.

## Accessing and Modifying a String

### String Indices

- String 타입의 값들은 `String.Index`를 함께 가지고 있다. 이를 통해 문자열의 각 위치에 해당하는 문자를 얻을 수 있다.
- extended grapheme cluste를 사용하기 때문에, 특정한 위치에 있는 문자를 알기 위해서는 문자열의 처음부터 끝까지 `Unicode Scalar를 모두 탐색해야한다`. 따라서 문자열의 각 문자를 인덱스 정수를 통해 접근하는 것이 불가능하다.
- `startIndex` 프로퍼티를 사용하면 문자열의 첫번째 문자에 접근할 수 있다.
- `endIndex` 프로퍼티를 사용하면 문자열의 마지막 문자의 `다음 문자`에 접근할 수 있다.
- 특정한 위치에 접근하기 위해서는 String의 `index(before:)` 메서드와 `index(after:)` 메서드를 사용해서 기준이 되는 인덱스의 앞뒤에 있는 문자에 접근할 수 있다.
- 특정한 위치에 한번에 접근하기 위해서 `index(_:offsetBy:)` 메서드를 사용할 수 있다.

  ```swift
  let greeting = "Guten Tag!"
  greeting[greeting.startIndex]
  // G
  greeting[greeting.index(before: greeting.endIndex)]
  // !
  greeting[greeting.index(after: greeting.startIndex)]
  // u
  let index = greeting.index(greeting.startIndex, offsetBy: 7)
  greeting[index]
  // a
  ```

- 만약 접근할 수 없는 인덱스에 접근하려고 하면 `런타임에러`가 발생한다.

  ```swift
  greeting[greeting.endIndex] // Error
  greeting.index(after: greeting.endIndex) // Error
  ```

### Inserting and Removing

- 문자열에 새로운 문자를 삽입하기 위해서는 `insert(_:at:)` 메서드를 사용한다.

  ```swift
  var welcom = "hello"
  welcome.insert("!", at: welcome.endIndex) // "hello!"
  ```

- 문자열에 새로운 문자열을 삽입하기 위해서는 `insert(contentsOf:at:)` 메서드를 사용한다.

  ```swift
  welcome.insert(contentsOf: " world", at: welcome.index(before: welcom.endIndex)) // "hello world!"
  ```

- 문자열의 특정한 위치에 있는 문자를 삭제하기 위해서는 `remove(at:)` 메서드를 사용한다.

  ```swift
  welcome.remove(at: welcome.index(before: welcome.endIndex)) // "hello world"
  ```

- 문자열의 특정한 범위의 문자들을 삭제하기 위해서는 `removeSubrange(_:)` 메서드를 상요한다.

  ```swift
  var range = welcome.index(welcome.endIndex, offsetBy: -6)..<welcome.endIndex // range 생성, 뒤에서 6 번째 앞 인데스부터 끝까지
  welcome.removeSubrange(range) // "hello"
  ```

## Substrings

- 문자열로부터 부분 문자열을 얻으면 문자열이 반환되는 것이 아니라 `Substring` 의 인스턴스가 반환된다.
- Substring 인스턴스는 String에서 사용되는 모든 작업을 수행할 수 있지만, 임시적으로만 사용해야한다.
- String 과 Substring 의 가장 큰 차이는 `performance optimization`에 있다. substring은 기존의 문자열을 저장하는데 사용했던 메모리를 재사용한다.
- 이 때문에 Substring을 사용하기 위해서 `기존 문자열을 계속해서 유지해야되는 오버헤드`가 발생한다. 따라서 Substring 을 지속적으로 유지하기 위해서는 새로운 String을 별도로 만드는 것이 더 적합하다

  ```swift
  let greeting = "Hello, world!"
  let index = greeting.firstIndex(of: ",") ?? greeting.endIndex
  let beginning = greeting[..<index]
  // beginning is "Hello"

  // Convert the result to a String for long-term storage.
  let newString = String(beginning)
  ```

  ![](https://docs.swift.org/swift-book/_images/stringSubstring_2x.png)

## Comparing Strings

### String and Character Equality

- `==` 연산자를 사용하면 문자와 문자열에 대한 비교연산을 수행할 수 있다.
- 두 문자열은 extended grapheme cluster 가 `canonically equivalent` 하다면 일치하는 문자열로 취급한다.
- canonically equivalent 하다는 것은 구성된 유니코드가 다르더라도 의미와 모양이 같은 것을 의미한다.

  ```swift
  // "Voulez-vous un café?" using LATIN SMALL LETTER E WITH ACUTE
  let eAcuteQuestion = "Voulez-vous un caf\u{E9}?"

  // "Voulez-vous un café?" using LATIN SMALL LETTER E and COMBINING ACUTE ACCENT
  let combinedEAcuteQuestion = "Voulez-vous un caf\u{65}\u{301}?"

  if eAcuteQuestion == combinedEAcuteQuestion {
      print("These two strings are considered equal")
  }
  // Prints "These two strings are considered equal"
  ```

### Prefix and Suffix Equality

- 문자열이 특정 문자열로 시작하는지 확인하려면 `hasPrefix(_:)` 메서드를 사용한다.

  ```swift
  let romeoAndJuliet = [
    "Act 1 Scene 1: Verona, A public place",
    "Act 1 Scene 2: Capulet's mansion",
    "Act 1 Scene 3: A room in Capulet's mansion",
    "Act 1 Scene 4: A street outside Capulet's mansion",
    "Act 1 Scene 5: The Great Hall in Capulet's mansion",
    "Act 2 Scene 1: Outside Capulet's mansion",
    "Act 2 Scene 2: Capulet's orchard",
    "Act 2 Scene 3: Outside Friar Lawrence's cell",
    "Act 2 Scene 4: A street in Verona",
    "Act 2 Scene 5: Capulet's mansion",
    "Act 2 Scene 6: Friar Lawrence's cell"
  ]

  var act1SceneCount = 0
  for scene in romeoAndJuliet {
    if scene.hasPrefix("Act 1 ") {
        act1SceneCount += 1
    }
  }
  print("There are \(act1SceneCount) scenes in Act 1")
  // Prints "There are 5 scenes in Act 1"
  ```

- 문자열이 특정 문자열로 끝나는지 확인하려면 `hasSuffix(_:)` 메서드를 사용한다.

  ```swift
  var mansionCount = 0
  var cellCount = 0
  for scene in romeoAndJuliet {
    if scene.hasSuffix("Capulet's mansion") {
        mansionCount += 1
    } else if scene.hasSuffix("Friar Lawrence's cell") {
        cellCount += 1
    }
  }
  print("\(mansionCount) mansion scenes; \(cellCount) cell scenes")
  // Prints "6 mansion scenes; 2 cell scenes"
  ```
