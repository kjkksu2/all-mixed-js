/*
    Promise.resolve
    Promise.reject
    Promise.all
*/

const MyPromiseString = `function MyPromise(executor) {
  const PENDING = "PENDING";
  const FULFILLED = "FULFILLED";
  const REJECTED = "REJECTED";

  let status = PENDING;
  
  let fulfilledData = [];
  let rejectedData = [];

  let onFulfilled = [];
  let onRejected = [];

  function resolve(value) {
    if (status !== PENDING) return;

    status = FULFILLED;
    fulfilledData.push(value);

    if (onFulfilled.length > 0) {
      onFulfilled.forEach((v) => {
        const returnedValue = v(fulfilledData.shift());
        // fulfilledData.push(returnedValue);
        console.log(returnedValue);
        return new MyPromise((resolve) => resolve(returnedValue));
      });
    }
  }

  function reject(reason) {
    if (status !== PENDING) return;

    status = REJECTED;
    rejectedData.push(reason);

    if (onRejected.length > 0) {
      onRejected.forEach((v) => {
        const returnedValue = v(rejectedData.shift());
        console.log(returnedValue);
        fulfilledData.push(returnedValue);
        return new MyPromise((resolve) => resolve(returnedValue));
      });
    }
  }

  this.then = function (fulfilledCallback) {
    // rejected면 무시
    if (status === REJECTED) {
      fulfilledData.shift();
      return this;
    }

    switch (status) {
      case PENDING:
        onFulfilled.push(fulfilledCallback);
        return this;
      case FULFILLED: {
        const returnedValue = fulfilledCallback(fulfilledData.shift());
        return new MyPromise((resolve) => resolve(returnedValue));
      }
    }
  };

  this.catch = function (rejectedCallback) {
    // fulfilled면 무시
    if(status === FULFILLED) {
      rejectedData.shift();
      return this;
    }

    switch (status) {
      case PENDING:
        onRejected.push(rejectedCallback);
        return this;
      case REJECTED: {
        const returnedValue = rejectedCallback(rejectedData.shift());
        return new MyPromise((resolve) => resolve(returnedValue));
      }
    }
  };

  executor(resolve, reject);
}`;

export default MyPromiseString;
