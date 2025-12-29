import styles from './Button.module.css';

// Using "children" makes it reusable. 
// We can pass "Give Feedback" or any other text later.
const Button = ({ children }) => {
  return (
    <button className={styles.button}>
      {children}
    </button>
  );
};

export default Button;