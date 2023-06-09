# MyPromise

Promise의 내부 동작 원리를 따라해본 프로젝트

## 만든 목적

Promise가 어떻게 동작하는지 자세하게 알고 싶었습니다.

또한, 그동안 배운 자바스크립트 내용도 적용해보고 싶었습니다.

## 사용

배포 url:

관련 포스팅 :

gif 넣어주고

## keypoint

- MyPromise 동작 원리
- object를 인자로 받았을 때 어떻게 출력되는가
- (참고) async/await

## keypoint 설명

해당 부분의 코드는 관련 포스팅을 참조해주세요.

### 1. MyPromise 동작 원리

여기서는 식별자들의 역할만 간단히 설명하겠습니다.

- status: pending인지 settled인지 알려줌.
- fulfilledData: resolve 데이터 저장
- rejectedData: reject 데이터 저장
- onFulfilled: 비동기인 경우, then의 콜백 함수들 저장
- onRejected: 비동기인 경우, catch의 콜백 함수들 저장
- numberOfThenBeforeCatch: status가 rejected일 때, catch 앞에 있는 then의 개수

### 2. object를 인자로 받았을 때 어떻게 출력되는가

여기서는 식별자들의 역할만 간단히 설명하겠습니다.

- arrayFormat: 인자가 array일 때, 출력을 담당하는 함수
- objectFormat: 인자가 object일 때, 출력을 담당하는 함수

### 3. (참고) async/await

프로젝트에서는 사용하지 않았지만 Promise와 밀접한 연관이 있는 async/await도 포스팅에 정리했습니다.

## 힘들었던 부분

비동기 처리가 까다로웠습니다.

setTimeout으로 실행을 막더라도 후속 처리 메서드의 실행까지 막긴 어려워서 이 부분에 대한 처리가 힘들었습니다.
