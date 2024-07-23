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
            <section className={styles.paymentTypesList}></section>
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
      </main>
      <footer></footer>
    </footer>
  );
}
