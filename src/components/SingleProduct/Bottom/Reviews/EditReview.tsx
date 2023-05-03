import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import styles from "./EditReview.module.scss";
import Rating from "./Rating";
import { editReview } from "../../../../redux/SingleProduct/singleProductSlice";

interface IProps {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  reviewId: number;
}

const EditReview = ({ setIsEditing, reviewId }: IProps) => {
  const reviews = useAppSelector((state) => state.singleProduct.reviews);
  const dispatch = useAppDispatch();

  const thisReview = reviews.find((review) => review.id === reviewId);

  const [name, setName] = useState(thisReview?.name);
  const [email, setEmail] = useState(thisReview?.email);
  const [title, setTitle] = useState(thisReview?.title);
  const [content, setContent] = useState(thisReview?.content);
  const [rating, setRating] = useState(thisReview?.rating);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    dispatch(editReview({ name, email, title, content, rating, id: reviewId }));
    setIsEditing(false);
  };

  return (
    <section className={styles.overlay}>
      <div
        className={`${styles.addReviewContainer} animate__animated animate__fadeIn animate__faster`}
      >
        <button className={styles.closeBtn} onClick={() => setIsEditing(false)}>
          X
        </button>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3>You changed your mind ?</h3>

          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <label htmlFor="name">Email:</label>
          <input
            id="name"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <div className={styles.ratingContainer}></div>
          <label htmlFor="name">Title:</label>
          <input
            id="name"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
          <label htmlFor="name">Content:</label>
          <textarea
            style={{ height: "100px" }}
            id="name"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            required
          />
          <label htmlFor="">Rating</label>

          <Rating setRating={setRating} />
          <button type="submit" className={styles.submitBtn}>
            Edit
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditReview;
