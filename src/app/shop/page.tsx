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
        <div style={{ height: 300 }}></div>
        <CategorySection
          title="Regatas"
          colorScheme="yellow"
          hasTransiction={true}
          products={[productTeste, productTeste, productTeste]}
        />
        <div style={{ height: 20 }}></div>
        <CategorySection
          title="Bonés"
          colorScheme="white"
          hasTransiction={false}
          products={[productTeste, productTeste, productTeste]}
        />
        <div style={{ height: 20 }}></div>
        <CategorySection
          title="Regatas"
          colorScheme="yellow"
          hasTransiction={false}
          products={[productTeste, productTeste, productTeste]}
        />
        <Footer />
      </section>
    </main>
  );
}
