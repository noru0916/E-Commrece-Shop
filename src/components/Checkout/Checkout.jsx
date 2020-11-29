import React, { useState } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
import PaymentForm from "./PaymentForm/PaymentForm";
import AddressForm from "./AddressForm/AddressForm";

const steps = ["Shipping address", "Payment details"];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(2);
  const classes = useStyles();
  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);
  const Confirmation = () => <div>Confirmation</div>;
  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper>
          <Typography variant={"h4"} align={"center"}>
            Checkout
          </Typography>
          <Stepper activeStep={0} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
