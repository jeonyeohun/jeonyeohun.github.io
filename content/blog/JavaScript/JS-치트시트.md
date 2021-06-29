---
title: '[JavaScript] 자바스크립트 치트시트'
date: 2021-03-16 00:00:01
category: JavaScript
thumbnail: { thumbnailSrc }
draft: false
---

## 출력

브라우저의 콘솔창에 원하는 정보를 출력한다.

```javascript
console.log('string') // "string"
console.log(1 + 2 + 3) // 10
```

## 변수와 상수

`let` 키워드를 이용해서 변수를 설정하고 `const` 키워드를 이용해서 상수를 설정한다.

```javascript
let a = 1
const b = 2
```

- var 키워드는 일반적으로 더 이상 사용하지 않는다.

## 자료형

- int
- float
- string: `''` 혹은 `""` 로 문자열을 감싸서 표현. 두 따음표간의 차이는 없지만 일관성 있게 사용해야한다.
- boolean: `true`, `false` 를 표현한다.
- null: 값이 없는 상태.
- undefined: 아직 값이 정해지지 않은 상태.

## 연산자

- 산술연산자: `+`, `-`, `*`, `/`, `++`, `--`
- 논리연산자: `!`(NOT), `&&`(AND), `||`(OR)
  - 우선순위: NOT > AND > OR
- 비교연산자:
  - `===` <-> `!==`
  - `==` <-> `!=` : 타입을 검사하지 않고 값만 비교하게 된다. 웬만하면 `===` 를 사용하는 것이 좋다.
  - `>`, `<`, `<=`, `>=`

## 조건문

- `if`, `else if`, `else`
- `switch`, `case`

```javascript
const fruit = 'apple'

switch (fruit) {
  case 'apple':
    console.log('apple')
    break
  case 'banana':
    console.log('banana')
    break
  default:
    console.log('default')
    break
}
```

## 함수

`function [functionName]([parameters])` 를 기본으로 사용한다.

```javascript
function add(a, b) {
  return a + b
}
```

### 문자열 합치기(ES6)

```javascript
function hello(name) {
  // 동일한 문자열이 출력된다.
  console.log('hello' + name + '!')
  consile.log(`hello ${name}!`)
}
```

### 화살표 함수

```javascript
// 세 함수의 결과가 동일하다
function add(a, b) {
  return a + b
}
const add = (a, b) => {
  return a + b
}

const add2 = (a, b) => a + b
```

## 객체

```javascript
// key-value 형태로 값을 저장한다.
const dog = {
    name: 'puppy',
    age: '10';
};

// 객체의 key를 지정해서 출력한다.
cosole.log(dog.name)
```

### 객체 정보 출력

```javascript
const numbers = {
    num1 : 1,
    num2 : 2;
};

console.log(Object.keys(numbers)); // ["num1", "num2"]가 출력된다.
console.log(Object.values(numbers)); // ["1", "2"]가 출력된다.
console.log(Object.entries(numbers); // [["num1", "1"], ["num2", "2"]]가 출력된다. key와 value를 배열로 묶어서 다시 배열에 저장하는 형태
```

### 비구조할당

어떤 객체의 내부 값을 매번 들어가서 조회하지 않고 미리 뺴둘 수 있다.

```javascript
//  세 함수가 모두 같은 값을 출력한다.
function print1(dog) {
  const text = `NAME: ${dog.name}, AGE: ${dog.age}`
  console.log(text)
}

function print2(dog) {
  const { name, age } = dog
  const text = `NAME: ${name}, AGE: ${age}`
  console.log(text)
}

function print3({ name, age }) {
  const text = `NAME: ${name}, AGE: ${age}`
  console.log(text)
}
```

### 객체 안에 함수넣기

```javascript
const dog = {
  name: 'puppy',
  sound: 'barkbark',
  say() {
    // 이렇게 해도 되고, say: function say() 로 일반 함수처럼 정의하는 것도 가능하고, say: function 으로 함수의 이름을 생략해도 된다.
    //  this 는 함수가 위치한 객체인 dog를 가르킨다.
    // 단 화살표 함수를 사용하면 this 가 함수가 위치한 객체를 찾지 못한다.
    console.log(this.sound)
  },
}

const cat = {
  name: 'cat',
  sound: 'meowmeow',
}

cat.say = dog.say
cat.say() // cat의 객체에 say가 등록되기 때문에 this 는 say가 속한 cat 객체를 가르키게 된다.
```

### getter 함수와 setter 함수

```javascript
const numbers = {
    a : 1,
    b: 2;
    get sum(){ // get 키워드로 getter 함수를 정의한다.
        return a+b;
    }
};

console.log(numbers.sum) // getter는 함수처럼 호출하지 않고 객체의 요소를 조회할 때 함수가 실행된다.

const numbers = {
    a : 1,
    b: 2;
    set name (num){
        this.a = num;
    }
};

numbers.name = 5; // 이때 setter 함수가 실행된다.
console.log(numbers.a) // a의 값이 5로 바뀌어 출력된다.
```

```javascript
const numbers = {
    _a : 1,
    _b : 2,
    sum : 3,
    calculate() {
        console.log('update sum');
        this.sum =  this._a + this._b;
    },
    get a(){
        return this._a;
    }
    get b(){
        return this._b;
    }
    set a(value){
        this._a = value;
        this.calculate();
    }
    set b(value){
        this._b = value;
        this.calculate();
    }
};

numbers.a = 5; // setter 함수가 실행되면서 calculate 함수도 실행된다.
```

- setter 와 getter를 사용하면 불피요한 연산의 반복을 할 필요가 없다. 위 예시에서는 값이 업데이트가 될 때마다 sum을 업데이트 하기 때문에 객체의 sum을 조회할 때마다 연산을 할 필요가 없다.

## 배열

자바스크립트의 배열은 여러 다른 데이터타입을 가진 값들이 함께 저장될 수 있다.

- push : 배열에 새로운 요소를 추가한다.

```javascript
const objects = [1, 2, 3]

objects.push(4)
```

- length : 배열의 크기를 반환한다.

```javascript
const objects = [1, 2, 3]
console.log(objects.length) // 3 출력
```

## 반복문

기본적으로는 우리가 잘 아는 `for` 와 `while` 을 시용하자

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i)
}

let i = 0
while (i < 10) {
  console.log(i)
  i++
}
```

### for-of 문

```javascript
const nums = [1, 2, 3, 4, 5]

for (let num of nums) {
  console.log(num) // nums 안에 있는 요소들을 하나씩 가져온다
}
```

### for-in 문

```javascript
const nums = {
    num1 : 1,
    num2 : 2;
};

for (let key in nums){ // nums 객체의 key를 하나씩 불러온다.
    console.log(`${key}: ${num[key]}`)
}
```

### for-each 문

```javascript
function print(num) {
  console.log(hero)
}
nums.forEach(print())
```

배열의 값을 하나씩 가져와서 사용한다. 함수를 파라미타로 사용하면 위 로직을 더 간단하게 만들수도 있다.

```javascript
nums.forEach(num => {
  console.log(num)
})
```

### map

```javascript
const nums = [1, 2, 3, 4]

const squaredNums = nums.map(n => n * n)

// result : squaredNums : [1, 4, 9, 16]
```

배열의 원소를 변환시켜서 새로운 배열을 생성할 수 있다.

### indexOf

```javascript
const nums = [1, 2, 3, 4]
const index = nums.indexOf(1)

console.log(index)

//result : 0
```

인자가 배열내의 몇번째 원소인지 알아낸다. 존재하는 원소가 없다면 -1을 반환한다.

### findIndex

```javascript
const tools = [
  {
    id : 1;
    name: 'vscode';
    soldout: true;
  },
  {
    id : 2;
    name: 'code';
    soldout: true;
  },
  {
    id : 3;
    name: 'eclipse';
    soldout: false;
  }
];

const index = tools.findIndex(tool => tool.name === 'code');
console.log(index);

// result: 1
```

인자를 함수로 지정해서 함수의 조건을 만족하는 원소의 위치를 알아낸다. 조건에 만족하는 원소가 없다면 -1을 반환한다.

### find

```javascript
const tools = [
  {
    id : 1;
    name: 'vscode';
    soldout: true;
  },
  {
    id : 2;
    name: 'code';
    soldout: true;
  },
  {
    id : 3;
    name: 'eclipse';
    soldout: false;
  }
];

const index = tools.find(tool => tool.name === 'code');
console.log(index);

// result:   {
//    id : 2;
//    name: 'code';
//    soldout: true;
//  },
```

인자를 함수로 지정해서 함수의 조건을 만족하는 원소를 반환한다. 조건에 만족하는 원소가 없다면 -1을 반환한다.

### filter

```javascript
const tools = [
  {
    id : 1;
    name: 'vscode';
    soldout: true;
  },
  {
    id : 2;
    name: 'code';
    soldout: true;
  },
  {
    id : 3;
    name: 'eclipse';
    soldout: false;
  }
];

const arr = tools.filter(tool => tool.soldout === false)
console.log(arr);

// result:
// [{
//   id : 2;
//   name: 'code';
//   soldout: true;
// },
// {
//   id : 3;
//   name: 'eclipse';
//   soldout: false;
// }]
```

특정 조건을 만족하는 원소들을 모두 찾아서 배열을 생성한다.

### splice

```javascript
const nums = [1, 2, 3, 4]
const index = nums.indexOf(2)

console.log(nums.splice(index, 2))
console.log(nums)

// result :
// [2, 3]
// [1, 4]
```

배열에서 특정 항목을 제거한다. 첫번째 인자로는 삭제할 원소의 인덱스를 받고, 두번째 인자로 해당 인덱스에서부터 몇개를 지울 것인지를 정수로 받는다. 성공한 이후에는 제거한 원소들을 배열로 반환한다.

### slice

```javascript
const nums = [1, 2, 3, 4]

console.log(nums.slice(0, 2))
console.log(nums)

// result :
// [1, 2]
// [1, 2, 3, 4]
```

기존의 배열을 유지한채로 잘라낸 배열을 반환한다. 잘라내기를 시작할 인덱스와 마지막으로 자를 인덱스의 바로 앞 인덱스를 인자로 전달한다.

### shift

```javascript
const nums = [1, 2, 3, 4]

const val = nums.shift()
console.log(val)
console.log(nums)

// result :
// [1]
// [2, 3, 4]
```

배열의 첫번째 원소의 값을 배열에서 뽑아내 반환한다. 대신 기존 배열에서는 뽑아낸 원소가 삭제된다.

### pop

```javascript
const nums = [1, 2, 3, 4]

const val = pop.shift()
console.log(val)
console.log(nums)

// result :
// [4]
// [1, 2, 3]
```

배열의 마지막 원소의 값을 배열에서 뽑아내 반환한다. 대신 기존 배열에서는 뽑아낸 원소가 삭제된다.

### unshift

```javascript
const nums = [1, 2, 3, 4]

nums.unshift(0)
console.log(nums)

// result :
// [0, 1, 2, 3, 4]
```

배열의 가장 앞에 새로운 원소를 추가한다.

### concat

```javascript
const arr1 = [0, 1, 2]
const arr2 = [3, 4, 5]

const concated = arr1.concat(arr2)
console.log(concated)

// result [0, 1, 2, 3, 4, 5]
```

여러개의 배열을 하나의 배열로 합쳐서 반환한다. 기존 배열은 수정하지 않는다.

### join

```javascript
const nums = [0, 1, 2, 3]
console.log(nums.join())
consile.log(nums.join(' -> '))

// result
// 0,1,2,3
// 0 -> 1 -> 2 -> 3
```

배열 내의 원소들을 문자열로 만들어준다. separator 를 인자로 받는다. default separator 는 ',' 이다.

### reduce

```javascript
const nums = [0, 1, 2, 3]

const sum = nums.reduce(
  (accumulator, current, index, array) => accumulator + current,
  0
)
console.log(sum)

const avg = nums.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length
  }

  return accumulator + current
}, 0)

// result:
// 6
// 0.75
```

배열의 각 원소들을 이용해서 연산을 진행한다. accumulator 는 각 원소를 순회할 때 사용할 값을 의미한다. 두번째 인자로 주어진 0이 초기값을 의미하고 첫번째 인자로 주어진 함수의 결과가 다음 반복의 accumulator가 된다.
current 는 현재 원소를 의미한다. index 는 현재 사용하는 원소의 인덱스 값을 가진다. array는 배열 자기 자신을 가르킨다.
