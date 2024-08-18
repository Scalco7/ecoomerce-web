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
import { CartVariant, ProductCartData, useCart } from "@/states/cartState";

interface VariantData extends CartVariant {
  id: string;
}

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

    let variant1: VariantData | undefined;
    let variant2: VariantData | undefined;

    if (product.variantType1) {
      let variant1Id;
      if (product.variantType1.variants.length <= 1) {
        variant1Id = product.variantType1.variants[0].id;
      } else {
        variant1Id = await handleOpenModalVariant(product.variantType1, 100);
      }

      if (variant1Id) {
        variant1 = getVariantDetailsByVariantType(
          product.variantType1,
          variant1Id
        );
      }
    }

    if (product.variantType2) {
      let variant2Id;
      if (product.variantType2.variants.length <= 1) {
        variant2Id = product.variantType2.variants[0].id;
      } else {
        variant2Id = await handleOpenModalVariant(product.variantType2, 100);
      }

      if (variant2Id) {
        variant1 = getVariantDetailsByVariantType(
          product.variantType2,
          variant2Id
        );
      }
    }

    const productItem: ProductItem | undefined = product.products.find(
      (p) => p.variant1Id == variant1?.id && p.variant2Id == variant2?.id
    );

    if (!productItem) {
      //colocar um toast
      return;
    }

    addProductToCart(product.id, product.name, productItem, variant1, variant2);
  }

  function getVariantDetailsByVariantType(
    variant: VariantType,
    variantId: string
  ): VariantData | undefined {
    const variantName = variant.variants.find((v) => v.id == variantId)?.name;

    if (!variantName) {
      return;
    }

    const cartVariant: VariantData = {
      id: variantId,
      type: variant.type,
      name: variantName,
    };

    return cartVariant;
  }

  function addProductToCart(
    id: string,
    name: string,
    product: ProductItem,
    variant1?: CartVariant,
    variant2?: CartVariant
  ): void {
    const productToCart: ProductCartData = {
      ...product,
      id: id + "-" + product.id, // fazer função para gerar o id
      imgUrl: product.imgUrls[0],
      name: name,
      quantity: 1,
      variant1: variant1,
      variant2: variant2,
    };
    addProduct(productToCart);
  }

  async function handleOpenModalVariant(
    variantType: VariantType,
    variantBoxWidth: number
  ) {
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
