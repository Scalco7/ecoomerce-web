import { openAsBlob } from "fs";
import { IconsProps } from "../icons.props";
import styles from "./styles.module.css";

interface ChevronIconButtonProps extends IconsProps {
  side: "left" | "right";
  opacity: number;
}

export default function ChevronIconButton({
  size,
  side,
  color,
  opacity,
}: ChevronIconButtonProps) {
  const left = (
    <svg
      className={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 100 100"
    >
      <g clipPath="url(#clip0_186_2961)">
        <path
          fill={color}
          fillOpacity={opacity}
          fillRule="evenodd"
          d="M22.013 53.25l50.029 45.583a4.235 4.235 0 005.946 0 4.177 4.177 0 000-5.916L30.975 50.083 77.988 7.208c1.637-1.625 1.637-4.25 0-5.916a4.235 4.235 0 00-5.946 0l-50.03 45.583c-.874.875-1.25 2.041-1.191 3.208-.058 1.125.317 2.292 1.192 3.167z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_186_2961">
          <path
            fill={color}
            d="M0 0H100V100H0z"
            transform="rotate(180 50 50)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
  const right = (
    <svg
      className={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 100 100"
    >
      <g clipPath="url(#clip0_186_2966)">
        <path
          fill={color}
          fillOpacity={opacity}
          fillRule="evenodd"
          d="M77.987 46.75L27.958 1.167a4.235 4.235 0 00-5.946 0 4.177 4.177 0 000 5.916l47.013 42.834-47.013 42.875c-1.637 1.625-1.637 4.25 0 5.916a4.236 4.236 0 005.946 0l50.03-45.583c.874-.875 1.25-2.041 1.191-3.208.058-1.125-.317-2.292-1.192-3.167z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_186_2966">
          <path fill={color} d="M0 0H100V100H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );

  return side == "left" ? left : right;
}
