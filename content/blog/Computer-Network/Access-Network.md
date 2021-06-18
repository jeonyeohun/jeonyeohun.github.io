---
title: '[네트워크] 기본 용어들과 접속 네트워크(Basic Terms and Access Network)'
date: 2021-05-22 19:05:66
category: Computer-Network
thumbnail: { thumbnailSrc }
draft: false
---

_**참고도서: 컴퓨터 네트워킹 : 하향식 접근. 7판. James F. Kurose , Keith W.Ross 지음**_

## 네트워크 공부의 기초가 되는 용어들

### End System

- End system (종단 시스템) : 네트워크를 통해 연결되어 있는 모든 장치들을 의미한다. 우리는 주로 이 장치들을 `host` 라고 부른다.
  - 우리가 또 잘 알고있는 것 처럼 `host` 는 그 기능에 따라 `server` 와 `client` 로 나누어 구분한다.
  - `End system` 은 `Communication Link(통신링크)` 와 `Packet Switch(패킷 스위치)` 를 통해 네트워크에 연결된다.

### Communication Link

- 각각의 통신 링크들은 데이터를 전송하는데, 이때의 전송률 혹은 `transmission rate` 를 `bps(bits/sec)`로 나타낸다.
- 어떤 end system에서 다른 end system으로 데이터가 전달될 때, 이 데이터는 `segment(세그먼트)` 로 나뉘어지고 여기에 `header(헤더)` 를 붙여 데이터를 식별가능하게 한다. 이렇게 한 데이터가 세그먼트로 나뉘어져서 만들어진 데이터를 우리는 `Packet(패킷)` 이라고 한다.

### Packet Switch

- End system 에서 만들어지는 패킷은 링크를 통해서 다른 End system으로 전달되는데, 이때 이 패킷을 받고 보내는 역할을 하는 것이 패킷 스위치이다.
- 인터넷에서는 주로 `router(라우터)`와 `Link-layer Switch(링크 계층 스위치)` 사용한다.
  - 라우터는 네트워크 코어에서 사용하고, 링크 계층 스위치는 보통 엑세스 네트워크에서 사용한다.
- 패킷이 한 end system에서 다른 end system 까지 도달하기 위해 거쳐온 모든 통신 링크와 패킷 스위치의 경로를 `route` 혹은 `path` 라고 한다.

### Internet Service Provider(ISP)

- End system은 통신링크와 패킷 스위치로 이루어진 네트워크인 ISP를 통해 인터넷에 접속하게 된다.
- 한 ISP와 다른 ISP들 역시도 모두 네트워크로 연결되어 있다.
- ISP는 장소나 사용자 특성에 따라 다양한 종류로 나뉘어 진다.

### Protocol

- 프로토콜은 인터넷에서 정보의 송수신을 제어하는 규칙이다.
- TCP와 IP가 가장 중요한 프로토콜이며 일반적으로 인터넷의 주요 프로토콜을 통칭하여 `TCP/IP`라고 한다.
- 프로토콜은 서로 다른 사용자들이 정보를 주고받을 수 있는 표준을 만들기 떄문에 중요하다. 이 `Internet Standard(인터넷 표준)`은 `IETF(Internet Engineering Task Force)` 에서 개발하고 여기서 만들어지는 표준 문서를 `RFC(Requst for Comments)`라고 부른다.

## Access Network (접속 네트워크)

접속 네트워크는 한 end system에서 다른 end system으로 연결할 때 그 경로상에 첫번째에 있는 라우터에 연결하는 네트워크를 의미한다. 접속 네트워크는 이 네트워크가 사용되는 환경에 따라 다르게 구성된다.

### Residential Access Network (가정 접속)

- 가정애서 사용되는 Access Network 는 크게 `DSL(Digital Subscriber Line)` 과 `케이블` 유형으로 나뉘어진다.

#### Digital Subscriber Line(DSL)

- DSL은 전화회사(TELCO)로 부터 인터넷 접속에 대한 서비스를 제공받는다. 즉, 전화회사가 ISP의 역할을 하게되는 것이다.
- 전화와 인터넷을 모두 서비스해야하기 때문에 전화회사의 `중앙국(CO)`에서는 `DSLAM(Digital Subscriber Multiplexer)`를 사용해서 전화신호와 데이터를 구분한다.
- 가정에서는 `DSL 모뎀과 spliter`를 사용하는데, 스플리터는 가정으로 들어오는 신호를 데이터신호와 전화신호로 구분하고, DSL 모뎀은 전달된 데이터에 해당하는 아날로그 신호를 데이터로 변경하는 역할을하게 된다.
- 같은 아날로그 신호로 데이터와 전화신호가 전달되기 때문에 DSL은 목적에 따라 다른 주파수 대역을 사용해서 데이터와 전화신호를 전달한다.
- DSL은 표준 상 가장으로 들어오는 `다운스트림` 채널이 전화국으로 보내지는 `업스트림 채널`보다 더 빠르다. 따라서 DSL은 `비대칭(Assymetric)` 접속이라고도 한다.

#### Cable

- 케이블 인터넷 접속은 기존에 존재하는 TV 서비스를 제공하는 회사로부터 인터넷 서비스를 제공받는다.
- 일반적으로는 `coaxial cable` 이 많이 사용되었지만 `fiber` 를 서비스를 제공하는 회사와 가까운 `head-end`에 설치하고 각 가구에는 `coaxial cable`로 연결하는 `HFC(Hybrid Fiber Coax)` 방식도 흔하게 사용된다.
- 케이블 접속을 사용하기 위해서 가정에서는 `이더넷 포트`가 사용된다.
- 케이블의 헤드엔드 쪽에서는 DSL의 DSLM과 비슷한 기능을 하는 `CMTS(Cable Modem Termination System)`이 존재해서케이블 모뎀으로부터 들어오는 아날로그 신호를 디지털 신호로 변환하는 작업을 한다.
- 케이블 접속의 가장 큰 특징은 헤드엔드에서 보내는 모든 패킷이 모든 가정으로 전달된다는 것이다. 따라서 다운스트림이나 업스트림에서 여러 사용자가 동시에 송수신을 시도하면 전송률이 그만큼 분산되게된다.
- 최근에는 coaxial 케이블보다 빠르고 안정적인 `fiber`로 전체 서비스를 제공하는 FTTH(Fiber To The Home) 기술이 주목받는다.
  - FTTH는 CO부터 가정까지 fiber가 연결되어 있기 때문에 CO에서 제공되는 fiber 가 중간에 여러 가정집으로 나뉘어 연결되게 된다. 이렇게 나누는 과정을 두 가지 대표적인 구조가 `AON(Active Optical Network`)와 `PON(Passive Optical Network)` 이다.

### Enterprise Access Network

- 기업, 대학 등의 환경에서는 `Local Area Network(LAN)`기 사용된다.
- 그리고 주로 `이더넷` 기술을 이용하여 네트워크를 구축하게 된다.

## Physical Media

앞서 네트워크에 접속하기 위한 구조를 구축하기 위해서는 DSL이나 Cable 유형 모두 케이블을 필요로 한다. 각 `end system` 간에 데이터가 전달되기 위해서는 여러 라우터를 거쳐 데이터가 전달되게 되는데, 이 두 라우터 사이에는 어떤 연결매체가 필요하다. 이런 매체를 물리매체하고 한다. 그리고 물리매체는 `Guided Media(유도 매체)` 와 `Unguided Media(비유도 매체)`로 나뉘어진다.

### Guided Media(유도 매체)

유도매체는 견고한 매체를 통해서 신호를 전달한다는 특징이 있다. 그럼 이제 다양한 유도 매체들을 알아보자.

### Twisted Pair(꼬임쌍선)

- TP는 가장 싸고 많이 사용되는 전송매체이다.
- `UTP(Unshielded Twisted Pair)` 와 `STP(Shielded Twisted Pair)`가 있으며 TP 케이블을 금속제로 감싸는 보호막의 여부에 따라 나뉘어진다.
- UTP는 LAN을 구성하는데 가장 흔하게 사용된다.

### Coaxial Cable(동축케이블)

- 두 개의 구리선을 동심원 형태로 만들어 사용한다.
  - `baseband` 는 케이블에 한 개의 채널만을 담고 이더넷을 위해 사용된다.
  - `broadband` 는 케이블에 다수의 채널을 담고 HFC를 위해 사용된다.
- TP 보디 더 높은 데이터 전송률을 얻을 수 있다.

#### Fiber(광섬유)

- 대역폭이 굉장히 크고 전파 간섭을 많이 받지 않기 때문에 error ratae도 낮다.
- 가격이 너무 비싸서 단거리 구간에서는 잘 사용되지 않는다.

#### Radio (라디오 채널)

- `ITU-R(WARC)` 의 규제를 받는다. 충돌을 막기위해 각 기관/기업들은 라디오 주파수의 영역을 라이센스로 나누어서 사용한다.
- 특별히 따로 라이센스가 필요없는 영역이 있는데 이런 영역을 `ISM(Industrial Scientific Medical) Band` 라고 한다. 물론 이 영역에 대한 규제는 각 나라마다 다르게 적용된다.
- WIFI 나 우리가 휴대폰에서 사용하는 3G, 4G 같은 것들도 다 이 주파수를 나누어 사용해서 작동하게 되는데, 주파수가 높아지면 bandwidth 가 넓어지는 특성이 있다. 따라서 높은 주파수 대역에서는 데이터를 한번에 많이 보낼 수 있기 때문에 속도가 빠른 것이다. 반면에 주파수가 높아지면 그만큼 Coverage 영역이 좁아지는 특성 또한 있기 때문에 이 부분도 고려해야한다.
