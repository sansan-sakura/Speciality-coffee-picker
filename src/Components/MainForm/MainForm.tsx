import { useCallback, useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Question } from "../Question";
import { Form, IsError } from "../../types/formType";
import { PickCoffee } from "../PickCoffee/PickCoffee";
import styles from "./MainForm.module.css";

export function MainForm() {
  const [currentValue, setCurrentValue] = useState("");
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

  const nextStep = useCallback(() => {
    if (currentValue === "") {
      setError({ message: "Write something", error: true });
      return;
    } else {
      setError({ message: "", error: false });
      currentStep < 10 && setCurrentStep((c) => c + 1);
      setCurrentValue("");
    }
  }, [currentStep, currentValue]);

  const prevStep = () => {
    currentStep > 1 && setCurrentStep((c) => c - 1);
  };

  const handleUserInput = (key: string, value: string) => {
    console.log(value);

    setUserInput((prev) => ({ ...prev, [key]: value }));
    console.log(error);
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
        {/* {currentStep < 9 ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <Question
              onUserInput={handleUserInput}
              value={userInput}
              currentStep={currentStep}
              onCurrentValue={setCurrentValue}
            />
          </form>
        ) : ( */}
        <PickCoffee value={userInput} />
        {/* )} */}
        <div className={styles.btn_box}>
          <button onClick={prevStep}>prev</button>
          <button onClick={nextStep}>next</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
