import CartIcon from "../../icons/cartIcon/cartIcon";
import styles from "./styles.module.css";
import Image from "next/image";

interface PrimaryButtonProps {
  text?: string;
  rounded: boolean;
  isDark: boolean;
  width: string;
  height: string;
  fontSize?: number;
  iconSize: number;
  onClick: () => void;
}

export default function PrimaryButton({
  text,
  rounded,
  isDark,
  width,
  height,
  fontSize,
  iconSize,
  onClick,
}: PrimaryButtonProps) {
  const background: string = isDark ? "black" : "white";
  const color: string = isDark ? "white" : "black";

  return (
    <main
      className={styles.main}
      onClick={onClick}
      style={{
        width: width,
        height: height,
        fontSize: fontSize,
        background: background,
        color: color,
        borderRadius: rounded ? "20px" : "0px",
        justifyContent: text ? "space-between" : "center",
      }}
    >
      {text && <p>{text}</p>}
      <CartIcon size={iconSize} color={color} />
    </main>
  );
}
