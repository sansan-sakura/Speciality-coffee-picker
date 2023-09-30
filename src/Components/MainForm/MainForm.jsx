import { useState } from "react";

import { Footer } from "../Footer/Footer";
import { Question } from "../Question";

export function MainForm() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    roast: "",
    method: "",
    recommendation: "",
    region: "",
    flavor: "",
    howOften: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const nextStep = () => {
    currentStep < 8 && setCurrentStep((c) => c + 1);
  };

  const prevStep = () => {
    currentStep > 1 && setCurrentStep((c) => c - 1);
  };

  const handleUserInput = (key, value) => {
    setUserInput((prev) => ({ ...prev, [key]: value }));
    console.log(userInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <header>
        <h1>Speciality Coffee Picker</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <Question onUserInput={handleUserInput} value={userInput} currentStep={currentStep} />
        <button onClick={prevStep}>prev</button>
        <button onClick={nextStep}>next</button>
      </form>
      <Footer />
    </>
  );
}
