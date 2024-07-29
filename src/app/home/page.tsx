"use client";

import Footer from "@/components/molecules/footer/footer";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import Image from "next/image";
import styles from "./style.module.css";
import { Anton } from "next/font/google";
import ProductBox from "@/components/molecules/productBox/productBox";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <HeaderNavigation />
      </header>
      <section className={styles.firstSection}>
        <Image src={"/basquete-back-home.png"} alt="background" fill={true} />
        <section className={styles.firstTextBox}>
          <p className={`${styles.fistFirstText} ${anton.className}`}>
            Banana Monkey's
          </p>
          <p className={`${styles.fistSecondaryText}`}>Descubra a força</p>
        </section>
      </section>

      <section className={styles.shopSection}>
        <header className={styles.titleShopSection}>
          <p className={styles.titleShopText}>Nosso Estilo</p>
        </header>
        <main className={styles.mainShopSection}>
          <ProductBox
            width="250px"
            colorScheme={"yellow"}
            product={{
              id: "",
              imgUrl: "/teste.png",
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
              imgUrl: "/teste.png",
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
              imgUrl: "/teste.png",
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
              imgUrl: "/teste.png",
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
              imgUrl: "/teste.png",
              name: "Boné clássico do Banana Monkeys, pronto para você vencer vários jogos",
              price: 89,
              promotionPrice: 79,
            }}
          />
        </main>
      </section>
      <Footer />
    </main>
  );
}
