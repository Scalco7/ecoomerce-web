import { create } from "zustand";

export interface CouponData {
  name: string;
  discountPercentage: number;
}

type CouponState = {
  coupon: CouponData | null;
  setCoupon: (newCoupon?: CouponData) => void;
};

export const useCoupon = create<CouponState>((set) => ({
  coupon: null,
  setCoupon: (newCoupon) => set({ coupon: newCoupon ?? null }),
}));
