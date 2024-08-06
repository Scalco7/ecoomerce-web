import { create } from "zustand";

interface Variant {
  id: string;
  type: string;
  name: string;
}

interface ProductItem {
  id: string;
  imgUrls: string[];
  price: number;
  promotionPrice: number;
  availableQuantity: number;
  variant1?: Variant;
  variant2?: Variant;
}

export interface ProductType {
  id: string;
  name: string;
  products: ProductItem[];
}

interface ProductSection {
  name: string;
  productTypes: ProductType[];
}

type ProductsState = {
  productsSections: ProductSection[];
  setProductsSections: (productsSections: ProductSection[]) => void;
};

const variantColorRed = {
  id: "variant-color-red",
  type: "Cor",
  name: "Vermelho",
};
const variantColorBlack = {
  id: "variant-color-black",
  type: "Cor",
  name: "Preto",
};
const variantColorWhite = {
  id: "variant-color-white",
  type: "Cor",
  name: "Branco",
};

const productsList: ProductItem[] = [
  {
    id: "product-1",
    imgUrls: ["/teste.png", "/teste.png"],
    price: 119,
    promotionPrice: 99,
    availableQuantity: 8,
    variant1: variantColorRed,
  },
  {
    id: "product-2",
    imgUrls: ["/teste.png", "/teste.png"],
    price: 119,
    promotionPrice: 89,
    availableQuantity: 2,
    variant1: variantColorBlack,
  },
  {
    id: "product-3",
    imgUrls: ["/teste.png", "/teste.png"],
    price: 119,
    promotionPrice: 79,
    availableQuantity: 10,
    variant1: variantColorWhite,
  },
];

const mockSectionProducts: ProductSection[] = [
  {
    name: "Regatas",
    productTypes: [
      {
        id: "product-type-1",
        name: "Regata clássica",
        products: productsList,
      },
    ],
  },
  {
    name: "Bonés",
    productTypes: [
      {
        id: "product-type-1",
        name: "Boné clássico",
        products: productsList,
      },
      {
        id: "product-type-1",
        name: "Boné branco",
        products: productsList,
      },
      {
        id: "product-type-1",
        name: "Boné amarelo",
        products: productsList,
      },
    ],
  },
];

export const useProduct = create<ProductsState>((set) => ({
  productsSections: mockSectionProducts, // ### []
  setProductsSections: (productsSections) =>
    set({ productsSections: productsSections }),
}));
