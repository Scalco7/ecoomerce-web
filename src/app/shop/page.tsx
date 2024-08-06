"use client";

import Footer from "@/components/molecules/footer/footer";
import styles from "./style.module.css";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import CategorySection from "@/components/organisms/shopPageSections/categorySection/categorySection";
import { ProductType, useProduct } from "@/states/productsState";
import { ProductInfoData } from "@/components/molecules/productBox/productBox";

function productsDataToProductBox(productType: ProductType): ProductInfoData {
  const cheapProduct = productType.products.reduce((p1, p2) => {
    if (p1.price < p2.price) return p1;
    if (p1.price > p2.price) return p2;
    if (p1.promotionPrice > p2.promotionPrice) return p2;
    return p1;
  });

  const formattedProductData: ProductInfoData = {
    id: productType.id,
    imgUrl: cheapProduct.imgUrls[0],
    name: productType.name,
    price: cheapProduct.price,
    promotionPrice: cheapProduct.promotionPrice,
  };
  return formattedProductData;
}

export default function Shop() {
  const { productsSections } = useProduct();

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <HeaderNavigation />
      </header>
      <section className={`${styles.body}`}>
        <div style={{ height: 300 }}></div>
        {productsSections.map((section, index) => (
          <>
            <CategorySection
              key={`section-${index}`}
              title={section.name}
              colorScheme={index % 2 == 0 ? "yellow" : "white"}
              hasTransiction={index == 0}
              products={section.productTypes.map((pt) =>
                productsDataToProductBox(pt)
              )}
            />
            <div style={{ height: 20 }}></div>
          </>
        ))}
        <Footer />
      </section>
    </main>
  );
}
