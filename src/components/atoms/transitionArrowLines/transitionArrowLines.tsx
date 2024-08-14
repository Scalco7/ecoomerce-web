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
  const isMobile = useClientMediaQuery("(max-width: 575px)");

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
        width={isMobile ? 1259.02 : 1920}
        height={isMobile ? 120 : 183}
      />
    </main>
  );
}
