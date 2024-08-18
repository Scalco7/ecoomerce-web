import ProductBox from "@/components/molecules/productBox/productBox";
import styles from "./style.module.css";
import { useProduct } from "@/states/productsState";
import { productsDataToProductBox } from "@/utils/product.utils";

interface ShopSectionProps {
  buyProduct: (productTypeId: string) => void;
}

export default function ShopSection({ buyProduct }: ShopSectionProps) {
  const { styleSection } = useProduct();

  return (
    <main className={styles.main}>
      <header className={styles.titleBox}>
        <p className={styles.titleText}>Nosso Estilo</p>
      </header>
      <section className={styles.productsSection}>
        {styleSection.productTypes.map((p, index) => (
          <ProductBox
            key={"product-home-index"}
            buyProduct={buyProduct}
            width="250px"
            colorScheme={"yellow"}
            product={productsDataToProductBox(p)}
          />
        ))}
      </section>
    </main>
  );
}
