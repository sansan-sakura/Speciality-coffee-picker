import { useEffect, useState } from "react";
import data from "../questions.json";
export const Question = () => {
  const [askFormat, setAskFormat] = useState({
    heading: "",
    text: "",
  });
  const handleNextFormat = () => {
    setAskFormat(() => ({
      heading: data[0].h2,
      text: data[0].p,
    }));
  };

  useEffect(() => {
    handleNextFormat();
  }, []);

  console.log(data);
  return (
    <>
      <h2>{askFormat.heading}</h2>
      <p>{askFormat.text}</p>
    </>
  );
};
