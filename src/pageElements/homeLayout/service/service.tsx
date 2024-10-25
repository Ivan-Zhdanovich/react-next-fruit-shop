import Image from "next/image";
import basket from "../../../assets/pages/mainPage/basket.png";

import style from "./service.module.scss";

export default function Service() {
  return (
    <div className={style.mainPageContainer}>
    <div className={style.mainPageContainer__Header}>
    <h1>Наслаждайся покупками, не экономь на себе.</h1>
      <p className={style.mainPageContainer__Header__Text}>
        Online магазин - самые лучшие покупки здесь. Нас легко найти и невозможно
        забыть. Давайте получим удовольствие вместе от ваших покупок. Приятного
        выбора. Ждем Вас снова у нас. До скорой встречи.
      </p>
    </div>
     <Image
        className={style.mainPicture}
        src={basket}
        alt="корзина для покупок"
      />
    </div>
  );
}
