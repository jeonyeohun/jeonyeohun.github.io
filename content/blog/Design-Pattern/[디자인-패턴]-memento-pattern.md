---
title: '[디자인 패턴] Memento Pattern'
date: 2021-05-25 00:05:14
category: Design-Pattern
thumbnail: { thumbnailSrc }
draft: false
---

## Memento Pattern

![](https://upload.wikimedia.org/wikipedia/commons/3/38/W3sDesign_Memento_Design_Pattern_UML.jpg)

> https://en.wikipedia.org/wiki/Memento_pattern

Memento 패턴은 인스턴스의 상태를 저장하고 복원할 수 있는 기능을 제공하는 디자인 패턴이다. 만약 어떤 인스턴스의 상태를 인스턴스 내부에 저장한다면 캡슐화가 파괴되고. 외부에서 해당 객체의 상태를 관리하기 위해 인스턴스에 직접 적용해야하는 문제가 발생한다. 따라서 Memento 클래스를 사용해 상태를 저장하고 상태를 다시 불러와야 할 때는 Memento 객체를 사용한다.

## Caretaker, Memento, Originator

- `Originator` 는 자신의 상태를 저장하고자 하는 인스턴스를 의미한다. Originator는 또한 어떤 상태를 다시 복구하고 싶을 때 Memento 객체에 접근하는 주체가 되기도 한다.
- `Memento` 는 상태를 보관하는 객체를 가지는 인스턴스를 의미한다.
- `Caretaker` 는 클라이언트를 의미한다. 클라이이언트는 originator를 통해 새로운 memento의 등록을 요청하거나 이전 상태를 복원받을 수 있다.

## Example

> From Wikipedia (https://en.wikipedia.org/wiki/Memento_pattern)

```java
import java.util.List;
import java.util.ArrayList;
class Originator {
    private String state;
    // The class could also contain additional data that is not part of the
    // state saved in the memento..

    public void set(String state) {
        this.state = state;
        System.out.println("Originator: Setting state to " + state);
    }

    public Memento saveToMemento() {
        System.out.println("Originator: Saving to Memento.");
        return new Memento(this.state);
    }

    public void restoreFromMemento(Memento memento) {
        this.state = memento.getSavedState();
        System.out.println("Originator: State after restoring from Memento: " + state);
    }

    public static class Memento {
        private final String state;

        public Memento(String stateToSave) {
            state = stateToSave;
        }

        // accessible by outer class only
        private String getSavedState() {
            return state;
        }
    }
}

class Caretaker {
    public static void main(String[] args) {
        List<Originator.Memento> savedStates = new ArrayList<Originator.Memento>();

        Originator originator = new Originator();
        originator.set("State1");
        originator.set("State2");
        savedStates.add(originator.saveToMemento());
        originator.set("State3");
        // We can request multiple mementos, and choose which one to roll back to.
        savedStates.add(originator.saveToMemento());
        originator.set("State4");

        originator.restoreFromMemento(savedStates.get(1));
    }
}
```

클라이언트(caretaker) 는 originator 인스턴스를 생성하고 이 인스턴스를 통해 상태의 저장과 복원을 관리한다.
`savedStates` 는 Memento 인스턴스를 리스트의 형태로 저장하게 되는데, `saveToMemento` 메서드를 통해 Memento 인스턴스를 리스트에 저장하고 이후에 원하는 인덱스에 있는 Memento 인스턴스에 접근하여 복원할 수 있게 된다.
