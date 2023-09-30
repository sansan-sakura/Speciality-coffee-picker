import { useEffect, useState } from "react";
import { InputField } from "./InputField/InputField";
import data from "../questions.json";
export const Question = ({ value, onUserInput, currentStep }) => {
  const [askFormat, setAskFormat] = useState({});

  useEffect(() => {
    setAskFormat(() => ({ ...data[currentStep - 1] }));
  }, [currentStep]);

  return (
    <>
      <h2>{askFormat.h2}</h2>
      <p>{askFormat.p}</p>
      <InputField nextFormat={askFormat} value={value} onUserInput={onUserInput} />
    </>
  );
};
