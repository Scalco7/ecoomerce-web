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
  padding?: number;
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
  padding = 20,
}: PrimaryButtonProps) {
  const background: string = isDark ? "black" : "white";
  const color: string = isDark ? "white" : "black";

  return (
    <main
      className={styles.main}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      style={{
        width: width,
        height: height,
        fontSize: fontSize,
        background: background,
        color: color,
        borderRadius: borderRadius,
        padding: padding,
        justifyContent: text ? "space-between" : "center",
      }}
    >
      {text && <p>{text}</p>}
      <CartIcon size={iconSize} color={color} />
    </main>
  );
}
