import ProductWithTag from "@/components/molecules/productWithTag/productWithTag";
import styles from "./style.module.css";

export default function TopSection() {
  return (
    <main className={styles.main} style={{ display: "flex" }}>
      <ProductWithTag
        imgSrc={"/t-shirt-1.png"}
        width={"450px"}
        height={"450px"}
        tags={[
          { price: 89, onCLick: () => {}, position: { right: -5, top: 42 } },
        ]}
      />
      <ProductWithTag
        imgSrc={"/t-shirt-2.png"}
        width={"550px"}
        height={"550px"}
        tags={[
          { price: 89, onCLick: () => {}, position: { right: 3, top: 117 } },
        ]}
      />
      <ProductWithTag
        imgSrc={"/t-shirt-3.png"}
        width={"450px"}
        height={"450px"}
        tags={[
          { price: 89, onCLick: () => {}, position: { right: 0, top: 270 } },
        ]}
      />
    </main>
  );
}
