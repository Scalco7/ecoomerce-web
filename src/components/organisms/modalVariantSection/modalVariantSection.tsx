import ModalVariant from "@/components/molecules/modalVariant/modalVariant";
import styles from "./style.module.css";
import { VariantType } from "@/states/productsState";

interface ModalVariantSectionProps {
  variantBoxWidth?: number;
  variant?: VariantType;
  open: boolean;
  onSelect: (variantId: string) => void;
  onClose: () => void;
}

export default function ModalVariantSection({
  variantBoxWidth,
  variant,
  open,
  onSelect,
  onClose,
}: ModalVariantSectionProps) {
  return (
    <>
      {open && (
        <main className={styles.main}>
          <section
            style={{ width: "-webkit-fill-available", height: "100%" }}
            onClick={onClose}
          ></section>
          {variant && (
            <ModalVariant
              variant={variant}
              variantBoxWidth={variantBoxWidth}
              onSelect={onSelect}
            />
          )}
        </main>
      )}
    </>
  );
}
