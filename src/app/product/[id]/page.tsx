"use client";

import { ProductType, useProduct } from "@/states/productsState";
import { useParams, useRouter } from "next/navigation";

export default function Product() {
  const router = useRouter();
  const params = useParams();
  const { productsSections } = useProduct();
  const product: ProductType | undefined = productsSections
    .map((ps) => ps.productTypes)
    .flat()
    .find((prod) => prod.id == params.id);

  if (!product) {
    router.push("/home");
    return;
  }

  return (
    <main>
      <h1 style={{ color: "black" }}>{product.name}</h1>
    </main>
  );
}
