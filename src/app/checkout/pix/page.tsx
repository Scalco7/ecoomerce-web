"use client";
import { Zilla_Slab } from "next/font/google";
import styles from "./style.module.css";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import PixIcon from "@/components/icons/pixIcon/pixIcon";
import Footer from "@/components/molecules/footer/footer";
import toast, { Toaster } from "react-hot-toast";
import PrimaryButton from "@/components/atoms/primaryButton/primaryButton";
import SecondaryButton from "@/components/atoms/secondaryButton/secondaryButton";
import { darkToastOptions } from "@/utils/toast.utils";
import Image from "next/image";

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

async function copyTextToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    throw err;
  }
}

export default function CheckoutPix() {
  async function handleCopyPixCode() {
    try {
      await copyTextToClipboard("copia e cola");
      toast.success("Código pix copiado com sucesso.", darkToastOptions);
    } catch (err) {
      toast.success("Erro ao copiar código pix.", darkToastOptions);
    }
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <HeaderNavigation />
      </header>
      <section className={`${styles.body}`}>
        <section className={styles.titleSection}>
          <PixIcon size={40} color="#000" />
          <p className={zillaSlab.className}>Pagamento pix</p>
        </section>
        <section className={styles.dataSection}>
          <section className={styles.subSection}>
            <p className={styles.subTitles}>
              Escaneie o Qr code para fazer o pagamento
            </p>
            <div className={styles.qrCodeBox}>
              <div className={styles.qrCode}>
                <Image
                  src={"/mocks/qrcode.png"}
                  alt={"pix qr code"}
                  fill={true}
                  sizes="500px"
                />
              </div>
            </div>
          </section>
          <section className={styles.subSection}>
            <p className={styles.subTitles}>
              Copie o código para o pagamento do pix copia e cola clicando no
              botão abaixo.
            </p>
            <div className={styles.boxButton}>
              <SecondaryButton
                width={"100%"}
                height={"54px"}
                text="Copiar código pix copia e cola"
                Icon={<PixIcon size={32} color="#fff" />}
                textTransform="none"
                onClick={handleCopyPixCode}
              />
            </div>
          </section>
          <section className={styles.subSection}>
            <p className={styles.subTitles}>Como efetuar um pagamento Pix:</p>
            <p className={`${zillaSlabMedium.className} ${styles.stepText}`}>
              1 - Entre no seu celular, e acesso o aplicativo do seu banco,
              dentro do aplicativo, acesse a área pix.
            </p>
            <p className={`${zillaSlabMedium.className} ${styles.stepText}`}>
              2 - Na área pix, escolha a opção de pagar com Qr code, e aponte a
              câmera do seu celular para o Qr code mostrado acima.
            </p>
            <p className={`${zillaSlabMedium.className} ${styles.stepText}`}>
              3 - Assim que a leitura for concluída, as informações de pagamento
              aparecerão na tela e, se estiver tudo certo, basta confirmar a
              transação.
            </p>
            <p className={`${zillaSlabMedium.className} ${styles.stepText}`}>
              4 - Agora é só aguardar que o pagamento será processado
              automáticamente.
            </p>
          </section>
        </section>
        <Footer />
      </section>
      <div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
    </main>
  );
}
