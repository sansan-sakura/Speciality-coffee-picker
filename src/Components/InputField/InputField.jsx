export const InputField = ({ nextFormat, onUserInput, value }) => {
  const { inputType, fieldName, answerChoice } = nextFormat;
  const answers = answerChoice?.answers;

  const handleInput = (e) => {
    onUserInput(fieldName, e.target.value);
  };

  if (inputType === "email" || inputType === "text") {
    return (
      <input type={inputType} onChange={handleInput} placeholder={`Enter your ${fieldName}`} />
    );
  } else if (inputType === "range") {
    const { min, max } = answerChoice;
    return (
      <>
        <span>{answerChoice.min}</span>
        <input type={inputType} min={min} max={max} onChange={handleInput} value={value} />{" "}
        <span>{max}</span>
      </>
    );
  } else if (inputType === "radio") {
    return (
      <>
        {answers.map((el) => (
          <div key={el}>
            <input type="radio" name={fieldName} value={el} onChange={handleInput} id={el} />
            <label htmlFor={el}>{el}</label>
          </div>
        ))}
      </>
    );
  } else if (inputType === "select") {
    return (
      <>
        <select onChange={handleInput} id={fieldName} name={fieldName} value={value}>
          {answers.map((el) => (
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
