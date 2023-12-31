import { Form, NextFormat } from "../../types/formType";
import styles from "./InputField.module.css";
export const InputField = ({
  nextFormat,
  onUserInput,
  value,
  onCurrentValue,
}: {
  nextFormat: NextFormat;
  onUserInput: (key: string, value: string) => void;
  value: Form;
  onCurrentValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { inputType, fieldName, answerChoice } = nextFormat;
  const _fieldName = fieldName as keyof Form;
  const answers = answerChoice?.answers;

  const handleInput = (
    e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>
  ) => {
    onUserInput(fieldName, e.target.value);
    onCurrentValue(e.target.value);
  };

  if (inputType === "email" || inputType === "text") {
    const placeholerWord = inputType === "email" ? "Email" : "Full Name";
    return (
      <input
        type={inputType}
        onChange={handleInput}
        placeholder={`Enter Your ${placeholerWord}`}
        className={styles.input_text}
        value={value[_fieldName]}
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
            <input
              type="radio"
              name={fieldName}
              value={el}
              onChange={handleInput}
              id={el}
              checked={value[_fieldName] === el}
            />
            <label htmlFor={el}>{el}</label>
          </div>
        ))}
      </div>
    );
  } else if (inputType === "select") {
    return (
      <>
        <select
          onChange={handleInput}
          id={fieldName}
          name={fieldName}
          value={value[_fieldName]}
          className={styles.select}
        >
          <option>-- Select --</option>
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
