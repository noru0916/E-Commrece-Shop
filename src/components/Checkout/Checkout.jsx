import React, { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  CssBaseline,
  Divider,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import { commerce } from "../../lib/commerce";
import useStyles from "./styles";
import PaymentForm from "./PaymentForm/PaymentForm";
import AddressForm from "./AddressForm/AddressForm";
import { Link, useHistory } from "react-router-dom";

const steps = ["Shipping address", "Payment details"];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
      } catch (e) {
        history.push("/");
      }
    };
    generateToken();
  }, [cart, history]);
  const classes = useStyles();
  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  const next = (data) => {
    setShippingData(data);
    nextStep();
  };
  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        backStep={backStep}
        onCaptureCheckout={onCaptureCheckout}
        nextStep={nextStep}
        timeout={timeout}
      />
    );

  const timeout = () => {
    setTimeout(() => {
      setIsFinished(true);
    }, 3000);
  };

  let Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography variant={"h5"}>
            Thank you for your purchase, {order.customer.firstname}{" "}
            {order.customer.lastname}
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant={"subtitle2"}>
            Order ref: {order.customer_reference}
          </Typography>
          <br />
          <Button
            component={Link}
            to={"/"}
            variant={"outlined"}
            type={"button"}
          >
            {" "}
            Back to Home
          </Button>
        </div>
      </>
    ) : isFinished ? (
      <>
        <div>
          <Typography variant={"h5"}>Thank you for your purchase</Typography>
          <Divider className={classes.divider} />
          <br />
          <Button
            component={Link}
            to={"/"}
            variant={"outlined"}
            type={"button"}
          >
            {" "}
            Back to Home
          </Button>
        </div>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );
  if (error) {
    Confirmation = () => (
      <>
        {" "}
        <Typography variant={"h5"}>Error:{error}</Typography>
        <br />
        <Button component={Link} to={"/"} variant={"outlined"} type={"button"}>
          {" "}
          Back to Home
        </Button>
      </>
    );
  }

  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
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
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
