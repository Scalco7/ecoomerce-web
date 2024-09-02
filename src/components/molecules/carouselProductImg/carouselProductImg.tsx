import { ProductItem } from "@/states/productsState";
import styles from "./styles.module.css";
import Image from "next/image";
import { useState } from "react";
import ChevronIcon from "@/components/icons/chevronIcon/chevronIcon";

interface CarouselProductImgProps {
  product: ProductItem;
}

export default function CarouselProductImg({
  product,
}: CarouselProductImgProps) {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  function handleNextImg() {
    let nextIndex = selectedImgIndex + 1;
    if (nextIndex >= product.imgUrls.length) {
      nextIndex = 0;
    }

    setSelectedImgIndex(nextIndex);
  }

  function handlePreviousImg() {
    let previousIndex = selectedImgIndex - 1;
    if (previousIndex < 0) {
      previousIndex = product.imgUrls.length - 1;
    }

    setSelectedImgIndex(previousIndex);
  }

  return (
    <main className={styles.main}>
      <section className={styles.selectImgSection}>
        {product.imgUrls.map((img, index) => (
          <section
            className={`${styles.paddingSelectImg} ${
              index == selectedImgIndex ? styles.selectedImg : null
            }`}
            key={`select-img-${index}`}
          >
            <section
              className={styles.selectImgBox}
              onClick={() => setSelectedImgIndex(index)}
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
      <section className={styles.paddingImg}>
        <section
          className={styles.passImgLeftSection}
          onClick={handlePreviousImg}
        >
          <ChevronIcon side={"left"} opacity={1} size={30} color="#000" />
        </section>
        <section className={styles.imgBox}>
          <Image
            src={product.imgUrls[selectedImgIndex]}
            alt={"Imagem Principal Produto"}
            fill={true}
            sizes="1000px"
            objectFit="contain"
          />
        </section>
        <section className={styles.passImgRigthSection} onClick={handleNextImg}>
          <ChevronIcon side={"right"} opacity={1} size={30} color="#000" />
        </section>
      </section>
    </main>
  );
}
