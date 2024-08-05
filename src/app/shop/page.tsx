"use client";

import Footer from "@/components/molecules/footer/footer";
import styles from "./style.module.css";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import CategorySection from "@/components/organisms/shopPageSections/categorySection/categorySection";

export default function Shop() {
  const productTeste = {
    id: "",
    imgUrl: "/teste.png",
    name: "Boné clássico do Banana Monkeys, pronto para você vencer vários jogos",
    price: 89,
    promotionPrice: 79,
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <HeaderNavigation />
      </header>
      <section className={`${styles.body}`}>
        <CategorySection
          title="Regatas"
          colorScheme="yellow"
          products={[productTeste, productTeste, productTeste]}
        />
        <CategorySection
          title="Bonés"
          colorScheme="white"
          products={[productTeste, productTeste, productTeste]}
        />
        <Footer />
      </section>
    </main>
  );
}
