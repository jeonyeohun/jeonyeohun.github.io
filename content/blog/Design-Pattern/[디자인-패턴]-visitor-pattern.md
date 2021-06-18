---
title: '[디자인 패턴] Visitor Pattern'
date: 2021-06-07 14:05:14
category: Design-Pattern
thumbnail: { thumbnailSrc }
draft: false
---

![](https://upload.wikimedia.org/wikipedia/commons/0/00/W3sDesign_Visitor_Design_Pattern_UML.jpg)

> from wikipedia (https://ko.wikipedia.org/wiki/%EB%B9%84%EC%A7%80%ED%84%B0_%ED%8C%A8%ED%84%B4)

## Visitor Pattern

방문자 패턴은 `개방 폐쇄 원칙(Open/Close Principal)`을 지키는 디자인 패턴이다. 방준자 패턴은 객체의 알고리즘을 객체에서 분리시켜 기존 객체의 구조를 수정하지 않고 새로운 알고리즘을 추가할 수 있도록 한다.

방문자 패턴은 객체가 자기자신을 방문자 객체에게 전달하고 방문자 객체가 전달 받은 인스턴스를 메서드의 인자로 사용하여 오버로딩된 메서드를 실행한다.

## Example

```java
class Car implements CarElement{
    CarElement[] elements;
    public CarElement[] getElements() {
        return elements.clone();
    }

    public Car() {
        this.elements = new CarElement[]{ new Body(), new Engine() };
    }

    public void accept(CarElementVisitor visitor) {
        for(CarElement element : this.getElements()) {
            element.accept(visitor);
        }
        visitor.visit(this);
    }
}
```

Car 객체는 생성된 인스턴스들을 배열에 저장하고, accept 메서드를 통해 저장된 인스턴스의 accept 메서드를 각각 실행한다. 이때 인자로 accept 메서드의 파라메터로 들어온 visitor 인스턴스를 전달한다. 그리고 마지막으로는 자기 자신(Car 인스턴스) 역시도 visitor의 visit 함수를 실행한다.

```java
interface CarElement {
    void accept(CarElementVisitor visitor);
}

class Body implements CarElement {
    public void accept(CarElement Visitor visitor){
        visitor.visit(this);
    }
}

class Engine implements CarElement {
    public void accept(CarElementVisitor visitor){
        visitor.visit(this);
    }
}
```

먼저, CarElement 인터페이스의 구현체인 Body 와 Engine 을 만들었다. 이 객체들은 accept 메서드를 정의하는데, 각 메서드는 인자로 받은 visitor 인스턴스의 visit 메서드를 실행하는 역할만을 담당한다.

```java
interface CarElementVisitor {
    void visit(Body body);
    void visit(Engine engine);
    void visit(Car car);
}

class CarElementDoVisitor implements CarElementVisitor{
    public void visit(Body body){
        System.out.println("I am body");
    }
    public void visit(Engine engine){
        System.out.println("I am engine");
    }
    public void visit(Car car){
        System.out.println("This is car");
    }
}

public class VisitorPatternExample {
    static public void main (String[] args){
        Car car = new Car();
        car.accept(new CarElementDoVisitor());
    }
}
```

실행된 visit 메서드는 각 클래스에서 오버로딩 되어있다. visit 메서드 호출 시 전달되는 인스턴스가 다르기 때문에 이 인스턴스에 타입에 따라 별도의 로직을 구성할 수 있다.
이렇게 하면 실제 객체의 인스턴스는 알고리즘을 수행하지 않고, 알고리즘은 visitor에 전부 맡겨지기 때문에 객체와 구조가 분리된다.

메인 메서드에서는 단순히 Car 인스턴스를 하나 생성한 뒤에 새롭게 생성한 visitor 인스턴스를 accept 메서드에 넘겨주는 것으로 로직을 시작한다.
