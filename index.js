var loopOnce = (function (exports) {
  'use strict';

  /**
   * @param {Set | WeakSet} [ws] a `Set` or `WeakSet` (default) used to guard iterations.
   * @returns {Generator}
   */
  var index = (ws = new WeakSet) => function* (iterable) {
    for (const any of iterable) {
      if (!ws.has(any)) {
        ws.add(any);
        yield any;
      }
    }
  };

  exports.default = index;

  return exports;

})({});
