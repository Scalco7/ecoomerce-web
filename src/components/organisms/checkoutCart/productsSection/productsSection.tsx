import { useCart } from "@/states/cartState";
import styles from "./style.module.css";
import ProductCheckoutBox from "@/components/molecules/productCheckoutBox/productCheckoutBox";
import CupomInput from "@/components/molecules/cupomInput/cupomInput";
import ShippingInput from "@/components/molecules/shippingInput/shippingInput";

export default function CheckoutProductsSection() {
  const { products } = useCart();

  return (
    <main className={styles.main}>
      <section className={styles.productsSection}>
        {products &&
          products.map((product) => (
            <ProductCheckoutBox
              key={`product-checkout-${product.id}`}
              product={product}
            />
          ))}
      </section>
      <section className={styles.shopOptionsSection}>
        <CupomInput />
        <ShippingInput />
      </section>
    </main>
  );
}
