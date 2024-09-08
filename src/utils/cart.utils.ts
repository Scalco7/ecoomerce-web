import { CartVariant, ProductCartData, } from "@/states/cartState";
import { ProductItem } from "@/states/productsState";

interface AddProductToCartProps {
    productTypeId: string,
    name: string,
    product: ProductItem,
    addProduct: (product: ProductCartData) => void,
    variant1?: CartVariant,
    variant2?: CartVariant,
}

export function addProductToCart(
    {
        productTypeId,
        name,
        product,
        addProduct,
        variant1,
        variant2
    }: AddProductToCartProps): void {
    const productToCart: ProductCartData = {
        ...product,
        productTypeId: productTypeId,
        id: product.id,
        imgUrl: product.imgUrls[0],
        name: name,
        quantity: 1,
        variant1: variant1,
        variant2: variant2,
    };

    addProduct(productToCart);
}
