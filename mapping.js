'use strict';

const mappings = [
  {
    id: '111',
    phone: '18665373115',
  },
  {
    id: '222',
    phone: '18665373115',
  },
  {
    id: '333',
    phone: '18665373115',
  },
];

const slow = (id) => {
  // console.log('I am slow');
  const result = mappings.find((v) => v.id === id);
  // console.log('result: ', result);
  return result;
};

const memoize = function(func) {
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
};

(function test() {
  let quick = memoize(slow);
  quick('111');
  quick('111');
  quick('111');
  quick('222');
  quick('222');
  quick('222');
})();
