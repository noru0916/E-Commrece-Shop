import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";

const FormInput = ({ name, label }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        defaultValue={""}
        as={TextField}
        name={name}
        control={control}
        fullWidth
        label={label}
        required
      />
    </Grid>
  );
};

export default FormInput;
