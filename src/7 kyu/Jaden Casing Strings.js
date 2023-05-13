String.prototype.toJadenCase = function () {
  return this.replace(/(?:^|\s)\S/g, word => word.toUpperCase());
};