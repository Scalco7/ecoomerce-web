interface CartIconProps {
  size: number;
  color: string;
}

export default function CartIcon({ size, color }: CartIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 40 40"
    >
      <g fill={color} clipPath="url(#clip0_115_9105)">
        <path d="M11.666 40.001a3.333 3.333 0 100-6.667 3.333 3.333 0 000 6.667zM28.333 40.001a3.333 3.333 0 100-6.667 3.333 3.333 0 000 6.667zM38.307 10.03a6.125 6.125 0 00-4.367-1.697H9.423l-.438-3.436A5.547 5.547 0 003.478 0H2.5A2.5 2.5 0 000 2.5 2.5 2.5 0 002.5 5h.978a.552.552 0 01.544.5l2.5 19.598A5.545 5.545 0 0012.028 30h16.87a9.167 9.167 0 008.834-6.737l2.076-7.551a5.815 5.815 0 00-1.501-5.682zm-5.39 11.908A4.18 4.18 0 0128.898 25h-16.87a.549.549 0 01-.541-.5l-1.425-11.167H34.19a.833.833 0 01.81 1.054l-2.083 7.551z"></path>
      </g>
      <defs>
        <clipPath id="clip0_115_9105">
          <path fill={color} d="M0 0H40V40H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
