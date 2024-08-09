import styles from "./style.module.css";
import PriceTag from "@/components/atoms/priceTag/priceTag";
import Image from "next/image";

interface ProductWithTagProps {
  imgSrc: string;
  width: string;
  height: string;
  tags?: TagData[];
}

interface TagData {
  price: number;
  onCLick: () => void;
  position: AbsolutePostion;
}

interface AbsolutePostion {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export default function ProductWithTag({
  width,
  height,
  imgSrc,
  tags,
}: ProductWithTagProps) {
  return (
    <main className={styles.main} style={{ width: width, height: height }}>
      {tags &&
        tags?.map((tag, index) => (
          <section
            className={styles.tag}
            style={{
              top: tag.position.top,
              bottom: tag.position.bottom,
              left: tag.position.left,
              right: tag.position.right,
            }}
          >
            <PriceTag price={tag.price} onClick={tag.onCLick} />
          </section>
        ))}
      <Image
        src={imgSrc}
        alt="Produto"
        sizes="1200px"
        fill={true}
        objectFit="contain"
      />
    </main>
  );
}
