class Stack {
  constructor(length = 10) {
    if (
      typeof length !== "number" ||
      isNaN(length) ||
      !isFinite(length) ||
      length <= 0
    ) {
      throw new Error();
    }
    this.length = length;
    this.stack = [];
  }

  push(elem) {
    const index = this.stack.length;

    if (index + 1 > this.length) {
      throw new Error();
    }

    this.stack[index] = elem;
  }

  pop() {
    if (!this.stack.length) {
      throw new Error();
    }

    const item = this.stack[this.stack.length - 1];

    this.stack.length -= 1;
    return item;
  }

  peek() {
    if (!this.stack.length) return null;

    const item = this.stack[this.stack.length - 1];

    return item;
  }

  isEmpty() {
    return !this.stack.length;
  }

  toArray() {
    if (!this.stack.length) return [];

    const array = [];
    const iterator = this.stack[Symbol.iterator]();

    while (true) {
      const iteratorValue = iterator.next();

      if (iteratorValue.done) break;

      array[array.length] = iteratorValue.value;
    }

    return array;
  }

  static fromIterable(iterable) {
    if (iterable == null || typeof iterable[Symbol.iterator] !== "function") {
      throw new Error();
    }

    const newStack = new Stack(iterable.length);
    const iterator = [...iterable][Symbol.iterator]();

    while (true) {
      const iteratorValue = iterator.next();

      if (iteratorValue.done) break;

      newStack.stack[newStack.stack.length] = iteratorValue.value;
    }

    return newStack;
  }
}
module.exports = { Stack };
