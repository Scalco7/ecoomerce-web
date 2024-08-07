import Image from "next/image";
import styles from "./style.module.css";
import { ProductCartData } from "@/states/cartState";
import ProductQuantityInput from "@/components/atoms/productQuantityInput/productQuantityInput";
import { formatNumberToValue } from "@/utils/number.utils";
import { Poppins, Zilla_Slab } from "next/font/google";
import TrashIcon from "@/components/icons/trashIcon/trashIcon";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

const zillaSlab = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

interface ProductCartBoxProps {
  product: ProductCartData;
  onRemove: (productId: string) => void;
  onIncrease: (productId: string) => void;
  onDecrease: (productId: string) => void;
}

export default function ProductCartBox({
  product,
  onRemove,
  onIncrease,
  onDecrease,
}: ProductCartBoxProps) {
  return (
    <main className={styles.main}>
      <section className={styles.imgBox}>
        <Image
          src={product.imgUrl}
          alt={product.name}
          fill={true}
          objectFit="contain"
        />
      </section>
      <section className={styles.dataSection}>
        <section className={styles.topSection}>
          <section className={styles.textSection}>
            <p className={`${zillaSlab.className} ${styles.title}`}>
              {product.name}
            </p>
            <section className={styles.variantsSection}>
              {product.variant1 && (
                <p className={styles.variantText}>
                  {product.variant1.name}: {product.variant1.type}
                </p>
              )}
              {product.variant2 && (
                <p className={styles.variantText}>
                  {product.variant2.name}: {product.variant2.type}
                </p>
              )}
            </section>
          </section>
          <section
            className={styles.removeSection}
            onClick={() => onRemove(product.id)}
          >
            <TrashIcon size={24} color="#676767" />
          </section>
        </section>
        <section className={styles.bottomSection}>
          <section className={`${poppins.className}`}>
            <p className={styles.price}>{formatNumberToValue(product.price)}</p>
            <p className={styles.promotionPrice}>
              {formatNumberToValue(product.promotionPrice)}
            </p>
          </section>
          <ProductQuantityInput
            fontSize={20}
            quantity={product.quantity}
            onIncrease={() => onIncrease(product.id)}
            onDecrease={() => onDecrease(product.id)}
          />
        </section>
      </section>
    </main>
  );
}
