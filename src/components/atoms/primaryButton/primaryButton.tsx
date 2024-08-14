import CartIcon from "../../icons/cartIcon/cartIcon";
import styles from "./styles.module.css";

interface PrimaryButtonProps {
  text?: string;
  borderRadius: number;
  isDark: boolean;
  width: string;
  height: string;
  fontSize?: number;
  iconSize: number;
  onClick: () => void;
}

export default function PrimaryButton({
  text,
  borderRadius,
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
        borderRadius: borderRadius,
        justifyContent: text ? "space-between" : "center",
      }}
    >
      {text && <p>{text}</p>}
      <CartIcon size={iconSize} color={color} />
    </main>
  );
}
