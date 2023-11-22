const validationMessage = {
    notExists: (item) => `User must provide ${item}`,
    isEmpty: (item) => `${item} value can not be left empty`,
    incFormat: (item) => `${item} must be in correct format`,
    notNumber: (item) => `${item} must be a number`,
    nonNegative: (item) => `${item} must be a non negative value`,
    validDate: (item) => `${item} date must be valid ISO 8601 Date `,
    isString: (item) => `${item} must be a string`,
    isBoolean: (item) => `${item} must be a boolean`,
    isArray: (item) => `${item} must be an array`,
    isTime: (item) => `${item} must be in correct time format HH:MM:SS`,
    isJson: (item) => `${item} must be a valid JSON`
};

module.exports = validationMessage;
