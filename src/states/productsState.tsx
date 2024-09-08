import { create } from "zustand";

interface Variant {
  id: string;
  name: string;
}

export interface VariantType {
  type: string;
  variants: Variant[];
}

export interface ProductItem {
  id: string;
  imgUrls: string[];
  price: number;
  promotionPrice: number;
  availableQuantity: number;
  variant1Id?: string;
  variant2Id?: string;
}

export interface ProductType {
  id: string;
  name: string;
  description: string;
  products: ProductItem[];
  variantType1?: VariantType;
  variantType2?: VariantType;
}

export interface ProductSection {
  name: string;
  productTypes: ProductType[];
}

type ProductsState = {
  productsSections: ProductSection[];
  styleSection: ProductSection;
  setProductsSections: (productsSections: ProductSection[]) => void;
};

export const useProduct = create<ProductsState>((set) => ({
  productsSections: [],
  styleSection: {
    name: "",
    productTypes: [],
  },
  setProductsSections: (productsSections) => {
    const styleSection: ProductSection = {
      name: "Nosso Estilo",
      productTypes: [],
    };

    let countSections = 0;
    let countProductTypes = 0;
    for (let i = 0; i < 4; i++) {
      styleSection.productTypes.push(
        productsSections[countSections].productTypes[countProductTypes]
      );
      countSections++;
      if (countSections == productsSections.length) {
        countSections = 0;
        countProductTypes++;
      }
    }

    set({ productsSections: productsSections, styleSection: styleSection });
  },
}));
