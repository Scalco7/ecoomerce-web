import { Zilla_Slab } from "next/font/google";
import styles from "./style.module.css";
import ProductBox, {
  ProdcutInfoData,
} from "@/components/molecules/productBox/productBox";

interface CategorySectionProps {
  colorScheme: "white" | "yellow";
  title: string;
  products: ProdcutInfoData[];
  hasTransiction: boolean;
}

const zillaSlab = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function CategorySection({
  colorScheme,
  title,
  products,
  hasTransiction,
}: CategorySectionProps) {
  const isWhiteScheme = colorScheme == "white";
  const productsColorScheme = isWhiteScheme ? "yellow" : "white";
  const bgColor = isWhiteScheme ? "white" : "#FFEF6D";
  const titleBackground = isWhiteScheme ? "#FFE600" : undefined;

  const transition = (
    <svg
      className={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      fill="none"
      viewBox="0 0 1920 60"
    >
      <path fill="#fff" d="M960 60l960-60H0l960 60z"></path>
    </svg>
  );

  return (
    <main
      className={styles.main}
      style={{
        background: bgColor,
        padding: hasTransiction ? "2% 0px" : "10px 0px",
      }}
    >
      {hasTransiction && transition}
      <p
        className={`${styles.title} ${zillaSlab.className}`}
        style={{ background: titleBackground }}
      >
        {title}
      </p>
      <div style={{ height: 10 }}></div>
      <section className={styles.productsSection}>
        {products.map((product, index) => (
          <ProductBox
            key={`product-${index}`}
            colorScheme={productsColorScheme}
            width={"250px"}
            product={product}
          />
        ))}
      </section>
    </main>
  );
}
