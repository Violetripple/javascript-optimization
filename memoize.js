function memoize(func) {
  let cache = {};

  return function(...args) {
    let n = args[0];

    if (n in cache) {
      console.log('cache: ', cache[n]);
      return cache[n];
    }

    let result = func(n);
    console.log('result: ', result);
    cache[n] = result;
    return result;
  };
}
