/*
    Promise.resolve
    Promise.reject
    Promise.all
    try...catch는 동작 안함.
*/

const MyPromiseString = `function MyPromise(executor) {
  const PENDING = "PENDING";
  const FULFILLED = "FULFILLED";
  const REJECTED = "REJECTED";

  let status = PENDING;
  
  let fulfilledData = null;
  let rejectedData = null;

  let onFulfilled = [];
  let onRejected = [];
  let numberOfThenBeforeCatch = null;

  function resolve(value) {
    if (status !== PENDING) return;

    status = FULFILLED;
    fulfilledData = value;
    
    // 비동기
    if (onFulfilled.length > 0) {
      const fulfilledCallback = onFulfilled[0];
      const returnedValue = fulfilledCallback(fulfilledData);
      const newMyPromise = new MyPromise((resolve) => resolve(returnedValue));

      for(let i = 1; i < onFulfilled.length; i++) {
        newMyPromise.then(onFulfilled[i]);
      }
    }
  }

  function reject(reason) {
    if (status !== PENDING) return;

    status = REJECTED;
    rejectedData = reason;

    // 비동기
    if (onRejected.length > 0) {
      const rejectedCallback = onRejected[0];
      const returnedValue = rejectedCallback(rejectedData);
      const newMyPromise = new MyPromise((resolve) => resolve(returnedValue));

      for(let i = numberOfThenBeforeCatch; i < onFulfilled.length; i++) {
        newMyPromise.then(onFulfilled[i]);
      }
    }
  }

  this.then = function (fulfilledCallback) {
    // rejected면 무시
    if (status === REJECTED) return this;

    switch (status) {
      case PENDING:
        onFulfilled.push(fulfilledCallback);
        return this;
      case FULFILLED: {
        const returnedValue = fulfilledCallback(fulfilledData);
        return new MyPromise((resolve) => resolve(returnedValue));
      }
    }
  };

  this.catch = function (rejectedCallback) {
    // fulfilled면 무시
    if(status === FULFILLED) return this;

    switch (status) {
      case PENDING:
        if(!numberOfThenBeforeCatch){
          numberOfThenBeforeCatch = onFulfilled.length;
        }
        onRejected.push(rejectedCallback);
        return this;
      case REJECTED: {
        const returnedValue = rejectedCallback(rejectedData);
        return new MyPromise((resolve) => resolve(returnedValue));
      }
    }
  };

  executor(resolve, reject);
}`;

export default MyPromiseString;
