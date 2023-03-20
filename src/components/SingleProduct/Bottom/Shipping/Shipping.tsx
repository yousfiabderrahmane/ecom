import styles from "./Shipping.module.scss";

const Shipping = () => {
  return (
    <section
      className={`${styles.shippingContainer} animate__animated animate__fadeInUp animate__faster`}
    >
      <h3>Shipping price is based on weight !</h3>
      <p>
        Shipping is a fundamental aspect of our modern economy, allowing goods
        and products to be transported across the world. One of the most
        important factors that determines the cost of shipping is weight. The
        weight of a package or product can greatly impact the amount of
        resources and effort required to transport it from one location to
        another. Shipping companies use various methods to calculate the weight
        of a shipment. In some cases, they will simply weigh the package or
        product using a scale. This method is straightforward and reliable, but
        it may not be practical for very large or heavy items. In such cases,
        the shipping company may use other techniques, such as measuring the
        dimensions of the package and calculating its volume.
      </p>
    </section>
  );
};

export default Shipping;
