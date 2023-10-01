import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <p className={styles.text}>
          Created by Sakura Tanaka 🌸 with Coffees <span className={styles.icon}> ☕️ </span>
        </p>
      </footer>
    </>
  );
};
