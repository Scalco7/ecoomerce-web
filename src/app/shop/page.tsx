"use client";

import Footer from "@/components/molecules/footer/footer";
import styles from "./style.module.css";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import ShopProductsSection from "@/components/organisms/shopPageSections/shopProductsSection/shopProductsSection";
import TopSection from "@/components/organisms/shopPageSections/topSection/topSection";
import { useState } from "react";
import { VariantType } from "@/states/productsState";
import ModalVariantSection from "@/components/organisms/modalVariantSection/modalVariantSection";

interface ModalVariantPromise {
  resolve: (result: string) => void;
}

export default function Shop() {
  const [variantSectionIsOpen, setVariantSectionIsOpen] = useState(false);
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
        {/* <button
          onClick={async () => {
            const id = await openModalVariant({
              type: "Cor",
              variants: [
                { id: "c-black", name: "Preto" },
                { id: "c-red", name: "Vermelho" },
                { id: "c-white", name: "Branco" },
              ],
            });
            console.log("id - ", id);
          }}
        >
          clique aqui
        </button> */}
        <ShopProductsSection />
        <Footer />
      </section>
      {variantSectionIsOpen && (
        <ModalVariantSection
          variantBoxWidth={100}
          variant={currentVariant}
          onSelect={onSelectModalVariant} //colocar um .resolve, que quando ele seleciona ele resolve a promisse
          // Vai ser assim, vai chamar a função que vai setar tudo certinho para abrir o modal - setar a variant, o visibilidade e a função de fechar, a função de fechar, no caso vai ter um resolve, para finalizar a promisse e a função retornar, q a função de abrir irá retornar uma promisse, com o valor da resposta (string com Id), dai na função de fechar essa promisse vai ser resolvida e o valor de resposta retornado.

          open={variantSectionIsOpen}
          onClose={onCloseModalVariant}
        />
      )}
    </main>
  );
}
