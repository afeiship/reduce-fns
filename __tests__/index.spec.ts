import fn from '../src';

describe('api.basic', () => {
  test('reduce-fns sum/mul will be recursive', () => {
    const sum = (a, b) => a + b;
    const mul = (a, b) => a * b;
    const sumAll = fn(
      () => 0,
      (args) => args[0],
      sum
    );
    const mulAll = fn(
      () => 1,
      (args) => args[0],
      mul
    );

    expect(sumAll(1, 2, 3)).toBe(6);
    expect(mulAll(1, 2, 3, 4, 5)).toBe(120);
  });
});
