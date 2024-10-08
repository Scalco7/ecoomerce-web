"use client";

import Footer from "@/components/molecules/footer/footer";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import { Toaster } from "react-hot-toast";
import styles from "./style.module.css";
import CategorySection from "@/components/organisms/categorySection/categorySection";
import { buyProduct, productsDataToProductBox } from "@/utils/product.utils";
import { useProduct, VariantType } from "@/states/productsState";
import {
  ModalVariantPromise,
  onCloseModalVariant,
  onSelectModalVariant,
  openModalVariant,
} from "@/utils/modalVariant.utils";
import { useCart } from "@/states/cartState";
import { useEffect, useState } from "react";
import ModalVariantSection from "@/components/organisms/modalVariantSection/modalVariantSection";
import CommentAvalliations from "@/components/atoms/commentAvalliations/commentAvalliations";
import OrderResumeSection from "@/components/organisms/checkoutCart/orderResumeSection/orderResumeSection";
import CartIcon from "@/components/icons/cartIcon/cartIcon";
import { Zilla_Slab } from "next/font/google";
import CheckoutProductsSection from "@/components/organisms/checkoutCart/productsSection/productsSection";
import { useRouter } from "next/navigation";

const zillaSlab = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function CheckoutCart() {
  const { productsSections, styleSection } = useProduct();
  const { addProduct, productsQuantity } = useCart();

  const [variantSectionIsOpen, setVariantSectionIsOpen] = useState(false);
  const [currentVariant, setCurrentVariant] = useState<
    VariantType | undefined
  >();
  const [resolveModalVariant, setResolveModalVariant] =
    useState<ModalVariantPromise | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (productsQuantity < 1) router.push("/home");
  }, []);

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
        <section className={styles.titleSection}>
          <CartIcon size={40} color="#000" />{" "}
          <p className={zillaSlab.className}>Meu carrinho</p>
        </section>
        <CheckoutProductsSection />
        <section className={styles.buySection}>
          <CategorySection
            colorScheme={"yellow"}
            title={"Aproveite o frete"}
            products={styleSection.productTypes
              .slice(0, 4)
              .map((pt) => productsDataToProductBox(pt))}
            hasTransiction={true}
            buyProduct={handleBuyProduct}
          />
        </section>
        <OrderResumeSection />
        <section className={styles.commentSection}>
          <div className={styles.commentsBox}>
            <CommentAvalliations
              comment={"Os produtos chegaram bem rápido e até antes do tempo"}
              name={"Diogo Teixeira dos Santos"}
            />
            <CommentAvalliations
              comment={
                "Eu estou comprando aqui de novo, porque meu filho roubou minha regata"
              }
              name={"Jaison Oliveira de Almeida"}
            />
            <CommentAvalliations
              comment={"Gostei da camiseta, serviu certinho em mim"}
              name={"Julia Ester Pereira Rodrigues"}
            />
            <CommentAvalliations
              comment={
                "Sou apaixonado pelo basquete, e tenho orgulho de poder ter uma regata Banana Monkey"
              }
              name={"Anastácio Junior"}
            />
            <CommentAvalliations
              comment={
                "Pensei que a Oversized fosse um pouco menor, mas até que ficou legal em mim"
              }
              name={"Ericsson de Medeiros Alves"}
            />
          </div>
        </section>
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
      <div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
    </main>
  );
}
