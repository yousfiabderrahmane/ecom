import { useState } from "react";
import styles from "./NewReview.module.scss";
import Rating from "./Rating";
import { useAppDispatch } from "../../../../redux/hooks";
import { addReview } from "../../../../redux/SingleProduct/singleProductSlice";

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewReview = ({ setIsOpen }: IProps) => {
  const [value, setValue] = useState(5);

  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const id = Math.ceil(Math.random() * 999);
    const date = new Date().toUTCString();

    // Do something with the form data (e.g. submit it to a server)
    dispatch(addReview({ name, email, title, content, rating, id, date }));

    setIsOpen(false);
  };

  return (
    <section className={styles.overlay}>
      <div
        className={`${styles.addReviewContainer} animate__animated animate__fadeIn animate__faster`}
      >
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
          X
        </button>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3>Your criticism matters</h3>

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
            Add
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewReview;
