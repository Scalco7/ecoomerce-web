import { ProductItem, ProductSection, ProductType, VariantType } from "@/states/productsState";
import { getVariantDetailsByVariantType, VariantData } from "./variant.utils";
import { addProductToCart } from "./cart.utils";
import { ProductCartData } from "@/states/cartState";
import { ProductInfoData } from "@/components/molecules/productBox/productBox";
import toast from "react-hot-toast";

export async function buyProduct(
    productTypeId: string,
    productsSections: ProductSection[],
    addProduct: (product: ProductCartData) => void,
    handleOpenModalVariant: (
        variantType: VariantType,

    ) => Promise<string | undefined>): Promise<void> {
    const productList = productsSections.map((sec) => sec.productTypes).flat();
    const product: ProductType | undefined = productList.find(
        (p) => p.id == productTypeId
    );
    if (!product) {
        toast.error("Produto inexistente")
        return;
    }

    let variant1: VariantData | undefined =
        await getVariantDetailsByVariantType(
            product.variantType1,
            handleOpenModalVariant
        );

    if (product.variantType1 && !variant1) {
        toast.error("Selecione uma opção")
        return;
    }

    let variant2: VariantData | undefined =
        await getVariantDetailsByVariantType(
            product.variantType2,
            handleOpenModalVariant
        );

    if (product.variantType2 && !variant2) {
        toast.error("Selecione uma opção")
        return;
    }

    const productItem: ProductItem | undefined = product.products.find(
        (p) => p.variant1Id == variant1?.id && p.variant2Id == variant2?.id
    );

    if (!productItem) {
        toast.error("Selecione uma opção")
        return;
    }

    addProductToCart(
        product.id,
        product.name,
        productItem,
        addProduct,
        variant1,
        variant2
    );
}

export function productsDataToProductBox(productType: ProductType): ProductInfoData {
    const cheapProduct = productType.products.reduce((p1, p2) => {
        if (p1.price < p2.price) return p1;
        if (p1.price > p2.price) return p2;
        if (p1.promotionPrice > p2.promotionPrice) return p2;
        return p1;
    });

    const formattedProductData: ProductInfoData = {
        id: productType.id,
        imgUrl: cheapProduct.imgUrls[0],
        name: productType.name,
        price: cheapProduct.price,
        promotionPrice: cheapProduct.promotionPrice,
    };
    return formattedProductData;
}