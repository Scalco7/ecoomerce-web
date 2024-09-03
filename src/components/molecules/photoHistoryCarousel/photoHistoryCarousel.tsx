import styles from "./style.module.css";
import PhotoHistory, {
  PhotoHistoryProps,
} from "@/components/atoms/photoHistory/photoHistory";
import ChevronIcon from "@/components/icons/chevronIcon/chevronIcon";
import { useClientMediaQuery } from "@/hooks/useClientMediaQuery";
import { useState } from "react";

interface PhotoHistoryCarouselProps {
  historys: PhotoHistoryProps[];
}

export default function PhotoHistoryCarousel({
  historys,
}: PhotoHistoryCarouselProps) {
  const [showCount, setShowCount] = useState(0);
  const isTablet = useClientMediaQuery("(min-width: 576px)");
  const isDesktop = useClientMediaQuery("(min-width: 1200px)");

  const iconSize = isDesktop ? 80 : isTablet ? 50 : 30;

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
      <section onClick={handleLeftIconClick} className={styles.chevronIcon}>
        <ChevronIcon side="left" size={iconSize} color="#fff" opacity={0.7} />
      </section>
      <section className={styles.carousel}>
        {historys.map((his, index) => (
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
        ))}
      </section>
      <section onClick={handleRightIconClick} className={styles.chevronIcon}>
        <ChevronIcon
          side="right"
          size={iconSize}
          color="#b3b3b2"
          opacity={0.7}
        />
      </section>
    </main>
  );
}
