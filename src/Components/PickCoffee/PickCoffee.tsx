import { Form } from "../../types/formType";
import coffees from "../../coffee.json";
import { Heading } from "../Heading/Heading";
import styles from "./PickCoffee.module.css";
export const PickCoffee = ({ value }: { value: Form }) => {
  console.log(value);
  console.log(coffees);
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

  console.log(firstCoffees, secondCoffees);
  return (
    <div>
      <Heading h2={"Here is your result ☕️"} text={""} />
      <div className={styles.input_box}>
        <h6>Name: {value.name}</h6>
        <h6>Email: {value.email}</h6>
        <h6>Level your coffee love: {value.howOften}</h6>
        <p>Country: {value.region}</p>
        <p>Flavor: {value.flavor}</p>
        <p>Process: {value.method}</p>
        <p>Roast: {value.roast}</p>
        <p>Method: {value.recommendation}</p>
      </div>
      <div className={styles.result_box}>
        {secondCoffees.map((coffee) => (
          <>
            <p>{coffee.name}</p>
            <p>{coffee.flavor_profile}</p>
          </>
        ))}
      </div>
    </div>
  );
};
