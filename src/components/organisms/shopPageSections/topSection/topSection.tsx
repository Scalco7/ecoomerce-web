import ProductWithTag from "@/components/molecules/productWithTag/productWithTag";
import styles from "./style.module.css";
import { Zilla_Slab } from "next/font/google";

const zillaSlab = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function TopSection() {
  return (
    <main className={`${styles.main} ${zillaSlab.className}`}>
      <section className={styles.txtSection}>
        <div className={styles.box1}>
          <p className={styles.text1}>Let the game</p>
        </div>
        <div className={styles.box2}>
          <p className={styles.text2}>Begin</p>
        </div>
      </section>
      <section className={styles.imgsSection}>
        <ProductWithTag
          imgSrc={"/t-shirt-1.png"}
          width={"480px"}
          height={"480px"}
          tags={[
            { price: 89, onCLick: () => {}, position: { right: -18, top: 58 } },
          ]}
        />
        <ProductWithTag
          imgSrc={"/t-shirt-2.png"}
          width={"600px"}
          height={"600px"}
          tags={[
            { price: 89, onCLick: () => {}, position: { right: 8, top: 130 } },
          ]}
        />
        <ProductWithTag
          imgSrc={"/t-shirt-3.png"}
          width={"480px"}
          height={"480px"}
          tags={[
            { price: 89, onCLick: () => {}, position: { right: -3, top: 290 } },
          ]}
        />
      </section>
    </main>
  );
}
