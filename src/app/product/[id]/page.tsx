"use client";

import { ProductType, useProduct } from "@/states/productsState";
import { useParams, useRouter } from "next/navigation";
import styles from "./style.module.css";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import { Zilla_Slab } from "next/font/google";
import ProductTopSection from "@/components/organisms/productSection/productTopSection/productTopSection";

const zillaSlabThin = Zilla_Slab({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Product() {
  const router = useRouter();
  const params = useParams();
  const { productsSections } = useProduct();
  const product: ProductType | undefined = productsSections
    .map((ps) => ps.productTypes)
    .flat()
    .find((prod) => prod.id == params.id);

  if (!product) {
    router.push("/home");
    return;
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <HeaderNavigation />
      </header>
      <section className={`${styles.body}`}>
        <section className={styles.topSection}>
          <ProductTopSection product={product} />
        </section>
        <section className={styles.descriptionSection}>
          <p className={`${zillaSlabThin.className} ${styles.descriptionText}`}>
            {product.description}
          </p>
        </section>
        <section className={styles.buySection}></section>
        <section className={styles.commentSection}></section>
      </section>
    </main>
  );
}
