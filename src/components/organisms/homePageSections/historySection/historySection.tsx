import styles from "./style.module.css";
import PhotoHistoryCarousel from "@/components/molecules/photoHistoryCarousel/photoHistoryCarousel";
import { PhotoHistoryProps } from "@/components/atoms/photoHistory/photoHistory";
import TransitionArrowLines from "@/components/atoms/transitionArrowLines/transitionArrowLines";
import { Zilla_Slab_Highlight } from "next/font/google";
import Image from "next/image";

const zillaSlabHighlight = Zilla_Slab_Highlight({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function HistorySection() {
  const monkeysHistory = {
    imageSrc: "/banana-comp-teste.jpg",
    history:
      "Como toda boa história, a nossa começa com um grupo de pessoas que não se contentava em simplesmente ser igual a todo mundo. Era um grupo de visionários, de espíritos livres que desejavam algo mais do que apenas seguir as normas impostas pela sociedade. Eles queriam mais: queriam zuar, queriam se divertir, e acima de tudo, queriam ganhar. Inspirados pela busca incessante por autenticidade e por um estilo de vida vibrante, esses indivíduos decidiram se unir e criar algo verdadeiramente especial. Assim, a história do Banana Monkey's começa com oito amigos audaciosos que, motivados pelo desejo de transformar suas vidas e começar a aproveitar cada momento de verdade, embarcaram nessa jornada única. Com paixão, determinação e um toque de loucura, esses oito caras criaram uma amizade que não só reflete suas personalidades ousadas e divertidas, mas também inspira outros a seguirem seus próprios caminhos e viverem com intensidade. É essa busca pela autenticidade e por viver cada momento que define a essência do Banana Monkey's.",
  };

  const luidaoHistory = {
    title: "Luidao",
    titleColor: "#FF5F00",
    imageSrc: "/luidao-teste.jpg",
    history:
      "Para mostrar cada um dos Banana Monkey's, nada melhor do que começar pelo membro que define a essência do grupo: Luidão. Ele é o mais autêntico e imprevisível, alguém de quem você nunca sabe o que esperar. Conhecido como o último romântico, ele está sempre apaixonado, e se a garota for ruiva, é paixão à primeira vista. Ele é um verdadeiro Banana Monkey. Além de ser um eterno apaixonado, Luigi adora jogar um fute e dar altos rolês aleatórios. Ele tem a habilidade de transformar qualquer situação em uma aventura divertida, sempre fazendo as coisas do seu jeito com muita espontâniedade. Mais do que isso, ele é cara leal, alguém em quem você pode confiar em qualquer momento. Ele é, sem dúvida, a essência, um companheiro de todas as horas, que torna tudo mais da hora e ajuda com o que precisar.",
  };

  const historys: PhotoHistoryProps[] = [monkeysHistory, luidaoHistory];

  return (
    <main className={styles.main}>
      <TransitionArrowLines initColor={"#fff"} endColor={"#000"} />
      <header className={styles.header}>
        <section>
          <p className={styles.text}> - Não somos apenas uma marca</p>
          <p className={styles.text}>
            {" "}
            +{" "}
            <span className={zillaSlabHighlight.className}>
              Banana Monkey's é um estilo de vida
            </span>
          </p>
        </section>
        <section className={styles.imgSection}>
          <Image
            src={"/monkey-logo-purple.png"}
            alt="logo purple"
            fill={true}
          />
        </section>
      </header>
      <PhotoHistoryCarousel historys={historys} />
    </main>
  );
}
