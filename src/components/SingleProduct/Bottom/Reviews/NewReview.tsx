import { useState } from "react";
import styles from "./NewReview.module.scss";

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewReview = ({ setIsOpen }: IProps) => {
  const [rating, setRating] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImageSelect = (event: any) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Do something with the form data (e.g. submit it to a server)
    console.log({
      name,
      email,
      title,
      content,
      rating,
      image,
    });
  };

  return (
    <section className={styles.overlay}>
      <div
        className={`${styles.addReviewContainer} animate__animated animate__fadeIn animate__faster`}
      >
        <button onClick={() => setIsOpen(false)}>close</button>
      </div>
    </section>
  );
};

export default NewReview;
