import Image from "next/image";
import basket from "../../../assets/pages/mainPage/basket.png";

import styles from "./service.module.scss";

export default function Service() {
  return (
    <div className={styles.mainPageContainer}>
    <div className={styles.mainPageContainer__Header}>
    <h1 className={styles.mainPageContainer__Header__Title}>Наслаждайся покупками, не экономь на себе.</h1>
      <p className={styles.mainPageContainer__Header__Text}>
        Online магазин - самые лучшие покупки здесь. Нас легко найти и невозможно
        забыть. Давайте получим удовольствие вместе от ваших покупок. Приятного
        выбора. Ждем Вас снова у нас. До скорой встречи.
      </p>
    </div>
    <div className={styles.mainPictureWrapper}>
    <Image
        className={styles.mainPicture}
        src={basket}
        alt="корзина для покупок"
      />
    </div>
    </div>
  );
}
