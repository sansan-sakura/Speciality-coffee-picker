import { useState } from "react";
import { Name } from "../Name/Name";
import { Email } from "../Email/Email";
import { RoastLevel } from "../RoastLevel/RoastLevel";
import { Method } from "../Method/Method";
import { Recommendation } from "../Recomendation/Recommendation";
import { Region } from "../Region/Region";
import { Flavor } from "../Flavor/Flavor";
import { Footer } from "../Footer/Footer";
import { Howoften } from "../HowOften/HowOften";
import { Question } from "../Question";

export function MainForm() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    roast: "",
    method: "",
    recommendation: "",
    region: "",
    flavor: "",
    howOften: "",
  });

  const handleUserInput = (key, value) => {
    setUserInput((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <>
      <header>
        <h1>Speciality Coffee Picker</h1>
      </header>
      <Question onUserInput={handleUserInput} value={userInput} />
      <form>
        <Name onUserInput={handleUserInput} />
        <Howoften onUserInput={handleUserInput} />
        <Email onUserInput={handleUserInput} />
        <RoastLevel onUserInput={handleUserInput} />
        <Method onUserInput={handleUserInput} />
        <Recommendation onUserInput={handleUserInput} />
        <Region onUserInput={handleUserInput} />
        <Flavor onUserInput={handleUserInput} />
      </form>
      <Footer />
    </>
  );
}
