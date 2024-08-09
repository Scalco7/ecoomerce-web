import styles from "./style.module.css";
import PrimaryButton from "@/components/atoms/primaryButton/primaryButton";
import ProductWithTag from "@/components/molecules/productWithTag/productWithTag";
import { Zilla_Slab } from "next/font/google";

const zillaSlabBolder = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function CapSellSection() {
  return (
    <main className={`${styles.main} `}>
      <ProductWithTag
        imgSrc={"/caps-buy-home-1.png"}
        width={"600px"}
        height={"600px"}
        tags={[
          { price: 29, onCLick: () => {}, position: { left: 30, bottom: 203 } },
          {
            price: 39,
            onCLick: () => {},
            position: { right: 42, bottom: 227 },
          },
        ]}
      />
      <section className={styles.dataBox}>
        <p className={styles.title}>Bonés do hype</p>
        <section className={styles.textSection}>
          <p>
            • O que faltava no seu look, para levar a força Banana {"Monkey's"}{" "}
            com você no seu dia a dia.
          </p>
          <p>
            • Minimalistas, bonitos e radicais, trazendo o mistério e a
            versatilidade que você precisa.
          </p>
          <p>
            • Um boné de alta qualidade, feito com os melhores materias,
            perfeito para elevar seu estilo.
          </p>
        </section>
        <section className={styles.bottomSection}>
          <PrimaryButton
            text="Adquirir o Hype"
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
              <p>+ Hype</p>
            </div>
            <div className={styles.detailsBox}>
              <p>+ Força</p>
              <p className={styles.textColored}>+ Confiança</p>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
