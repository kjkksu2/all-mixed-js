convertToString

babel은 class의 메서드를 transpile한 결과를 보여주지 않는다.
\_classCallCheck 함수를 호출하는 것이 메서드를 보여주는 것 대신이다.
우린 class를 string으로 바꿀 것이기 때문에 이 함수가 필요 없다.

babel이 만든 함수 \_createForOfIteratorHelper다.
\_createForOfIteratorHelper 함수는 Babel이 for...of 루프를 변환할 때 사용되는 내부 헬퍼 함수입니다.

babel이 만든 함수 \_toConsumableArray다.
이 함수는 유사 배열 객체를 배열로 변환하거나, 이터러블 객체를 배열로 변환할 때 사용됩니다.
spread 연산자 사용할 때 사용됨
