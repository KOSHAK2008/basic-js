const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  currChain: [],
  getLength() {
    return this.currChain.Length;
  },
  addLink(value) {
    this.currChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (this._checkNumberChain(position)) {
      const index = position - 1;
      this.currChain.splice(index, 1);
      return this;
    } this._deleteChain();
    throw new NotImplementedError(`You can't remove incorrect link!`);
  },
  reverseChain() {
    this.currChain.reverse();
    return this;
  },
  finishChain() {
    const chain = this._getChain();
    this._deleteChain();
    return chain;
  },
  _deleteChain() {
    this.currChain.length = 0;
  },
  _checkNumberChain() {
    return typeof num === 'number' && (num ^ 0) === num;
  },
  _getChain() {
    return this.currChain.join('~~');
  }

};

module.exports = {
  chainMaker
};
