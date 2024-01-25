const loopOnce = require('../cjs');

const loop = loopOnce();

const iterable = [
  Promise.resolve('a'),
  Promise.resolve('b'),
  Promise.resolve('c')
];

const result = [];

const log = async () => {
  for (const p of loop(iterable))
    result.push(await p);
};

log();
log();
log();
log().then(log);
log();
setTimeout(log, 500);
setTimeout(() => {
  console.assert(result.join(',') === 'a,b,c');
  console.log('OK');
}, 1000);
