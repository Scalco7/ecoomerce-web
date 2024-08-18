import ProductWithTag from "@/components/molecules/productWithTag/productWithTag";
import styles from "./style.module.css";
import { Zilla_Slab } from "next/font/google";
import { useClientMediaQuery } from "@/hooks/useClientMediaQuery";
import Image from "next/image";

interface TopSectionProps {
  buyProduct: (productTypeId: string) => void;
}

const zillaSlab = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function TopSection({ buyProduct }: TopSectionProps) {
  const isTablet = useClientMediaQuery("(min-width: 576px)");
  const isDesktop = useClientMediaQuery("(min-width: 992px)");
  const isXLScreen = useClientMediaQuery("(min-width: 1200px)");
  const isXXLScreen = useClientMediaQuery("(min-width: 1400px)");

  const littleTShirtSize = isXXLScreen
    ? "420px"
    : isXLScreen
    ? "360px"
    : isDesktop
    ? "290px"
    : "225px";
  const bigTShirtSize = isXXLScreen
    ? "520px"
    : isXLScreen
    ? "450px"
    : isDesktop
    ? "370px"
    : "285px";

  const tagsTshirt1 = isDesktop
    ? [
        {
          price: 89,
          onCLick: () => {
            buyProduct("");
          },
          position: {
            right: isXXLScreen ? -43 : isXLScreen ? -45 : -50,
            top: isXXLScreen ? 42 : isXLScreen ? 35 : 23,
          },
        },
      ]
    : [];

  const tagsTshirt2 = isDesktop
    ? [
        {
          price: 89,
          onCLick: () => {},
          position: {
            right: isXXLScreen ? -3 : isXLScreen ? -17 : -33,
            top: isXXLScreen ? 106 : isXLScreen ? 90 : 72,
          },
        },
      ]
    : [];

  const tagsTshirt3 = isDesktop
    ? [
        {
          price: 89,
          onCLick: () => {},
          position: {
            right: isXXLScreen ? -10 : isXLScreen ? -15 : -15,
            top: isXXLScreen ? 260 : isXLScreen ? 215 : 175,
          },
        },
      ]
    : [];

  return (
    <main className={`${styles.main} ${zillaSlab.className}`}>
      <section className={styles.imgsSection}>
        {isTablet ? (
          <>
            <ProductWithTag
              imgSrc={"/t-shirt-1.png"}
              width={littleTShirtSize}
              height={littleTShirtSize}
              tags={tagsTshirt1}
            />
            <ProductWithTag
              imgSrc={"/t-shirt-2.png"}
              width={bigTShirtSize}
              height={bigTShirtSize}
              tags={tagsTshirt2}
            />
            <ProductWithTag
              imgSrc={"/t-shirt-3.png"}
              width={littleTShirtSize}
              height={littleTShirtSize}
              tags={tagsTshirt3}
            />{" "}
          </>
        ) : (
          <Image
            src={"/t-shirts-mobile-shop.png"}
            alt={"Camisetas"}
            objectFit="contain"
            fill={true}
            sizes="600px"
          />
        )}
      </section>
      <section className={styles.boxTexts}>
        <div className={styles.box1}>
          <p className={styles.text1}>Let the game</p>
        </div>
        <div className={styles.box2}>
          <p className={styles.text2}>Begin</p>
        </div>
      </section>
    </main>
  );
}
