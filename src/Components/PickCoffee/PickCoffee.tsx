import { Form } from "../../types/formType";
import coffees from "../../coffee.json";
import { Heading } from "../Heading/Heading";
import { Card } from "../Card/Card";
import styles from "./PickCoffee.module.css";

export const PickCoffee = ({ value }: { value: Form }) => {
  console.log(value);
  const userName = value.name.charAt(0).toUpperCase() + value.name.slice(1);

  // Chooing coffee for a user
  const firstCoffees = coffees.filter((coffee) => coffee.roast_level === value.roast);
  let secondCoffees = firstCoffees.filter((coffee) => coffee.processing_method === value.method);
  if (secondCoffees.length > 5) {
    secondCoffees = firstCoffees.filter((coffee) => coffee.recommendation === value.recommendation);
  }

  console.log(firstCoffees, secondCoffees);
  // Love measure
  let yourLove;
  const yourRate = Number(value.howOften);
  if (yourRate < 5) {
    yourLove = "You should try good coffee!!";
  } else if (yourRate >= 5 && yourRate < 10) {
    yourLove = "You should exprole many kinds of coffee beans  ";
  } else if (yourRate >= 10 && yourRate < 15) {
    yourLove = "Enjoy good coffee!!";
  } else {
    yourLove = "Have a great moment with a wondoful cup of joe";
  }

  return (
    <div className={styles.result_page}>
      <Heading h2={`Here is ${userName}'s result ☕️`} text={yourLove} />

      <div className={styles.input_box}>
        <p className={styles.input_box_title}>
          <span>Country: </span> {value.region}
        </p>
        <p className={styles.input_box_title}>
          <span>Flavor: </span>
          {value.flavor}
        </p>
        <p className={styles.input_box_title}>
          <span>Process: </span>
          {value.method}
        </p>
        <p className={styles.input_box_title}>
          <span>Roast: </span>
          {value.roast}
        </p>
        <p className={styles.input_box_title}>
          <span>Method: </span>
          {value.recommendation}
        </p>
      </div>
      <h3 className={styles.h3}>Coffee for you</h3>
      <div
        className={`${styles.result_box} ${
          secondCoffees.length % 4 === 0 ? styles.grid_four : styles.grid
        }`}
      >
        {secondCoffees.map((coffee) => (
          <Card coffee={coffee} />
        ))}
      </div>
    </div>
  );
};
