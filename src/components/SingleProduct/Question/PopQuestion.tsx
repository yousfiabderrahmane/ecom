import React, { useState } from "react";
import styles from "./Question.module.scss";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopQuestion = ({ isOpen, setIsOpen }: IProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [question, setQuestion] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // You can add your own logic here for submitting the form data
    setEmail("");
    setName("");
    setPhoneNumber("");
    setQuestion("");
    setIsSubmitted(true);
    // You can add your own logic here for closing the popup
  };

  return (
    <div className={styles.overlay}>
      <div className={`${styles.popup} ${isSubmitted ? styles.submitted : ""}`}>
        {isSubmitted ? (
          <>
            <p>Your question has been sent!</p>
            <button
              className={styles.closeBtn}
              onClick={() => {
                setIsOpen(false);
                setIsSubmitted(false);
              }}
            >
              Close
            </button>
          </>
        ) : (
          <>
            <h2>Ask your question</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </label>
              <label>
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </label>
              <label>
                Phone Number:
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  required
                />
              </label>
              <label>
                <p> Question:</p>
                <textarea
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  required
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PopQuestion;
