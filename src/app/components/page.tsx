"use client";

import CartCount from "@/components/atoms/cartCount/cartCount";
import PriceTag from "@/components/atoms/priceTag/priceTag";
import SecondaryButton from "@/components/atoms/secondaryButton/secondaryButton";

export default function Components() {
  return (
    <main>
      <h2>Aqui vão ter vários components</h2>
      <div
        style={{
          width: "100%",
          height: "100%",
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
          <CartCount
            quantity={0}
            onClick={() => {
              console.log("clicou");
            }}
          />
          <CartCount
            quantity={5}
            onClick={() => {
              console.log("clicou");
            }}
          />
          <CartCount
            quantity={10}
            onClick={() => {
              console.log("clicou");
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
              console.log("quero comprar");
            }}
          />
          <PriceTag
            price={29.9}
            onClick={() => {
              console.log("quero comprar");
            }}
          />
          <PriceTag
            price={109.9}
            onClick={() => {
              console.log("quero comprar");
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
    </main>
  );
}
