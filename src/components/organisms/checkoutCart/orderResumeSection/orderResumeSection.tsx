import { useCart } from "@/states/cartState";
import styles from "./style.module.css";
import SecondaryButton from "@/components/atoms/secondaryButton/secondaryButton";
import { Poppins, Zilla_Slab } from "next/font/google";
import { formatNumberToValue } from "@/utils/number.utils";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

const poppinsBold = Poppins({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const zillaSlabBold = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function OrderResumeSection() {
  const { totalPromotionPrice } = useCart();
  const router = useRouter();

  function goShop() {
    router.push("/shop");
  }

  function goToPayment() {
    router.push("/checkout/payment");
  }

  return (
    <main className={styles.main}>
      <p className={`${styles.title} ${zillaSlabBold.className}`}>
        Resumo do Pedido
      </p>
      <section className={styles.pricesSection}>
        <section className={styles.priceBox}>
          <p>Produtos:</p>
          <p className={poppins.className}>
            {formatNumberToValue(totalPromotionPrice)}
          </p>
        </section>
        <section className={styles.priceBox}>
          <p>Entrega:</p>
          <p className={poppins.className}>
            {formatNumberToValue(totalPromotionPrice)}
          </p>
        </section>
        <section className={styles.priceBox}>
          <p>Cupom:</p>
          <p className={poppins.className}>
            - {formatNumberToValue(totalPromotionPrice)}
          </p>
        </section>
        <section className={styles.priceBox}>
          <p>Total:</p>
          <p className={`${poppinsBold.className} ${styles.totalText}`}>
            {formatNumberToValue(totalPromotionPrice)}
          </p>
        </section>
      </section>
      <section className={styles.buttonsSection}>
        <SecondaryButton
          text={"FECHAR PEDIDO"}
          width={"100%"}
          height={"45px"}
          fontSize={20}
          onClick={goToPayment}
        />
        <p className={styles.textButton} onClick={goShop}>
          continuar comprando
        </p>
      </section>
    </main>
  );
}
