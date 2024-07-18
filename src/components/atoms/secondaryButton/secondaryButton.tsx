import styles from "./styles.module.css";

interface SecondaryButtonProps {
  text: string;
  width: string;
  height: string;
  fontSize: number;
  onClick: () => void;
}

export default function SecondaryButton({
  text,
  width,
  height,
  fontSize,
  onClick,
}: SecondaryButtonProps) {
  return (
    <main
      className={styles.main}
      onClick={onClick}
      style={{
        width: width,
        height: height,
        fontSize: fontSize,
      }}
    >
      <p>{text}</p>
    </main>
  );
}
