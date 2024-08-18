import { CartVariant } from "@/states/cartState";
import { VariantType } from "@/states/productsState";

export interface VariantData extends CartVariant {
    id: string;
}

export async function getVariantDetailsByVariantType(
    variant: VariantType | undefined,
    handleOpenModalVariant: (
        variantType: VariantType,
        variantBoxWidth: number
    ) => Promise<string | undefined>
): Promise<VariantData | undefined> {
    if (!variant) return;

    let variantId;
    if (variant.variants.length <= 1) {
        variantId = variant.variants[0].id;
    } else {
        variantId = await handleOpenModalVariant(variant, 100);
    }

    if (!variantId) return;

    const variantName = variant.variants.find((v) => v.id == variantId)?.name;

    if (!variantName) return;

    const cartVariant: VariantData = {
        id: variantId,
        type: variant.type,
        name: variantName,
    };

    return cartVariant;
}