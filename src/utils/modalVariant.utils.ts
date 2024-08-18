import { VariantType } from "@/states/productsState";
import { Dispatch, SetStateAction } from "react";

export interface ModalVariantPromise {
    resolve: (result: string | undefined) => void;
}

export function openModalVariant(variant: VariantType, variantBoxWidth: number, setVariantSectionIsOpen: Dispatch<SetStateAction<boolean>>, setResolveModalVariant: Dispatch<SetStateAction<ModalVariantPromise | null>>, setCurrentVariant: Dispatch<SetStateAction<VariantType | undefined>>, setVariantBoxWidth: Dispatch<SetStateAction<number>>): Promise<string | undefined> {
    return new Promise<string | undefined>((resolve) => {
        setResolveModalVariant({
            resolve: (result: string | undefined) => {
                resolve(result);
            },
        });
        setVariantBoxWidth(variantBoxWidth)
        setCurrentVariant(variant);
        setVariantSectionIsOpen(true);
    });
}

function closeModalVariant(setVariantSectionIsOpen: Dispatch<SetStateAction<boolean>>, setResolveModalVariant: Dispatch<SetStateAction<ModalVariantPromise | null>>, setCurrentVariant: Dispatch<SetStateAction<VariantType | undefined>>) {
    setVariantSectionIsOpen(false);
    setResolveModalVariant(null);
    setCurrentVariant(undefined);
}

export function onCloseModalVariant(resolveModalVariant: ModalVariantPromise | null, setVariantSectionIsOpen: Dispatch<SetStateAction<boolean>>, setResolveModalVariant: Dispatch<SetStateAction<ModalVariantPromise | null>>, setCurrentVariant: Dispatch<SetStateAction<VariantType | undefined>>) {
    if (resolveModalVariant) {
        resolveModalVariant.resolve(undefined);
        closeModalVariant(setVariantSectionIsOpen, setResolveModalVariant, setCurrentVariant);
    }
}

export function onSelectModalVariant(variantId: string, resolveModalVariant: ModalVariantPromise | null, setVariantSectionIsOpen: Dispatch<SetStateAction<boolean>>, setResolveModalVariant: Dispatch<SetStateAction<ModalVariantPromise | null>>, setCurrentVariant: Dispatch<SetStateAction<VariantType | undefined>>) {
    if (resolveModalVariant) {
        resolveModalVariant.resolve(variantId);
        closeModalVariant(setVariantSectionIsOpen, setResolveModalVariant, setCurrentVariant);
    }
}