class Promisor {
  constructor() {
    this.waiter = null;
    this.promise = new Promise((resolve, reject) => {
      this.resolver = resolve;
      this.rejector = reject;
      this.promiseStatus = "pending";
      this.rejectedError = null;
    });
  }

  clearWaiter() {
    if (this.waiter != null) {
      clearTimeout(this.waiter);
      this.waiter = null;
    }
  }

  resolve(value) {
    this.clearWaiter();
    this.promiseStatus = "resolved";
    this.resolvedValue = value;
    this.resolver(value);
    return this.promise;
  }

  reject(error) {
    this.clearWaiter();
    this.promiseStatus = "rejected";
    this.rejectedError = error;
    this.rejector(error);
    return this.promise;
  }

  wait(ms, reject) {
    if (ms != null) {
      this.waiter = setTimeout(reject, ms);
    }
    return this.promise;
  }
}

export default Promisor;
