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
  const answers = answerChoice?.answers;

  const handleInput = (
    e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>
  ) => {
    onUserInput(fieldName, e.target.value);
    onCurrentValue(e.target.value);
  };

  if (inputType === "email" || inputType === "text") {
    const valueField = fieldName === "email" ? "email" : "name";
    return (
      <input
        type={inputType}
        onChange={handleInput}
        placeholder={`Enter your ${fieldName}`}
        className={styles.input_text}
        value={value[valueField]}
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
    const valueField =
      fieldName === "roast"
        ? "roast"
        : fieldName === "recommendation"
        ? "recommendation"
        : "flavor";
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
              checked={value[valueField] === el}
            />
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
          <option disabled>-- Select --</option>
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
