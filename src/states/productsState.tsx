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
    imgUrls: ["/design-preto.png", "/teste.png"],
    price: 119,
    promotionPrice: 99,
    availableQuantity: 8,
    variant1: variantColorRed,
  },
  {
    id: "product-2",
    imgUrls: ["/design-preto.png", "/design-preto.png"],
    price: 119,
    promotionPrice: 89,
    availableQuantity: 2,
    variant1: variantColorBlack,
  },
  {
    id: "product-3",
    imgUrls: ["/design-preto.png", "/design-preto.png"],
    price: 119,
    promotionPrice: 79,
    availableQuantity: 10,
    variant1: variantColorWhite,
  },
];

const capType1List: ProductItem[] = [
  {
    id: "cap-1",
    imgUrls: ["/teste.png", "/teste.png"],
    price: 69.99,
    promotionPrice: 39,
    availableQuantity: 8,
  },
];

const capType2List: ProductItem[] = [
  {
    id: "cap-2",
    imgUrls: ["/bone-branco-01.png", "/teste.png"],
    price: 69.99,
    promotionPrice: 39,
    availableQuantity: 8,
  },
];

const capType3List: ProductItem[] = [
  {
    id: "cap-3",
    imgUrls: ["/design-preto.png", "/teste.png"],
    price: 69.99,
    promotionPrice: 39,
    availableQuantity: 8,
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
        id: "cap-type-1",
        name: "Boné clássico",
        products: capType1List,
      },
      {
        id: "cap-type-2",
        name: "Boné branco",
        products: capType2List,
      },
      {
        id: "cap-type-3",
        name: "Boné amarelo",
        products: capType3List,
      },
    ],
  },
];

export const useProduct = create<ProductsState>((set) => ({
  productsSections: mockSectionProducts, // ### []
  setProductsSections: (productsSections) =>
    set({ productsSections: productsSections }),
}));
