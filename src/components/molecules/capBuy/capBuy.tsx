import PriceTag from "@/components/atoms/priceTag/priceTag";
import Image from "next/image";
import styles from "./style.module.css";

export default function CapBuy() {
  return (
    <main className={styles.main}>
      <section className={styles.priceBoxBlackCap}>
        <PriceTag price={49.99} onClick={() => {}} />
      </section>
      <section className={styles.priceBoxWhiteCap}>
        <PriceTag price={49.99} onClick={() => {}} />
      </section>
      <Image
        src="/caps-img.png"
        alt="Bonés"
        sizes="600px"
        fill={true}
        objectFit="contain"
      />
    </main>
  );
}
