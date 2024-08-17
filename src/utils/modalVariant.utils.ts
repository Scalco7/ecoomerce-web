import { VariantType } from "@/states/productsState";
import { Dispatch, SetStateAction } from "react";

export interface ModalVariantPromise {
    resolve: (result: string) => void;
}

export function openModalVariant(variant: VariantType, variantBoxWidth: number, setVariantSectionIsOpen: Dispatch<SetStateAction<boolean>>, setResolveModalVariant: Dispatch<SetStateAction<ModalVariantPromise | null>>, setCurrentVariant: Dispatch<SetStateAction<VariantType | undefined>>, setVariantBoxWidth: Dispatch<SetStateAction<number>>): Promise<string> {
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

export function onCloseModalVariant(setVariantSectionIsOpen: Dispatch<SetStateAction<boolean>>, setResolveModalVariant: Dispatch<SetStateAction<ModalVariantPromise | null>>, setCurrentVariant: Dispatch<SetStateAction<VariantType | undefined>>) {
    setVariantSectionIsOpen(false);
    setResolveModalVariant(null);
    setCurrentVariant(undefined);
}

export function onSelectModalVariant(variantId: string, resolveModalVariant: ModalVariantPromise | null, setVariantSectionIsOpen: Dispatch<SetStateAction<boolean>>, setResolveModalVariant: Dispatch<SetStateAction<ModalVariantPromise | null>>, setCurrentVariant: Dispatch<SetStateAction<VariantType | undefined>>) {
    if (resolveModalVariant) {
        resolveModalVariant.resolve(variantId);
        onCloseModalVariant(setVariantSectionIsOpen, setResolveModalVariant, setCurrentVariant);
    }
}