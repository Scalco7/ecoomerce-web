"use client";
import { Zilla_Slab } from "next/font/google";
import styles from "./style.module.css";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import Footer from "@/components/molecules/footer/footer";
import SecondaryButton from "@/components/atoms/secondaryButton/secondaryButton";
import CorrectIcon from "@/components/icons/correctIcon/correctIcon";

const zillaSlab = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const zillaSlabMedium = Zilla_Slab({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export default function CheckoutConfirmed() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <HeaderNavigation />
      </header>
      <section className={`${styles.body}`}>
        <section className={styles.titleSection}>
          <CorrectIcon size={40} color="#000" />
          <p className={zillaSlab.className}>Pedido confirmado</p>
        </section>
        <section className={styles.dataSection}>
          <p className={`${zillaSlab.className}  ${styles.titleText}`}>
            Status do pedido: Em separação
          </p>
          <section className={styles.subSection}>
            <p className={`${zillaSlabMedium.className} ${styles.normalText}`}>
              Seu pedido foi confirmado e pago, estamos separando as peças de
              roupa e enviaremos para o seu endereço. Todas as atualizações do
              pedido estaremos enviando ao seu e-mail.
            </p>
            <p className={`${zillaSlabMedium.className} ${styles.normalText}`}>
              Agradecemos a confiança e temos certeza de que você de agora em
              diente é um Banana Monkey!!
            </p>
            <p className={`${zillaSlabMedium.className} ${styles.normalText}`}>
              Por isso, seja confiante e corajoso, mas acima de tudo aproveite a
              vida, pois só temos essa.
            </p>
            <p className={`${zillaSlabMedium.className} ${styles.normalText}`}>
              Qualquer dúvida ou sugestão você pode estar nos contatando pelo
              e-mail, ou pelo nosso número no WhatsApp.
            </p>
          </section>

          <section className={styles.orderDetailsSection}>
            <p className={styles.titleText}>Resumo do pedido: </p>
            <section
              className={`${styles.orderDetailsBox} ${styles.normalText}`}
            >
              <p className={zillaSlabMedium.className}>1x - Regata clássica</p>
              <p className={zillaSlabMedium.className}>2x - Boné branco</p>
              <p className={zillaSlabMedium.className}>
                1x - Camiseta P ugly monkey
              </p>
            </section>
          </section>
          <div className={styles.boxButton}>
            <SecondaryButton
              width={"100%"}
              height={"54px"}
              text="Voltar a loja"
              textTransform="none"
              onClick={() => {}}
            />
          </div>
        </section>
        <Footer />
      </section>
    </main>
  );
}
