import CarouselProductImg from "@/components/molecules/carouselProductImg/carouselProductImg";
import styles from "./style.module.css";
import { ProductType } from "@/states/productsState";
import { formatNumberToValue } from "@/utils/number.utils";
import { Poppins, Zilla_Slab } from "next/font/google";
import { useState } from "react";
import PrimaryButton from "@/components/atoms/primaryButton/primaryButton";

interface ProductTopSectionProps {
  product: ProductType;
}
const zillaSlabThin = Zilla_Slab({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const zillaSlabBolder = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const poppinsThin = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

const poppinsBolder = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

export default function ProductTopSection({ product }: ProductTopSectionProps) {
  const [indexSelectedProduct, setIndexSelectedProduct] = useState(0);

  return (
    <main className={styles.topSection}>
      <section className={styles.carouselSection}>
        <CarouselProductImg product={product.products[indexSelectedProduct]} />
      </section>
      <section className={styles.topSectionData}>
        <section className={`${styles.titleBox} ${zillaSlabBolder.className}`}>
          <p className={styles.titleText}>{product.name}</p>
        </section>
        <section className={styles.productsData}>
          <section>
            <p className={`${poppinsThin.className} ${styles.price}`}>
              {formatNumberToValue(
                product.products[indexSelectedProduct].price
              )}
            </p>
            <p
              className={`${poppinsBolder.className} ${styles.promotionPrice}`}
            >
              {formatNumberToValue(
                product.products[indexSelectedProduct].promotionPrice
              )}
            </p>
          </section>
        </section>
        <section className={styles.buttonSection}>
          <PrimaryButton
            borderRadius={10}
            isDark={true}
            width={"250px"}
            height={"70px"}
            text="Comprar Agora"
            fontSize={24}
            iconSize={24}
            onClick={() => {}}
          />
          <p className={`${zillaSlabThin.className} ${styles.obsBuyText}`}>
            * Compre agora Banana {"Monkey's"}, para adicionar aventura a sua
            vida.
          </p>
        </section>
      </section>
    </main>
  );
}
