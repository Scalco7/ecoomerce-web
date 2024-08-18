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
  products: ProductItem[];
  variantType1?: VariantType;
  variantType2?: VariantType;
}

interface ProductSection {
  name: string;
  productTypes: ProductType[];
}

type ProductsState = {
  productsSections: ProductSection[];
  setProductsSections: (productsSections: ProductSection[]) => void;
};

const productsList: ProductItem[] = [
  {
    id: "product-1",
    imgUrls: ["/design-preto.png", "/teste.png"],
    price: 119,
    promotionPrice: 99,
    availableQuantity: 8,
    variant1Id: "red-v",
  },
  {
    id: "product-2",
    imgUrls: ["/design-preto.png", "/design-preto.png"],
    price: 119,
    promotionPrice: 89,
    availableQuantity: 2,
    variant1Id: "black-v",
  },
  {
    id: "product-3",
    imgUrls: ["/design-preto.png", "/design-preto.png"],
    price: 119,
    promotionPrice: 79,
    availableQuantity: 10,
    variant1Id: "white-v",
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
    imgUrls: ["/bone-12.png", "/teste.png"],
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
        variantType1: {
          type: "Cor",
          variants: [
            { id: "red-v", name: "Vermelho" },
            { id: "black-v", name: "Preto" },
            { id: "white-v", name: "Branco" },
          ],
        },
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
