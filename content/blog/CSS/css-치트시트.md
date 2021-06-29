---
title: '[한페이지로 끝내는 CSS] CSS 치팅시트'
date: 2020-08-27 00:00:02
category: CSS
thumbnail: { thumbnailSrc }
draft: false
---

## 기본 문법

```css
선택자 {
  속성: 속성값,
  속성: 속성값
}
```

선택자는 HTML의 요소 중 내가 원하는 요소를 찾아주는 역할을 하게된다.

## CSS 선언방식

### 인라인(in-line) 방식

CSS를 적용하고싶은 HTML태그에 직접적으로 CSS를 적용한다. 선택자가 필요없긴 하지만 유지보수를 위해 사용을 지양하는 것이 좋다.

```html
<div style="color: red, front-size: 20px;">HELLO</div>
```

### 내장(Embedded) 방식

HTML의 `head` 영역에 CSS를 포함시켜서 사용한다.

```html
<head>
  <style>
    div {
      color: red;
    }
  </style>
</head>
```

### 링크(Link) 방식

`link` 태그를 사용해서 외부에 있는 css 파일을 가져와서 사용한다.

```html
<head>
  <link href="./main.css" rel="stylesheet" />
</head>
```

### @import 방식

외부에 있는 css를 css 파일 내에서 가져온다. 이 방식을 사용하면 css 가 직렬방식으로 순차적으로 불려진다. css 의 사용이 순서대로 적용되어야 한다면 이 방식으로 사용하는 것이 유리하다.

```css
@import url('./main.css');
```

## 선택자

### 기본 선택자

#### `*`: 전체 선택자

요소 내부에 있는 모든 요소들을 선택한다.

```css
* {
  color: red;
}
```

- 이 css 가 적용되는 HTML의 모든 요소에 css 속성이 적용된다.

#### `태그 이름`: 태그 선택자

태그 이름을 선택자로 사용해서 해당 태그이름을 가진 요소를 모두 선택하여 css를 적용한다.

```css
div {
  color: red;
}
```

#### `.클래스 이름`: 클래스 선택자

지정한 클래스 이름을 선택자로 사용해서 해당 클래스를 가진 요소를 모두 선택하여 css를 적용한다.

```css
.fruits {
  color: red;
}
```

#### `#아이디 이름`: 아이디 선택자

지정한 id를 가진 요소를 선택하여 css를 적용한다.

```css
#fruits {
  color: red;
}
```

### 복합 선택자

#### `선택자1선택자2`: 치 선택자

여러 선택자를 지정하고 두 선책자를 모두 가지고 있는 요소를 선택하여 css를 적용한다.

```css
/* span 태그이면서 fruits 클래스를 가진 요소를 찾는다. */
span.fruits {
  color: red;
}
```

#### `선택자1 > 선택자2`: 자식선택자

어떤 선택자의 자식요소 선택자를 찾아 css를 적용한다. 자식선택자는 기준이 되는 선택자의 바로 하위에 있는 선택자를 의미한다.

```css
/* ul 태그를 우선적으로 찾고 그 자식 요소 중에 orange 클래스를 가진 요소를 찾는다. */
ul > .orange {
  color: red;
}
```

#### `선택자1 선택자2`: 하위(후손) 선택자

어떤 선택자의 하위 요소의 선택자를 찾아 css를 적용한다.

```css
/* div 태그를 찾고 그 하위에 있는 모든 요소들 중에 orange 라는 요소를 찾는다. */
div .orange {
  color: red;
}
```

#### `선택자1 + 선택자2`: 인접 형제 선택자

어떤 선택자의 다음 형제 요소 선택자 하나를 찾아 css를 적용한다.

```css
.orange + li {
  color: red;
}
```

```html
<ul>
  <li></li>
  <li></li>
  <li class="orange">orange</li>
  <!-- orange 클래스의 다음 형제 요소가 선택되기 때문에 이 요소가 선택된다. -->
  <li>mango</li>
</ul>
```

#### `선택자1 ~ 선택자2`: 일반 형제 선택자

어떤 선택자의 다음 형제 요소 선택자를 모두 선택하여 css를 적용한다.

```css
.orange ~ li {
  color: red;
}
```

```html
<ul>
  <li></li>
  <li></li>
  <li class="orange">orange</li>
  <li>mango</li>
  <li>strawberry</li>
  <li>kiwi</li>
  <!-- mango, strawberry, kiwi 요소가 모두 선택된다 -->
</ul>
```

### 가상 클래스 선택자(Pseudo-Classes Selectors)

#### :hover

마우스 포인터가 해당 요소 위에 올라가 있을 때 css를 지정한다.

```css
/* a 태그 위에 마우스를 올려둘 때 폰트 두께를 두껍게 만든다. */
a:hover {
  font-weight: bold;
}
```

#### :active

해당 요소를 마우스로 클릭하고 있는 동안 적용할 css를 지정한다.

```css
.box {
  width: 100px;
  background: tomato;
}

.box {
  width: 200px;
}
```

#### :focus

해당 요소가 포커스가 된 동안 적용할 css를 지정한다. 대화형 콘텐츠(`input` 등)에만 사용된다.

```css
input {
  width: 100px;
  outline: none;
  border: 1px solid lightgray;
  padding: 5px 10px;
}
input:focus {
  border-color: red;
  width: 200px;
}
```

#### :first-child

지정한 선택자가 형제 요소 중 첫번째 요소일 때 적용할 css를 지정한다.

```css
/* fruits 클래스 요소 하위의 모든 li 태그 중 첫번째 li를 선택한다. */
.fruits li:first-child {
  color: red;
}
```

```html
<ul class="fruits">
  <!-- strawberry가 선택된다. -->
  <li>strawberry</li>
  <li>apple</li>
  <li>kiwi</li>
  <li>mango</li>
</ul>
```

#### :last-child

지정한 선택자가 형제 요소 중 마지막 요소일 때 적용할 css를 지정한다.

```css
/* fruits 클래스 요소 하위의 모든 li 태그 중 마지막 li를 선택한다. */
.fruits li:last-child {
  color: red;
}
```

```html
<ul class="fruits">
  <!-- mango가 선택된다. -->
  <li>strawberry</li>
  <li>apple</li>
  <li>kiwi</li>
  <li>mango</li>
</ul>
```

#### :nth-child

지정한 선택자가 형제 요소 중 n 번째 요소일 때 적용할 css를 지정한다.

```css
/* fruits 클래스 요소 하위의 두번째 요소가 li라면 선택한다. */
.fruits li:nth-child(2) {
  color: red;
}
```

```html
<ul class="fruits">
  <!-- apple이 선택된다. -->
  <li>strawberry</li>
  <li>apple</li>
  <li>kiwi</li>
  <li>mango</li>
</ul>
```

`n`키워드를 사용하면 0부터 해석하게된다.

```css
/* fruits 클래스 요소 하위의 2n(짝수) 번째 요소가 li 라면 선택한다. */
.fruits li:nth-child(2n) {
  color: red;
}
```

```html
<ul class="fruits">
  <!-- apple, mango가 선택된다. -->
  <li>strawberry</li>
  <!-- 2 * 1 -->
  <li>apple</li>
  <li>kiwi</li>
  <!-- 2 * 2 -->
  <li>mango</li>
</ul>
```

```css
/* fruits 클래스 요소 하위의 n+3(3이후의 모든) 요소가 li 라면 선택한다. */
.fruits li:nth-child(n + 3) {
  color: red;
}
```

```html
<ul class="fruits">
  <!-- kiwi, mango가 선택된다. -->
  <li>strawberry</li>
  <li>apple</li>
  <!-- 0+3 -->
  <li>kiwi</li>
  <!-- 1+3 -->
  <li>mango</li>
</ul>
```

#### nth-child 주의사항

```css
.fruits p:nth-child(1) {
  color: red;
}
```

```html
<div class="fruits">
  <!-- 첫번째 자식요소가 p 가 아니기 때문에 아무 요소도 선택되지 않는다. -->
  <div>A</div>
  <p>B</p>
</div>
```

```css
/* 후손 선택자이기 떄문에 하위의 모든 p태그 요소들에 nth-child를 적용한다. */
.fruits p:nth-child(1) {
  color: red;
}
```

```html
<div class="fruits">
  <!-- A와 A-1이 모두 선택된다. -->
  <p>A
    <p>A-1</p>
    <p>A-2</p>
    <p>A-3</p>
  </p>
  <p>B</p>
</div>
```

```css
/* 기본 선택자를 공백으로 두었기 때문에 모든 하위 요소에 적용된다. */
.fruits :nth-child(1) {
  color: red;
}
```

```html
<div class="fruits">
  <!-- A와 A-1이 모두 선택된다. -->
  <p>A
    <div>A-1</div>
    <p>A-2</p>
    <p>A-3</p>
  </p>
  <p>B</p>
</div>
```

#### :nth-of-type

지정된 태그의 이름과 동일한 태그인 형제 요소 중 n 번째 요소가 존재한다면 선택하여 css 를 적용한다.

_**클래스 선택자와는 함께쓰지말고 태그 선택자와 함께 사용하자**_

```css
/* fruits 클래스 요소 하위의 첫번째 p 태그를 선택한다. */
.fruits p:nth-of-type(1) {
  color: red;
}
```

```html
<ul class="fruits">
  <div>strawberry</div>
  <p>apple</p>
  <p>kiwi</p>
  <li>mango</li>
</ul>
```

#### :not

부정선택자. 특정한 요소를 제외하고 싶을 때 사용한다.

```css
/* fruits 클래스 요소 하위 li 태그 중 straw 클래스를 제외한 모든 요소를 선택한다. */
.fruits li:not(.straw) {
  color: red;
}
```

```html
<ul class="fruits">
  <li class="straw">strawberry</li>
  <li>apple</li>
  <li>kiwi</li>
  <li>mango</li>
</ul>
```

### 가상 요소 선택자 (Pseudo-Elements Selector)

#### ::before

어떤 요소 내부의 내용 앞에 가상의 요소를 삽입하기 위해 사용한다. `content` 속성을 텍스트를 사용하지 않더라도 반드시 함께 사용해야한다.

```css
ul li:before {
  content: '숫자';
  font-weight: bold;
}
```

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>
```

#### ::after

어떤 요소 내부의 내용 뒤에 가상의 요소를 삽입하기 위해 사용한다. `content` 속성을 반드시 사용해야한다.

```css
ul li:after {
  content: '.0';
  font-weight: bold;
}
```

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>
```

### 속성 선택자(attribute Selectors)

#### [attr]

클래스를 지정하지 않고 속성이름을 지정해서 특정한 요소를 선택한다. `[속성이름]` 형식으로 지정해서 요소를 지정할 수 있다.

```css
/* 속성에 disabled가 포함된 요소들을 찾아서 css를 적용한다. */
[disabled] {
  opacity: 0.2;
}
```

#### [attr=value]

속성 attr과 그 속성 값으로 요소를 찾는다.

```css
/* type 속성의 값이 password인 요소를 찾아서 css를 적용한다. */
[type='password'] {
  opacity: 0.5;
  color: red;
}
```

#### [attr^=value]

속성 attr과 그 속성 값이 주어진 값으로 시작하는 요소를 찾는다.

```css
/* class 속성의 값이 "btn-" 로 시작하는 요소를 찾아서 css를 적용한다. */
[class^='btn-'] {
  color: red;
}
```

#### [attr$=value]

속성 attr과 그 속성 값이 주어진 값으로 끝나는 요소를 찾는다.

```css
/* class 속성의 값이 "-btn" 으로 끝나는 요소를 찾아서 css를 적용한다. */
[class$='-btn'] {
  color: red;
}
```

## 상속(Inheritance)

특정한 css 속성들은 조상 요소에 속성 값을 지정하면 그 하위 요소에 모두 그 속성이 적용된다. 대부분 텍스트를 다루는 속성들이 상속되는 속성들이다.

- font
- color
- text-align
- ...

### 강제 상속

원래는 상속되지 않는 속성이지만 강제적으로 상속을 시킬 수 있다. 속성 값으로 `inherit` 를 사용하면 부모요소의 값을 받아와서 사용한다.

```css
.parent {
  position: absolute;
}

.child {
  position: inherit;
}
```

## CSS 우선순위

같은 요소가 여러 선언을 받을 때, 어떤 속성을 적용할지는 다음과 같은 우선순위로 결정된다.

1. !important (무한대)
   다른 모든 선언을 무시하고 이 선언을 적용한다.

   ```css
   .div {
     color: red !important;
   }
   ```

2. 인라인으로 선언된 속성 (1000점)

3. ID 선택자 (100점)

   ```css
   #yellow {
     color: yellow;
   }
   ```

4. 클래스 선택자 (10점)

   ```css
   .yellow {
     color: yellow;
   }
   ```

5. 태그 선택자 (1점)

   ```css
   li {
     color: yellow;
   }
   ```

6. 전체 선택자

   ```css
   * {
     color: yellow;
   }
   ```

7. 상속 (0점)

   ```css
   #yellow {
     color: inherit;
   }
   ```

8. 부정선택자 (0점)

   ```css
   li:not(.yellow) {
     color: yellow;
   }
   ```

예)

```css
/* 클래스 선택자(10점) + 태그 선택자(1점) + 클래스 선택자(10점) = 총 21점 */
.list li.item {
}
```

## reset

브라우저에서 기본적으로 적용되어 있는 스타일이 각 브라우저마다 표준화되어 있지 않고 다르기 때문에 기본 스타일을 완전히 초기화해주는 것이 좋다.

```css
/* import 사용 */
@import url('https: //cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css');
```

```html
<head>
  /* link 사용 */
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css"
  />
</head>
```

## CSS 단위

### em

지정된 폰트 사이즈에 따라 크기를 지정한다. 주어지는 em값을 현재 폰트사이즈에 곱해서 픽셀 사이즈를 만든다

```css
.container {
  width: 60em;
  font-size: 15px;
}

.child {
  /* 부모요소인 container에 있는 font-size 를 상속받는다. */
  width: 15em; /* 15 * 15 = 225px */
  font-size: 2em; /* 15 * 2 = 30px */
}
```

### rem

다른 부모요소들이나 자기 자신의 폰트사이즈를 무시하고 제일 상위에 있는 `html` 태그에 지정되어있는 폰트 사이즈에 현재 rem 값을 곱해 새로운 픽셀 사이즈를 만든다.

### vw, vh

- vw: `viewport width`. 현재 출력되는 화면을 `viewport` 라고 하는데 가로 길이의 비율에 따라 백분위로 지정한다.
- vh: `viewport height`. 현재 출력되는 화면을 `viewport` 라고 하는데 세로 길이의 비율에 따라 백분위로 지정한다.

```css
/* 현재 출력되는 화면 가로 크기의 절반을 지정한다. */
.container {
  width: 50vw;
}
```

### vmin, vmax

현재 화면의 가로와 세로 사이즈 중에 더 큰 값을 가진 값을 기준으로 비율로 새로운 사이즈를 지정한다.

```css
.conatiner {
  /* 화면의 가로, 세로 사이즈 중 더 긴 길이의 절반 값을 지정한다. */
  width: 50vmax;
  /* 화면의 가로, 세로 사이즈 중 더 짧은 길이의 절반 값을 지정한다. */
  height: 50vmin;
}
```

## 박스모델 속성

### width

요소의 가로 값을 지정한다.

- 기본값으로 `auto`가 지정되어 있어 브라우저가 너비를 계산해서 적용하게된다.

### height

요소의 세로 값을 지정한다.

- 기본값으로 `auto`가 지정되어 있어 브라우저가 높이를 계산해서 적용하게된다.

### max-width

요소의 최대 가로 너비를 지정한다.

- 기본값으로 `none`이 지정된다.

### min-width

요소의 최소 가로 너비를 지정한다.

- 기본값으로 `0`이 지정된다.

### max-height

요소의 최대 세로 너비를 지정한다.

- 기본값으로 `none`이 지정된다.

### min-height

요소의 최소 세로 너비를 지정한다.

- 기본값으로 `0`이 지정된다.

### margin

요소의 외부 여백을 지정한다.

- 음수 값을 사용할 수 있다.
- 기본값으로 `0`이 지정된다.
- `%` 를 사용하게 되면 부모요소의 가로 너비에 대한 비율이 사용된다는 것을 주의하자.

```css
.box {
  /* 위 오른쪽 아래 왼쪽 */
  margin: 10px 20px 30px 40px;
  /* 위 왼쪽과오른쪽 아래 */
  margin: 10px 20px 30px;
  /* 위와아래 왼쪽과오른쪽 */
  margin: 10px 20px;
  /* 위와아래와왼쪽과오른쪽*/
  margin: 10px;
}
```

#### 개별 속성

- margin-top
- margin-botton
- margin-left
- margin-right

#### 마진 중복(Collapse)

마진의 특정한 값들이 여러 요소들끼리 중복되어서 합쳐지는 현상이 있다.

- 형제 요소들 끼리의 `top`과 `bottom`이 겹칠 때
- 부모 요소의 `top`과 자식 요소의 `top`이 겹칠 떄
- 부모 요소의 `bottom`과 자식 요소의 `bottom`이 겹칠 때
- 마진 중복 계산법
  - 둘 다 양수일 때: 더 큰 값으로 마진값을 설정
  - 둘 다 음수일 때: 더 작은 값으로 마진값을 설정
  - 양수와 음수 각각일 때: 두 마진값을 더한 값을 마진값으로 설정

### padding

요소의 내부 여백을 지정한다.

- 기본값은 0으로 지정된다.
- `%` 를 사용하게 되면 부모요소의 가로 너비에 대한 비율이 사용된다는 것을 주의하자.

#### 개별 속성

- padding-top
- padding-botton
- padding-left
- padding-right

#### 크기증가

추가된 padding의 값만큼 요소의 크기가 커지는 현상이 있다.

- 다른 속성을 지정해주지 않는다면 가로세로 사이즈에 padding 사이즈를 추가해 계산해주어야 한다.
- `box-sizing: border-box` 라는 속성을 추가하면 크기가 커지지 않도록 자동으로 계산해서 padding을 적용한다.

### border

요소의 외곽선을 지정하기 위해 사용한다.

- `border: 두께 종류 색상` 으로 단축속성을 사용할 수 있다.
- 개별속성과 속성값
  - border-width: 선의 두께. 기본값은 `medium`
    - 사각형으로 위, 오른쪽, 아래, 왼쪽 순으로 개별 속성을 설정할 수 있다.
- padding 이나 margin과 마찬가지로 border의 두께를 설정하게 되면 전체 요소의 크기가 변경된다. 따라서 크기를 유지하려면 `box-sizing: border-box` 속성을 사용해야한다.

```css
.box {
  /* 위 오른쪽 아래 왼쪽 */
  border-width: 10px 20px 30px 40px;
  /* 위 좌우 아래 */
  border-width: 10px 20px 30px;
  /* 상하 좌우 */
  border-width: 10px 20px;
  /* 상하좌우 */
  border-width: 10px;
}
```

- border-style: 선의 종류. 기본값은 `none`
  - 속성 값
    - hidden: 선을 숨김. 테이블 요소에서만 사용한다.
    - solid: 실선
    - dotted: 점선
    - dashed: 파선
    - double: 두 줄선
    - groove: 홈이 파여있는 모양의 선
    - ridge: 솟은 모양의 선
    - inset: 요소 전체가 들어간 모양의 선
    - outset: 요소 전체가 나온 모양의 선
- border-color: 선의 색상. 기본값은 `black`

### box-sizing

요소의 크기 계산 기준을 지정한다. 기본 값은 `content-box` 이다.

- 속성 값
  - content-box: width와 height 만으로 요소의 크기를 계산한다.
  - border-box: padding 과 border 의 크기를 포함해서 요소의 크기를 계산한다.

### display

요소의 박스 타입을 설정한다.

- 속성 값
  - block: 블록 요소를 지정(div, 등)
  - inline: 인라인 요소를 지정(span, 등)
  - inline-block: 인라인-블록 요소를 지정. 요소들이 수평으로 쌓이지만 가로,세로 값을 사용할 수 있다.
  - none: 요소의 박스타입을 지우게 되기 때문에 요소가 화면에 보이지 않고 사라진다. 시각적으로 보이지 않는 것이 아니라 완전이 존재하지 않는다는 것을 유의하자.

### overflow

요소의 크기 이상으로 어떤 자식 요소들이 넘쳤을 때 그 내용을 어떻게 보여줄지 지정한다.

- 속성 값
  - visible(기본값): 넘친 채로 그대로 보여준다.
  - hidden: 넘친 부분은 자르고 보여준다.
  - scroll: 스크롤바를 생성해서 넘친 부분을 볼 수 있게 한다. 단, 가로, 세로에 대한 스크롤바를 무조건 생성하기 때문에 불필요한 스크롤바가 생성될 수 있다.
  - auto: 넘치는 부분에만 스크롤바를 만든다.

### opacity

요소의 투명도를 설정한다. `0부터 1사이`의 숫자를 입력해서 투명도를 백분위로 설정한다. 0은 투명, 1을 불투명이다.

## font

- 단축 속성: `font: 기울기 두께 크기 / 줄높이 글꼴`
  - 단축 속성을 사용하려면 `font-size` 와 `font-family`가 반드시 입력되어야 한다.

```css
.box {
  font: italic bold 20px / 1.5 'Arial', sans-serif;
}
```

- 개별 속성
  - font-style: 글자의 기울기를 설정한다.
    - normal
    - italic
    - oblique
  - font-weight: 글자의 두께를 설정한다.
    - normal: 숫자 값으로 400과 동일하다.
    - bold: 숫자 값으로 700과 동일하다.
    - bolder: 부모 요소보다 더 두껍게 표현한다.
    - lighter: 부모 요소보다 더 얇게 표현한다.
    - 숫자(100 ~ 900)
      - 100: Thin
      - 200: Extra light
      - 300: Light
      - 400: Normal
      - 500: Medium
      - 600: Semi Bold
      - 700: Bold
      - 800: Extra Bold
      - 900: Black
  - font-size: 글자의 크기를 설정한다.
    - 폰트사이즈를 따로 지정하지 않으면 기본값으로 16px 으로 지정된다.
  - line-height: 줄 높이를 설정한다.
    - normal: 브라우저에 따라 다르다.
    - 단위
    - 숫자: 요소의 글꼴 크기의 배수로 지정한다. 폰트 사이즈의 변화에 영향을 받지 않기 때문에 픽셀과 같은 단위를 사용하는 것 보다 숫자로 하는 것이 더 유용하다.
  - font-family: 글꼴을 지정한다.
    - 단축 속성으로 `font-family: [글꼴 후보1, 글꼴 후보2..], 글꼴계열;` 를 사용한다.
    - 글꼴 후보목록을 지정해두고 그 중에 하나를 선택해서 사용한다.
    - 글꼴 후보들을 모두 사용하지 못하면 브라우저가 자동으로 찾아 사용하는 글꼴계열을 지정한다.
      - serif: 바탕체 계열
      - sans-serif: 고딕체 계열
      - monospace: 가로폭이 등등한 글꼴 계열
      - cursive: 필기체 계열
      - fantasy: 장식이 있는 글꼴 계열

## color

폰트의 색상을 지정하는데 사용한다.

- 색상표현
  - 색상이름
  - Hex 색상코드: 16진수 색상코드를 사용해서 색상을 표현한다.
  - RGB
  - RGBA: RGB에 투명도를 추가해 사용한다.
  - HSL: 색상, 채도, 명도로 색상을 표현한다.
  - HSLA

## text-align

문자들을 정렬하는데 사용한다.

- 속성값
  - left
  - right
  - center
  - justify: 양쪽맞춤이지만, 자동으로 개행이 되어 여러줄이 된 문자열에만 적용이 된다.

## text-decoration

텍스트에 선을 넣어 꾸미는데 사용한다.

- 속성값
  - none
  - underline
  - overline
  - line-through

## text-indent

들여쓰기를 지정한다.

## letter-spacing

글자 사이의 자간을 지정한다.

## word-spacing

띄어쓰기의 간격을 설정한다.

## float

요소를 좌우 방향으로 띄운다. 일반적으로 요소들을 수평으로 정렬하기 위해 사용한다. 최근에는 `flex`가 css3에 추가되면서 잘 사용하지 않는 추세이다.

- 속성값
  - none: 기본값. float을 사용하지 않는다.
  - left: 왼쪽으로 띄운다.
  - right: 오른쪽으로 띄운다.
- 텍스트들과 요소가 있다면 요소에 float를 적용해서 텍스트가 요소를 둘러싸게끔 할 수 있다.

```html
<div class="box"></div>

<article>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia officiis ut
  debitis, nam nulla iste rem? Unde quo iure illum dolores. Omnis fugiat, illum
  consequuntur praesentium labore porro nihil atque!
</article>
```

```css
.box {
  background: tomato;
  height: 50px;
  width: 50px;
  float: right;
}
```

- float 을 중단시키고 싶으면, 현재 적용된 float의 방향을 `clear` 해주면된다.
  - 속성값
    - none
    - left
    - right
    - both
- 수평정렬을 하기 위해 요소에 float을 적용해주면 요소들을 수평으로 위치시킨다. 이때 요소 순서에 주의하자.
  - `float: left` 를 하면 요소들을 좌측부터 쌓는다.
  - `float: right` 를 하면 요소들을 우측부터 쌓는다.
- float이 끝나고 새로 시작하는 요소에는 항상 `clear` 속성으로 float을 해제해주어야 한다.
  - float 속성이 추가된 다음 형제 요소에 `clear` 속성을 추가한다.
  - float 속성이 추가된 요소의 부모요소에 `overflow` 속성과 속성값 `hidden`이나 `auto`를 추가한다.
  - float 속성이 추가된 요소의 부모요소에 미리 지정된 `clearfix`라는 클래스를 추가하고 이 클래스에 가상요소선택자를 이용해서 강제로 형제요소를 만든다.
    ```css
    .clearfix::after {
      content: '';
      clear: both;
      display: block;
    }
    ```
- float이 있는 형제요소에는 float이 반드시 있어야한다.
- float이 추가된 요소는 대부분의 경우에 `display` 값이 `block`으로 바뀐다.

## position

요소의 위치를 지정할 기준을 설정한다.

- 속성값

  - static: 기본값. 아직 배치를 할 준비가 안된 상태
  - relative: 요소를 자신을 기준으로 배치한다.

    ```css
    /* 원래 있었던 위치에서 위에서부터 아래로 20px, 왼쪽 끝에서 오른쪽으로 20px 만큼 이동한다.*/
    .relative {
      position: relative;
      top: 20px;
      left: 20px;
    }
    ```

  - absolute: 위치 상의 부모요소를 기준으로 배치한다.
    - 부모요소는 HTML구조상의 부모요소를 지칭하지는 않는다. position 속성이 부여되어 있는 상위 요소가 기준이 된다. position이 없으면 위치 상의 부모요소가 될 수 없다. 부모요소들에 position이 없으면 뷰포트가 기준이 된다.
    - 주변 형제요소들과의 배치관계에서 더이상 영향을 받지 않고 벗어나게 된다.
  - fixed: 뷰포트를 기준으로 배치한다.
  - sticky: 스크롤 영역을 기준으로 배치한다.
    - top, bottom, left, right 중 하나 이상의 값이 항상 존재해야한다.
    - IE에서는 지원되지 않는다.

- 함께 사용하는 속성들
  - top, bottom, left, right: 요소를 기준으로부터 얼만큼 떨어진 곳에 위치시킬 것인지 지정한다.
    - `%`를 사용할 수도 있다. 위치 상의 부모요소의 가로나 세로너비의 비율로 위치를 지정한다.
    - 음수 값을 통해서 반대방향으로의 위치로 지정할 수 있다.

## 요소 쌓임 순서

요소가 z축에 쌓일 때에 규칙을 결정한다.

1. static을 제외한 position 값이 있으면 그 위에 쌓는다.
2. position이 모두 존재하면 `z-index` 값에 따라 값이 높은 요소를 위에 쌓는다.
3. position이 존재하고 `z-index` 속성의 값이 같다면 HTML의 구조상의 순서상 늦게 작성된 요소가 위에 쌓인다.

## display 수정

absolute 와 fixed 속성값이 적용되는 요소는 `block` 으로 `display` 가 지정된다.

## background

요소의 배경을 설정한다.

- 단축 속성

  - `background: 색상 이미지경로 반복 위치 스크롤특성;` 에서 필요한 부분만 포함시켜서 사용할 수 있다.

- 개별 속성
  - background-color: 요소의 배경 색상을 지정한다. `transparent` 가 기본값으로 지정되어 있어 투명한 색상이 들어가 있다.
  - background-image: 요소의 배경에 하나 이상의 이미지를 삽입한다. `url('경로')` 를 이용해서 배경으로 사용할 이미지를 지정할 수 있다. 여러 이미지를 사용하려면 쉼표를 통해 구분한다.
    - 여러개의 이미지가 배경으로 삽입되면 가장 먼저 삽입된 이미지가 제일 위에 쌓인다.
  - background-repeat: 요소의 크기가 배경 이미지보다 클 때 어떻게 처리할지 결정한다.
    - 속성값
      - repeat: 기본 값. 배경이미지를 수직, 수평으로 반복한다.
      - repeat-x: 배경이미지를 수평으로 반복한다.
      - repeat-y: 배경이미지를 수직으로 반복한다.
      - no-repeat: 배경이미지를 반복하지 않는다.
  - background-position: 배경이미지의 위치를 지정한다.
    - 속성값
      - %: x축과 y축의 비율을 두 개의 비율을 통해 표현한다.
      - 방향: `top`, `bottom`, `left`, `right`, `center` 중 두 가지를 조합해 방향을 입력해서 위치를 설정한다.
      - 단위
    - 방향과 단위는 함꼐 사용할 수 있지만, `x축 y축` 에 맞게 두 값의 순서를 맞추어서 사용해야한다.
  - background-attatchment: 요소가 스크롤될 때 배경이미지의 스크롤 특성을 지정한다.
    - 속성값
      - scroll: 배경이미지가 요소와 같이 스크롤 된다.
      - fixed: 배경이미지가 뷰포트에 고정되어서 스크롤되지 않는다.
      - local: 요소의 내부에 스크롤이 있을 경우 배경이미지도 같이 스크롤된다.
  - background-size: 배경이미지의 크기를 지정한다.
    - 속성값
      - 단위: `width height` 순서로 입력한다.
      - cover: 배경이미지의 크기 비율을 유지하면서 요소의 넓은 너비에 맞춰서 배경이미지를 위치시킨다.
      - contain: 배경이미지의 크기 비율을 유지하면서 요소의 짧은 너비에 맞춰서 배경이미지를 위치시킨다.

## transition

css 속성의 시작과 끝을 지정해서 중간 값을 애니메이션으로 만든다. 어떤 효과가 바뀌기 전 상태를 나타내는 css에 작성한다.

- 개별 속성
  - transition-property: 전환효과를 사용할 속성의 이름. 기본값은 `all` 로 지정되어 있어 모든 속성이 적용된다.
  - transition-duration: 전환효과의 지속시간
  - transition-timing-function: 타이밍 함수 지정
    - ease: 전환효과가 `빠르게->느리게`
    - linear: 전환효과가 `일정하게`
    - ease-in: 전환효과가 `느리게->빠르게`
    - ease-out: 전환효과가 `빠르게->느리게`
    - ease-in-out: 전환효과가 `느리게->빠르게->느리게`
    - steps(n): n번 분할된 애니메이션을 보여준다.
  - transition-delay: 전환 효과의 대기시건을 설정

```css
.box {
  width: 100px;
  height: 100px;
  background: tomato;
  margin: 10px;
  transition-property: width, background;
  transition-duration: 1s;
}

.box {
  width: 100px;
  height: 100px;
  background: tomato;
  margin: 10px;
  transition: width 1s, background 1s;
}
```

> 두 transition이 같은 기능을 한다.

## transform

요소의 모양을 변형시키는 애니메이션을 지정한다. `transform: 변환함수1 변환함수2 ...` 로 작성한다. 여러개의 변환함수를 사용하면 동시에 변형이 적용된다.

```css
.box {
  transform: rotate(20deg) translate(10px, 0);
}
```

### 2D 변환 함수

- translate: 요소를 이동시킨다.
  - translate(x, y)
  - translateX(x)
  - translateY(y)
- scale: 요소를 확대/축소한다.
  - scale(x, y)
  - scaleX(x)
  - scaleY(y)
- rotate: 요소를 회전시킨다.
  - rotate(degree)
- skew: 요소의 모양을 비튼다
  - skew(x-deg, y-deg)
  - skewX(x-deg)
  - skewY(y-deg)
- matrix

### 3D 변환 함수

- translate3d: 요소를 3차원 공간에서 이동시킨다.
  - translate3d(x, t, z)
  - translatedZ(z)
- scale3d: 요소를 3차원으로 확대/축소한다.
  - scale3d(x, y, z)
- rotate3d: 요소를 3차원 공간에서 회전시킨다.
  - rotateX(x): X축을 기준으로 회전시킨다.
  - rotateY(y): Y축을 기준으로 회전시킨다.
  - rotateZ(z): Z축을 기준으로 회전시킨다.
- perspective: 요소의 원근감을 설정한다. 단, perpective 함수는 transform의 가장 첫 함수로 사용되어야한다.

### transform 변환 속성

- transform-origin: 요소 변환의 기준점을 설정한다.
  - `%`, `위치 키워드(bottom, right 등)` 로 지정할 수 있다.
- transform-style: 3D 변환 요소의 자식 요소도 3D변환을 사용할지 설정한다.
- perspective: 하위요소를 관찰하는 원근 거리를 설정한다.
  - perspective 함수와는 다르게 관찰대상이 아닌 관찰대상의 부모 요소에 원근거리를 적용한다. 하위 요소들이 많다면 함수가 아니라 perspective 속성을 사용하는 것이 좋다.
- perspective-origin: 원근 거리의 기준점을 설정한다.
- backface-visibility: 3D 변환으로 회전된 요소의 뒷면을 숨긴다.
  - `visible`, `hidden` 속성값으로 설정한다.
- matrix: 6개의 인자를 받아 2차원 효과를 지정하고 `scale`, `skew`, `translate`, `rotate` 와 같은 함수들을 모두 아우른다. 왜냐하면 일반적인 2d 변환함수는 matrix 함수의 인자값으로 다시 변환되어 사용되기 때문이다. 따라서, matrix 를 꼭 사용하기 보다는 2d/3d 변환함수를 사용하는 것이 더 용이하다.

## animation

- 단축속성
  `animation: 애니메이션이름 지속시간 [타이밍함수 대기시간 반복횟수 반복방향 전후상태 재생/정지]`

- `@keyframes` 를 통해서 애니메이션을 연결해준다
  - 2개 이상의 애니메이션 중간 상태인 프레임을 지정할 수 있다.
  - transition은 `전 상태(0%)` 와 `후 상태(100%)` 만 지정할 수 있는 반면에 keyframes 는 여러 단계에 걸쳐 애니메이션 효과를 지정할 수 있기 때문에 유용하다.

```css
.box {
  width: 100px;
  height: 100px;
  background: tomato;
}

.box:hover {
  animation: first-animation 2s infinite alternate;
}

@keyframes first-animation {
  0% {
    width: 100px;
  }
  100% {
    width: 500px;
  }
}
```

- 개별속성
  - animation-name: keyframes 규칙의 이름을 지정한다. 기본값은 `none`
  - animation-duration: 애니메이션의 지속시간을 설정한다. 시간을 입력해서 설정한다. 기본값은 `0s`
  - animation-timing-function: 애니메이션 효과의 시간을 지정한다.
    - ease
    - linear
    - ease-in
    - ease-out
    - ease-in-out
  - animation-delay: 애니메이션이 시작하기 까지의 대기시간을 설정한다.
    - 음수 시간을 설정하면 기존 `animation-duration`을 지정된 시간만큼 생략하고 애니메이션을 시작한다.
    - 단축속성에서는 반드시 `animation-duration` 뒤에 작성되어야한다.
  - animation-iteration-count: 애니메이션의 반복 횟수를 설정한다.
    - 속성값은 숫자로 횟수를 입력하고 무한반복은 `infinite` 키워드를 입력한다.
  - animation-direction: 애니메이션의 반복방향을 설정한다.
    - normal
    - reverse
    - alternate: 애니메이션을 역방향으로 다시 적용해서 왕복하는 애니메이션 효과를 만든다.
    - alternate-reverse
  - animation-fill-mode: 애니메이션이 끝났을 때의 요소의 상태를 지정할 수 있다.
    - none: 기존 위치 -> 애니메이션 시작 위치 -> 애니메이션 수행 -> 기존 위치
    - forwards: 기존 위치 -> 애니메이션 시작 위치 -> 애니메이션 수행 -> 애니메이션이 끝난 위치
    - backwards: 애니메이션 시작 위치 -> 애니메이션 수행 -> 기존 위치
    - both: 애니메이션 시작 위치 -> 애니메이션 수행 -> 애니메이션이 끝난 위치
  - animation-play-state: 애니메이션의 재생과 정지를 설정한다.
    - running: 기본값. 애니메이션을 재생한다.
    - paused: 애니메이션을 정지시킨다.
