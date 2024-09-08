import CarouselProductImg from "@/components/molecules/carouselProductImg/carouselProductImg";
import styles from "./style.module.css";
import { ProductType } from "@/states/productsState";
import { formatNumberToValue } from "@/utils/number.utils";
import { Poppins, Zilla_Slab } from "next/font/google";
import { useState } from "react";
import PrimaryButton from "@/components/atoms/primaryButton/primaryButton";
import SelectProductVariant from "@/components/molecules/selectProductVariant/selectProductVariant";
import { addProductToCart } from "@/utils/cart.utils";
import { useCart } from "@/states/cartState";
import { getVariantDetails } from "@/utils/variant.utils";

interface ProductTopSectionProps {
  product: ProductType;
}
const zillaSlabThin = Zilla_Slab({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const zillaSlabBolder = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const poppinsThin = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

const poppinsBolder = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

export default function ProductTopSection({ product }: ProductTopSectionProps) {
  const [indexSelectedProduct, setIndexSelectedProduct] = useState(0);
  const { addProduct } = useCart();

  function handleChangeVariant(
    variantType: "primary" | "secondary",
    variantId: string
  ) {
    const actuaProduct = product.products[indexSelectedProduct];
    let newIndex: number;

    if (variantType == "primary") {
      newIndex = product.products.findIndex(
        (p) =>
          p.variant1Id == variantId && p.variant2Id == actuaProduct.variant2Id
      );
    } else {
      newIndex = product.products.findIndex(
        (p) =>
          p.variant1Id == actuaProduct.variant1Id && p.variant2Id == variantId
      );
    }

    setIndexSelectedProduct(newIndex);
  }

  function handleBuyProduct() {
    const actualProduct = product.products[indexSelectedProduct];

    addProductToCart({
      productTypeId: product.id,
      name: product.name,
      product: actualProduct,
      addProduct: addProduct,
      variant1: getVariantDetails(
        product.variantType1,
        actualProduct.variant1Id
      ),
      variant2: getVariantDetails(
        product.variantType2,
        actualProduct.variant2Id
      ),
    });
  }

  return (
    <main className={styles.topSection}>
      <section
        className={`${styles.titleBox} ${zillaSlabBolder.className} ${styles.onlyMobile}`}
      >
        <p className={styles.titleText}>{product.name}</p>
      </section>
      <section className={styles.carouselSection}>
        <CarouselProductImg product={product.products[indexSelectedProduct]} />
      </section>
      <section className={styles.topSectionData}>
        <section
          className={`${styles.titleBox} ${zillaSlabBolder.className} ${styles.onlyDesktop}`}
        >
          <p className={styles.titleText}>{product.name}</p>
        </section>
        <section className={styles.productsData}>
          <section>
            <p className={`${poppinsThin.className} ${styles.price}`}>
              {formatNumberToValue(
                product.products[indexSelectedProduct].price
              )}
            </p>
            <p
              className={`${poppinsBolder.className} ${styles.promotionPrice}`}
            >
              {formatNumberToValue(
                product.products[indexSelectedProduct].promotionPrice
              )}
            </p>
          </section>
          {product.variantType1 &&
            product.products[indexSelectedProduct].variant1Id && (
              <SelectProductVariant
                variant={product.variantType1}
                selectedVariantId={
                  product.products[indexSelectedProduct].variant1Id
                }
                onChange={(id) => handleChangeVariant("primary", id)}
              />
            )}
          {product.variantType2 &&
            product.products[indexSelectedProduct].variant2Id && (
              <SelectProductVariant
                variant={product.variantType2}
                selectedVariantId={
                  product.products[indexSelectedProduct].variant2Id
                }
                onChange={(id) => handleChangeVariant("secondary", id)}
              />
            )}
        </section>
        <section className={styles.buttonSection}>
          <PrimaryButton
            borderRadius={10}
            isDark={true}
            width={"250px"}
            height={"60px"}
            text="Comprar Agora"
            fontSize={24}
            iconSize={24}
            onClick={handleBuyProduct}
          />
          <p className={`${zillaSlabThin.className} ${styles.obsBuyText}`}>
            * Compre agora Banana {"Monkey's"}, para adicionar aventura a sua
            vida.
          </p>
        </section>
      </section>
    </main>
  );
}
