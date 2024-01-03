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