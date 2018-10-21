function debounce(func, wait, immediate) {
  let timeout;
  return function(...args) {
    if (immediate && !timeout) {
      func(...args);
    }

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) {
        func(...args);
      }
    }, wait);
  };
}

// test

function log(n) {
  console.log(n);
}

// const debouncedLog = debounce(log, 1000, true);
const debouncedLog = debounce(log, 1000, false);

debouncedLog(1);
debouncedLog(1.5);
setTimeout(debouncedLog, 500, 2);
setTimeout(debouncedLog, 900, 3);
setTimeout(debouncedLog, 2000, 4);
