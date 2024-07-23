import { IconsProps } from "../icons.props";

export default function MinusIcon({ size = 39, color = "#000" }: IconsProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 39 39"
    >
      <path
        fill={color}
        d="M26.813 21.938H12.188a2.438 2.438 0 110-4.875h14.624a2.438 2.438 0 110 4.875z"
      ></path>
    </svg>
  );
}
