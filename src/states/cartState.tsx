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
  totalPrice: number;
  totalPromotionPrice: number;
  setProducts: (products: ProductCartData[]) => void;
  addProduct: (product: ProductCartData) => void;
  removeProduct: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  decreaseProductQuantity: (productId: string) => void;
};

export const useCart = create<CartState>((set) => ({
  products: [],
  productsQuantity: 0,
  totalPrice: 0,
  totalPromotionPrice: 0,

  setProducts(products: ProductCartData[]) {
    const price = products
      .map((p) => p.price * p.quantity)
      .reduce((a, b) => a + b);
    const promotionPrice = products
      .map((p) => p.promotionPrice * p.quantity)
      .reduce((a, b) => a + b);
    set({
      products: products,
      productsQuantity: products.length,
      totalPrice: price,
      totalPromotionPrice: promotionPrice,
    });
  },

  addProduct(product: ProductCartData) {
    set((state) => {
      const newProducts = [...state.products, product];
      const price = newProducts
        .map((p) => p.price * p.quantity)
        .reduce((a, b) => a + b);
      const promotionPrice = newProducts
        .map((p) => p.promotionPrice * p.quantity)
        .reduce((a, b) => a + b);

      return {
        products: newProducts,
        productsQuantity: newProducts.length,
        totalPrice: price,
        totalPromotionPrice: promotionPrice,
      };
    });
  },

  removeProduct(productId: string) {
    set((state) => {
      const newProducts = state.products.filter((p) => p.id != productId);
      const hasProducts = newProducts.length > 0;

      const price = hasProducts
        ? newProducts.map((p) => p.price * p.quantity).reduce((a, b) => a + b)
        : 0;
      const promotionPrice = hasProducts
        ? newProducts
            .map((p) => p.promotionPrice * p.quantity)
            .reduce((a, b) => a + b)
        : 0;

      return {
        products: newProducts,
        productsQuantity: newProducts.length,
        totalPrice: price,
        totalPromotionPrice: promotionPrice,
      };
    });
  },

  increaseProductQuantity(productId: string) {
    set((state) => {
      const newProducts = state.products;
      const product = newProducts.find((p) => p.id == productId);
      let increasePrice = 0;
      let increasePromotionPrice = 0;

      if (product && product.quantity < product.availableQuantity) {
        product.quantity++;
        increasePrice = product.price;
        increasePromotionPrice = product.promotionPrice;
      }

      return {
        products: newProducts,
        totalPrice: state.totalPrice + increasePrice,
        totalPromotionPrice: state.totalPromotionPrice + increasePromotionPrice,
      };
    });
  },

  decreaseProductQuantity(productId: string) {
    set((state) => {
      const newProducts = state.products;
      const product = newProducts.find((p) => p.id == productId);
      let decreasePrice = 0;
      let decreasePromotionPrice = 0;
      if (product && product.quantity > 1) {
        product.quantity--;
        decreasePrice = product.price;
        decreasePromotionPrice = product.promotionPrice;
      }

      return {
        products: newProducts,
        totalPrice: state.totalPrice - decreasePrice,
        totalPromotionPrice: state.totalPromotionPrice - decreasePromotionPrice,
      };
    });
  },
}));
