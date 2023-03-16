import styles from "./Loading.module.scss";

export const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <img
        className={styles.loadingSpinner}
        src="https://images.squarespace-cdn.com/content/v1/5ba53bc316b640445dc887e6/1537984950867-OJCSGBR04A7CBGQ0R9V0/loading.gif"
        alt="loading"
      />
    </div>
  );
};
