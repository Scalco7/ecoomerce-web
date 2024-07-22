interface CloseIconProps {
  size?: string | number;
  color?: string;
}

export default function CloseIcon({
  size = 30,
  color = "#fff",
}: CloseIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        fill={color}
        d="M25.933 4.16a1.25 1.25 0 00-1.768 0l-9.118 9.118-9.118-9.117A1.25 1.25 0 104.16 5.928l9.118 9.118-9.118 9.118a1.25 1.25 0 001.768 1.768l9.118-9.118 9.118 9.118a1.25 1.25 0 101.768-1.768l-9.119-9.118 9.119-9.118a1.25 1.25 0 000-1.767z"
      ></path>
    </svg>
  );
}
