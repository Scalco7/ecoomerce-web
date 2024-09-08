import styles from "./style.module.css";
import PrimaryButton from "@/components/atoms/primaryButton/primaryButton";
import ProductWithTag from "@/components/molecules/productWithTag/productWithTag";
import { useClientMediaQuery } from "@/hooks/useClientMediaQuery";
import { Zilla_Slab } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface TShirtSellSectionProps {
  buyProduct: (productTypeId: string) => void;
}

const zillaSlabBolder = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function TShirtSellSection({
  buyProduct,
}: TShirtSellSectionProps) {
  const isTablet = useClientMediaQuery("(min-width: 768px)");
  const isDesktop = useClientMediaQuery("(min-width: 992px)");
  const isBigScreen = useClientMediaQuery("(min-width: 1320px)");
  const router = useRouter();

  const title = "Camisetas no estilo";
  const productId = "00000002";

  function handleBuyProduct() {
    router.push(`product/${productId}`);
  }

  return (
    <main className={`${styles.main} `}>
      {!isDesktop && (
        <section className={styles.titleMobileSection}>
          <Image
            src={"/tshirt-title-img.png"}
            width={50}
            height={50}
            alt={"logo imagem"}
          />
          <p className={styles.mobileTitle}>{title}</p>
        </section>
      )}
      <ProductWithTag
        imgSrc={
          isTablet
            ? "/t-shirt-tag-home-1.png"
            : "/t-shirt-tag-home-1-unline.png"
        }
        width={isBigScreen ? "600px" : isTablet ? "450px" : "300px"}
        height={isBigScreen ? "600px" : isTablet ? "450px" : "300px"}
        tags={[
          {
            price: 79,
            onCLick: () => buyProduct(productId),
            position: {
              right: isBigScreen ? 25 : 0,
              top: isBigScreen ? 30 : 20,
            },
          },
        ]}
      />
      {!isDesktop && (
        <footer className={styles.mobileFooter}>
          <p className={styles.mobileText}>
            Camisetas Banana {"Monkey's"}, para quem gosta de vencer
          </p>
          <PrimaryButton
            text="Ficar Estiloso"
            fontSize={20}
            borderRadius={10}
            isDark={true}
            width={"200px"}
            height={"50px"}
            iconSize={28}
            onClick={handleBuyProduct}
          />
        </footer>
      )}
      {isDesktop && (
        <section className={styles.dataBox}>
          <p className={styles.title}>{title}</p>
          <section className={styles.textSection}>
            <p>
              • Para quem respira esporte, para quem transborda garra e suor,
              para quem busca superar limites e conquistar vitórias.
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
              fontSize={isBigScreen ? 30 : 26}
              borderRadius={15}
              isDark={true}
              width={isBigScreen ? "300px" : "240px"}
              height={isBigScreen ? "80px" : "65px"}
              iconSize={isBigScreen ? 38 : 28}
              onClick={handleBuyProduct}
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
      )}
    </main>
  );
}
