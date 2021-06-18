---
title: '[디자인 패턴] Facade Pattern'
date: 2021-05-25 00:05:14
category: Design-Pattern
thumbnail: { thumbnailSrc }
draft: false
---

## Facade Pattern

![](https://upload.wikimedia.org/wikipedia/en/5/57/Example_of_Facade_design_pattern_in_UML.png)

Facade 패턴은 하나의 인터페이스를 통해 여러 서브시스템의 기능을 통합해서 사용할 수 있도록 하는 디자인 패턴이다.

만약 사용자가 호출해야하는 클래스의 메서드가 여러개가 있다면, Facade 역할을 하는 인터페이스를 하나 만들고 사용자에게는 하나의 함수만 호출하게 한 뒤, 자신이 다른 서브 클래스들의 함수를 호출하여 로직을 수행한다.

## Why Facade Pattern?

Facade 패턴을 사용하면 두 가지 이점을 얻을 수 있다.

1. 클라이언트는 복잡한 기능을 간단하게 호출하여 수행할 수 있다.
2. 인터페이스 하나로 서브 클래스들을 사용하기 때문에 각 서브 클래스들 간의 의존성이 낮아진다.

## Example

```cpp
struct CPU {
  void Freeze();
  void Jump(long position);
  void Execute();
};

struct HardDrive {
  char* Read(long lba, int size);
};

struct Memory {
  void Load(long position, char* data);
};

class ComputerFacade {
 public:
  void Start() {
    cpu_.Freeze();
    memory_.Load(kBootAddress, hard_drive_.Read(kBootSector, kSectorSize));
    cpu_.Jump(kBootAddress);
    cpu_.Execute();
  }

 private:
  CPU cpu_;
  Memory memory_;
  HardDrive hard_drive_;
};

int main() {
  ComputerFacade computer;
  computer.Start();
}
```

> https://en.wikipedia.org/wiki/Facade_pattern

위 예시에서는 cpu 를 멈추고, 메모리에 접근한 뒤에, cpu의 주소를 jump 시키고 다시 cpu를 시작하는 작업을 수행해야한다. 글로 보아도 헷갈린다.

그래서 이 모든 작업을 Facade 클래스인 Computer Facade에 만들어두고, 사용자는 Wrapper 함수인 `Start()` 만 호출하면 된다.

이를 통해 사용자에게는 높은 사용성을 제공하고, 시스템이 복잡해지지 않게도는 효과를 얻을 수 있다.
