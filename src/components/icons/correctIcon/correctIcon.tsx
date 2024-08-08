import { IconsProps } from "../icons.props";

export default function CorrectIcon({ size = 39, color = "#000" }: IconsProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M12 1.8A10.2 10.2 0 1022.2 12 10.192 10.192 0 0012 1.8zm0 18a7.8 7.8 0 117.8-7.8 7.785 7.785 0 01-7.8 7.8zm3-10.98l-3.48 4.2-2.4-1.74c-.54-.42-1.26-.3-1.68.24-.42.54-.3 1.26.24 1.68.72.54 1.5 1.08 2.22 1.62.54.36 1.02.9 1.68.96.18 0 .42 0 .6-.12l.36-.36 2.7-3.24c.48-.6.96-1.14 1.44-1.74.36-.48.48-1.08.06-1.56l-.18-.18c-.42-.3-1.14-.24-1.56.24z"
      ></path>
    </svg>
  );
}
