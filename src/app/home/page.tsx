"use client";

import Footer from "@/components/molecules/footer/footer";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import styles from "./style.module.css";
import PresentationSection from "@/components/organisms/homePageSections/presentationSection/presentationSection";
import ShopSection from "@/components/organisms/homePageSections/shopSection/shopSection";
import HistorySection from "@/components/organisms/homePageSections/historySection/historySection";
import TShirtSellSection from "@/components/organisms/homePageSections/tShirtSellSection/tShirtSellSection";
import YellowTextBanner from "@/components/atoms/yellowTextBanner/yellowTextBanner";
import CapSellSection from "@/components/organisms/homePageSections/capSellSection/capSellSection";
import { useProduct, VariantType } from "@/states/productsState";
import {
  ModalVariantPromise,
  onCloseModalVariant,
  onSelectModalVariant,
  openModalVariant,
} from "@/utils/modalVariant.utils";
import { useState } from "react";
import { useCart } from "@/states/cartState";
import ModalVariantSection from "@/components/organisms/modalVariantSection/modalVariantSection";
import { buyProduct } from "@/utils/product.utils";

export default function Home() {
  const { productsSections } = useProduct();
  const { addProduct } = useCart();

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

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <HeaderNavigation />
      </header>
      <section className={`${styles.body}`}>
        <PresentationSection />
        <div style={{ height: 40 }}></div>
        <TShirtSellSection />
        <div className={styles.desktopSection}>
          <YellowTextBanner text="Tecidos pensados para seu extremo conforto e versatilidade" />
        </div>
        <div style={{ height: 20 }}></div>
        <CapSellSection />
        <div className={styles.desktopSection}>
          <ShopSection buyProduct={handleBuyProduct} />
        </div>
        <HistorySection />
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
