const validateProvider = (req, res, next) => {
  const providers = ['open-ai'];
  const {
    headers: { provider }
  } = req;
  if (!providers.includes(provider)) {
    throw new Error(`${provider} is not a valid provider`, { cause: 400 });
  }
  return next();
};

export default validateProvider;
