import React from "react";
import FormWrapper from "./FormWrapper";

function AccountForm({ email, password, updateFields }) {
  return (
    <FormWrapper title="Account Creation">
      <label>Email</label>
      <input
        autoFocus
        required
        type="text"
        onChange={(e) => {
          updateFields({ email: e.target.value });
        }}
        value={email}
      />
      <label>Password</label>
      <input
        required
        type="password"
        onChange={(e) => {
          updateFields({ password: e.target.value });
        }}
        value={password}
      />
    </FormWrapper>
  );
}

export default AccountForm;
