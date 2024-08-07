"use client";

import CartCount from "@/components/atoms/cartCount/cartCount";
import PriceTag from "@/components/atoms/priceTag/priceTag";
import PrimaryButton from "@/components/atoms/primaryButton/primaryButton";
import SecondaryButton from "@/components/atoms/secondaryButton/secondaryButton";
import Cart from "@/components/molecules/cart/cart";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import ProductBox from "@/components/molecules/productBox/productBox";
import TShirtBuy from "@/components/molecules/tShirtBuy/tShirtBuy";
import { ProductCartData, useCart } from "@/states/cartState";

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
            height: "800px",
            minHeight: "800px",
            background: "rgb(50,50,50)",
            display: "flex",
            justifyContent: "flex-end",
            borderTop: "3px solid tomato",
            borderBottom: "3px solid tomato",
          }}
        >
          <Cart />
        </div>
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
                  console.log("clicou");
                }}
              />
            </div>

            <div style={{ width: "30px" }}>
              <CartCount
                fontSize={14}
                quantity={5}
                onClick={() => {
                  console.log("clicou");
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

            <PrimaryButton
              text={"Comprar agora"}
              rounded={true}
              isDark={true}
              width={"390px"}
              height={"100px"}
              fontSize={40}
              iconSize={50}
              onClick={() => {
                console.log("clicou no outro botão");
              }}
            />

            <PrimaryButton
              rounded={false}
              isDark={false}
              width={"360px"}
              height={"70px"}
              fontSize={40}
              iconSize={40}
              onClick={() => {
                console.log("clicou no outro botão");
              }}
            />

            <PrimaryButton
              rounded={false}
              isDark={true}
              width={"360px"}
              height={"70px"}
              fontSize={40}
              iconSize={40}
              onClick={() => {
                console.log("clicou no outro botão");
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              gap: "20px",
              width: "100%",
            }}
          >
            <ProductBox
              width="300px"
              colorScheme={"yellow"}
              product={{
                id: "",
                imgUrl: "/teste.png",
                name: "Boné",
                price: 89,
                promotionPrice: 79,
              }}
            />
            <ProductBox
              width="200px"
              colorScheme={"white"}
              product={{
                id: "",
                imgUrl: "/teste.png",
                name: "Boné clássico do Banana Monkeys, pronto para você vencer vários jogos",
                price: 89,
                promotionPrice: 79,
              }}
            />
            <ProductBox
              width="200px"
              colorScheme={"white"}
              product={{
                id: "",
                imgUrl: "/teste.png",
                name: "Boné",
                price: 89,
                promotionPrice: 79,
              }}
            />
            <ProductBox
              width="200px"
              colorScheme={"yellow"}
              product={{
                id: "",
                imgUrl: "/teste.png",
                name: "Boné",
                price: 89,
                promotionPrice: 79,
              }}
            />
          </div>

          <div>
            <TShirtBuy />
          </div>
        </div>
      </section>
    </main>
  );
}
