import ProductBox from "@/components/molecules/productBox/productBox";
import styles from "./style.module.css";

export default function ShopSection() {
  return (
    <main className={styles.main}>
      <header className={styles.titleBox}>
        <p className={styles.titleText}>Nosso Estilo</p>
      </header>
      <section className={styles.productsSection}>
        <ProductBox
          width="250px"
          colorScheme={"yellow"}
          product={{
            id: "",
            imgUrl: "./teste.png",
            name: "Boné clássico do Banana Monkeys, pronto para você vencer vários jogos",
            price: 89,
            promotionPrice: 79,
          }}
        />
        <ProductBox
          width="250px"
          colorScheme={"yellow"}
          product={{
            id: "",
            imgUrl: "./teste.png",
            name: "Boné clássico do Banana Monkeys, pronto para você vencer vários jogos",
            price: 89,
            promotionPrice: 79,
          }}
        />
        <ProductBox
          width="250px"
          colorScheme={"yellow"}
          product={{
            id: "",
            imgUrl: "./teste.png",
            name: "Boné clássico do Banana Monkeys, pronto para você vencer vários jogos",
            price: 89,
            promotionPrice: 79,
          }}
        />
        <ProductBox
          width="250px"
          colorScheme={"yellow"}
          product={{
            id: "",
            imgUrl: "./teste.png",
            name: "Boné clássico do Banana Monkeys, pronto para você vencer vários jogos",
            price: 89,
            promotionPrice: 79,
          }}
        />
        <ProductBox
          width="250px"
          colorScheme={"yellow"}
          product={{
            id: "",
            imgUrl: "./teste.png",
            name: "Boné clássico do Banana Monkeys, pronto para você vencer vários jogos",
            price: 89,
            promotionPrice: 79,
          }}
        />
      </section>
    </main>
  );
}
