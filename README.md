# reduce-fns
> Generate the reduceable function.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/reduce-fns
```

## usage
```js
import reduceFns from '@jswork/reduce-fns';

const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const sumAll = reduceFns(
  () => 0,
  (args) => args[0],
  sum
);
const mulAll = reduceFns(
  () => 1,
  (args) => args[0],
  mul
);

console.log(sumAll(1, 2, 3))          // 6
console.log(mulAll(1, 2, 3, 4, 5))    // 120
```

## license
Code released under [the MIT license](https://github.com/afeiship/reduce-fns/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/reduce-fns
[version-url]: https://npmjs.org/package/@jswork/reduce-fns

[license-image]: https://img.shields.io/npm/l/@jswork/reduce-fns
[license-url]: https://github.com/afeiship/reduce-fns/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/reduce-fns
[size-url]: https://github.com/afeiship/reduce-fns/blob/master/dist/reduce-fns.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/reduce-fns
[download-url]: https://www.npmjs.com/package/@jswork/reduce-fns
