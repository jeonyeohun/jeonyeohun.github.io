---
title: '[한페이지로 끝내는 HTML] HTML 치팅시트'
date: 2020-08-21 00:00:02
category: HTML
thumbnail: { thumbnailSrc }
draft: false
---

## 블록 요소의 특성

- 대표적인 블록 요소: div, h1~6, p, section 등
- 사용가능한 최대 가로 너비를 사용한다.
  - 처음에 아무것도 안나오는 이유는 height가 설정되어 있지 않기 때문에. height를 주면 가로에 꽉차게 넣어준다. body에 기본적으로 들어가는 margin과 padding 을 제거해보면 div가 전체 가로너비를 다 사용하는 것을 볼 수 있다.
- 크기를 지정할 수 있다.
  - 컨텐츠의 길이나 크기와는 상관없이 사용자가 원하는 만큼 크기를 조절할 수 있다.
- 시작할 때 크기는 width: 100%, height: 0
- 어떤 width, height 값을 주면 그 값부터 시작된다.
- 수직으로 쌓인다
- margin, padding 을 정의하는데 제한사항이 없다.

## 인라인 요소의 특성

- 대표적인 인라인 요소: span, img, a 등

- 반대로 인라인은 최대 너비를 사용하지 않고 필요한 만큼에 가로너비를 사용한다.
- 크기를 지정할 수 없다.
  - 임의의 height와 width를 부여해도 사이즈가 변하지 않고 컨텐츠에 맞춰서 고정된다.
- 시작 크기는 width: 0, height: 0
- 수평으로 쌓인다. 근데 태그를 줄바꿈으로 작성하면 사이에 띄어쓰기가 긴다. 태그를 이어서 쓰면 공백없이 쌓인다.
- margin, padding 을 정의할 때, 위, 아래는 사용할 수 없다.

## display

- `display` 속성을 사용하면 블록요소를 인라인 요소로, 인라인 요소를 블록 요소로 바꾸는 것이 가능하다.

## html

- 브라우저는 html 태그 내부에 있는 모든 태그들을 읽는다.
- `lang` 이라는 전역속성을 사용할 수 있다. 해당 문서가 가지는 기본적인 언어를 지정해주는 역할을 한다. 예) `<html lang="ko"></html>`

## head

문서의 정보를 입력한다.

- HTML 문서의 제목
  - title 태그를 사용한다.
  - 이 제목은 브라우저 페이지 제목으로 설정된다.
- 메타 태그

  메타 태그는 닫는 태그를 사용하지 않고 혼자 사용한다. 태그 안에 속성을 추가해서 사용해 한다.

  - charset: 문자의 인코딩 방식. 일반적으로 UTF-8을 사용한다. 문자 인코딩이 우선시 되어야 하기 때문에 title 이전에 가장 먼저 설정해주어야 한다.
  - content: name 속성 중 어떤 것을 사용하는지 정해서 값을 준다.
  - http-equiv: 브라우저의 렌더링 방식에 대해 명시를 해주는 기능.
  - name: 정보의 종류를 지정

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
    </html>
    ```

## body

문서의 구조를 입력한다.

## HTML Tags

### link

```html
<link rel="stylesheet" href="" />
```

링크 태그는 문서와 문서를 연결할 때 사용한다. `rel` 이라는 속성은 relationship의 약자로 현재 문서와 연결할 문서간의 관계를 표현할 때 사용하는 필수적인 속성이다.

- 추가속성
  - hreflang : 연결된 페이지의 언어정보를 지정한다.

### base

문서에 포함된 모든 상대경로로 표현된 URL들의 기본 경로를 지정해 줄 수 있는 태그이다.

```html
<base href="" />
```

base 태그에 지정해준 경로는 모든 상대경로의 기본경로가 되어 앞으로 사용되는 모든 경로가 base의 경로와 함께 합쳐진다. 그리고 base 태그는 한 번만 사용된다.

### header

일반적으로 화면 상단에 존재하는 컨텐츠들이 들어가는 영역

- header 태그 안에는 footer 나 header 태그를 제외한 모든 태그가 다 들어갈 수 있다.
- address 태그 안에서는 header 태그를 사용할 수 없다.
- IE에서는 9버전 이후부터 지원

### footer

일반적으로 웹페이지 제일 하단에 다양한 정보를 명시해두는 영역

- header 와 마찬가지로 header나 footer 태그를 제외한 모든 태그를 다 사용할 수 있다.
- IE에서는 9버전 이후부터 지원

### h1~h6

문서의 제목을 6단계로 나누어 지칭할 수 있다.

- h 태그는 문서의 목차를 만들기 위함이지 폰트의 사이즈를 지정하기 위해서 사용하는건 지양한다. 폰트 사이즈는 css를 통해 해결하자.
- 제목의 단계를 건너뛰지 않고 순서대로 사용한다.
- `h1`은 한 페이지에 하나만 사용한다.
- `header` 나 `footer` 에 제목 라벨을 넣을 때에도 `h` 태그를 사용해서 구획의 이름을 지정해줄 수 있다.

### main

문서의 핵심적인 컨텐츠를 표시하는 태그이다. 어떤 블로그에서 핵심적인 포스트가 나오는 영역을 `main` 태그로 표현할 수 있다.

- 한 페이지에 한 번만 사용할 수 있다.
- IE에서는 지원하지 않는다.

### article

독립적으로 구분되거나 재사용 가능한 영역을 설정. 현재 영역에서 article 태그를 다른 위치로 분리시키더라도 여전히 그 기능을 할 수 있어야한다.

- 일반적으로 `h` 태그를 함께 사용한다.
- 기사나 글귀를 위해 일반적으로 사용하기 떄문에 일반적으로는 시간 정보를 함꼐 입력한다.

```html
<article>
  <h2></h2>
  <p></p>
</article>
```

### section

영역을 나누는 기능으로 일반적으로 사용한다.

- `h` 태그르를 사용해서 영역을 식별한다.
- section 태그의 내부에는 `article` 태그를 넣어줄 수 있다.
- section은 semantic 태그이기 때문에 제목을 포함시켜서 이 구역의 의미를 가지게 해야한다.

### nav, aside

- nav: navigation의 약자로 다른 페이지의 링크를 제공하는 영역을 설정한다. 한 페이지에서 다른 페이지로 이동할 수 있는 메뉴영역을 포함하는 영역이다.

  - 일반적으로 `ol` 이나 `ul` 태그가 함께 사용된다. 이 태그들 안에 페이지를 이동할 수 있는 링크가 들어간다.

- aside: 배너 광고, 링크, 사이드바와 같은 별도 컨텐츠를 설정한다.

### address

`body`, `article`, `footer` 등의 태그에서 연락처에 대한 정보를 제공하기 위해 사용한다.

```html
<address>
  <a href="mailto:">send email</a>
</address>
```

### div

아무 의미는 없지만 영역을 나누기 위해서 사용한다. 자바스크립트나 CSS를 이용해서 추가적인 요소들을 지정하고 싶을 때 사용한다.

### ol, ul, li

1. ol: 정렬된 목록 (ordered list)
2. ul: 정렬되지 않은 목록 (unordered list)

- `ol`, `ul` 태그는 자식으로 `li` 태그만 사용할 수 있다.
- `li` 태그는 단독으로 사용할 수 없다.
- 목록을 중첩시켜서 목록안의 목록을 만들 수 있다.

#### 추가속성 - ol

1. reversed: 번호를 역순으로 출력한다.
2. start: 시작 번호를 지정해줄 수 있다.
3. type: 번호의 유형을 설정. `a, A, i, I, 1(default)` 중 하나를 선택해서 부여할 수 있다.

### dl, dt, dd

용어, 정의 그리고 쌍을 표현하는 영역을 설정한다.

- `dl` 태그는 `dd` 와 `dt` 태그만을 포함해야한다.
- 용어를 작성할 때는 `dt` 사용한다.
- 정의를 작성할 때는 `dd` 사용한다.
- 용어와 정의를 하나로 묶을 때 `dl`을 사용한다.
- Key-Value 관계를 표현할 때 주로 사용한다.

### p

문단을 설정한다.

- 웹 표준에서는 다음 문단으로 넘어가는 단축키를 `p` 태그를 기준으로 이동시킨다.

### hr

문단을 분리할 때 사용하는 태그. 수평선 하나를 만들어준다.

- 수평선을 만들기 위한 태그는 아니다. 수평선은 단순히 시각적인 표현이고, 의미적으로는 어떤 주제를 기준으로 문단이 분리되는 것을 표현하기 위해서 사용해야한다.

### pre

preformatted text. 서식이 미리 지정된 텍스트를 설정한다.

- 텍스트의 공백과 줄바꿈을 그대로 유지하면서 표시할 수 있다.
- HTML의 텍스트는 여러번의 줄바꿈이나, 띄어쓰기가 모두 하나의 공백으로 처리가 되지만 `pre` 태그를 사용하면 코드에 입력한 서식이 그대로 브라우저에 표시된다.
- 유의할 점은 `pre` 태그와 텍스트 사이의 공백들도 적용되기 때문에 태그와 텍스트간의 공백도 잘 고려해야한다.

### blockquote

일반적인 인용문을 설정하기 위해 사용한다.

- `cite` 속성을 사용해서 인용된 정보의 URL을 추가해줄 수 있다.

### a

현재 문서에서 외부 문서로 연결할 때 사용한다.

- 같은 페이지 내의 위치를 해시태크를 통해 이동하는 것도 가능하다.
- 추가속성
  - download: 연결된 소스를 페이지로 넘어가지 않고 곧바로 다운로드 받도록 한다.
  - href: 연결된 링크의 URL. html5에서는 생략이 가능하지만 웬만하면 필수적으로 넣어줘야 한다.
  - hreflag: 연결된 링크의 html이 가진 언어를 명시해준다.
  - rel: 현재 문서와 연결된 링크와의 관계를 표현한다.
    - `license`, `previous`, `next` 등을 통해 페이지 관계를 설정해준다.
  - target: 링크 URL의 표시 위치를 설정한다. 현재 화면에서 새로운 페이지로 이동할지, 새로운 탭에 페이지를 새로 열지 선택할 수 있다.
    - `_self(default)`: 현재 창에 페이지를 열기
    - `_blank` : 새로운 탭에 페이지를 열기

### abbr

약어를 표현할 때 사용한다. 문서에 약어로 표현되어 있는 단어가 있다면 `title` 속성을 통해서 약간의 전체 이름을 보여줄 수 있다.

```html
using <abbr title="HyperText Markup Language"> HTML </abbr>
```

### b

문체가 다른 범위를 설정한다.

- 글자가 두껍게 표시된다.
- 특별한 의미를 가지지 않기 때문에 막 사용하면 안된다.
- 다른 태그가 적합하지 않은 경우에 마지막 수단으로 사용한다.

### mark

사용자의 관심을 끌기 위해 하이라이팅을 할 때 사용한다.

- 글자 배경이 기본적으로 노란색으로 표현된다.

### em

강조의 의미를 표시할 때 사용한다.

- 여러개를 중첩해서 사용할 수 있다. 중첩할 수록 강조의 의미가 강해진다.
- 기본적으로 이탤릭체로 표시된다.

### strong

의미를 중요성을 나타내기 위해서 사용한다. `em` 과는 다르게 의미적으로 중요한 부분을 표현할 때 사용한다.

- 기본적으로 글자가 볼드체로 표시된다.

### i

`em`, `strong`, `mark`, `cite`, `dfn` 등에서 표현하지 않는 적합한 의미가 아닌 표현을 위해 사용한다.

- 아이콘이나 특수기호화 같은 평범한 글자 외의 문자들을 표현할 떄 사용한다.
- 기본적으로 글자가 이탤릭체로 표시된다.

### dfn

텍스트의 어떤 부분이 용어임을 정의할 때 사용한다.

- `dl`, `dt`, `dd` 세트와는 다르게 용어 하나를 정의할 때 간단하게 사용할 수 있다.

### cite

창작물에 대한 참조를 설정할 때 사용한다.

- 기본적으로 이탤릭체로 표기된다.

### q

짧은 인용문을 표한할 때 사용한다.

- `blockquote` 보다 짧은 인용문을 설정할 때 사용한다.
- `cite` 속성을 사용해서 인용된 정보의 URL을 입력한다.

### u

텍스트에 밑줄을 칠 수 있도록 한다.

- 꾸미는 용도로만 사용하기 때문에, CSS로도 만들 수 있다. 되도록 CSS를 사용하자.

### code

컴퓨터 코드를 표현할 때 그 범위를 설정해줄 때 사용한다.

### kdb

키보드 입력을 표현할 때 사용한다.

### sup, sub

- `sup` 는 위 첨자를 나타낼 때 사용한다.
- `sub` 는 아래첨자를 나타낼 때 사용한다.

### time

날짜와 시간을 나타내기 위해서 사용한다.

- `datetime` 속성을 이용해서 실제 날짜를 명시한다.

### span

아무 의미가 없는 콘텐츠 영역을 설정

- `div` 와의 차이점은 `span`은 `inline` 요소이다.

### br

줄바꿈을 설정할 때 사용한다.

- 줄바꿈의 간격을 넓히기 위해서 `br` 태그를 여러번 사용하는 건 절대 하면 안된다. 이런 기능은 CSS로 작업하자(line-height).

### del

삭제된 텍스트를 지정할 때 사용한다.

- `cite` 속성을 통해서 변경사항이나 이유를 설명하는 URL을 연결시킨다.
- `datetime` 속성을 통해서 변경이 일어난 날짜를 기록한다.

### ins

새로 추가된 텍스트의 범위를 지정할 때 사용한다.

- `cite` 속성을 통해서 변경사항이나 이유를 설명하는 URL을 연결시킨다.
- `datetime` 속성을 통해서 변경이 일어난 날짜를 기록한다.

### img

이미지를 삽입할 때 사용한다.

- 속성

  - src: 이미지의 URL. 필수 속성이다.
  - alt: 이미지가 정사적으로 표시되지 않을 때 출력할 대체 텍스트를 지정한다. 필수속성이다.
  - width: 이미지의 가로 너비
  - height: 이미지의 세로 너비
    - 가로나 세로 중 하나만 입력하면 입력한 수치에 맞춰서 원본 이미지의 비율에 맞춰 생략한 사이즈를 조절한다.
  - srcset: 브라우저에게 제시할 이미지의 url과 원본크기의 목록을 정의한다.
    - 이미지의 크기로 `px(픽셀)` 이 아닌 `w`나 `x` 단위를 사용해야한다.
      - `w` : 이미지의 원본크기의 가로너비 (i.e. 400w)
      - `x` : 이미지의 비율의도를 의미한다. 제일 작은 크기를 `1x` 로 기준으로 잡고 이 기준 이미지보다 몇 배 더 큰지 표현한다. (i.e. 2.5x)
  - sizes: 미디어 조건과 해당 조건에 대한 이미지의 크기를 명시해두면 브라우저가 제일 최적화된 이미지를 선택해서 사용한다.
    - 일반출력: 이미지의 크기와 관계없이 사용자가 지정한 크기대로 출력된다.
    - 최적화 출력: 사용자가 지정한 크기에 제일 가까운 원본이미지를 골라낸 후에 해당 사이즈로 조절해서 출력한다.
    - sizes 와 width 가 함께 사용되면 width가 우선적으로 사용된다.
  - srcset, sizes 예제

  ```html
  <img
    srcset="경로 원본크기,
            경로 원본크기,
            경로 원본크기"
    sizes="(미디어조건) 최적화 출력크기,
           (미디어조건) 최적화 출력크기,
           (미디어조건) 최적화 출력크기"
    src="이미지 소스"
    alt="대체텍스트"
  />
  ```

### audio

소리 컨텐츠를 삽입할 때 사용한다.

- 속성

  - autoplay: 페이지가 열렸을 때 음성파일이 준비되면 바로 재생이된다.
  - controls: 재생, 정지 등 제어 메뉴를 표시한다.
  - loop: 재생이 끝나면 다시 처음부터 재생한다.
  - preload: 페이지가 로드될 때 파일을 미리 로드해둘지 지정할 수 있다.
    - none: 로드하지 않다가 재생이 시작되면 로드를 시작한다.
    - metadata: 파일에 대한 기본적인 정보들을 로드해둔다.
    - auto: 전체 파일을 로드한다.
  - src: 삽입할 파일의 URL 을 지정한다.
  - muted: 음소거 여부를 지정한다.

### video

동영상 컨텐츠를 삽입할 때 사용된다.

- 속성

  - autoplay: 페이지가 열렸을 때 비디오 파일이 준비되면 바로 재생이된다.
  - controls: 재생, 정지 등 제어 메뉴를 표시한다.
  - loop: 재생이 끝나면 다시 처음부터 재생한다.
  - muted: 음소거 여부를 지정한다.
  - poster: 동영상의 썸네일 이미지의 url 을 지정하여 사용한다.
  - preload: 페이지가 로드될 때 파일을 미리 로드해둘지 지정할 수 있다.
    - none: 로드하지 않다가 재생이 시작되면 로드를 시작한다.
    - metadata: 파일에 대한 기본적인 정보들을 로드해둔다.
    - auto: 전체 파일을 로드한다.
  - src: 삽입할 동영상 파일의 URL을 지정한다.
  - width: 동영상의 가로 너비
  - height: 동영상의 세로 너비

### figure, figcaption

- `figure`: 이미지나 삽화, 도표 등의 영역을 나타내기 위해 사용한다.
- `figcaption`: 이미지에 대한 설명을 나타낼 때 사용한다.

- `img` 태그를 `figure` 로 감싸고 이 안에 `figcaption` 으로 텍스트를 넣어주면 브라우저는 이미지와 텍스트를 연결시켜서 인식한다.

### iframe

다른 HTML 페이지를 현재 페이지에 삽입하기 위해 사용한다. 동영상 컨텐츠를 삽입할 때 많이 사용된다.

- 속성
  - name: 프레임의 이름 설정한다.
  - src: 프레임에 넣을 문서의 url을 지정한다.
  - width: 프레임의 가로 너비를 설정한다.
  - height: 프레임의 세로 너비를 설정한다.
  - allowfullscreen: 전체 화면 모드 사용 여부를 지정한다.
  - frameborder: 프레임 테두리 사용 여부를 지정한다.
  - sandbox: 보안을 위해 읽기전용으로 삽입할 때 사용한다.
    - allow-form: 폼 제출이 가능하도록 한다.
    - allow-scripts: 스크립트 실행 가능하도록 한다.
    - allow-same-origin: 같은 출저의 리소스를 사용 가능하도록 한다.

```html
<iframe
  src="https://naver.com"
  frameborder="0"
  height="400px"
  width="70%"
></iframe>
```

### canvas

Canvas API 와 WebGL API 를 사용할 수 있도록 랜더링 작업을 도와준다. 일반적으로 자바스크립트를 통래서 제어한다.

### script

스크립트 코드를 문서에 포함하거나 참조하기 위해서 사용한다.

- 속성

  - async
    - 스크립트의 비동기적 실행여부를 설정할 수 있다. src 속성이 반드시 함께 사용되어야 한다.
  - crossorigin
  - defer: 문서를 파싱한 후에 스크립트를 작동하도록 설정한다.
  - src: 외부 스크립트 파일의 경로. 이렇게 스크립트 파일이 추가되면 명시적으로 HTML 문서에 작성된 스크립트는 무시된다.

- 스크립트 파일이 실행되는 시점은 HTML 구조가 모두 읽힌 뒤인 `body` 태그의 끝에서 실행하도록 `script` 태그를 위치시킨다.
- 하지만 `defer` 속성을 스크립트에 사용하면 스크립트는 미리 찾아만 두고 HTML 문서를 모두 읽은 뒤에 스크립트를 실행한다.

### noscript

스크립트를 지원하지 않는 경우에 삽입할 HTML 정의한다. 지금은 대부분의 브라우저가 스크립트를 지원하기 때문에 사용할 일이 많지는 않다.

### table, tr, th, td

- table: 테이블 표를 만들 때 영역을 설정하기 위해 사용한다.
- tr: 행을 만들 때 사용한다. 행을 항상 먼저 만들어주어야 한다.
- td: 열을 만들 때 사용한다.
  - 속성
    - headers: 종속관계에 있는 `th`가 있다면 해당 `th`가 가진 `id 속성`을 지정해 연결할 수 있다.
    - colspan: 병합하려는 열의 수를 지정하여 병합된 표를 만들 수 있다.
    - rowspan: 병합하려는 행의 수를 지정하여 병합된 표를 만들 수 있다.
- th: 열을 만들 때 사용하지만, 제목을 표현하는 칸을 위해 사용한다.
  - 속성
    - abbr: 열에 대한 간단한 설명을 추가한다.
    - headers: 종속관계에 있는 `th`가 있다면 해당 `th`가 가진 `id 속성`을 지정해 연결할 수 있다.
    - colspan: 병합하려는 열의 수를 지정하여 병합된 표를 만들 수 있다.
    - rowspan: 병합하려는 행의 수를 지정하여 병합된 표를 만들 수 있다.
- table은 `inline` 이나 `block` 요소가 아닌 `table`이라는 display 요소로 지정된다. 하지만 그 특성은 `block` 요소와 유사하다.

예시) 3행 2열 테이블 구조잡기

```html
<table>
  <tr>
    <th colspan="2" id="th-data">데이터</th>
  </tr>
  <tr>
    <th abbr="Type" scope="col" headers="th-data">헤더</th>
    <th abbr="Value" headers="th-data">헤더</th>
  </tr>
  <tr>
    <td>데이터</td>
    <td>데이터</td>
  </tr>
  <tr>
    <td>데이터</td>
    <td>데이터</td>
  </tr>
</table>
```

### caption

표의 제목을 설정하기 위해 사용한다.

- table 태그가 열린 후 바로 다음에 작성해야 한다.
- table 당 하나만 사용할 수 있다.

### colgroup, col

- col: 표의 열들을 공통적으로 정의하기 위해 사용한다.
- colgroup: `col`의 집합을 표현하기 위해서 사용한다.

```html
<table>
  <caption>
    제목
  </caption>
  <colgroup>
    <col />
    <col style="background-color: red;" span="2" />
    <col />
  </colgroup>
  <tr>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>
```

### thead, tbody, tfoor

표의 시각적인 요소에는 영향을 주지는 않지만, 구조적인 의미를 만들기 위해서 사용한다.

- thead: 머릿글 영역 지정할 때 사용한다.
- tbody: 본문 영역을 지정할 떄 사용한다.
- tfoot: 바닥글 영역 지정할 때 사용한다.

### form

웹 서버에 정보를 제출하기 위한 양식의 범위를 지정하기 위해서 사용한다. 유의할 점은 form 태그 안에서는 form 태그를 자식 태그로 사용할 수 없다.

- 속성
  - action: 전송한 정보를 처리할 웹페이지의 URL을 지정한다.
  - autocomplete: 사용자가 이전에 입력한 값을 자동완성 기능으로 제공할지 지정할 수 있다. default 는 `on`이다.
  - method: http 방식을 지정할 수 있다. default 는 `GET`이다.
    - GET: form에 입력한 정보가 주소에 그대로 노출된다.
    - POST: form에 입력한 정보가 주소에 노출되지 않고 `form data` 를 만들어서 전송한다.
  - name: 고유한 양식의 이름을 지정한다.
  - novalidate: 전송할 데이터 양식의 유효성을 검사하지 않도록 지정한다.
  - target: 서버로 전송한 후 에 응답할 방식을 지정한다.
    - \_self: 현재 탭에서 실행
    - \_blank: 새로운 탭에서 실행

```html
<form action="/login" method="POST">
  <input type="email" name="email" />
  <input type="password" name="password" />
  <button type="submit">로그인</button>
</form>
```

### input

사용자에게 입력받을 데이터 양식을 지정할 때 사용한다.

- 속성
  - autocomplete: 자동완성 기능의 사용여부를 지정한다. default 는 `on`
  - autofocus: 페이지가 로드될 때 자동으로 포커스를 하도록 지정한다. 한페이지에 하나만 지정이 가능하다.
  - checked: type 속성의 값이 radio 이거나 checkbox일 때 미리 값이 채워져 있도록 지정한다.
  - form: form 의 id 속성값을 지정하면 form의 바깥에서 데이터 양식을 입력받아도 사용할 수 있다.
  - name: 데이터 양식의 이름을 입력한다.
  - maxlength: 사용자가 입력할 수 있는 최대 글자 수를 지정한다.
  - readonly: 읽기전용 데이터를 만들 때 사용한다.
  - disabled: 데이터 양식을 비활성화한다.
  - placeholder: 데이터 양식에 hint 텍스트를 지정한다.
  - max: 사용자가 입력할 수 있는 최대값을 지정한다.
  - min: 사용자가 입력할 수 있는 최소값을 지정한다.
  - image: 이미지를 삽입하고 해당 이미지를 폼 제출 버튼으로 사용한다.
  - step: `number` type의 양식에서 버튼을 누를 때 증가하는 값의 크기를 지정한다.
  - type: 입력받을 데이터의 종류를 지정한다.
    - type 속성 값의 종류
      - button
      - checkbox
      - radio
      - file
      - text
      - email
      - password
      - submit
      - search
      - url
      - reset
      - number

### label

라벨 가능 요소에 제목을 붙이기 위해서 사용한다.

- 라벨 가능 요소

  - button
  - input
  - progress
  - select
  - textarea

- 속성
- for: 라벨가능 요소를 지정해서 라벨과 라벨 가능요소를 연결시킨다.
  - `for` 속성을 사용하지 않더라도 `label` 태그로 `input` 태그를 감싸면 같은 효과를 낸다.

### button

선택 가능한 버튼을 만들기 위해 사용한다.

- 속성
  - autofocus
  - disabled
  - form
  - name
  - type
  - onclick: 버튼이 클릭되었을 때 수행할 행동을 지정한다.

### textarea

여러 줄의 일반 텍스트 양식을 구성할 때 사용한다. 한 줄만 들어가는 텍스트는 `input` 태그에 `type="text"` 속성을 지정해서 만든다.

- 속성
  - rows: 텍스트 입력 창의 초기 세로 높이를 지정한다.
  - placeholder: hint 텍스트를 지정한다.

### fieldset, legend

- fieldset: 같은 목적의 양식을 그룹화한다.
- legend: 그룹화된 양식의 제목을 지정한다.

- 속성
  - disabled: 그룹 내의 모든 양식을 비활성화한다.
  - form
  - name

```html
<form>
  <fieldset>
    <legend>Coffee Size</legend>
    <label>
      <input type="radio" name="size" value="tall" />
      Tall
    </label>
    <label>
      <input type="radio" name="size" value="grande" />
      Grande
    </label>
    <label>
      <input type="radio" name="size" value="venti" />
      Venti
    </label>
  </fieldset>
</form>
```

### select, datalist, optgroup, option

사용자가 선택할 수 있는 옵션을 제공하는 역할을 한다.

- select: `option` 을 랩핑해서 주어진 `option`을 하나 선택할 수 있도록 메뉴를 구성한다.

  - 속성
    - autocomplete
    - disabled
    - form
    - multiple: `option` 을 여러개 선택할 수도록 설정한다.
    - name
    - size: 한번에 볼 수 있는 행의 개수를 지정한다.

- optgroup: `option`을 그룹하기 위해 사용한다.

  - 속성
    - lable: 그룹의 이름을 지정한다.

- option: 사용자가 선택할 데이터들을 제공한다.

  - 속성
    - disabled
    - label: 사용자에게 보여지는 값을 설정한다.
    - selected: 설정된 데이터를 초기에 선택되어있을 데이터로 지정한다.
    - value: 서버로 보내질 값을 설정한다.
  - option 에서는 label과 value 를 생략하면 기본 텍스트가 그 값으로 사용된다.
  - option을 빈 태그로 사용해서 label과 value 를 필수적으로 사용할 수도 있다.

- datalist: `input`에 미리 정의된 옵션을 지정해서 자동완성 기능을 제공한다.

```html
<select>
  <optgroup label="Coffee">
    <option>Americano</option>
    <option>Caffe Mocha</option>
    <option label="Cappuccino" value="Cappuccino"></option>
  </optgroup>
  <optgroup label="Latte" disabled>
    <option>Caffe Latte</option>
    <option>Vanilla Latte</option>
  </optgroup>
  <optgroup label="Smoothie">
    <option>Plain</option>
    <option>Strawberry</option>
    <option>Banana</option>
    <option>Mango</option>
  </optgroup>
</select>

<input type="text" list="fruits" />

<datalist id="fruits">
  <option>Apple</option>
  <option>Orange</option>
  <option>Banana</option>
  <option>Mango</option>
  <option>Fineapple</option>
</datalist>
```

### progress

작업의 완료 진행률을 표시한다.

- 속성
  - max: 작업의 총량을 지정한다.
  - value: 작업의 진행량을 지정한다.

## 전역 속성(global attributes)

모든 HTML 요소에서 공통적으로 사용이 되는 속성들

### class

공백으로 구분된 요소의 별칭을 지정한다.

### id

문서에서 고유한 식별자를 정의한다.

- class 와는 다르게 문서에서 한 태그에 하나의 `id`만 사용되어야 한다.

### style

해당 요소에 적용할 CSS를 선언한다.

### title

HTML 요소에 정보나 설명을 지정한다.

```html
<h1 title="h1 태그를 사용함">제목1</h1>
```

이런식으로 작성하면 웹페이지에는 보이지 않지만, 마우스를 해당 요소에 올려두었을 때 팝업으로 `title`에 작성한 내용이 표시된다.

### lang

요소의 언어를 지정한다.

### data-\*

사용자가 정의한 데이터 속성을 지정한다. 일반적으로 자바스크립트에서 사용할 수 있는 데이터를 저장하는 용도로 사용한다.

```html
<div id="data-tag" data-my-name="jeon" data-my-age="26">data</div>
```

이렇게 하면 HTML 요소에 `jeon`과 `26` 이 저장된다. 이 데이터를 자바스크립트에서 찾을 때는,

```javascript
const dat = document.getElementById('data-tag')
console.log(dat.dataset.myName)
console.log(dat.dataset.myAge)
```

### draggable

요소가 drag-and-drop API를 사용할 수 있도록 지정한다. 기본값은 `auto`로 되어있어 브라우저가 드래그 앤 드롭 가능여부를 판단한다.

```html
<div draggable="true">This text is draggable.</div>
```

### hidden

요소를 숨길 때 사용한다.

### tabindex

탭 키를 이용해서 요소를 순차적으로 포커스 탐색할 때 그 순서를 지정한다. 별 다른 지정이 없으면 HTML의 구성 순서에 따라 이동한다.

- 대화형 콘텐츠(input, img, audio, controls, button 등)에서는 기본적으로 tabindex 가 0으로 지정되어 있다.
- 비대화형 콘텐츠는 tabindex 를 `0`으로 지정해서 대화형 컨텐츠와 같이 HTML 요소의 작성 순으로 이동할 수 있다.
- tabindex 에 음수 값을 지정하면 대화형 콘텐츠에서 탭 이동을 건너뛰게 할 수 있다.

## 특수 기호

- 띄어쓰기: `&nbsp;`
- 꺽쇠괄호 열기: `&lt;`
- 꺽쇠괄호 닫기: `&gt;`
