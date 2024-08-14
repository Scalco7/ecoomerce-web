import Image from "next/image";
import styles from "./style.module.css";
import { useClientMediaQuery } from "@/hooks/useClientMediaQuery";

interface TransitionArrowLinesProps {
  initColor: string;
  endColor: string;
}

export default function TransitionArrowLines({
  initColor,
  endColor,
}: TransitionArrowLinesProps) {
  const isDesktop = useClientMediaQuery("(min-width: 576px)");

  return (
    <main
      className={styles.main}
      style={{
        background: `linear-gradient(${initColor} 0%, ${endColor} 100%)`,
      }}
    >
      <Image
        src={"/arrow-transiction.svg"}
        alt={"Linha"}
        width={isDesktop ? 1920 : 1259.02}
        height={isDesktop ? 183 : 120}
      />
    </main>
  );
}
