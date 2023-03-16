import styles from "./Error.module.scss";

interface Props {
  error: string;
}
const Error = ({ error }: Props) => {
  return (
    <div className={styles.errorContainer}>
      <h1>{error}</h1>
    </div>
  );
};

export default Error;
