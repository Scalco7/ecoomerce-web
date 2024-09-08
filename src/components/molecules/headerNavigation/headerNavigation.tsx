import Image from "next/image";
import styles from "./style.module.css";
import CartCount from "@/components/atoms/cartCount/cartCount";
import { Poppins, Zilla_Slab } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";

import HamburguerMenuIcon from "@/components/icons/hamburguerMenuIcon/hamburguerMenuIcon";
import { useState } from "react";
import CloseIcon from "@/components/icons/closeIcon/closeIcon";
import { useCart } from "@/states/cartState";
import CartSection from "@/components/organisms/cartSection/cartSection";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

const zillaSlabBold = Zilla_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const zillaSlab = Zilla_Slab({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

interface INavigationRoute {
  name: string;
  selected: boolean;
  onClick: () => void;
}

function getRoutes(
  pathName: string,
  router: AppRouterInstance
): INavigationRoute[] {
  const routes = [
    {
      name: "home",
      selected: false,
      onClick: () => {},
    },
    {
      name: "shop",
      selected: false,
      onClick: () => {},
    },
  ];

  routes.forEach((route) => {
    route.selected = pathName == `/${route.name}`;
    route.onClick = () => {
      if (!route.selected) router.push(`/${route.name}`);
    };
  });

  return routes;
}

export default function HeaderNavigation() {
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const pathName = usePathname();
  const router = useRouter();
  const { productsQuantity } = useCart();

  const routes = getRoutes(pathName, router);

  const isCheckout = pathName.includes("checkout");

  const routesComponent = routes.map((route, index) => (
    <p
      key={`route-${index}`}
      onClick={route.onClick}
      className={`${styles.routeText} ${
        route.selected ? styles.textSelected : null
      } ${poppins.className}`}
    >
      {route.name}
    </p>
  ));

  function handleMobileNavBarOpening() {
    setMobileNavigationOpen(!mobileNavigationOpen);
  }

  function toogleShowCart(show: boolean) {
    setShowCart(show);
  }

  return (
    <>
      <main className={styles.main}>
        <section className={styles.logoBox}>
          <div className={styles.logoImg}>
            <Image
              fill={true}
              sizes="70px"
              src={"/logo-header.png"}
              alt={"Logo"}
            />
          </div>
        </section>
        {isCheckout ? (
          <p className={`${zillaSlab.className} ${styles.checkoutText}`}>
            Garantimos que você fez a{" "}
            <span className={zillaSlabBold.className}>melhor</span> escolha
          </p>
        ) : (
          <>
            {mobileNavigationOpen && (
              <section className={styles.mobileNavBar}>
                {routesComponent}
              </section>
            )}
            <section className={styles.navigationDesktop}>
              {routesComponent}
            </section>
            <section
              className={`${poppins.className} ${styles.navigationMobile}`}
              onClick={handleMobileNavBarOpening}
            >
              {mobileNavigationOpen ? (
                <CloseIcon size={30} color="white" />
              ) : (
                <HamburguerMenuIcon size={30} strokeWidth={3} color="white" />
              )}
            </section>
            <div style={{ width: "28px" }}>
              <CartCount
                quantity={productsQuantity}
                fontSize={14}
                onClick={() => toogleShowCart(true)}
              />
            </div>
          </>
        )}
      </main>
      <CartSection open={showCart} closeCart={() => toogleShowCart(false)} />
    </>
  );
}
