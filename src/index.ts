export default (inFn0, inFn1, inFn2, inIsReverse?) => {
  const method = !!inIsReverse ? 'reduceRight' : 'reduce';
  return function (...args) {
    const len = args.length;
    if (len === 0) return inFn0(args);
    if (len === 1) return inFn1(args);
    return args[method](inFn2);
  };
};
