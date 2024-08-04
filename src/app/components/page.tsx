"use client";

import CartCount from "@/components/atoms/cartCount/cartCount";
import PhotoHistory from "@/components/atoms/photoHistory/photoHistory";
import PriceTag from "@/components/atoms/priceTag/priceTag";
import PrimaryButton from "@/components/atoms/primaryButton/primaryButton";
import ProductQuantityInput from "@/components/atoms/productQuantityInput/productQuantityInput";
import SecondaryButton from "@/components/atoms/secondaryButton/secondaryButton";
import TransitionArrowLines from "@/components/atoms/transitionArrowLines/transitionArrowLines";
import HeaderNavigation from "@/components/molecules/headerNavigation/headerNavigation";
import PhotoHistoryCarousel from "@/components/molecules/photoHistoryCarousel/photoHistoryCarousel";
import ProductBox from "@/components/molecules/productBox/productBox";
import { title } from "process";
import { useState } from "react";

export default function Components() {
  const [productQuantity, setProductQuantity] = useState(0);

  const monkeysHistory = {
    imageSrc: "./banana-comp-teste.jpg",
    history:
      "Como toda boa história, a nossa começa com um grupo de pessoas que não se contentava em simplesmente ser igual a todo mundo. Era um grupo de visionários, de espíritos livres que desejavam algo mais do que apenas seguir as normas impostas pela sociedade. Eles queriam mais: queriam zuar, queriam se divertir, e acima de tudo, queriam ganhar. Inspirados pela busca incessante por autenticidade e por um estilo de vida vibrante, esses indivíduos decidiram se unir e criar algo verdadeiramente especial. Assim, a história do Banana Monkey's começa com oito amigos audaciosos que, motivados pelo desejo de transformar suas vidas e começar a aproveitar cada momento de verdade, embarcaram nessa jornada única. Com paixão, determinação e um toque de loucura, esses oito caras criaram uma amizade que não só reflete suas personalidades ousadas e divertidas, mas também inspira outros a seguirem seus próprios caminhos e viverem com intensidade. É essa busca pela autenticidade e por viver cada momento que define a essência do Banana Monkey's.",
  };

  const luidaoHistory = {
    title: "Luidao",
    titleColor: "#FF5F00",
    imageSrc: "./luidao-teste.jpg",
    history:
      "Para mostrar cada um dos Banana Monkey's, nada melhor do que começar pelo membro que define a essência do grupo: Luidão. Ele é o mais autêntico e imprevisível, alguém de quem você nunca sabe o que esperar. Conhecido como o último romântico, ele está sempre apaixonado, e se a garota for ruiva, é paixão à primeira vista. Ele é um verdadeiro Banana Monkey. Além de ser um eterno apaixonado, Luigi adora jogar um fute e dar altos rolês aleatórios. Ele tem a habilidade de transformar qualquer situação em uma aventura divertida, sempre fazendo as coisas do seu jeito com muita espontâniedade. Mais do que isso, ele é cara leal, alguém em quem você pode confiar em qualquer momento. Ele é, sem dúvida, a essência, um companheiro de todas as horas, que torna tudo mais da hora e ajuda com o que precisar.",
  };

  return (
    <main>
      <div style={{ width: "100%" }}>
        <HeaderNavigation />
      </div>
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
          <ProductQuantityInput
            fontSize={16}
            quantity={productQuantity}
            onChange={(value: number) => {
              setProductQuantity(value);
              console.log("mudou quantidade - ", value);
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
        <div
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <TransitionArrowLines initColor={"#fff"} endColor={"#000"} />
          <PhotoHistory
            history={monkeysHistory.history}
            imageSrc={monkeysHistory.imageSrc}
          />
        </div>
        <div
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <TransitionArrowLines initColor={"#fff"} endColor={"#000"} />
          <PhotoHistoryCarousel historys={[monkeysHistory, luidaoHistory]} />
        </div>
      </div>
    </main>
  );
}
