---
title: '[데이터베이스] 트랜잭션과 격리수준(Transaction and Isolation Level)'
date: 2020-04-24 19:05:91
category: Database
thumbnail: { thumbnailSrc }
draft: false
---

## Transaction

데이터베이스는 일반적으로 한사람이 사용하지 않는다. 수많은 쿼리들이 데이터를 요청하기 위해 데이터베이스에 전달된다. 이때 모든 쿼리들을 병행처리하게 된다면, 효율성은 매우 좋을 수 있지만 데이터를 처리하는데 문제가 발생할 여지가 있다. 만약 어떤 쿼리가 테이블을 업데이트하게 된다면, 처음 의도했던 것과는 다른 결과를 사용자가 받게 될 수도 있다. 혹은 데이터가 삭제된다면 삭제된 데이터를 참조하려고 할 수도 있다.

이런 문제를 해결하기 위해서 작업처리를 위한 연산들을 묶어서 하나의 단위로 나타낸다. 이 단위를 우리는 트랜잭션이라고 부른다. 트랜잭션에 포함된 연산은 모두 한번에 완료되어야 한다. 우리가 작성하는 쿼리에 명시적으로 트랜잭션이 기재되어 있지 않다면 전체 쿼리가 하나의 트랜잭션으로 설정된다.

트랜잭션을 통해 데이터의 동시에 여러 사용자가 접근하는 상황에 대해서 데이터 무결성을 유지할 수 있게 된다.

## 트랜잭션의 성질 (ACID)

1. Atomicity(원자성) : 트랜잭션에 관련된 작업은 모두 실행되거나 혹은 실행되지 않도록 보장된다.
2. Consistency(일관성) : 트랜잭션의 작업이 성공적으로 완료되었다면, 데이터베이스는 일관성을 유지해야한다.
3. Isolation(독립성) : 하나의 트랜잭션이 수행되고 있을 때는 다른 트랜잭션이 접근할 수 없다.
4. Durability(지속성) : 트랜잭션이 완수되면 그 결과가 데이터베이스에 영구적으로 반영되어야 한다.

## Commit and Rollback

### Commit : 변경사항의 저장

Commit은 트랜잭션의 작업이 정상적으로 종료되어서 데이터베이스에 저장되었고 데이터베이스는 다시 일관성을 유지하는 것을 말한다.

```sql
START TRANSACTION;
SELECT * FROM student WHERE age=21;
COMMIT;
```

위처럼 우리가 일반적으로 작성했던 쿼리는 트랜잭션과 커밋으로 쌓여져있는 것이 기본값이다.

### Rollback : 트랜잭션 취소

Rollback 은 진행중이던 트랜잭션 작업의 결과를 저장하고 데이터베이스에 반영하지 않고 취소하는 것을 말한다.

```sql
SELECT * FROM history;
START TRANSACTION;
DELETE * FROM history;
SELECT * FROM history;
ROLLBACK;
SELECT * FROM history;
```

위와 같은 쿼리를 구성하면 트랜잭션이 명시적으로 시작된 이후에 연산되는 DELETE와 SELECT가 ROLLBACK으로 인해 데이터베이스에 반영되지 않는다. 일반 쿼리문의 집합이었다면 DELETE가 되었기 떄문에 이후 연산을 진행할 수 없였겠지만, 롤백으로 인해 원래 테이블로 돌아갔기 때문에 마지막 쿼리를 적용할 수가 있다.

## Read-Only Transactions

어떤 트랜잭션이 write 하는 것은 허용하지 않고 read만 허용하는 것을 read-only transaction으로 지정할 수 있다. 읽기만 하는 경우에는 데이터를 바꿔버리는 위험성이 없기 때문에 일반 Read & Write 트랜잭션보다 병렬성을 늘리는데 도움이 된다.

```sql
SET TRANSACTION READ ONLY;
START TRANSACTION;
...
COMMIT; or ROLLBACK;
```

## Isolation Level

데이터베이스에게 많은 트랜잭션이 들어왔을 경우에는 어떻게 이 작업들을 관리해주어야 할까? 만약 여러 트랜잭션이 통시다발적으로 수행된다면 데이터의 무결성이 깨질 가능성이 있다. 그렇다고 트랜잭션을 한번의 하나씩만 돌아가면서 수행한다면 쌓여있는 트랜잭션을 모두 처리하기에 응답속도가 크게 떨어질 것이다.

따라서 트랜잭션들 사이에 연산의 충돌을 방지하기 위해서 트랜잭션들을 격리하는 전략을 사용하게 된다. 그리고 트랜잭션들을 격리하기 위한 격리 단계 수준을 설정할 수 있다.

```sql
SET TRANSACTION ISOLATION LEVEL <LEVEL>;
START TRANSACTION;
...
COMMIT; or ROLLBACK;
```

sql 에서는 위처럼 작성한다.

### Issues in Isolation Level

트랜잭션의 Isolation level 에 따라 몇가지 이슈들이 발생할 수 있다.

1. **Phantom Read** : 어떤 트랜잭션 T1이 SELECT를 통해 결과를 얻고 바로 이후에 T2 트랜잭션이 INSERT 쿼리를 통해 데이터베이스를 업데이트하고 커밋했다면, T1이 다시한번 데이터베이스를 검색했을 때 T2에 의해서 업데이트된 데이터가 누락되는 상황이 발생한다.

2. **Nonrepeatable Read** : 어떤 트랜잭션 T1이 SELECT를 통해 반복적으로 데이터를 조회하고 있을 때, 새로운 트랜잭션 T2가 데이터를 UPDATE하고 커밋을 한다면, T1은 실제 데이터베이스에 있는 값과 다른 값을 가지게 된다.

3. **Dirty Read** : 어떤 트랜잭션 T1이 데이터를 변경하고 아직 커밋하지 않았을 때, 다른 트랜잭션이 해당 데이터를 조회하게되면 아직 커밋되지 않은 데이터를 가져가게 되는데, 이 데이터는 최종적으로 커밋된다는 보장이 없다.

## Set Isolation Level

### LEVEL 3 : SERIALIZABLE

Serializable 레벨은 가장 엄격하게 트랜잭션들을 서로 격리시키는 방침이다. 병렬적으로 처리되는 트랜잭션을 허용하지 않기 때문에 데이터 무결성은 완벽하게 보장된다. 하지만 한번에 하나의 트랜잭션만 처리하는 방침이기 때문에 성능이 좋지 않다는 단점이 있다. 이 방침에서는 Phantom Read, Nonrepeatable Read, Dirty Read 가 모두 발생하지 않는다.

### LEVEL 2 : REPEATABLE READ

한 트랜잭션 안에서 한번 조회한 내용은 여러번 조회해도 계속 같은 값을유지하는 것을 보장한다. 이 방침은 대상 트랜잭션이 시작되기 전에 이미 커밋이 완료된 데이터만을 조회하기 때문에 다른 트랜잭션의 UPDATE 연산의 영향을 받지 않는다. 따라서 Dirty Read, Nonrepeatable Read 이슈가 발생하지 않는다. 하지만 INSERT 연산을 통해 다른 트랜잭션이 테이블에 데이터를 추가하게되면 테이블을 구성하는 데이터의 집합이 달라지기 때문에 Phantom Read 이슈는 존재한다.

### LEVEL 1 : READ COMMITTED

일반적으로 데이터베이스들이 가지고 있는 방침이다. 이 방침은 커밋이 완료된 데이터만 읽도록 한다. 따라서 Dirty Read 문제는 발생하지 않지만 Nonrepeatable Read 나 Phantom Read는 발생할 여지가 있다.

### LEVEL 0 : READ UNCOMMITED

모든 트랜잭션이 제한없이 데이터를 접근하는 방침이다. 커밋하지 않은 데이터도 다른 트랜잭션이 읽을 수 있다. 병렬적으로 트랜잭션이 수행되는데는 가장 성능이 좋지만 위에 설명한 세 문제들이 모두 발생할 여지가 있다.
