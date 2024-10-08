import CartIcon from "@/components/icons/cartIcon/cartIcon";
import styles from "./style.module.css";
import { Zilla_Slab } from "next/font/google";
import ShowPriceCart from "@/components/atoms/showPriceCart/showPriceCart";
import FreeShippingCounterCart from "@/components/atoms/freeShippingCounterCart/freeShippingCounterCart";
import ProductCartBox from "../productCartBox/productCartBox";
import SecondaryButton from "@/components/atoms/secondaryButton/secondaryButton";
import { useCart } from "@/states/cartState";
import CircleCloseIcon from "@/components/icons/circleCloseIcon/circleCloseIcon";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { darkToastOptions } from "@/utils/toast.utils";

const zillaSlab = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

interface CartProps {
  closeCart: () => void;
}

export default function Cart({ closeCart }: CartProps) {
  const { products, productsQuantity, totalPrice, totalPromotionPrice } =
    useCart();
  const router = useRouter();

  function handleFinishBuy() {
    if (productsQuantity > 0) router.push("/checkout/cart");
    else toast.error("Selecione ao menos um produto.", darkToastOptions);
  }

  return (
    <main className={styles.main}>
      <section className={styles.titleBox}>
        <CartIcon size={28} color="#000" />
        <p className={`${styles.title} ${zillaSlab.className}`}>
          Carrinho de compras
        </p>
      </section>
      <section className={styles.productsSection}>
        {products.map((product, index) => (
          <ProductCartBox key={"cart-product-" + index} product={product} />
        ))}
      </section>
      <section className={styles.bottomSection}>
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
            onClick={handleFinishBuy}
          />
          <section className={styles.textButton} onClick={closeCart}>
            continuar comprando
          </section>
        </section>
      </section>
      <section className={styles.closeSection} onClick={closeCart}>
        <CircleCloseIcon size={30} color="#000" />
      </section>
    </main>
  );
}
