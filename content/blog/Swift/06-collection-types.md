---
title: '[공식문서로 Swift 공부하기] 6. Collection Types'
date: 2021-06-27 17:22:10
category: Swift
thumbnail: { thumbnailSrc }
draft: false
---

# Collection Types

> https://docs.swift.org/swift-book/LanguageGuide/CollectionTypes.html

- 스위프트는 크게 `array`, `set`, `dictionary`를 collection 타입으로 가진다.
- Array 는 `순서가 정해진` 콜렉션이다.
- Set 은 `순서가 정해져 있지 않은` `고유한 값`들의 콜렉션이다.
- Dictionary는 `순서가 정해져 있지 않은` `key-value` 의 콜렉션이다.
- Array, Set, Dictionary는 모두 generic collection으로 구현되어있다.

## Mutability of Collections

- 다른 데이터타입과 마찬가지로 콜레션 타입 역시 변수에 저장되는지, 상수에 저장되는지에 따라 수정가능 여부가 달라진다.
- `let` 으로 선언된 콜렉션 타입은 변경이 불가능하고, `var`로 선언된 콜렉션 타입은 변경이 가능하다.
- 따라서 변경될 가능성이 없는 콜렉션은 `let`으로 선언하는 것이 바람직하다.

## Arrays

- 배열은 같은 타입의 값들을 순서가 정해진 리스트에 넣어 관리한다.
- 서로 중복되는 값들이 배열 요소에 들어가는 것도 가능하다.
- 스위프트의 Array 타입은 Foundation의 `NSArray` 클래스와 연결(bridge) 되어 있다.

### Array Type Shorthand Syntax

- 새로운 배열을 선언할 때는 `Array<Element>`로 작성한다. Element는 배열에 담을 값들의 타입이다.
- 이를 더 간단하게 작성하면 `[Element]`로 작성할 수 있다. 이 shorthand 방식이 더 선호된다.

### Creating an Empty Array

- 빈 배열은 다음과 같이 만들 수 있다.

  ```swift
  var someInts: [Int] = []
  ```

  > 비어있는 Int형 데이터를 담을 수 있는 배열을 만들었다.

- 만약 어떤 변수가 이미 타입정보를 가지고 있다면, 단순히 `[]` 를 대입하는 것으로 비어있는 배열로 초기화할 수도 있다.

  ```swift
  someInts.append(3)
  someInts = [] // 따로 타입명시를 하지 않아도 된다.
  ```

### Creating an Array with a Default Value

- `Initializer`를 통해서 특정한 길이의 배열에 특정한 값을 채워 초기화 할 수 있다.

  ```swift
  var threeDoubles = Array(repeating: 0.0, count: 3)
  ```

### Creating an Array by Adding Two Arrays Together

- 두 개의 배열을 더해 두 배열의 모든 요소들이 포함된 새로운 `하나의 배열`을 만들 수 있다.

  ```swift
  var anotherThreeDoubles = Array(repeating: 2.5, count: 3)
  var sixDoubles = threeDoubles + anotherThreeDoubles // [0.0, 0.0, 0.0, 2.5, 2.5, 2.5]
  ```

### Creating an Array with an Array Literal

- `Array Literal`을 사용해서 배열을 초기화할 수도 있다.

  ```swift
  var shoppingList: [String] = ["Eggs", "Milk"]
  ```

- Array Literal을 사용해서 배열을 선언할 때도 `타입 추론`이 가능하기 때문에 타입을 꼭 명시해주지 않아도 된다.
- 배열 요소들의 `공통된 타입`을 가지는 배열로 선언된다.

  ```swift
  var shoppingList= ["Eggs", "Milk"]
  ```

### Acessing and Modifying an Array

- Array 의 메서드와 프로퍼티를 사용하거나 subscript 문법을 사용하는 것으로 배열을 수정할 수 있다.
- 배열이 가진 요소 개수를 얻기 위해서는 `count` 프로퍼티를 사용한다,

  ```swift
  print("The shopping list contains \(shoppingList.count) items.")
  ```

- 배열이 비어있는지(count 프로퍼티의 값이 0인지) 확인하기 위해서는 `isEmpty` 프로퍼티를 사용한다.

  ```swift
  if shoppingList.isEmpty {
      print("The shopping list is empty")
  } else {
      print("The shopping list is not empty")
  }
  ```

- 배열에 새로운 요소를 추가할 때는 `append(_:)` 메서드를 사용한다.

  ```swift
  shoppingList.append("Flour")
  ```

- 요소가 하나인 배열을 기존 배열에 합쳐주는 것으로 append와 같은 결과를 만들 수 있다.

  ```swift
  shoppingList += ["Baking Powder"] // ["Eggs", "Milk", "Flour", "Baking Powder"]
  ```

- `subscript` 문법을 사용해서 배열의 인덱스번호를 통해 배열의 요소 값을 얻을 수 있다.

  ```swift
  var firstItem = shoppingList[0]
  ```

- `subscript` 문법을 사용하면 배열의 요소값을 변경하는 것도 가능하다.

  ```swift
  var shoppingList[0] = "Six Eggs"
  ```

- 범위 지정을 사용해서 여러개의 배열 요소 값을 변경할 수 있다.

  ```swift
  shoppingList[1...3] = ["Bananas", "Apples"] // ["Eggs", "Bananas", "Apples"]
  ```

- 배열의 특정한 위치에 새로운 값을 끼워넣고 싶다면 `insert(_:at:)` 메서드를 사용한다.

  ```swift
  shoppingList.insert("Maple Syrup", at: 0) // ["Maple Syrup", "Eggs", "Bananas", "Apples"]
  ```

- 배열의 특정한 위치에 있는 값을 지우고 싶을 때는 `remove(at:)` 메서드를 사용한다. 인자로 주어진 인덱스에 있는 값을 삭제하고, `삭제된 값을 반환`한다.

  ```swift
  let mapleSyrup = shoppingList.remove(at: 0)
  print(shoppingList) // ["Eggs", "Bananas", "Apples"]
  print(mapleSyrup) // Maple Syrup
  ```

- 배열의 마지막 요소를 지우고자할 때는 remove(at:) 메서드를 사용하는 것 보다 `removeLast()` 메서드를 사용하는 것이 효과적이다. remove(at:) 메서드는 `count` 프로퍼티를 조회해야하는 오버헤드가 발생한다.

### Iterating Over an Array

- 배열의 모든 요소에 접근하고 싶을 때는 `for-in` 구문을 사용한다.

  ```swift
  for item in shoppingList {
      print(item)
  }
  ```

- 배열의 요소 값과 함께 인덱스 정보가 필요하다면 `enumerated()` 메서드를 사용할 수 있다. enumerated 메서드는 0에서부터 정수를 하나씩 올려가며 요소값과 함께 tuple 형태로 반환한다. 따라서 enumerated 메서드는 인덱스 값을 반환하는 것이 아니라, 증가되며 반환되는 값을 인덱스 값으로 상정하고 사용하는 것이다.

  ```swift
  for (index, value) in shoppingList.enumerated() {
      print("Item \(index +1 ): \(value)")
  }
  ```

## Sets

- Set은 같은 타입의 고유한 값들을 순서에 상관없이 저장한다.

### Hash Values for Set Types

- Set 타입에 저장되는 모든 타입들은 `hashable` 이어야 한다. hashable 하다는 것은 타입의 값이 스스로 hash 값의 역할을 할 수 있다는 것을 의미한다.
- 스위프트의 `기본 타입`들은 Stirng, Int, Double, Bool 등은 모두 hashable 하다.
- 사용자 정의 타입을 set이나 dictionary의 `key` 값으로 사용하게 하기 위해서 `Hashalbe protocol` 을 사용해 hashable 하게 만들 수 있다.

### Set Type Syntax

- Set을 선언할 때는 `Set<Element>`로 작성한다. Element는 Set에 저장할 데이터들의 타입을 의미한다.
- 배열과 다르게 Set은 Shorthand 가 존재하지 않는다.

### Creating and Initializing an Empty Set

- 비어있는 Set을 만들기 위해 `Initializer`를 사용할 수 있다.

  ```swift
  var letters = Set<Character>()
  ```

- 이미 타입이 정해져있는 Set에 대해서는 `array literal`을 통해 빈 Set으로 초기화하는 것도 가능하다.

  ```swift
  letters.insert("a")
  letters = []
  ```

### Creating a Set with an Array Literal

- `array literal` 을 통해 Set을 선언과 동시에 초기화할 수 있다.

  ```swift
  var favoriteGenres: Set<String> = ["rock", "classical", "hip hop"]
  ```

- Set 은 `타입추론이 불가능`하다. Set 타입은 항상 명시적으로 작성되어야 한다. 하지만 `Set에 담을 데이터의 타입`은 타입 추론이 가능하다.

  ```swift
  var favoriteGenres: Set = ["rock", "classical", "hip hop"]
  ```

### Accessing and Modifying a Set

- Set에 들어있는 아이템의 개수를 확인하려면 `count` 프로퍼티를 사용한다.

  ```swift
  print ("I have \(favoriteGenres.count) favorite music genres.")
  ```

- `isEmpty` 프로퍼티를 사용하면 Set이 비어있는지 (count 프로퍼티의 값이 0인지) 확인할 수 있다.

  ```swift
  if favoriteGenres.isEmpty {
    print("empty")
  }
  ```

- Set의 `insert(_:)` 메서드를 사용하면 새로운 요소를 삽입할 수 있다.

  ```swift
  favoriteGeners.insert("Jazz")
  ```

- `remove(_:)` 메서드를 사용하면 Set에 인자로 주어진 값을 가진 요소를 삭제하고, 삭제한 요소를 반환한다. 만약 Set에 주어진 값을 가진 요소가 존재하지 않으면 `nil`을 반환한다.

  ```swift
  if let removeGenre = favoriteGenres.remove("Rock") {
      print("\(removedGenre) is deleted")
  }
  ```

- Set 안에 특정한 값을 가진 요소가 존재하는지 확인하려면 `contains(_:)` 메서드를 사용할 수 있다.

  ```swift
  if favoriteGenres.contains("Funk") {
      print("exits")
  }
  ```

### Iterating Over a Set

- 배열과 마찬가지로 `for-in` 구문을 통해 Set 내부의 모든 요소에 접근할 수 있다.

  ```swift
  for genres in favoriteGenres {
      print("\(genre)")
  }
  ```

- Set은 순서가 정해져 있지 않다. `sorted()` 메서드를 사용하면 Set의 요소들을 오름차순으로 정렬할 수 있다.

  ```swift
  for genre in favoriteGenres.sorted() {
     print("\(genre)")
  }
  ```

## Performing Set Operations

### Fundamental Set Operations

- 두 개의 Set에 집합 연산을 수행할 수 있다.
- `intersection(_:)` 은 두 Set의 공통된 값들만을 가지는 새로운 Set을 생성한다.
- `symmerticDifference(_:)` 은 두 Set이 공통적으로 가지는 값들을 제외한 모든 값들을 가지는 새로운 Set을 생성한다.
- `union(_:)` 은 두 Set을 값들을 모두 가지는 새로운 Set을 생성한다.
- `subtracting(_:)` 은 기준이 되는 Set 에서 인자로 주어지는 셋과 공통된 요소들을 제외한 새로운 Set을 생성한다.
  ![](https://docs.swift.org/swift-book/_images/setVennDiagram_2x.png)

  ```swift
  let oddDigits: Set = [1, 3, 5, 7, 9]
  let evenDigits: Set = [0, 2, 4, 6, 8]
  let singleDigitPrimeNumbers: Set = [2, 3, 5, 7]

  oddDigits.union(evenDigits).sorted()
  // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  oddDigits.intersection(evenDigits).sorted()
  // []
  oddDigits.subtracting(singleDigitPrimeNumbers).sorted()
  // [1, 9]
  oddDigits.symmetricDifference(singleDigitPrimeNumbers).sorted()
  // [1, 2, 9]
  ```

### Set Membership and Equality

- 두 Set의 포함관계를 확인할 수 있는 연산자도 제공된다.
- `==` 연산자를 사용하면 두 Set의 모든 요소가 같을 경우에 true를 반환한다.
- `isSubset(of:)` 메서드는 메서드를 호출한 Set의 모든 요소가 인자로 주어진 Set에 포함될 때 true를 반환한다.
- `isSuperset(of:)` 메서드는 메서드를 호출한 Set이 인자로 주어진 Set의 모든 요소를 포함할 때 true를 반환한다.
- `isStrictSubset(of:)` 과 `isStrictSuperset(of:)` 메서드는 두 Set이 완전히 일치하지 않으면서 subset이나 superset 관계에 있는지 확인한다.
- `isDisjoint(with:)` 메서드는 두 Set이 서로 공통되는 요소를 하나도 가지지 않을 때 true를 반환한다.

## Dictionalries

- Dictionary 는 `key-value` 묶음으로 데이터릉 순서에 상관없이 저장한다.
- key끼리는 같은 타입을 가져야하고, value끼리도 같은 타입을 가져야한다.
- key는 항상 콜렉션 내에서 `고유한` 값이어야한다.
- 스위프트의 Dictionary는 Foundationd의 `NSDictionary` 클래스와 bridge 되어있다.

### Dictionary Type Shorthand Syntax

- Dictionary 를 선언할 때는 `Dictionary<Key, Value>` 로 작성한다.
- Shorthand form으로 작성할 때는 `[Key: Value]` 로 작성하고 이렇게 작성하는 것이 더 선호된다.
- Key와 Value 자리에는 타입의 이름을 지정한다.

### Creating an Empty Dictionary

- initializer를 통해 빈 Dictionary 를 쉽게 만들 수 있다.

  ```swift
  var nameOfIntegers: [Int, String] = [:]
  ```

### Creating Dictionary with a Dictionary Literal

- `dictionaru literal`을 사용하면 선언과 동시에 dictionary를 초기화할 수 있다.

  ```swift
  var airports: [String: String] = ["YYZ": "Totonto Pearson", "DUB": "Dublin"]
  ```

- 초기화할 데이터의 타입이 명확하기 떄문에 dictionary 타입선언은 생략할 수 있다.

  ```swift
  var airports = ["YYZ": "Totonto Pearson", "DUB": "Dublin"]
  ```

### Accessing and Modifying a Dictionary

- Dictionary의 값에 접근할 때, `메서드`, `프로퍼티`, `subscription`을 사용할 수 있다.
- `count` 와 `isEmpty` 프로퍼티를 사용하면 dictionary 의 요소개수와 요소개수가 0인지 확인할 수 있다.

  ```swift
  print(airports.count) // 2
  print(airports.isEmpty) // false
  ```

- 새로운 요소를 삽입할 때는 subscription을 사용한다. `key 값을 인덱스`로 사용한다.

  ```swift
  airports["LHR"] = "London"
  ```

- subscription으로 요소에 접근하여 값을 바꾸는 것도 가능하다.

  ```swift
  airports["LHR"] = "London Heathrow"
  ```

- `updateValue(_:forKey:)` 메서드를 사용하면 새로운 데이터를 추가하거나 기존 데이터의 value값을 수정할 수 있다. 만약 key가 존재한다면, 해당 key에 대한 value를 새로운 값으로 업데이트하고, 존재하지 않는다면 새로운 key-value 데이터를 삽입한다.
- 만약 기존 데이터의 value가 압데이트되면 updateVlaue 메서드는 `업데이트 되기 이전 값`을 반환한다.
- updateValue 메서드는 dictionary value에 대해 `optional value`를 반환한다.

  ```swift
  if let oldValue = airports.updateValue("Dublin Airport", forKey: "DUB") {
      print ("The old value for DUB was \(oldValue)")
  }
  ```

- subscription을 통해 데이터를 읽을 때, 존재하지 않는 key가 전달되면 `nil`을 반환한다.
- 특정한 데이터를 삭제하고 싶다면 해당 데이터에 key로 접근하여 nil을 value로 할당해준다.

  ```swift
  airports["APL"] = "Apple International"
  airports["APL"] = nil
  ```

- `removeValue(forKey)` 메서드를 사용하는 방법도 있다. 메서드를 실행하면 해당하는 key가 있을 때는 데이터를 삭제한 뒤 삭제된 value를 반환하고, key가 없을 때는 `nil`을 반환한다.

  ```swift
  if let removedValue = airports.removeValue(forKey: "DUB") {
      print("The removed airport's name is \(removedValue).")
  }
  ```

### Iterating Over a Dictionary

- `for-in` 을 통해 dictionary의 데이터를 tuple 형태로 얻을 수 있다.

  ```swift
  for (airportCode, airportName) in airports {
      print("\(airportCode): \(airportName)")
  }
  ```

- `keys` 와 `values` 프로퍼티를 통한 접근도 가능하다.

  ```swift
  for airportCode in airports.keys {
      print("Airport code: \(airportCode)")
  }

  for airportName in airports.values {
      print("Airport name: \(airportName)")
  }
  ```

- dictionary 의 key나 value를 배열로 얻고 싶다면 keys, values 프로퍼티를 사용할 수 있다.

  ```swift
  let airportCodes = [String](airports.keys)
  let airportNames = [String](airports.values)
  ```

- Dictionary 는 순서가 정해지지 않은 콜렉션이다. 특정한 순서에 따라 출력하고 싶다면 keys 나 values 프로퍼티에 `sorted()` 메서드를 사용한다.
