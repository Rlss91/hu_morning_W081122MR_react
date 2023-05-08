import { Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const InputField = ({ helperText, cols, onChange, showErrors, ...props }) => {
  const [touched, setTouched] = useState(false);
  const handleInputChange = (event) => {
    console.log(event.target.id);
    setTouched(true);
    onChange(event);
  };
  return (
    <Grid item xs={cols}>
      <TextField
        variant="outlined"
        error={(touched || showErrors) && !!helperText}
        helperText={(touched || showErrors) && helperText}
        fullWidth
        {...props}
        onChange={handleInputChange}
      />
    </Grid>
  );
};
InputField.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  cols: PropTypes.number,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  showErrors: PropTypes.bool,
};
InputField.defaultProps = {
  cols: 12,
  showErrors: false,
};
export default InputField;
