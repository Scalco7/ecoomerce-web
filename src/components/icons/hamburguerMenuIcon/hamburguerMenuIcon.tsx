import { IconsProps } from "../icons.props";

interface HamburguerMenuIconProps extends IconsProps {
  strokeWidth?: number;
}

export default function HamburguerMenuIcon({
  size = 30,
  strokeWidth = 3,
  color = "#fff",
}: HamburguerMenuIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M5 7.5h20M5 15h20M5 22.5h20"
      ></path>
    </svg>
  );
}
