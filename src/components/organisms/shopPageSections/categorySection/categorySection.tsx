import { Zilla_Slab } from "next/font/google";
import styles from "./style.module.css";
import ProductBox, {
  ProductData,
} from "@/components/molecules/productBox/productBox";

interface CategorySectionProps {
  colorScheme: "white" | "yellow";
  title: string;
  products: ProductData[];
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
}: CategorySectionProps) {
  const isWhiteScheme = colorScheme == "white";
  const productsColorScheme = isWhiteScheme ? "yellow" : "white";
  const bgColor = isWhiteScheme ? "white" : "#FFEF6D";
  const titleBackground = isWhiteScheme ? "#FFE600" : undefined;

  return (
    <main className={styles.main} style={{ background: bgColor }}>
      <p
        className={`${styles.title} ${zillaSlab.className}`}
        style={{ background: titleBackground }}
      >
        {title}
      </p>
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
