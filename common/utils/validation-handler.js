const validationHandler = (fn) => {
  return (req, res, next) => {
    const validationMiddlewares = fn(req);
    const runAllMiddlewares = async () => {
      for (const middleware of validationMiddlewares) {
        await new Promise((resolve) => middleware(req, res, resolve));
      }
      next();
    };
    runAllMiddlewares();
  };
};
module.exports = validationHandler;
