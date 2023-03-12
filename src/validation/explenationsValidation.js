import Joi from "joi";

const schema = Joi.object({
  string: Joi.string(),
  number: Joi.number(),
  bool: Joi.boolean(),
  required: Joi.required(),
  users: Joi.object().keys({
    name: Joi.string(),
    age: Joi.number(),
  }),
  animalNamesArr: Joi.array().items(Joi.string()),
  arrayOfObjects: Joi.array().items(
    Joi.object().keys({
      name: Joi.string(),
      age: Joi.number(),
    })
  ),
  objectWithArray: Joi.object().keys({
    name: Joi.string(),
    age: Joi.number(),
    array: Joi.array().items(Joi.string()),
  }),
});

const userSchema = Joi.object({
  name: Joi.string().min(2).max(100).required().label("First name"),
  age: Joi.number(),
  password: Joi.string().pattern(new RegExp("^[A-Z][a-z]{0,}$")).messages({
    "string.pattern.base": "regex should be uppercase",
  }),
});

const obj = {
  name: "a",
  age: "asdf",
  password: "123",
};

const responseFromJoi = userSchema.validate(obj, { abortEarly: false });
console.log("responseFromJoi", responseFromJoi);
