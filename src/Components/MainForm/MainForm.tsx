import { useState } from "react";
import { Header } from "../../Header/Header";
import { Footer } from "../Footer/Footer";
import { Question } from "../Question";
import { Form } from "../../types/formType";
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

  const [currentStep, setCurrentStep] = useState(1);
  const nextStep = () => {
    currentStep < 8 && setCurrentStep((c) => c + 1);
  };

  const prevStep = () => {
    currentStep > 1 && setCurrentStep((c) => c - 1);
  };

  const handleUserInput = (key: string, value: string) => {
    setUserInput((prev) => ({ ...prev, [key]: value }));
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
          <div className={styles.btn_box}>
            <button onClick={prevStep}>prev</button>
            <button onClick={nextStep}>next</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
