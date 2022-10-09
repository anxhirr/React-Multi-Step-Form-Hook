import React from "react";
import FormWrapper from "./FormWrapper";

function AddressForm({ street, city, state, zip, updateFields }) {
  return (
    <FormWrapper title="Address">
      <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        onChange={(e) => {
          updateFields({ street: e.target.value });
        }}
        value={street}
      />
      <label>City</label>
      <input
        required
        type="text"
        onChange={(e) => {
          updateFields({ city: e.target.value });
        }}
        value={city}
      />
      <label>State</label>
      <input
        required
        type="text"
        onChange={(e) => {
          updateFields({ state: e.target.value });
        }}
        value={state}
      />
      <label>Zip</label>
      <input
        required
        type="text"
        onChange={(e) => {
          updateFields({ zip: e.target.value });
        }}
        value={zip}
      />
    </FormWrapper>
  );
}

export default AddressForm;
