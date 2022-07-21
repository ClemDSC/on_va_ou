const yup = require("yup");

const validateDestination = async (req, res, next) => {
  const schema = yup.object().shape({
    continent: yup.string().max(255).required(),
    pays: yup.string().max(255).required(),
    ville: yup.string().max(255).required(),
    photo: yup.string().max(1000).required(),
    langue: yup.string().max(255).required(),
    devise: yup.string().max(255).required(),
    description: yup.string().max(1000).required(),
    objnom: yup.string().max(255).required(),
    objcategorie: yup.string().max(255).required(),
  });

  try {
    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (err) {
    return res.status(500).send({ err });
  }
};

module.exports = { validateDestination };
