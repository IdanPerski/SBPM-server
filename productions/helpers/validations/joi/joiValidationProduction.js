const Joi = require("joi");
const validateProductionWithJoi = (production) => {
  const productionValidationSchema = Joi.object({
    audioEngineer: Joi.string().allow(""),
    cameraOperators: Joi.array().items(Joi.string()),
    cg: Joi.string().allow(""),
    date: Joi.date(),
    director: Joi.string().allow(""),
    editor: Joi.string().allow(""),
    location: Joi.string(),
    producer: Joi.array().items(Joi.string().allow("")),
    talents: Joi.array().items(Joi.string().allow("")),
    technician: Joi.array().items(Joi.string().allow("")),
    type: Joi.string(),
    visionMixerOperator: Joi.string().allow(""),
    vtr: Joi.array().items(Joi.string().allow("")),
  });

  return productionValidationSchema.validate(production);
};

module.exports = validateProductionWithJoi;
