import styles from "./style.module.css";
import PrimaryButton from "@/components/atoms/primaryButton/primaryButton";
import ProductWithTag from "@/components/molecules/productWithTag/productWithTag";
import { useClientMediaQuery } from "@/hooks/useClientMediaQuery";
import { Zilla_Slab } from "next/font/google";
import Image from "next/image";

const zillaSlabBolder = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function CapSellSection() {
  const isTablet = useClientMediaQuery("(min-width: 768px)");
  const isDesktop = useClientMediaQuery("(min-width: 992px)");
  const isBigScreen = useClientMediaQuery("(min-width: 1320px)");
  const title = "Bonés do hype";
  const buttonText = "Adquirir o Hype";

  return (
    <main className={`${styles.main} `}>
      {!isDesktop && (
        <section className={styles.titleMobileSection}>
          <Image
            src={"/cap-title-section.png"}
            width={40}
            height={40}
            alt={"logo imagem"}
          />
          <p className={styles.mobileTitle}>{title}</p>
        </section>
      )}
      <ProductWithTag
        imgSrc={
          isTablet ? "/caps-buy-home-1.png" : "/caps-buy-home-1-unline.png"
        }
        width={isBigScreen ? "600px" : isTablet ? "450px" : "300px"}
        height={isBigScreen ? "600px" : isTablet ? "450px" : "300px"}
        tags={[
          {
            price: 29,
            onCLick: () => {},
            position: {
              left: isBigScreen ? 30 : -5,
              bottom: isBigScreen ? 203 : 150,
            },
          },
          {
            price: 39,
            onCLick: () => {},
            position: {
              right: isBigScreen ? 42 : 5,
              bottom: isBigScreen ? 227 : 168,
            },
          },
        ]}
      />
      {!isDesktop && (
        <footer className={styles.mobileFooter}>
          <p className={styles.mobileText}>
            Leve a força Banana Monkey com você para onde quiser
          </p>
          <PrimaryButton
            text={buttonText}
            fontSize={18}
            borderRadius={10}
            isDark={true}
            width={"210px"}
            height={"50px"}
            iconSize={24}
            onClick={() => {}}
          />
        </footer>
      )}
      {isDesktop && (
        <section className={styles.dataBox}>
          <p className={styles.title}>Bonés do hype</p>
          <section className={styles.textSection}>
            <p>
              • O que faltava no seu look, para levar a força Banana{" "}
              {"Monkey's"} com você no seu dia a dia.
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
              text={buttonText}
              fontSize={isBigScreen ? 30 : 23}
              borderRadius={15}
              isDark={true}
              width={isBigScreen ? "300px" : "250px"}
              height={isBigScreen ? "80px" : "70px"}
              iconSize={isBigScreen ? 38 : 30}
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
      )}
    </main>
  );
}
