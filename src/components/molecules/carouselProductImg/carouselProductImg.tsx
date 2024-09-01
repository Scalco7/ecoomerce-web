import { ProductItem } from "@/states/productsState";
import styles from "./styles.module.css";
import Image from "next/image";
import { useState } from "react";

interface CarouselProductImgProps {
  product: ProductItem;
}

export default function CarouselProductImg({
  product,
}: CarouselProductImgProps) {
  const [selectedImg, setSelectedImg] = useState(product.imgUrls[0]);

  function handleChangeImg(imgSelected: string) {
    setSelectedImg(imgSelected);
  }

  return (
    <main className={styles.main}>
      <section className={`${styles.paddingImg} ${styles.widthTotal}`}>
        <section className={styles.imgBox}>
          <Image
            src={selectedImg}
            alt={"Imagem Principal Produto"}
            fill={true}
            sizes="1000px"
            objectFit="contain"
          />
        </section>
      </section>

      <section className={styles.selectImgSection}>
        {product.imgUrls.map((img, index) => (
          <section
            className={`${styles.paddingImg} ${
              img == selectedImg ? styles.selectedImg : null
            }`}
            key={`select-img-${index}`}
          >
            <section
              className={styles.selectImgBox}
              onClick={() => handleChangeImg(img)}
            >
              <Image
                alt="selecionar imagem"
                src={img}
                fill={true}
                sizes="500px"
                objectFit="contain"
              />
            </section>
          </section>
        ))}
      </section>
    </main>
  );
}
