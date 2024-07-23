import Image from "next/image";
import styles from "./style.module.css";
import { Zilla_Slab } from "next/font/google";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface FooterProps {}

const zillaSlab = Zilla_Slab({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <main className={styles.main}>
        <section className={styles.subMainSection}>
          <section className={styles.section}>
            <p>Redes Sociais</p>
            <section className={styles.instaListBox}>
              <section className={zillaSlab.className}>
                <p>Acompanhe a marca nas redes sociais</p>
                <Link
                  className={styles.instaNameBox}
                  href={"https://www.instagram.com/bananamonkeys.club"}
                  target="_blank"
                >
                  <Image
                    src={"/insta-logo.svg"}
                    width={20}
                    height={20}
                    alt="Logo do instagram"
                  />
                  <p>@bananamonkeys.club</p>
                </Link>
              </section>
              <section className={zillaSlab.className}>
                <p>Acompanhe as nossas aventuras</p>
                <Link
                  className={styles.instaNameBox}
                  href={"https://www.instagram.com/banana.monk3ys"}
                  target="_blank"
                >
                  <Image
                    src={"/insta-logo.svg"}
                    width={20}
                    height={20}
                    alt="Logo do instagram"
                  />
                  <p>@banana.monk3ys</p>
                </Link>
              </section>
            </section>
          </section>
          <section className={styles.section}>
            <p>Políticas</p>
            <section
              className={`${styles.policiesList} ${zillaSlab.className}`}
            >
              <Link href="#" target="_blank">
                Política de entrega
              </Link>
              <Link href="#" target="_blank">
                Política de trocas e devoluções
              </Link>
              <Link href="#" target="_blank">
                Política de privacidade
              </Link>
              <Link href="#" target="_blank">
                Política de prazo e formas de entrega
              </Link>
            </section>
          </section>
        </section>
        <section className={styles.subMainSection}>
          <section className={styles.section}>
            <p>Meios de pagamento</p>
            <section className={styles.paymentTypesList}>
              <Image
                src={"/payment-methods/Visa.svg"}
                width={0}
                height={0}
                style={{ width: "50px", height: "auto" }}
                alt={"Visa"}
              />
              <Image
                src={"/payment-methods/Amex.svg"}
                width={0}
                height={0}
                style={{ width: "50px", height: "auto" }}
                alt={"American Express"}
              />
              <Image
                src={"/payment-methods/Hipercard.svg"}
                width={0}
                height={0}
                style={{ width: "50px", height: "auto" }}
                alt={"Hipercard"}
              />
              <Image
                src={"/payment-methods/PayPal.svg"}
                width={0}
                height={0}
                style={{ width: "50px", height: "auto" }}
                alt={"PayPal"}
              />
              <Image
                src={"/payment-methods/Mastercard.svg"}
                width={0}
                height={0}
                style={{ width: "50px", height: "auto" }}
                alt={"Mastercard"}
              />
              <Image
                src={"/payment-methods/Elo.svg"}
                width={0}
                height={0}
                style={{ width: "50px", height: "auto" }}
                alt={"Elo"}
              />
              <Image
                src={"/payment-methods/Diners.svg"}
                width={0}
                height={0}
                style={{ width: "50px", height: "auto" }}
                alt={"Diners"}
              />
              <Image
                src={"/payment-methods/Pix.svg"}
                width={0}
                height={0}
                style={{ width: "50px", height: "auto" }}
                alt={"Pix"}
              />
            </section>
          </section>
          <section className={styles.section}>
            <Image
              src={"/security-certificate.png"}
              alt={"Certificado de segurança"}
              width={250}
              height={152}
            />
          </section>
        </section>
      </main>
      <footer className={`${zillaSlab.className} ${styles.footerSection}`}>
        <p>
          CNPJ xxxxxxxxxxxx | © Todos os direitos reservados © | Banana Monkey's
          Company
        </p>
        <p>Developed By Felipe Scalco</p>
      </footer>
    </footer>
  );
}
