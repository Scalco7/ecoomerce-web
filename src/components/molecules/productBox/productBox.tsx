import Image from "next/image";
import styles from "./style.module.css";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/components/atoms/primaryButton/primaryButton";

interface ProductBoxProps {
  colorScheme: "white" | "yellow";
  width: string;
  product: ProductData;
}

interface ProductData {
  id: string;
  imgUrl: string;
  name: string;
  price: number;
  promotionPrice: number;
}

//colocr função no utils

function formatNumberToValue(number: number): string {
  const value: string = `R$ ${number.toFixed(2)}`;
  return value;
}

export default function ProductBox({
  colorScheme,
  product,
  width,
}: ProductBoxProps) {
  const router = useRouter();
  const isWhite = colorScheme == "white";
  const backgroundColor = isWhite ? "white" : "#FFEF6D";

  function handleProductClick() {
    //ir para a página do produto
    //router.push(`product/${product.id}`);
  }

  return (
    <main
      className={styles.main}
      style={{ width: width }}
      onClick={handleProductClick}
    >
      <section className={styles.boxImg}>
        <Image src={product.imgUrl} alt={product.name} fill={true} />
      </section>
      <section>
        <section>
          <p>+ {product.name}</p>
          <section>
            <p>{formatNumberToValue(product.price)}</p>
            <p>{formatNumberToValue(product.promotionPrice)}</p>
          </section>
        </section>
        <PrimaryButton
          rounded={false}
          isDark={!isWhite}
          width={"100%"}
          height={"fit-content"}
          iconSize={20}
          onClick={() => console.log("comprando bonéF")}
        />
      </section>
    </main>
  );
}
