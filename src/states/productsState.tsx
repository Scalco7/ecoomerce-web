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

const productsList: ProductItem[] = [
  {
    id: "product-1-p",
    imgUrls: ["/design-preto.png", "/teste.png"],
    price: 119,
    promotionPrice: 99,
    availableQuantity: 8,
    variant1Id: "red-v",
    variant2Id: "t-p",
  },
  {
    id: "product-1-m",
    imgUrls: ["/design-preto.png", "/teste.png"],
    price: 119,
    promotionPrice: 99,
    availableQuantity: 8,
    variant1Id: "red-v",
    variant2Id: "t-m",
  },
  {
    id: "product-1-g",
    imgUrls: ["/design-preto.png", "/teste.png"],
    price: 119,
    promotionPrice: 99,
    availableQuantity: 8,
    variant1Id: "red-v",
    variant2Id: "t-g",
  },
  {
    id: "product-2-p",
    imgUrls: ["/design-preto.png", "/design-preto.png"],
    price: 119,
    promotionPrice: 89,
    availableQuantity: 2,
    variant1Id: "black-v",
    variant2Id: "t-p",
  },
  {
    id: "product-2-m",
    imgUrls: ["/design-preto.png", "/design-preto.png"],
    price: 119,
    promotionPrice: 89,
    availableQuantity: 2,
    variant1Id: "black-v",
    variant2Id: "t-m",
  },
  {
    id: "product-2-g",
    imgUrls: ["/design-preto.png", "/design-preto.png"],
    price: 119,
    promotionPrice: 89,
    availableQuantity: 2,
    variant1Id: "black-v",
    variant2Id: "t-g",
  },
  {
    id: "product-3-p",
    imgUrls: ["/design-preto.png", "/design-preto.png"],
    price: 119,
    promotionPrice: 79,
    availableQuantity: 10,
    variant1Id: "white-v",
    variant2Id: "t-p",
  },
  {
    id: "product-3-m",
    imgUrls: ["/design-preto.png", "/design-preto.png"],
    price: 119,
    promotionPrice: 79,
    availableQuantity: 10,
    variant1Id: "white-v",
    variant2Id: "t-m",
  },
  {
    id: "product-3-g",
    imgUrls: ["/design-preto.png", "/design-preto.png"],
    price: 119,
    promotionPrice: 79,
    availableQuantity: 10,
    variant1Id: "white-v",
    variant2Id: "t-g",
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

const productTypeRegata: ProductType = {
  id: "product-type-1",
  name: "Regata clássica",
  description:
    "A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundos de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventura, A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundos de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventura, A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundos de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventura, A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundos de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventura A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundos de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventura  ,A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundos de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventura,A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundos de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventura, A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundos de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventura, A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundos de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventura, A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundos de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventura A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundos de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventura  ,A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundo, A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundos de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventura, A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundos de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventura, A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundos de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventura, A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundos de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventura A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundos de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventura  ,A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundos de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventura,A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundos de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventura, A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundos de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventura, A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundos de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventura, A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundos de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventura A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundos de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventura  ,A regata clássica tem 100% de algodão e foi inspirada nos pensamentos mais profundos de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventuras de um banana monkey, foi pensada extatamente apara quem gosta de estilo, conforto e claro, muita aventura",
  products: productsList,
  variantType1: {
    type: "Cor",
    variants: [
      { id: "red-v", name: "Vermelho" },
      { id: "black-v", name: "Preto" },
      { id: "white-v", name: "Branco" },
    ],
  },
  variantType2: {
    type: "Tamanho",
    variants: [
      { id: "t-p", name: "P" },
      { id: "t-m", name: "M" },
      { id: "t-g", name: "G" },
    ],
  },
};

const productTypeCap1: ProductType = {
  id: "cap-type-1",
  name: "Boné clássico",
  description: "",
  products: capType1List,
};

const productTypeCap2: ProductType = {
  id: "cap-type-2",
  name: "Boné branco",
  description: "",
  products: capType2List,
};

const productTypeCap3: ProductType = {
  id: "cap-type-3",
  name: "Boné amarelo",
  description: "",
  products: capType3List,
};

const mockSectionProducts: ProductSection[] = [
  {
    name: "Regatas",
    productTypes: [productTypeRegata],
  },
  {
    name: "Bonés",
    productTypes: [productTypeCap1, productTypeCap2, productTypeCap3],
  },
];

const styleSection: ProductSection = {
  name: "Nosso Estilo",
  productTypes: [
    productTypeCap1,
    productTypeRegata,
    productTypeCap2,
    productTypeCap3,
  ],
};

export const useProduct = create<ProductsState>((set) => ({
  productsSections: mockSectionProducts,
  styleSection: styleSection,
  setProductsSections: (productsSections) =>
    set({ productsSections: productsSections }),
}));
