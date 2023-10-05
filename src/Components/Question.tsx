import { useEffect, useState } from "react";
import { InputField } from "./InputField/InputField";
import { Heading } from "./Heading/Heading";
import data from "../questions.json";
import { Form, NextFormat } from "../types/formType";
export const Question = ({
  value,
  onUserInput,
  currentStep,
  onCurrentValue,
}: {
  value: Form;
  onUserInput: (key: string, value: string) => void;
  currentStep: number;
  onCurrentValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [askFormat, setAskFormat] = useState<NextFormat>({
    id: 0,
    h2: "",
    p: "",
    inputType: "",
    fieldName: "",
    answerChoice: {
      choice: false,
    },
  });

  useEffect(() => {
    setAskFormat(() => ({ ...data[currentStep - 1] }));
  }, [currentStep]);

  return (
    <>
      <Heading h2={askFormat.h2} text={askFormat.p} />

      <InputField
        nextFormat={askFormat}
        value={value}
        onUserInput={onUserInput}
        onCurrentValue={onCurrentValue}
      />
    </>
  );
};
