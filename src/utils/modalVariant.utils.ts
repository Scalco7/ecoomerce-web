import { VariantType } from "@/states/productsState";

export function openModalVariant(variant: VariantType): Promise<string> {
    return new Promise<string>((resolve) => {
        setResolveModalVariant({
            resolve: (result: string) => {
                resolve(result);
            },
        });
        setCurrentVariant(variant);
        setVariantSectionIsOpen(true);
    });
}

export function onCloseModalVariant() {
    setVariantSectionIsOpen(false);
    setResolveModalVariant(null);
    setCurrentVariant(undefined);
}

export function onSelectModalVariant(variantId: string) {
    if (resolveModalVariant) {
        resolveModalVariant.resolve(variantId);
        onCloseModalVariant();
    }
}