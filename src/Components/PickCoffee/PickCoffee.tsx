import { Form } from "../../types/formType";
import coffees from "../../coffee.json";
import { Heading } from "../Heading/Heading";
import { Card } from "../Card/Card";
import styles from "./PickCoffee.module.css";
export const PickCoffee = ({ value }: { value: Form }) => {
  const userName = value.name.charAt(0).toUpperCase() + value.name.slice(1);
  const firstCoffees = coffees.filter((coffee) => coffee.roast_level === value.roast);

  let secondCoffees = firstCoffees.filter((coffee) => coffee.processing_method === value.method);

  if (secondCoffees.length === 0) {
    secondCoffees = firstCoffees.filter((coffee) => coffee.recommendation === value.recommendation);
    if (secondCoffees.length === 0) {
      secondCoffees = firstCoffees.filter((coffee) => coffee.flavor_profile.includes(value.flavor));
      if (secondCoffees.length === 0) {
        secondCoffees = firstCoffees.filter((coffee) => coffee.country === value.region);
        if (secondCoffees.length === 0) {
          secondCoffees = firstCoffees;
        }
      }
    }
  }

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
        <h3 className={styles.h3}>Your Select</h3>
        {/* <p className={styles.input_box_title}>
          <span>Email: </span>
          {value.email}
        </p> */}
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
      <h3>Our Choice</h3>
      <div className={styles.result_box}>
        {secondCoffees.map((coffee) => (
          <Card coffee={coffee} />
        ))}
      </div>
    </div>
  );
};
