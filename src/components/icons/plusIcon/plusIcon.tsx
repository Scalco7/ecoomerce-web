interface PlusIconProps {
  width?: string | number;
  height?: string | number;
}

export default function PlusIcon({ width, height }: PlusIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 39 39"
    >
      <path
        fill="#000"
        d="M26.813 17.063h-4.875v-4.875a2.438 2.438 0 10-4.875 0v4.874h-4.875a2.438 2.438 0 100 4.875h4.874v4.875a2.438 2.438 0 104.875 0v-4.875h4.875a2.438 2.438 0 100-4.875z"
      ></path>
    </svg>
  );
}
