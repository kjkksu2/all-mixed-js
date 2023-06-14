# Drag

canvas를 이용해서 drag를 만들어본 프로젝트

## 만든 목적

canvas 위에서 drag 이벤트를 만들어보고 싶었습니다.

## 사용

배포 url:

관련 포스팅 :

gif 넣어주고

## keypoint

- clear, update, draw
- move the ball

## keypoint 설명

해당 부분의 코드는 관련 포스팅을 참조해주세요.

### 1. clear, update, draw

canvas 위에서 어떤 대상이 바뀐다는 것은 `clear, update, draw`가 엄청 빠르게 실행된다는 뜻이다.

### 2. move the ball

ball의 중심과 mouse click point의 차이를 계산한다.

그리고 마우스로 ball을 누른 상태에서 움직일 때 그대로 움직이도록 만들었다.

## 힘들었던 부분

마우스가 클릭한 (x, y)를 기준으로 움직이도록 만드는 것이 힘들었습니다.
