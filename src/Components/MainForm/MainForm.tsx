import { useCallback, useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Question } from "../Question";
import { Form, IsError } from "../../types/formType";
import { PickCoffee } from "../PickCoffee/PickCoffee";
import data from "../../questions.json";
import styles from "./MainForm.module.css";

export function MainForm() {
  const [currentValue, setCurrentValue] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [userInput, setUserInput] = useState<Form>({
    name: "",
    email: "",
    roast: "",
    method: "",
    recommendation: "",
    region: "",
    flavor: "",
    howOften: "",
  });
  const [error, setError] = useState<IsError>({
    message: "",
    error: false,
  });

  const nextStep = useCallback(() => {
    const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const mailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (currentValue === "") {
      setError({ message: data[currentStep - 1].errorMessage, error: true });
      return;
    } else if (currentStep === 2 && !currentValue.match(nameRegex)) {
      return setError({ message: `Please enter a valid name`, error: true });
    } else if (currentStep === 1 && !mailRegex.test(currentValue)) {
      return setError({ message: `Please enter a valid email`, error: true });
    } else {
      setError({ message: "", error: false });
      currentStep < 10 && setCurrentStep((c) => c + 1);
      setCurrentValue("");
    }
  }, [currentStep, currentValue]);

  const prevStep = () => {
    currentStep > 1 && setCurrentStep((c) => c - 1);
  };

  const tryAgain = () => {
    setCurrentStep(1);
    setCurrentValue("");
    setUserInput({
      name: "",
      email: "",
      roast: "",
      method: "",
      recommendation: "",
      region: "",
      flavor: "",
      howOften: "",
    });
  };

  const handleUserInput = (key: string, value: string) => {
    setUserInput((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    function callBack(e: KeyboardEvent) {
      if (e.code === "Enter") nextStep();
    }
    window.addEventListener("keydown", callBack);
    return () => {
      window.removeEventListener("keydown", callBack);
    };
  }, [nextStep]);

  return (
    <>
      <Header />
      <div className={styles.form_wrapper}>
        {currentStep < 9 ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <Question
              onUserInput={handleUserInput}
              value={userInput}
              currentStep={currentStep}
              onCurrentValue={setCurrentValue}
              error={error}
            />
          </form>
        ) : (
          <PickCoffee value={userInput} />
        )}
        {currentStep < 9 ? (
          <div className={styles.btn_box}>
            {currentStep > 1 && <button onClick={prevStep}>prev</button>}
            <button onClick={nextStep}>next</button>
          </div>
        ) : (
          <div className={styles.btn_box}>
            <button onClick={tryAgain} style={{ margin: "0 auto" }}>
              Try Again
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
