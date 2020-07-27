# Promisor

```js
const promisor = new Promisor();

console.log('status should be "pending" =', promisor.promiseState);

promisor.wait(1, () => { console.log('1ms went by') });

promisor.wait(10000, () => { promisor.resolve(42)});
const value = await promisor.promise;
console.log('value is', value, 'status is', promisor.promiseState);

```
