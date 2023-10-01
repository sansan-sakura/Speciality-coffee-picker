import styles from "./Heading.module.css";
export const Heading = ({ h2, text }: { h2: string; text: string }) => {
  return (
    <div className={styles.heading_box}>
      <h2 className={styles.h2}>{h2}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
