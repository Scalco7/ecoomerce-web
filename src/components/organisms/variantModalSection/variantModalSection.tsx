import VariantModal from "@/components/molecules/variantModal/variantModal";
import styles from "./style.module.css";
import { VariantType } from "@/states/productsState";

interface VariantModalSectionProps {
  variantBoxWidth?: number;
  variant: VariantType;
  open: boolean;
  onSelect: (variantId: string) => void;
  onClose: () => void;
}

export default function VariantModalSection({
  variantBoxWidth,
  variant,
  open,
  onSelect,
  onClose,
}: VariantModalSectionProps) {
  return (
    <>
      {open && (
        <main className={styles.main}>
          <section
            style={{ width: "-webkit-fill-available", height: "100%" }}
            onClick={onClose}
          ></section>
          <VariantModal
            variant={variant}
            variantBoxWidth={variantBoxWidth}
            onSelect={onSelect}
          />
        </main>
      )}
    </>
  );
}
