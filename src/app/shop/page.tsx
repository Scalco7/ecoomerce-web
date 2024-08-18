"use client";

import Footer from "@/components/molecules/footer/footer";
import styles from "./style.module.css";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import ShopProductsSection from "@/components/organisms/shopPageSections/shopProductsSection/shopProductsSection";
import TopSection from "@/components/organisms/shopPageSections/topSection/topSection";
import { useState } from "react";
import {
  ProductItem,
  ProductType,
  useProduct,
  VariantType,
} from "@/states/productsState";
import ModalVariantSection from "@/components/organisms/modalVariantSection/modalVariantSection";
import {
  ModalVariantPromise,
  onCloseModalVariant,
  onSelectModalVariant,
  openModalVariant,
} from "@/utils/modalVariant.utils";
import {
  getVariantDetailsByVariantType,
  VariantData,
} from "@/utils/variant.utils";
import { addProductToCart } from "@/utils/cart.utils";
import { useCart } from "@/states/cartState";

export default function Shop() {
  const { productsSections } = useProduct();
  const { addProduct } = useCart();

  const [variantSectionIsOpen, setVariantSectionIsOpen] = useState(false);
  const [variantBoxWidth, setVariantBoxWidth] = useState<number>(80);
  const [currentVariant, setCurrentVariant] = useState<
    VariantType | undefined
  >();
  const [resolveModalVariant, setResolveModalVariant] =
    useState<ModalVariantPromise | null>(null);

  async function buyProduct(productTypeId: string): Promise<void> {
    const productList = productsSections.map((sec) => sec.productTypes).flat();
    const product: ProductType | undefined = productList.find(
      (p) => p.id == productTypeId
    );
    if (!product) {
      //colocar um toast
      return;
    }

    let variant1: VariantData | undefined =
      await getVariantDetailsByVariantType(
        product.variantType1,
        handleOpenModalVariant
      );
    let variant2: VariantData | undefined =
      await getVariantDetailsByVariantType(
        product.variantType2,
        handleOpenModalVariant
      );

    const productItem: ProductItem | undefined = product.products.find(
      (p) => p.variant1Id == variant1?.id && p.variant2Id == variant2?.id
    );

    if (!productItem) {
      //colocar um toast
      return;
    }

    addProductToCart(
      product.id,
      product.name,
      productItem,
      addProduct,
      variant1,
      variant2
    );
  }

  async function handleOpenModalVariant(
    variantType: VariantType,
    variantBoxWidth: number
  ): Promise<string | undefined> {
    return openModalVariant(
      variantType,
      variantBoxWidth,
      setVariantSectionIsOpen,
      setResolveModalVariant,
      setCurrentVariant,
      setVariantBoxWidth
    );
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <HeaderNavigation />
      </header>
      <section className={`${styles.body}`}>
        <TopSection buyProduct={buyProduct} />
        <ShopProductsSection buyProduct={buyProduct} />
        <Footer />
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
    </main>
  );
}
