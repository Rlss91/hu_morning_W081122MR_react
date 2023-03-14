import Joi from "joi";

import validation from "./validation";

const editCardSchema = Joi.object({
  img: Joi.string().min(5).required(),
  title: Joi.string().min(2).max(100).required(),
  price: Joi.number().required(),
  description: Joi.string().min(2).max(100).required(),
});

const validateEditSchema = (userInput) => validation(editCardSchema, userInput);

export default validateEditSchema;
