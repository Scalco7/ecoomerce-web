import { IconsProps } from "../icons.props";

export default function CircleCloseIcon({
  size = 30,
  color = "#000",
}: IconsProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 30 30"
    >
      <g fill={color} clipPath="url(#clip0_242_3985)">
        <path d="M22.5 7.5a1.25 1.25 0 00-1.768 0L15 13.232 9.267 7.5A1.25 1.25 0 007.5 9.268L13.232 15 7.5 20.733A1.25 1.25 0 009.267 22.5L15 16.767l5.732 5.733a1.25 1.25 0 001.768-1.767L16.767 15 22.5 9.268a1.25 1.25 0 000-1.768z"></path>
        <g clipPath="url(#clip1_242_3985)">
          <path d="M20 10a1.25 1.25 0 00-1.767 0L15 13.233 11.768 10A1.25 1.25 0 0010 11.768L13.233 15 10 18.233A1.25 1.25 0 0011.768 20L15 16.768 18.233 20A1.25 1.25 0 0020 18.233L16.768 15 20 11.768A1.25 1.25 0 0020 10z"></path>
          <path d="M15 0a15 15 0 1015 15A15.016 15.016 0 0015 0zm0 27.5A12.5 12.5 0 1127.5 15 12.514 12.514 0 0115 27.5z"></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_242_3985">
          <path fill="#fff" d="M0 0H30V30H0z"></path>
        </clipPath>
        <clipPath id="clip1_242_3985">
          <path fill="#fff" d="M0 0H30V30H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
