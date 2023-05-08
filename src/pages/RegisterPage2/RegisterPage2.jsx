import { useState } from "react";
import InputField from "./InputField";

import initialInputState from "./initialInputState";
import { Box, Button, Grid } from "@mui/material";
import validateRegisterSchema2 from "../../validation/registerValidation2";

const RegisterPage2 = () => {
  const [inputState, setInputState] = useState(initialInputState);
  const [errorState, setErrorState] = useState(null);
  const [showErrors, setShowErrors] = useState(false);
  const handleInputChange = (event) => {
    const newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[event.target.id] = event.target.value;
    setInputState(newInputState);
    setErrorState(validateRegisterSchema2(newInputState));
  };
  const handleBtnClick = () => {
    setShowErrors(true);
    const errors = validateRegisterSchema2(inputState);
    setErrorState(errors);
    if (errors) return;
  };
  return (
    <Box>
      <Grid container spacing={2}>
        {Object.keys(initialInputState).map((key) => (
          <InputField
            key={key + "inputs"}
            label={key}
            id={key}
            helperText={
              errorState && errorState[key] && errorState[key].join(", ")
            }
            value={inputState[key]}
            onChange={handleInputChange}
            showErrors={showErrors}
          />
        ))}
      </Grid>
      <Button variant="contained" onClick={handleBtnClick}>
        Register
      </Button>
    </Box>
  );
};
export default RegisterPage2;
