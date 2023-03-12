const validation = (schema, userInput) =>
  schema.validate(userInput, { abortEarly: false });
export default validation;
