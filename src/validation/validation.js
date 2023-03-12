// const validation = (schema, userInput) =>
// schema.validate(userInput, { abortEarly: false });
const validation = (schema, userInput) => {
  let errorObjArr = {};
  const { error } = schema.validate(userInput, { abortEarly: false });
  if (!error) {
    // no errors
    return null;
  }
  const { details } = error; // const details = error.details
  console.log("details", details);
  for (let item of details) {
    if (!errorObjArr[item.context.key]) {
      /*
        if array in our error obj arr is not defined we will define empty array to store errors in
        for each new key
      */
      errorObjArr[item.context.key] = [];
    }
    errorObjArr[item.context.key] = [
      ...errorObjArr[item.context.key],
      item.message,
    ];
  }
  return errorObjArr;
};
export default validation;
