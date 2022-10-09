import React from "react";
import FormWrapper from "./FormWrapper";

function UserForm({ firstName, lastName, age, updateFields }) {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        onChange={(e) => {
          updateFields({ firstName: e.target.value });
        }}
        value={firstName}
      />
      <label>Last Name</label>
      <input
        required
        type="text"
        onChange={(e) => {
          updateFields({ lastName: e.target.value });
        }}
        value={lastName}
      />
      <label>Age</label>
      <input
        required
        min={1}
        type="number"
        onChange={(e) => {
          updateFields({ age: e.target.value });
        }}
        value={age}
      />
    </FormWrapper>
  );
}

export default UserForm;
