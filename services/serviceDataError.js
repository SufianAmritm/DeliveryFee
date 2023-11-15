const bodyValidate = (body) => {
  let arr = [];
  for (let key in body) {
    if (body[key] === undefined) {
      arr.push(`Must provide ${key}`);
    }
  }
  return arr;
};
module.exports = bodyValidate;
