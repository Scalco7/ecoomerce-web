interface MinusIconProps {
  width?: string | number;
  height?: string | number;
}

export default function MinusIcon({ width, height }: MinusIconProps) {
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
        d="M26.813 21.938H12.188a2.438 2.438 0 110-4.875h14.624a2.438 2.438 0 110 4.875z"
      ></path>
    </svg>
  );
}
