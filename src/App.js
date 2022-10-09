import { useState } from "react";
import AccountForm from "./AccountForm";
import AddressForm from "./AddressForm";
import "./App.css";
import useMultiStepForm from "./useMultiStepForm";
import UserForm from "./UserForm";

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  zip: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  console.log(data);
  const updateFields = (userData) => {
    setData((prev) => {
      return { ...prev, ...userData };
    });
  };
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Succesful Submit");
  };
  return (
    <div
      style={{
        position: "relative",
        border: " 1px solid black",
        background: "white",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        maxWidth: "max-content",
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: "0.5rem", right: ".5rem" }}>
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            ga: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}

          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
