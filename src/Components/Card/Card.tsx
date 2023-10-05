import styles from "./Card.module.css";
import { Coffee } from "../../types/formType";
export const Card = ({ coffee }: { coffee: Coffee }) => {
  return (
    <div className={styles.card}>
      <h4>{coffee.name}</h4>
      <h4>{coffee.flavor_profile}</h4>
      <h4>{coffee.country}</h4>
      <h4>{coffee.region}</h4>
      <h4>{coffee.roast_level}</h4>
      <h4>{coffee.processing_method}</h4>
      <h4>{coffee.recommendation}</h4>
    </div>
  );
};
