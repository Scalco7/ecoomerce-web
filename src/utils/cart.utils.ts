import { CartVariant, ProductCartData, } from "@/states/cartState";
import { ProductItem } from "@/states/productsState";

export function addProductToCart(
    id: string,
    name: string,
    product: ProductItem,
    addProduct: (product: ProductCartData) => void,
    variant1?: CartVariant,
    variant2?: CartVariant,

): void {
    const productToCart: ProductCartData = {
        ...product,
        id: generateCartId(id, product.id),
        imgUrl: product.imgUrls[0],
        name: name,
        quantity: 1,
        variant1: variant1,
        variant2: variant2,
    };
    addProduct(productToCart);
}

function generateCartId(productTypeId: string, productId: string): string {
    return productTypeId + "-" + productId
}