import styles from "./style.module.css";
import PrimaryButton from "@/components/atoms/primaryButton/primaryButton";
import ProductWithTag from "@/components/molecules/productWithTag/productWithTag";
import { Zilla_Slab } from "next/font/google";

const zillaSlabBolder = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function TShirtSellSection() {
  return (
    <main className={`${styles.main} `}>
      <ProductWithTag
        imgSrc={"/t-shirt-tag-home-1.png"}
        width={"600px"}
        height={"600px"}
        tags={[
          { price: 89, onCLick: () => {}, position: { right: 25, top: 30 } },
        ]}
      />
      <section className={styles.dataBox}>
        <p className={styles.title}>Camisetas no estilo</p>
        <section className={styles.textSection}>
          <p>
            • Para quem respira esporte, para quem transborda garra e suor, para
            quem busca superar limites e conquistar vitórias.
          </p>
          <p>
            • Conforto, estilo e vitórias foi a combinação que nos deu a
            inspiração para criar esta obra de arte.
          </p>
          <p>
            • Banana {"Monkey's"} é a sua marca, a união perfeita entre paixão
            pelo esporte e a busca por um lifestyle único e autêntico.
          </p>
        </section>
        <section className={styles.bottomSection}>
          <PrimaryButton
            text="Ficar Estiloso"
            fontSize={30}
            rounded={true}
            isDark={true}
            width={"300px"}
            height={"80px"}
            iconSize={38}
            onClick={() => {}}
          />
          <section
            className={`${styles.detailsSection} ${zillaSlabBolder.className}`}
          >
            <div className={styles.detailsBox}>
              <p className={styles.textColored}>+ Qualidade</p>
              <p>+ Diversão</p>
            </div>
            <div className={styles.detailsBox}>
              <p>+ Estilo</p>
              <p className={styles.textColored}>+ Conforto</p>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
