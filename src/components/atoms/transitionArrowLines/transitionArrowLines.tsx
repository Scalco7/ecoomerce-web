import Image from "next/image";
import styles from "./style.module.css";

interface TransitionArrowLinesProps {
  initColor: string;
  endColor: string;
}

export default function TransitionArrowLines({
  initColor,
  endColor,
}: TransitionArrowLinesProps) {
  return (
    <main
      className={styles.main}
      style={{
        background: `linear-gradient(${initColor} 0%, ${endColor} 100%)`,
      }}
    >
      <Image
        src={"./arrow-transiction.svg"}
        alt={"Linha"}
        width={1920}
        height={183}
      />
    </main>
  );
}
