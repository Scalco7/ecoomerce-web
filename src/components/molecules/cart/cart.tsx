import CartIcon from "@/components/icons/cartIcon/cartIcon";
import styles from "./style.module.css";
import { Zilla_Slab } from "next/font/google";
import ShowPriceCart from "@/components/atoms/showPriceCart/showPriceCart";
import FreeShippingCounterCart from "@/components/atoms/freeShippingCounterCart/freeShippingCounterCart";
import ProductCartBox from "../productCartBox/productCartBox";
import SecondaryButton from "@/components/atoms/secondaryButton/secondaryButton";
import { useCart } from "@/states/cartState";

const zillaSlab = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function Cart() {
  const {
    products,
    productsQuantity,
    totalPrice,
    totalPromotionPrice,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = useCart();

  return (
    <main className={styles.main}>
      <section className={styles.titleBox}>
        <CartIcon size={28} color="#000" />
        <p className={`${styles.title} ${zillaSlab.className}`}>
          Carrinho de compras
        </p>
      </section>
      <section className={styles.productsSection}>
        {products.map((product) => (
          <ProductCartBox
            product={product}
            onRemove={removeProduct}
            onIncrease={increaseProductQuantity}
            onDecrease={decreaseProductQuantity}
          />
        ))}
      </section>
      <section className={styles.botttomSection}>
        <FreeShippingCounterCart
          freeShippingValue={300}
          value={totalPromotionPrice}
        />
        <ShowPriceCart
          price={totalPrice}
          priceWithDiscount={totalPromotionPrice}
          productQuantity={productsQuantity}
        />
        <section className={styles.buttonsSection}>
          <SecondaryButton
            text={"FINALIZAR COMPRA"}
            width={"100%"}
            height={"45px"}
            fontSize={20}
            onClick={() => console.log("clicou no botão")}
          />
          <section
            className={styles.textButton}
            onClick={() => {
              console.log("continuar comprando");
            }}
          >
            continuar comprando
          </section>
        </section>
      </section>
    </main>
  );
}
