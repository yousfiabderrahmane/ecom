import { singleProduct } from "../../../../redux/SingleProduct/types";
import styles from "./Reviews.module.scss";
import { ReactComponent as RatingStar } from "../../../../assets/svg/fillStar.svg";
import moment from "moment";
import { useState } from "react";
import NewReview from "./NewReview";

interface IProps {
  singleProduct: singleProduct;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const fakeReviews = [
  {
    id: 1,
    rating: 4,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    date: new Date().toUTCString(),
    title: "This is wholesome",
    isEditable: false,

    content:
      "Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese.",
    photo: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    rating: 2,
    date: moment().startOf("day").fromNow(),
    isEditable: false,
    title: "I mean, whatever ....",
    content:
      "Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps.",
    photo: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    id: 3,
    name: "Clemthine Rmayn",
    email: "hisdaughter@rmayn.com",
    rating: 5,
    date: moment("20220620", "YYYYMMDD").fromNow(),
    isEditable: false,
    title: "Very exclusive !",
    content:
      "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop.",
    photo: "https://randomuser.me/api/portraits/men/61.jpg",
  },
];

const Reviews = ({ singleProduct, isOpen, setIsOpen }: IProps) => {
  const date = moment().format("MMM Do YY");
  console.log(date);

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
              <img src={review.photo} alt={review.title} />
            </div>
            <div className={styles.info}>
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
