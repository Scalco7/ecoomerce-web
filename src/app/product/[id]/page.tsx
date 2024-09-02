"use client";

import { ProductType, useProduct, VariantType } from "@/states/productsState";
import { useParams, useRouter } from "next/navigation";
import styles from "./style.module.css";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import { Zilla_Slab } from "next/font/google";
import ProductTopSection from "@/components/organisms/productSection/productTopSection/productTopSection";
import { Toaster } from "react-hot-toast";
import CategorySection from "@/components/organisms/categorySection/categorySection";
import {
  ModalVariantPromise,
  onCloseModalVariant,
  onSelectModalVariant,
  openModalVariant,
} from "@/utils/modalVariant.utils";
import { useState } from "react";
import { buyProduct, productsDataToProductBox } from "@/utils/product.utils";
import { useCart } from "@/states/cartState";
import ModalVariantSection from "@/components/organisms/modalVariantSection/modalVariantSection";

const zillaSlabThin = Zilla_Slab({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Product() {
  const router = useRouter();
  const params = useParams();
  const { productsSections, styleSection } = useProduct();
  const { addProduct } = useCart();
  const product: ProductType | undefined = productsSections
    .map((ps) => ps.productTypes)
    .flat()
    .find((prod) => prod.id == params.id);

  const [variantSectionIsOpen, setVariantSectionIsOpen] = useState(false);
  const [currentVariant, setCurrentVariant] = useState<
    VariantType | undefined
  >();
  const [resolveModalVariant, setResolveModalVariant] =
    useState<ModalVariantPromise | null>(null);

  async function handleBuyProduct(productTypeId: string): Promise<void> {
    await buyProduct(
      productTypeId,
      productsSections,
      addProduct,
      handleOpenModalVariant
    );
  }

  async function handleOpenModalVariant(
    variantType: VariantType
  ): Promise<string | undefined> {
    return openModalVariant(
      variantType,
      setVariantSectionIsOpen,
      setResolveModalVariant,
      setCurrentVariant
    );
  }

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
        <section className={styles.buySection}>
          <CategorySection
            colorScheme={"white"}
            title={"Adicione aventura a sua vida"}
            products={styleSection.productTypes.map((pt) =>
              productsDataToProductBox(pt)
            )}
            hasTransiction={false}
            buyProduct={handleBuyProduct}
          />
        </section>
        <section className={styles.commentSection}></section>
      </section>
      {variantSectionIsOpen && (
        <ModalVariantSection
          variantBoxWidth={100}
          variant={currentVariant}
          onSelect={(variantId) =>
            onSelectModalVariant(
              variantId,
              resolveModalVariant,
              setVariantSectionIsOpen,
              setResolveModalVariant,
              setCurrentVariant
            )
          }
          open={variantSectionIsOpen}
          onClose={() =>
            onCloseModalVariant(
              resolveModalVariant,
              setVariantSectionIsOpen,
              setResolveModalVariant,
              setCurrentVariant
            )
          }
        />
      )}
      <div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
    </main>
  );
}
