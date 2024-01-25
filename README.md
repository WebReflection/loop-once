# loop-once

[![Coverage Status](https://coveralls.io/repos/github/WebReflection/loop-once/badge.svg?branch=main)](https://coveralls.io/github/WebReflection/loop-once?branch=main)

<sup>**Social Media Photo by [Kier in Sight Archives](https://unsplash.com/@kierinsightarchives) on [Unsplash](https://unsplash.com/)**</sup>


A safer loop to iterate synchronously or asynchronously any unique identifier.

```js
import loopOnce from 'loop-once';

// create a function that will iterate
// over whatever iterable is passed along
// and arbitrary pass your own Set or WeakSet
// as once would be otherwise created automatically.
const unique = loopOnce();

// given a list of references
// or primitives if a Set is passed along ...
const iterable = [
  Promise.resolve('a'),
  Promise.resolve('b'),
  Promise.resolve('c')
];

// no matter how many times this will be called
// or how long it would take per each promise
// to resolve ...
const log = async () => {
  // the following loop will log once
  // resolved promise as opposite of many times
  for (const p of unique(iterable))
    console.log(await p);
};

// try it!
log();
log();
log().then(log);
setTimeout(log, 1000);

// the output will be
// "a"
// "b"
// "c"
// and that's it 🥳
```
