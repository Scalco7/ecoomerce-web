import { create } from "zustand";

export interface ProductCartData {
  id: string;
  imgUrl: string;
  name: string;
  price: number;
  promotionPrice: number;
  availableQuantity: number;
  quantity: number;
  variant1?: Variant;
  variant2?: Variant;
}

interface Variant {
  type: string;
  name: string;
}

type CartState = {
  products: ProductCartData[];
  productsQuantity: number;
  setProducts: (products: ProductCartData[]) => void;
  addProduct: (product: ProductCartData) => void;
  removeProduct: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  decreaseProductQuantity: (productId: string) => void;
};

export const useCart = create<CartState>((set) => ({
  products: [],
  productsQuantity: 2,

  setProducts(products: ProductCartData[]) {
    set({ products: products, productsQuantity: products.length });
  },

  addProduct(product: ProductCartData) {
    const newProducts = [...this.products, product];
    set({ products: newProducts, productsQuantity: newProducts.length });
  },

  removeProduct(productId: string) {
    const newProducts = this.products.filter((p) => p.id != productId);
    set({ products: newProducts, productsQuantity: newProducts.length });
  },

  increaseProductQuantity(productId: string) {
    const newProducts = this.products;
    const product = newProducts.find((p) => p.id == productId);
    if (product && product.quantity < product.availableQuantity)
      product.quantity++;

    console.log(newProducts);

    set({ products: newProducts });
  },

  decreaseProductQuantity(productId: string) {
    const newProducts = this.products;
    const product = newProducts.find((p) => p.id == productId);
    if (product && product.quantity > 1) product.quantity--;

    set({ products: newProducts });
  },
}));
