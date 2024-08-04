import styles from "./style.module.css";

interface YellowTextBannerProps {
  text: string;
}

export default function YellowTextBanner({ text }: YellowTextBannerProps) {
  return (
    <main className={styles.main}>
      <p className={styles.text}>{text}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="137"
        fill="none"
        viewBox="0 0 1920 137"
        className={styles.svg}
      >
        <mask id="path-1-inside-1_465_8151" fill="#fff">
          <path d="M1943.43 69.547L-42.365 601.639-61 532.092 1924.79 0l18.64 69.547z"></path>
        </mask>
        <path
          fill="url(#paint0_linear_465_8151)"
          d="M1940.84 59.888L-44.953 591.979l5.176 19.319L1946.02 79.206l-5.18-19.319zM-58.412 541.75L1927.38 9.659l-5.17-19.318L-63.588 522.433l5.176 19.318z"
          mask="url(#path-1-inside-1_465_8151)"
        ></path>
        <mask id="path-3-inside-2_465_8151" fill="#fff">
          <path d="M1950.5 601.388L-34.357 69.547-15.722 0 1969.14 531.842l-18.64 69.546z"></path>
        </mask>
        <path
          fill="url(#paint1_linear_465_8151)"
          d="M1953.09 591.729L-31.769 59.887l-5.176 19.319L1947.92 611.048l5.17-19.319zM-18.31 9.659l1984.86 531.842 5.18-19.318L-13.134-9.659-18.31 9.659z"
          mask="url(#path-3-inside-2_465_8151)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_465_8151"
            x1="-51.682"
            x2="1934.11"
            y1="566.865"
            y2="34.773"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" stopOpacity="0"></stop>
            <stop offset="0.5" stopColor="#fff" stopOpacity="0.1"></stop>
            <stop offset="1" stopColor="#fff"></stop>
          </linearGradient>
          <linearGradient
            id="paint1_linear_465_8151"
            x1="-25.04"
            x2="1959.82"
            y1="34.773"
            y2="566.615"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff"></stop>
            <stop offset="0.5" stopColor="#fff" stopOpacity="0.1"></stop>
            <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </main>
  );
}
