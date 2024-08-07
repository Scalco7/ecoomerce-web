import { IconsProps } from "../icons.props";

export default function TruckIcon({ size = 39, color = "#000" }: IconsProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_139_1719)">
        <path
          fill={color}
          d="M19 5h-2V4a3 3 0 00-3-3H3a3 3 0 00-3 3v15h2.041c-.026.165-.04.332-.041.5a3.5 3.5 0 107 0 3.466 3.466 0 00-.041-.5h6.082c-.026.165-.04.332-.041.5a3.5 3.5 0 107 0 3.475 3.475 0 00-.041-.5H24v-9a5.006 5.006 0 00-5-5zm0 2a3 3 0 013 3v1h-5V7h2zM7 19.5a1.5 1.5 0 01-3 0c0-.171.032-.34.093-.5h2.814c.06.16.092.329.093.5zm8-2.5H2V4a1 1 0 011-1h11a1 1 0 011 1v13zm5 2.5a1.5 1.5 0 11-3 0c0-.171.032-.34.093-.5h2.814c.061.16.093.329.093.5zM17 17v-4h5v4h-5z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_139_1719">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
