"use client";

import CartCount from "@/components/atoms/cartCount/cartCount";
import PriceTag from "@/components/atoms/priceTag/priceTag";
import SecondaryButton from "@/components/atoms/secondaryButton/secondaryButton";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import { ProductCartData, useCart } from "@/states/cartState";
import { useState } from "react";
import ModalVariantSection from "@/components/organisms/modalVariantSection/modalVariantSection";
import ModalVariant from "@/components/molecules/modalVariant/modalVariant";
import toast, { Toaster } from "react-hot-toast";

const product1: ProductCartData = {
  id: "product-1",
  name: "Boné clássico banana",
  imgUrl: "/teste.png",
  price: 119,
  promotionPrice: 89,
  quantity: 1,
  availableQuantity: 2,
  variant1: { name: "Cor", type: "Preto" },
};

const mockProducts: ProductCartData[] = [
  product1,
  {
    id: "product-2",
    name: "Boné branco banana",
    imgUrl: "/teste.png",
    price: 119,
    promotionPrice: 79,
    quantity: 1,
    availableQuantity: 8,
    variant1: { name: "Cor", type: "Branco" },
  },
];

export default function Components() {
  const [variantSectionIsOpen, setVariantSectionIsOpen] = useState(false);
  const { setProducts, addProduct } = useCart();

  return (
    <main style={{ overflow: "hidden", height: "100%" }}>
      <div style={{ width: "100%" }}>
        <HeaderNavigation />
      </div>
      <section
        style={{
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        <h2 style={{ height: "100px", minHeight: 100 }}>
          Aqui vão ter vários components
        </h2>
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            padding: "50px",
          }}
        >
          <div
            style={{
              background: "black",
              padding: "20px",
              display: "flex",
              gap: "20px",
            }}
          >
            <div style={{ width: "30px" }}>
              <CartCount
                fontSize={14}
                quantity={0}
                onClick={() => {
                  toast("Adicionado ao carrinho", {
                    // icon: '✅',
                    style: {
                      borderRadius: "5px",
                      background: "#6DFF83",
                      color: "#000",
                    },
                  });
                }}
              />
            </div>

            <div style={{ width: "30px" }}>
              <CartCount
                fontSize={14}
                quantity={5}
                onClick={() => {
                  toast.success("Adiconado ao carrinho");
                }}
              />
            </div>
            <div style={{ width: "30px" }}>
              <CartCount
                fontSize={14}
                quantity={10}
                onClick={() => {
                  console.log("clicou");
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
              padding: 50,
              background: "rgba(0, 0, 0, 0.4)",
            }}
          >
            <ModalVariant
              variantBoxWidth={100}
              variant={{
                type: "Cor",
                variants: [
                  { id: "cor-red", name: "Vermelho" },
                  { id: "cor-black", name: "Preto" },
                  { id: "cor-white", name: "Branco" },
                  { id: "cor-blue", name: "Azul" },
                ],
              }}
              onSelect={(variantId) => {
                console.log("selecionou - " + variantId);
              }}
            />

            <ModalVariant
              variant={{
                type: "Tamanho",
                variants: [
                  { id: "t-p", name: "P" },
                  { id: "t-m", name: "M" },
                  { id: "t-g", name: "G" },
                  { id: "t-gg", name: "GG" },
                ],
              }}
              onSelect={(variantId) => {
                console.log("selecionou - " + variantId);
              }}
            />

            <ModalVariant
              variant={{
                type: "Tamanho",
                variants: [
                  { id: "t-xpp", name: "XPP" },
                  { id: "t-xp", name: "XP" },
                  { id: "t-pp", name: "PP" },
                  { id: "t-p", name: "P" },
                  { id: "t-m", name: "M" },
                  { id: "t-g", name: "G" },
                  { id: "t-gg", name: "GG" },
                  { id: "t-xg", name: "XG" },
                  { id: "t-xgg", name: "XGG" },
                ],
              }}
              onSelect={(variantId) => {
                console.log("selecionou - " + variantId);
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <PriceTag
              price={79.9}
              onClick={() => {
                addProduct(product1);
                console.log("era pra add");
              }}
            />
            <PriceTag
              price={29.9}
              onClick={() => {
                setProducts(mockProducts);
                console.log("quero comprar 2323323");
              }}
            />
            <PriceTag
              price={109.9}
              onClick={() => {
                setVariantSectionIsOpen(true);
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <SecondaryButton
              width="300px"
              height="40px"
              fontSize={20}
              text="Finalizar compra"
              onClick={() => {
                console.log("clicou no botão");
              }}
            />
          </div>
        </div>
      </section>
      <ModalVariantSection
        variantBoxWidth={100}
        variant={{
          type: "Cor",
          variants: [
            { id: "cor-red", name: "Vermelho" },
            { id: "cor-black", name: "Preto" },
            { id: "cor-white", name: "Branco" },
            { id: "cor-blue", name: "Azul" },
          ],
        }}
        onSelect={(variantId: string) => {
          setVariantSectionIsOpen(false);
        }}
        open={variantSectionIsOpen}
        onClose={() => {
          setVariantSectionIsOpen(false);
        }}
      />
      <div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
    </main>
  );
}
