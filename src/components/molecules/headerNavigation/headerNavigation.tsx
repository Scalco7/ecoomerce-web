import Image from "next/image";
import styles from "./styles.module.css";
import CartCount from "@/components/atoms/cartCount/cartCount";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export default function HeaderNavigation() {
  const routes = [
    {
      name: "home",
      selected: false,
      onClick: () => {},
    },
    {
      name: "shop",
      selected: true,
      onClick: () => {},
    },
  ];

  return (
    <main className={styles.main}>
      <section className={styles.logoBox}>
        <Image
          objectFit="contain"
          width={80}
          height={80}
          src={"/logo-header.png"}
          alt={"Logo"}
        />
      </section>
      <section className={`${poppins.className} ${styles.navigation}`}>
        {routes &&
          routes.map((route, index) => (
            <p
              key={`route-${index}`}
              onClick={route.onClick}
              className={`${styles.routeText} ${
                route.selected ? styles.textSelected : null
              }`}
            >
              {route.name}
            </p>
          ))}
      </section>
      <div style={{ width: "28px" }}>
        <CartCount
          quantity={0}
          fontSize={14}
          onClick={() => console.log("vai pro carrinho")}
        />
      </div>
    </main>
  );
}
