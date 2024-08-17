"use client";

import Footer from "@/components/molecules/footer/footer";
import styles from "./style.module.css";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import ShopProductsSection from "@/components/organisms/shopPageSections/shopProductsSection/shopProductsSection";
import TopSection from "@/components/organisms/shopPageSections/topSection/topSection";
import { useState } from "react";
import { VariantType } from "@/states/productsState";
import ModalVariantSection from "@/components/organisms/modalVariantSection/modalVariantSection";
import {
  ModalVariantPromise,
  onCloseModalVariant,
  onSelectModalVariant,
} from "@/utils/modalVariant.utils";

export default function Shop() {
  const [variantSectionIsOpen, setVariantSectionIsOpen] = useState(false);
  const [variantBoxWidth, setVariantBoxWidth] = useState<number>(80);
  const [currentVariant, setCurrentVariant] = useState<
    VariantType | undefined
  >();
  const [resolveModalVariant, setResolveModalVariant] =
    useState<ModalVariantPromise | null>(null);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <HeaderNavigation />
      </header>
      <section className={`${styles.body}`}>
        <TopSection />
        <ShopProductsSection />
        <Footer />
      </section>
      {variantSectionIsOpen && (
        <ModalVariantSection
          variantBoxWidth={variantBoxWidth}
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
