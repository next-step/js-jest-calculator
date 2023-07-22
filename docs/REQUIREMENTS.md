## REQUIREMENTS Commit Convention

- 기능명세서 작성(N단계)
- 기능명세서 수정(완료 목록 체크)

## 1단계

완성된 상태를 떠올린다. 가장 핵심 기능을 구현한다.

- [x] 계산기 생성자를 구현한다.
- [x] 입력받은 숫자를 출력하는 메서드를 구현한다.

## 2단계

적당한 난이도로 문제를 쪼갠다.

- [x] 기능 요구사항의 1 ~ 4번을 구현한다.
  - [x] 2개의 숫자에 대해 덧셈이 가능하다.
  - [x] 2개의 숫자에 대해 뺄셈이 가능하다.
  - [x] 2개의 숫자에 대해 곱셈이 가능하다.
  - [x] 2개의 숫자에 대해 나눗셈이 가능하다.
- [x] 1단계의 메서드를 이용해, 각각의 연산 결과를 출력한다.

## 3단계

핵심과 가까우며, 낮은 cost로 최대의 return을 받는 기능을 구현한다. (핵심과 가깝거나, 재사용성이 높거나 등)

- [x] 기능 요구사항의 6번을 구현한다.

  - [x] 계산 결과를 표현할 때 소수점 이하는 버림한다.

  ```
  문득, 위의 요구사항을 보고 무언가가 느껴진다. 위 요구사항은 "출력"에 대한 요구사항이다. 엄밀히 말해, "출력"에 더 많은 기능이 추가되는 요구사항이다. 출력에 대한 기능이 점점 많이 추가될 경우, 이걸 계산기 생성자 내에서 관리하면 너무 가독성도 떨어지고 유지보수성이 떨어지지 않을까? 계산기 내에서도 "연산"과 "입출력"은 엄연히 다른 도메인. 흠.. 확장성을 고려해서 일단 나누자!

  근데 이건 몇 단계에서 나눠야하지? 3단계가 적절해보이긴 한다. 현재 해결해야 할 하나의 문제를 2단계에서 "연산"과 "출력" 두 가지 문제점(핵심)으로 쪼갰기 때문이다. 즉, 핵심 중 하나(출력)에 가까우며, 현재 요구사항은 끝이 나겠지만 추후 기능이 추가된다고 가정할 때, 아주 큰 return을 얻을 수 있다.

  물론, 지금 요구사항엔 과투자로 보일 수 있지만, 코드는 살아 숨쉬는 유기체처럼 여러 개발자들을 거쳐 계속 성장한다. 객체를 분리하면 내가 얻을 수 있는 것은 "확장성", "유지보수성" 그리고 "가독성".

  우선, 위 기능을 구현한 뒤, "출력"에 대한 부분을 하위 객체로 나눠보자.

  질문 정리해서 크루들 이야기도 들어보기! & 리뷰 남겨보기!
  ```

  - [x] 출력을 담당하는 객체를 생성하여, 계산기에서 분리한다.

- [x] 기능 요구사항의 5번을 구현한다.
  - [x] 숫자는 한번에 최대 3자리 수까지만 다룰 수 있다.
- [x] 에러 출력 로직을 outputView로 이동한다.

## 4단계

결과의 모습을 구체화하여 예외처리한다.

- [x] 빈 문자열인지 확인한다.
- [x] 입력값이 2개인지 확인한다.
- [x] 데이터 타입이 숫자인지 확인한다.
- [x] 소수인지 확인한다.

## 5단계

위의 것들을 합쳐 간단한 완성품을 만든다. 그리고 동작하는지 빠른 피드백을 진행한다. 해당 단계에서 피드백을 위한 테스트코드 작성을 진행해도 좋다.

- [ ] 각 단계별로 시행했던 기능들의 테스트코드를 작성한다.

## 6단계

리팩터링을 하며, 중복을 줄이고 의도를 명확히 한다.
코드는 혼자 작성하는 것이 아니다.

## 7단계

다시 1이나 2번으로 돌아가 소프트웨어를 다듬으며 코드를 깎는다.

## 기능 요구사항

- [x] 2개의 숫자에 대해 덧셈이 가능하다.
- [x] 2개의 숫자에 대해 뺄셈이 가능하다.
- [x] 2개의 숫자에 대해 곱셈이 가능하다.
- [x] 2개의 숫자에 대해 나눗셈이 가능하다.
- [x] 숫자는 한번에 최대 3자리 수까지만 다룰 수 있다.
- [x] 계산 결과를 표현할 때 소수점 이하는 버림한다.

## 테스트 요구사항

- [x] 기능 요구사항에 제시된 항목에 대해 테스트 케이스를 만든다.

---

- #checkValueValidation에서 에러가 발생할 경우, Error를 던지고 상위 바운더리에서 이를 catch하여 처리할 수 있도록 두는 것이 나을지, #checkValueValidation 내부에서 에러를 처리할지 고민하다가, 후자를 택했습니다. 에러의 유무에따라 해당 스코프에서 값의 유효성에 대한 boolean 값을 return하는 방식으로 변경했습니다.

## 이전

```js
  #checkValueValidation(firstInputNumber, secondInputNumber) {
    this.#validator = new Validator(
      firstInputNumber,
      secondInputNumber,
      arguments
    );
    this.#validator.checkValueValidation();
  }

  sum(firstInputNumber, secondInputNumber) {
    this.#checkValueValidation(firstInputNumber, secondInputNumber);
    this.#result = firstInputNumber + secondInputNumber;

    this.#printResult();
  }
```

## 이후

```js
  #checkValueValidation(firstInputNumber, secondInputNumber) {
    try {
      this.#validator = new Validator(
        firstInputNumber,
        secondInputNumber,
        arguments
      );
      this.#validator.checkValueValidation();

      return true;
    } catch (error) {
      this.#outputView.printError(error.message);

      return false;
    }
  }

  sum(firstInputNumber, secondInputNumber) {
    const isValidValue = this.#checkValueValidation(
      firstInputNumber,
      secondInputNumber
    );

    if (isValidValue) {
      this.#result = firstInputNumber + secondInputNumber;

      this.#printResult();
    }
  }
```

그에 따라 테스트코드도 다음과 같이 변경되었습니다.

```js
test("입력값이 소수이면 오류가 발생해야 한다", () => {
  expect(() => {
    calculator.sum(1.2, 2);
  }).toThrow();
});
```

```js
test("입력값이 소수이면 오류가 발생해야 한다", () => {
  calculator.sum(1.2, 2);
  expect(logSpy).toHaveBeenCalledWith(ERROR.INPUT.DECIMAL);
});
```

여기서 궁금한 점이 하나 생겼습니다!

- 이런 에러의 처리의 책임은 어떤 객체에게 있는지 궁금합니다. checkValueValidation에서 발생한 에러는 checkValueValidation 상위 스코프로 번져가지 않게 해당 스코프 안에서 처리해야하는지, 또는 ReactErrorBoundary와 같이, 상위 스코프에서 묶어서 처리하는 방식이 괜찮은지 궁금증이 발생했습니다!

우선, 득실을 따져가며 상황에 따라 다르게 처리하는 것이 맞아보이지만, 현재 상황에선 코드가 조금 지저분해지고 테스트코드를 조금 바꿔야하더라도 해당 에러의 책임을 처리하는 것은 해당 스코프에 있다고 판단하여 후자의 방식을 채택하게 되었습니다!:)
