interface PlusIconProps {
  size?: string | number;
  color?: string;
}

export default function PlusIcon({ size = 39, color = "#000" }: PlusIconProps) {
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
        d="M26.813 17.063h-4.875v-4.875a2.438 2.438 0 10-4.875 0v4.874h-4.875a2.438 2.438 0 100 4.875h4.874v4.875a2.438 2.438 0 104.875 0v-4.875h4.875a2.438 2.438 0 100-4.875z"
      ></path>
    </svg>
  );
}
