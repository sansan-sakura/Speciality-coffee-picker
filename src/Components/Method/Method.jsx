// import { useState } from "react";

export const Method = ({ onUserInput }) => {
  // const [question, setQuestion] = useState([
  //   {
  //     id: 1,
  //     h2: "",
  //     p: "",
  //     inputType: "",
  //   },
  // ]);
  return (
    <>
      <h3>Which method do you like to process your coffee beans? 🐥</h3>
      <p>It is interesting how different tast you get with different methods of process. ☕️</p>
      <select name="method" id="" onChange={(e) => onUserInput("method", e.target.value)}>
        <option value="washed">Washed</option>
        <option value="natural">Natural</option>
      </select>
    </>
  );
};
