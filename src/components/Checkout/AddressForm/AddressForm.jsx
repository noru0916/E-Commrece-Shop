import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { commerce } from "../../../lib/commerce";
import FormInput from "./FormInput";

const AddressForm = ({ checkoutToken }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const methods = useForm();

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);
  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));
  console.log(countries);
  return (
    <>
      <Typography variant={"h6"} gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={""}>
          <Grid container spacing={3}>
            <FormInput name={"firstName"} required label={"First Name"} />
            <FormInput name={"lastName"} required label={"Last Name"} />
            <FormInput name={"address1"} required label={"Address"} />
            <FormInput name={"email"} required label={"Email"} />
            <FormInput name={"city"} required label={"City"} />
            <FormInput name={"zip"} required label={"ZIP / Postal Code"} />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                value={shippingCountry}
                fullWidth
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {countries.map((country) => {
                  console.log(country);
                  return (
                    <MenuItem key={country.id} value={country.id}>
                      {country.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>
            {/*<Grid item xs={12} sm={6}>*/}
            {/*  <InputLabel>Shipping Subdivision</InputLabel>*/}
            {/*  <Select value={} fullWidth onChange={}>*/}
            {/*    <MenuItem key={} value={}>*/}
            {/*      Select Me*/}
            {/*    </MenuItem>*/}
            {/*  </Select>*/}
            {/*</Grid>*/}
            {/*<Grid item xs={12} sm={6}>*/}
            {/*  <InputLabel>Shipping Options</InputLabel>*/}
            {/*  <Select value={} fullWidth onChange={}>*/}
            {/*    <MenuItem key={} value={}>*/}
            {/*      Select Me*/}
            {/*    </MenuItem>*/}
            {/*  </Select>*/}
            {/*</Grid>*/}
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
