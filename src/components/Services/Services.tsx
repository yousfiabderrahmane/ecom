import { ReactComponent as BoxIcon } from "../../assets/svg/box.svg";
import { ReactComponent as DeliveryIcon } from "../../assets/svg/delivery.svg";
import { ReactComponent as ShippingIcon } from "../../assets/svg/shipping.svg";
import styles from "./Services.module.scss";

const services = [
  {
    name: "Order",
    description:
      "Items can be ordered directly or through our global network of certified partners.",
  },
  {
    name: "Shipping",
    description:
      "Send shipments from anywhere to anywhere in Morocco in record time with the largest and fastest-growing 3PL Express Parcel player in Morocco.",
  },
  {
    name: "Delivery",
    description:
      "When sending items overseas Connect with us and instantly save up to 91% discounted shipping rates on 250+ couriers.",
  },
];

export const Services = () => {
  return (
    <section className={styles.servicesContainer}>
      <h2 className={styles.title}>Our Services</h2>
      <div className={styles.cardContainer}>
        {services.map((service) => (
          <div className={styles.card}>
            <div>
              {service.name === "Order" ? (
                <BoxIcon className={styles.cardIcon} />
              ) : service.name === "Shipping" ? (
                <ShippingIcon className={styles.cardIcon} />
              ) : (
                <DeliveryIcon className={styles.cardIcon} />
              )}
            </div>
            <div className={styles.bot}>
              <p className={styles.serviceName}>{service.name}</p>
              <p className={styles.serviceDescvription}>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
