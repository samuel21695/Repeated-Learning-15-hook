/**
 * closure 패턴을 원활하게 사용하기 위해
 * typescript의 강력한 기능인 '인터페이스' 기능을 통해
 * 주요구성과 사용방법을 정의하였다.
 */

interface Counter {
  increment(): void;
  decrement(): void;
  getCount(): number;
}

/**
 * 타입설정에 따라 다르지만, 일반적인 형태
 * 함수 counter()는 위 인터페이스를 '따른다' 라고 명시된다.
 * 제작자는 Counter 인터페이스가 무엇인지 몰라도,
 * 작성하면서 에러를 통해 인터페이스를 따르지 않았다는 것을 알 수 있다.
 */
