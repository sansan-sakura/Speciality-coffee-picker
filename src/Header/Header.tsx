import styles from "./Header.module.css";
export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>
        <span>S</span>peciality Coffee Picker
      </h1>
    </header>
  );
};
