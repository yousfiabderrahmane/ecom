import { singleProduct } from "../../../../redux/SingleProduct/types";
import styles from "./Reviews.module.scss";
import { ReactComponent as RatingStar } from "../../../../assets/svg/fillStar.svg";
import userImage from "../../../../assets/images/21104.png";
import { useAppSelector } from "../../../../redux/hooks";
import { ReactComponent as EditIcon } from "../../../../assets/svg/editReview.svg";

interface IProps {
  singleProduct: singleProduct;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setReviewId: React.Dispatch<React.SetStateAction<number>>;
}

const Reviews = ({
  singleProduct,
  isOpen,
  setIsOpen,
  setIsEditing,
  setReviewId,
}: IProps) => {
  const fakeUnsorted = useAppSelector((state) => state.singleProduct.reviews);

  const fakeReviews = fakeUnsorted
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section
      className={`${styles.reviewsContainer} animate__animated animate__fadeInUp animate__faster`}
    >
      <div className={styles.topSection}>
        <h3>Rating & Reviews</h3>
        <div className={styles.ratingContainer}>
          <div className={styles.rating}>
            <RatingStar className={styles.icon} />
            <h4>
              {singleProduct.rating.rate} /{" "}
              <span> ( {singleProduct.rating.count} reviews )</span>
            </h4>
          </div>

          <div className={styles.buttonContainer}>
            <button
              className={styles.reviewBtn}
              onClick={() => setIsOpen(true)}
            >
              Write A Review
            </button>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        {fakeReviews.map((review) => (
          <div key={review.id} className={styles.review}>
            <div className={styles.imageContainer}>
              <img
                src={review.photo ? review.photo : userImage}
                alt={review.title}
              />
            </div>
            <div className={styles.info}>
              {review.isEditable && (
                <EditIcon
                  onClick={() => {
                    setIsEditing(true);
                    setReviewId(review.id);
                  }}
                  className={styles.editIcon}
                />
              )}
              <div className={styles.infoTop}>
                <h4>{review.name}</h4>
                <div className={styles.stars}>
                  {Array.from(Array(review.rating), (e, i) => {
                    return <RatingStar key={i} className={styles.icon} />;
                  })}
                </div>
                <p>{review.date}</p>
              </div>

              <div className={styles.infoBot}>
                <h5>{review.title}</h5>
                <p>{review.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
