import { useState } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Question } from "../Question";
import { Form, IsError } from "../../types/formType";
import { PickCoffee } from "../PickCoffee/PickCoffee";
import styles from "./MainForm.module.css";

export function MainForm() {
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

  const [currentStep, setCurrentStep] = useState(1);
  const nextStep = () => {
    currentStep < 10 && setCurrentStep((c) => c + 1);
  };

  const prevStep = () => {
    currentStep > 1 && setCurrentStep((c) => c - 1);
  };

  const handleUserInput = (key: string, value: string) => {
    console.log(value);
    value === "" ? setError({ message: "Enter", error: true }) : console.log("false");
    setUserInput((prev) => ({ ...prev, [key]: value }));
    console.log(error);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <div className={styles.form_wrapper}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Question onUserInput={handleUserInput} value={userInput} currentStep={currentStep} />
        </form>
        {currentStep === 9 && <PickCoffee value={userInput} />}
        <div className={styles.btn_box}>
          <button onClick={prevStep}>prev</button>
          <button onClick={nextStep}>next</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
