const validationMessage = {
  exists: (item) => `User must provide ${item}`,
  empty: (item) => `${item} value can not be left empty`,
  format: (item) => `${item} must be in correct format`,
  number: (item) => `${item} must be a number`,
  nonNegative: (item) => `${item} must be a non negative value`,
};

module.exports = validationMessage;
