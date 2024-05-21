const MyQueue = function () {
  this.pushStack = [];
  this.popStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.pushStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  this._move();
  return this.popStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  this._move();
  return this.popStack[this.popStack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.popStack.length === 0 && this.pushStack.length === 0;
};

MyQueue.prototype._move = function () {
  /**
  1. if popStack is empty,
      then pour the pushStack into the popStack
  2. if popStack isn't empty,
      then just pop the top element from popStack
   */

  if (this.popStack.length === 0) {
    while (this.pushStack.length > 0) {
      this.popStack.push(this.pushStack.pop());
    }
  }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
