import { Form, NextFormat } from "../../types/formType";
import styles from "./InputField.module.css";
export const InputField = ({
  nextFormat,
  onUserInput,
  value,
}: {
  nextFormat: NextFormat;
  onUserInput: (key: string, value: string) => void;
  value: Form;
}) => {
  const { inputType, fieldName, answerChoice } = nextFormat;
  const answers = answerChoice?.answers;

  const handleInput = (
    e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>
  ) => {
    onUserInput(fieldName, e.target.value);
  };

  if (inputType === "email" || inputType === "text") {
    return (
      <input
        type={inputType}
        onChange={handleInput}
        placeholder={`Enter your ${fieldName}`}
        className={styles.input_text}
      />
    );
  } else if (inputType === "range") {
    const { min, max } = answerChoice;
    return (
      <div className={styles.range_box}>
        <input
          type={inputType}
          min={min}
          max={max}
          onChange={handleInput}
          className={styles.input_range}
          value={value.howOften}
        />{" "}
        <p>{value.howOften}</p>
      </div>
    );
  } else if (inputType === "radio") {
    return (
      <div className={`${styles.radio_box} ${fieldName === "roast" ? styles.roast : ""}`}>
        {answers?.map((el) => (
          <div key={el}>
            <input type="radio" name={fieldName} value={el} onChange={handleInput} id={el} />
            <label htmlFor={el}>{el}</label>
          </div>
        ))}
      </div>
    );
  } else if (inputType === "select") {
    const valueField = fieldName === "region" ? "region" : "method";
    return (
      <>
        <select
          onChange={handleInput}
          id={fieldName}
          name={fieldName}
          value={valueField}
          className={styles.select}
        >
          {answers?.map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
      </>
    );
  }
  return <></>;
};
