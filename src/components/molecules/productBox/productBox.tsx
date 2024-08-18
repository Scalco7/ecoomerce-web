import Image from "next/image";
import styles from "./style.module.css";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/components/atoms/primaryButton/primaryButton";
import { Poppins, Zilla_Slab } from "next/font/google";
import { formatNumberToValue } from "@/utils/number.utils";
import { useClientMediaQuery } from "@/hooks/useClientMediaQuery";

interface ProductBoxProps {
  colorScheme: "white" | "yellow";
  width: string;
  product: ProductInfoData;
  buyProduct: (productTypeId: string) => void;
}

export interface ProductInfoData {
  id: string;
  imgUrl: string;
  name: string;
  price: number;
  promotionPrice: number;
}

const zillaSlab = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

export default function ProductBox({
  colorScheme,
  product,
  width,
  buyProduct,
}: ProductBoxProps) {
  const router = useRouter();
  const isDesktop = useClientMediaQuery("(min-width: 576px)");

  const isWhite = colorScheme == "white";

  function handleProductClick() {
    router.push(`product/${product.id}`);
  }

  return (
    <main
      className={`${styles.main} ${
        isWhite ? styles.whiteBox : styles.yellowBox
      }`}
      style={{ minWidth: width, maxWidth: width }}
      onClick={handleProductClick}
    >
      <section
        className={`${styles.boxImg} ${isWhite ? styles.borderBottom : null}`}
      >
        <section className={styles.containImg}>
          <Image
            src={product.imgUrl}
            alt={product.name}
            objectFit="contain"
            fill={true}
            sizes={"500px"}
          />
        </section>
      </section>
      <section className={styles.boxInfos}>
        <section>
          <p className={`${zillaSlab.className} ${styles.titleText}`}>
            + {product.name}
          </p>
          <section className={`${poppins.className}`}>
            <p className={styles.textPrice}>
              {formatNumberToValue(product.price)}
            </p>
            <p className={styles.textPromotionPrice}>
              {formatNumberToValue(product.promotionPrice)}
            </p>
          </section>
        </section>
        <PrimaryButton
          borderRadius={0}
          isDark={!isWhite}
          width={"100%"}
          height={isDesktop ? "40px" : "30px"}
          padding={0}
          iconSize={isDesktop ? 20 : 16}
          onClick={() => buyProduct(product.id)}
        />
      </section>
    </main>
  );
}
