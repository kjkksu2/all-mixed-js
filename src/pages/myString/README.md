# MyString

String의 몇몇 메서드들을 똑같이 만들어본 프로젝트

## 만든 목적

String의 메서드들이 어떻게 동작하는지 궁금해서 직접 만들었습니다.

또한, 그동안 배운 자바스크립트 내용도 적용해보고 싶었습니다.

## 사용

배포 url:

관련 포스팅 :

gif 넣어주고

## keypoint

- 객체 지향 프로그래밍
- class/constructor function
- prototype chain
- event/error propagation
- `console.log` overriding
- XSS sanitize
- multiple pointers algorithm

## keypoint 설명

해당 부분의 코드는 관련 포스팅을 참조해주세요.

### 1. class & constructor function

eval은 string을 자바스크립트로 실행시키는 함수입니다.

class가 ES6+이므로 ES5이하에서 동작하는 constructor function을 사용해 모든 브라우저에서 동작하도록 만들었습니다.

### 2. prototype chain

`MyString.prototype` 객체에 저장되어 있는 메서드들을 전부 가져와서 eval이 사용할 수 있는 코드로 바꾸려고 했습니다.

이를 위해 순회문으로 메서드들을 가져와서 string으로 복사한 후에 eval에 넣으려고 했지만 enumerable이 false라서 불가능했습니다.

그래서 이 부분을 true로 바꾼 후에 코드를 완성했습니다.

### 3. event & error propagation

dropdown의 item을 클릭하면 이벤트가 발생하도록 만들 수도 있지만 비효율적입니다.

그래서 이 item들의 상위 parent인 dropdown에게 이벤트를 위임했습니다.

또한, eval에서 에러가 발생하면 eval의 상위 실행 컨텍스트에서 에러를 처리하도록 구현했습니다.

### 4. `console.log` overriding

console은 window 전역 객체의 메서드입니다.

그러나 `console.log`를 overriding했기 때문에 기존의 `console.log`는 지워지고 새로 만든 `console.log`가 저장됩니다.

### 5. XSS sanitize

유저에게 직접 입력 받은 내용을 코드에 적용하면 cross-site scripting attack(XSS)에 취약해집니다.

이를 막기 위해 `dompurify` 라이브러리를 사용했습니다.

### 6. multiple pointers algorithm

indexOf를 multiple pointers algorithm으로 구현했습니다.

## 힘들었던 부분

babel로 transpiling 못하는 코드를 직접 es5이하 문법으로 구현해야 했던 점이 힘들었습니다.
