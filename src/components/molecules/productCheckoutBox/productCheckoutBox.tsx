import Image from "next/image";
import styles from "./style.module.css";
import { ProductCartData, useCart } from "@/states/cartState";
import ProductQuantityInput from "@/components/atoms/productQuantityInput/productQuantityInput";
import { formatNumberToValue } from "@/utils/number.utils";
import { Poppins, Zilla_Slab } from "next/font/google";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  weight: "600",
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
  const { increaseProductQuantity, decreaseProductQuantity } = useCart();
  const router = useRouter();

  function handleOnProductClick() {
    router.push(`/product/${product.productTypeId}`);
  }

  return (
    <main className={styles.main} onClick={() => handleOnProductClick()}>
      <section className={styles.topSection}>
        <section className={styles.imgSection}>
          <div className={styles.imgBox}>
            <Image
              fill={true}
              sizes="300px"
              alt="imagem do produto"
              src={product.imgUrl ?? "/no-img.svg"}
              objectFit="contain"
            />
          </div>
        </section>
        <section className={styles.dataSection}>
          <section className={styles.titleSection}>
            <p className={styles.titleText}>{product.name}</p>
          </section>
          <section className={styles.infoSection}>
            <section className={styles.variantsSection}>
              {product.variant1 && (
                <p className={styles.variantText}>
                  {product.variant1.type} -{" "}
                  <span className={zillaSlab.className}>
                    {product.variant1.name}
                  </span>
                </p>
              )}
              {product.variant2 && (
                <p className={styles.variantText}>
                  {product.variant2.type} -{" "}
                  <span className={zillaSlab.className}>
                    {product.variant2.name}
                  </span>
                </p>
              )}
            </section>
            <section className={`${poppins.className}`}>
              <p className={styles.price}>
                {formatNumberToValue(product.price)}
              </p>
              <p className={styles.promotionPrice}>
                {formatNumberToValue(product.promotionPrice)}
              </p>
            </section>
          </section>
          <section
            className={`${styles.quantitySection} ${styles.desktopSection}`}
          >
            <ProductQuantityInput
              fontSize={20}
              quantity={product.quantity}
              onIncrease={() => increaseProductQuantity(product.id)}
              onDecrease={() => decreaseProductQuantity(product.id)}
            />
            <section className={styles.totalPriceSection}>
              <p className={zillaSlab.className}>Total</p>
              <section className={`${poppins.className}`}>
                <p className={styles.price}>
                  {formatNumberToValue(product.price * product.quantity)}
                </p>
                <p className={`${styles.promotionPrice} ${styles.greenText}`}>
                  {formatNumberToValue(
                    product.promotionPrice * product.quantity
                  )}
                </p>
              </section>
            </section>
          </section>
        </section>
      </section>
      <section className={`${styles.quantitySection} ${styles.mobileSection}`}>
        <ProductQuantityInput
          fontSize={20}
          quantity={product.quantity}
          onIncrease={() => increaseProductQuantity(product.id)}
          onDecrease={() => decreaseProductQuantity(product.id)}
        />
        <section className={styles.totalPriceSection}>
          <p className={zillaSlab.className}>Total</p>
          <section className={`${poppins.className}`}>
            <p className={styles.price}>
              {formatNumberToValue(product.price * product.quantity)}
            </p>
            <p className={`${styles.promotionPrice} ${styles.greenText}`}>
              {formatNumberToValue(product.promotionPrice * product.quantity)}
            </p>
          </section>
        </section>
      </section>
    </main>
  );
}
