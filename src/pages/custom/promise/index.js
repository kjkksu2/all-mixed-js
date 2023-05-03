/*
    Promise.resolve
    Promise.reject
    Promise.all
    비동기 때, then chainable 구현
*/

function MyPromise(executor) {
  const PENDING = "PENDING";
  const FULFILLED = "FULFILLED";
  const REJECTED = "REJECTED";

  let status = PENDING;
  let data = null;
  let onFulfilled = null;
  let onRejected = null;

  function resolve(value) {
    if (status !== PENDING) return;

    status = FULFILLED;
    data = value;

    onFulfilled && onFulfilled(data);
  }

  function reject(reason) {
    if (status !== PENDING) return;

    status = REJECTED;
    data = reason;

    onRejected && onRejected(data);
  }

  this.then = function (fulfilledCallback) {
    // catch에서 에러 처리
    if (status === REJECTED) return this;

    switch (status) {
      case PENDING:
        onFulfilled = fulfilledCallback;
        break;
      case FULFILLED: {
        const returnedValue = fulfilledCallback(data);
        return new MyPromise((resolve) => resolve(returnedValue));
      }
    }
  };

  this.catch = function (rejectedCallback) {
    switch (status) {
      case PENDING:
        onRejected = rejectedCallback;
        break;
      case REJECTED: {
        const returnedValue = rejectedCallback(data);
        return new MyPromise((resolve) => resolve(returnedValue));
      }
    }
  };

  executor(resolve, reject);
}

const p1 = new newPromise((resolve, reject) => {
  setTimeout(() => resolve("markus"), 3000);
})
  .then((response) => {
    console.log(`Hi, ${response}`);
    return "hi";
  })
  .then((a) => {
    console.log(a);
  });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("markus"), 3000);
// })
//   .then((response) => {
//     console.log(`Hi, ${response}`);
//     return "hi";
//   })
//   .then((a) => {
//     console.log(a);
//   });
