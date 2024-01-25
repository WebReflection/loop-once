/**
 * @param {Set | WeakSet} [ws] a `Set` or `WeakSet` (default) used to guard iterations.
 */
export default (ws = new WeakSet) =>
  /**
   * @template T
   * @param {Iterable<T>} iterable any iterable content.
   */
  function* (iterable) {
    for (const any of iterable) {
      if (!ws.has(any)) {
        ws.add(any);
        yield any;
      }
    }
  }
;
