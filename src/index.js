module.exports = function toReadable (number) {
  return number.toString().replace(/0/gi, "Zero").replace(/1/gi, "One").replace(/2/gi, "Two").replace(/3/gi, "Three")
      .replace(/4/gi, "Four").replace(/5/gi, "Five").replace(/6/gi, "Six").replace(/7/gi, "Seven").replace(/8/gi, "Eight")
      .replace(/9/gi, "Nine");
};
