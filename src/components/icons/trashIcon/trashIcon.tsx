import { IconsProps } from "../icons.props";

export default function TrashIcon({ size = 39, color = "#000" }: IconsProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 22 22"
    >
      <g fill={color} clipPath="url(#clip0_242_4145)">
        <path d="M19.25 3.667H16.41A4.592 4.592 0 0011.916 0h-1.833a4.592 4.592 0 00-4.492 3.667H2.75a.917.917 0 100 1.833h.917v11.917A4.59 4.59 0 008.25 22h5.5a4.59 4.59 0 004.584-4.583V5.5h.916a.916.916 0 000-1.833zm-9.166-1.834h1.833a2.755 2.755 0 012.593 1.834H7.49a2.756 2.756 0 012.594-1.834zM16.5 17.417a2.75 2.75 0 01-2.75 2.75h-5.5a2.75 2.75 0 01-2.75-2.75V5.5h11v11.917z"></path>
        <path d="M9.167 16.5a.917.917 0 00.916-.917v-5.5a.917.917 0 10-1.833 0v5.5a.917.917 0 00.917.916zM12.833 16.5a.917.917 0 00.917-.917v-5.5a.917.917 0 10-1.834 0v5.5a.917.917 0 00.917.916z"></path>
      </g>
      <defs>
        <clipPath id="clip0_242_4145">
          <path fill="#fff" d="M0 0H22V22H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
