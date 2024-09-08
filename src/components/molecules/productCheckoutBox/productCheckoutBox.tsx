import Image from "next/image";
import styles from "./style.module.css";
import { ProductCartData, useCart } from "@/states/cartState";
import ProductQuantityInput from "@/components/atoms/productQuantityInput/productQuantityInput";
import { formatNumberToValue } from "@/utils/number.utils";
import { Poppins, Zilla_Slab } from "next/font/google";
import TrashIcon from "@/components/icons/trashIcon/trashIcon";
import { useRouter } from "next/navigation";

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

interface ProductCheckoutBoxProps {
  product: ProductCartData;
}

export default function ProductCheckoutBox({
  product,
}: ProductCheckoutBoxProps) {
  const { removeProduct, increaseProductQuantity, decreaseProductQuantity } =
    useCart();
  const router = useRouter();

  function handleOnProductClick() {
    router.push(`/product/${product.productTypeId}`);
  }

  return (
    <main className={styles.main} onClick={() => handleOnProductClick()}>
      <section className={styles.imgBoxBig}>
        <section className={styles.imgBox}>
          <Image
            src={product.imgUrl}
            alt={product.name}
            fill={true}
            objectFit="contain"
          />
        </section>
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
                  {product.variant1.type}: {product.variant1.name}
                </p>
              )}
              {product.variant2 && (
                <p className={styles.variantText}>
                  {product.variant2.type}: {product.variant2.name}
                </p>
              )}
            </section>
          </section>
          <section
            className={styles.removeSection}
            onClick={(evt) => {
              evt.stopPropagation();
              removeProduct(product.id);
            }}
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
            onIncrease={() => increaseProductQuantity(product.id)}
            onDecrease={() => decreaseProductQuantity(product.id)}
          />
        </section>
      </section>
    </main>
  );
}
