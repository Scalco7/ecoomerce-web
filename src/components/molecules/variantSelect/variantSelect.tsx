import styles from "./styles.module.css";
import { VariantType } from "@/states/productsState";

interface VariantSelectProps {
  variantBoxWidth?: number;
  variant: VariantType;
  onSelect: (variantId: string) => void;
}

export default function VariantSelect({
  variant,
  onSelect,
  variantBoxWidth = 50,
}: VariantSelectProps) {
  return (
    <main className={styles.main}>
      <p className={styles.title}>{variant.type}</p>
      <section className={styles.variantsBox}>
        {variant.variants.map((variant) => (
          <section
            key={`variant-${variant.id}`}
            className={styles.variantButton}
            style={{ width: variantBoxWidth }}
            onClick={() => onSelect(variant.id)}
          >
            {variant.name}
          </section>
        ))}
      </section>
    </main>
  );
}
