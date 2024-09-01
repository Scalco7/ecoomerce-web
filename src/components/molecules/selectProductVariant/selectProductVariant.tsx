import { VariantType } from "@/states/productsState";
import styles from "./style.module.css";
import { Zilla_Slab } from "next/font/google";

interface SelectProductVariantProps {
  selectedVariantId: string;
  variant: VariantType;
  onChange: (id: string) => void;
}

export default function SelectProductVariant({
  selectedVariantId,
  variant,
  onChange,
}: SelectProductVariantProps) {
  function handleChangeVariant(variantId: string) {
    if (variantId != selectedVariantId) onChange(variantId);
  }

  return (
    <main className={`${styles.main}`}>
      <p className={styles.titleText}>{variant.type}</p>
      <section className={styles.variantsSection}>
        {variant.variants.map((variant) => (
          <div
            key={`variant-${variant.id}`}
            className={`${styles.variantBox} ${
              variant.id == selectedVariantId ? styles.selectedVariant : null
            }`}
            onClick={() => handleChangeVariant(variant.id)}
          >
            {variant.name}
          </div>
        ))}
      </section>
    </main>
  );
}
