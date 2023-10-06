import styles from "./Card.module.css";
import { Coffee } from "../../types/formType";
export const Card = ({ coffee }: { coffee: Coffee }) => {
  console.log(coffee.flavor_profile.toString());
  return (
    <div className={styles.card}>
      <h4 className={styles.name_box}>
        {" "}
        <span className={styles.label}>Name :</span>
        <span className={styles.name}> {coffee.name}</span>
      </h4>
      <span className={styles.label_flavor}>Flavor:</span>
      <div className={styles.flavor_box}>
        {coffee.flavor_profile.map((flavor) => (
          <p>{flavor}</p>
        ))}
      </div>
      <p className={styles.text_box}>
        <span className={styles.label}>Region :</span>
        {coffee.country} &nbsp;
        {coffee.region}
      </p>

      <p className={styles.text_box}>
        {" "}
        <span className={styles.label}>Roast Level :</span>
        {coffee.roast_level}
      </p>
      <p className={styles.text_box}>
        {" "}
        <span className={styles.label}>Processing Method :</span>
        {coffee.processing_method}
      </p>
      <p className={styles.text_box}>
        {" "}
        <span className={styles.label}>Best way to brew :</span>
        {coffee.recommendation}
      </p>
    </div>
  );
};
