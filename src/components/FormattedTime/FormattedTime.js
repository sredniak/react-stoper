import styles from './FormattedTime.module.scss';

const FormattedTime = (props) => {
  /** The padStart method takes two arguments: the expected string length and an optional padding character. 
    We use 'String()' to convert a number to a string because the padStart/End method is available for 'string'
    We use the modulo '%' operation to correctly calculate 'ms'
   */
  const hours = String(Math.floor((props.time / 360000) % 24)).padStart(2, '0');
  const minutes = String(Math.floor((props.time / 6000) % 60)).padStart(2, '0');
  const seconds = String(Math.floor((props.time / 100) % 60)).padStart(2, '0');
  const milliseconds = String(props.time % 1000).padStart(3, '0');

  return (
    <div className={styles.timer}>
      <p>
        {hours}:{minutes}:{seconds}
        <span>.{milliseconds}</span>
      </p>
    </div>
  );
};

export default FormattedTime;
