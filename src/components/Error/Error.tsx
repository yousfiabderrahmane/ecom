import styles from "./Error.module.scss";
import { ReactComponent as ErrorIcon } from "../../assets/svg/errorIcon.svg";

interface Props {
  error: string;
}
const Error = ({ error }: Props) => {
  return (
    <div className={styles.errorContainer}>
      <h1>{error}</h1>
      <ErrorIcon className={styles.errorIcon} />
    </div>
  );
};

export default Error;
