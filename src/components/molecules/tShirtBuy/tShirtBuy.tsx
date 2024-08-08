import Image from "next/image";
import styles from "./style.module.css";
import PriceTag from "@/components/atoms/priceTag/priceTag";

export default function TShirtBuy() {
  return (
    <main className={styles.main}>
      <section className={styles.priceBox}>
        <PriceTag price={80} onClick={() => {}} />
      </section>
      <svg
        className={styles.svgLine}
        xmlns="http://www.w3.org/2000/svg"
        width="58"
        height="34"
        fill="none"
        viewBox="0 0 58 34"
      >
        <path stroke="#D2ADAD" d="M57 1.5C39-1 17 1.5.5 33"></path>
      </svg>
      <Image
        src="/back-t-shirt-buy.png"
        alt="Camiseta"
        sizes="600px"
        fill={true}
        objectFit="contain"
      />
    </main>
  );
}
