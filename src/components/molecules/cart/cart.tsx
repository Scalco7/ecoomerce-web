import CartIcon from "@/components/icons/cartIcon/cartIcon";
import styles from "./style.module.css";
import { Zilla_Slab } from "next/font/google";
import ShowPriceCart from "@/components/atoms/showPriceCart/showPriceCart";
import FreeShippingCounterCart from "@/components/atoms/freeShippingCounterCart/freeShippingCounterCart";
import ProductCartBox from "../productCartBox/productCartBox";
import SecondaryButton from "@/components/atoms/secondaryButton/secondaryButton";

const zillaSlab = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function Cart() {
  return (
    <main className={styles.main}>
      <section className={styles.titleBox}>
        <CartIcon size={28} color="#000" />
        <p className={`${styles.title} ${zillaSlab.className}`}>
          Carrinho de compras
        </p>
      </section>
      <section className={styles.productsSection}>
        <ProductCartBox
          product={{
            id: "p-1",
            name: "Boné clássico",
            imgUrl: "/teste.png",
            price: 49.99,
            promotionPrice: 39,
            availableQuantity: 8,
            quantity: 1,
            variant1: {
              name: "Cor",
              type: "Preto",
            },
          }}
          onRemove={(productId) => {
            console.log("removeu " + productId);
          }}
        />

        <ProductCartBox
          product={{
            id: "p-1",
            name: "Boné clássico do b a n a n a m o n k e y s",
            imgUrl: "/teste.png",
            price: 49.99,
            promotionPrice: 39,
            availableQuantity: 8,
            quantity: 1,
            variant1: {
              name: "Cor",
              type: "Preto",
            },
            variant2: {
              name: "Tamanho",
              type: "PP",
            },
          }}
          onRemove={(productId) => {
            console.log("removeu " + productId);
          }}
        />

        <ProductCartBox
          product={{
            id: "p-1",
            name: "Boné clássico do b a n a n a m o n k e y s",
            imgUrl: "/teste.png",
            price: 49.99,
            promotionPrice: 39,
            availableQuantity: 8,
            quantity: 1,
            variant1: {
              name: "Cor",
              type: "Preto",
            },
            variant2: {
              name: "Tamanho",
              type: "PP",
            },
          }}
          onRemove={(productId) => {
            console.log("removeu " + productId);
          }}
        />

        <ProductCartBox
          product={{
            id: "p-1",
            name: "Boné clássico do b a n a n a m o n k e y s",
            imgUrl: "/teste.png",
            price: 49.99,
            promotionPrice: 39,
            availableQuantity: 8,
            quantity: 1,
            variant1: {
              name: "Cor",
              type: "Preto",
            },
            variant2: {
              name: "Tamanho",
              type: "PP",
            },
          }}
          onRemove={(productId) => {
            console.log("removeu " + productId);
          }}
        />
      </section>
      <section className={styles.botttomSection}>
        <FreeShippingCounterCart freeShippingValue={300} value={20} />
        <ShowPriceCart
          price={256}
          priceWithDiscount={199}
          productQuantity={7}
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
