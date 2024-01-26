import React from "react";
import { CheckboxContainer } from "./styles";

interface CheckboxInputInterface {
  label: string;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckboxInput = ({
  label,
  checked,
  setChecked,
}: CheckboxInputInterface) => {
  function generateRandomId() {
    return "input_" + Math.random().toString(36).substring(0, 9);
  }

  const id = generateRandomId();

  return (
    <CheckboxContainer>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(event) => {
          const target = event.target;
          setChecked(target.checked);
        }}
      />
      <label htmlFor={id}>{label}</label>
    </CheckboxContainer>
  );
};

export default CheckboxInput;
