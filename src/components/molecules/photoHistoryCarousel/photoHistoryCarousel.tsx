import styles from "./style.module.css";
import PhotoHistory, {
  PhotoHistoryProps,
} from "@/components/atoms/photoHistory/photoHistory";
import ChevronIcon from "@/components/icons/chevronIconButton/chevronIconButton";
import { useState } from "react";

interface PhotoHistoryCarouselProps {
  historys: PhotoHistoryProps[];
}

export default function PhotoHistoryCarousel({
  historys,
}: PhotoHistoryCarouselProps) {
  const [showCount, setShowCount] = useState(0);

  function handleLeftIconClick() {
    const newShowCount = showCount <= 0 ? historys.length - 1 : showCount - 1;
    setShowCount(newShowCount);
  }

  function handleRightIconClick() {
    const newShowCount = showCount >= historys.length - 1 ? 0 : showCount + 1;
    setShowCount(newShowCount);
  }

  return (
    <main className={styles.main}>
      <section onClick={handleLeftIconClick}>
        <ChevronIcon side="left" size={100} color="#fff" opacity={0.7} />
      </section>
      <section className={styles.carousel}>
        <PhotoHistory
          title={historys[showCount].title}
          titleColor={historys[showCount].titleColor}
          history={historys[showCount].history}
          imageSrc={historys[showCount].imageSrc}
        />
        {/* {historys.map((his, index) => (
          <section
            key={`history-${index}`}
            className={`${styles.historyBox} ${
              index == showCount ? styles.visible : null
            }`}
          >
            <PhotoHistory
              title={his.title}
              titleColor={his.titleColor}
              history={his.history}
              imageSrc={his.imageSrc}
            />
          </section>
        ))} */}
      </section>
      <section onClick={handleRightIconClick}>
        <ChevronIcon side="right" size={100} color="#b3b3b2" opacity={0.7} />
      </section>
    </main>
  );
}
