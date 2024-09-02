import { useProduct } from "@/states/productsState";
import CategorySection from "../../categorySection/categorySection";
import { productsDataToProductBox } from "@/utils/product.utils";

interface ShopProductsSectionProps {
  buyProduct: (productTypeId: string) => void;
}

export default function ShopProductsSection({
  buyProduct,
}: ShopProductsSectionProps) {
  const { productsSections } = useProduct();

  return (
    <>
      {productsSections.map((section, index) => (
        <>
          <CategorySection
            key={`section-${index}`}
            title={section.name}
            colorScheme={index % 2 == 0 ? "yellow" : "white"}
            hasTransiction={index == 0}
            products={section.productTypes.map((pt) =>
              productsDataToProductBox(pt)
            )}
            buyProduct={buyProduct}
          />
          <div style={{ height: 20 }}></div>
        </>
      ))}
    </>
  );
}
