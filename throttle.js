function throttle(delay, func) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

// test

function log(n) {
  console.log(n);
}

const throttledLog = throttle(1000, log);

throttledLog(1);
setTimeout(throttledLog, 500, 2);
setTimeout(throttledLog, 1001, 3);
