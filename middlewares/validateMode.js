const validateMode = (req, res, next) => {
  const {
    headers: { mode }
  } = req;
  if (!['production', 'development'].includes(mode)) {
    throw new Error('Only valid values for mode are "production" or "development"', { cause: 400 });
  }
  return next();
};

export default validateMode;
