export function getCouponDiscountValue(totalValue: number, couponDiscountPercentage: number): number {
    return totalValue * couponDiscountPercentage / 100
}   