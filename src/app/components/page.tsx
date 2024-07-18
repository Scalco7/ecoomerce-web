"use client";

import CartCount from "@/components/atoms/cartCount";

export default function Components() {
  return (
    <main>
      <h2>Aqui vão ter vários components</h2>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
    </main>
  );
}
