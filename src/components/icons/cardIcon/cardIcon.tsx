import { IconsProps } from "../icons.props";

export default function CardIcon({ size = 39, color = "#000" }: IconsProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 50 50"
    >
      <path
        stroke={color}
        strokeWidth="5"
        d="M6.75 16.667a6.25 6.25 0 016.25-6.25h25a6.25 6.25 0 016.25 6.25v16.666a6.25 6.25 0 01-6.25 6.25H13a6.25 6.25 0 01-6.25-6.25V16.667zM6.75 20.833h37.5"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeWidth="5"
        d="M29.667 31.25h6.25"
      ></path>
    </svg>
  );
}
