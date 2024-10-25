import Image from "next/image";

import { IProductContent } from "@/types/common/ComponentsProps";

import style from "./productContent.module.scss";

export default function ProductContent({
  image,
  date,
  title,
  productContent,
}: IProductContent) {

  return (
    <div className={style.productContentWrap}>
      <div className={style.productContentContainer}>
        <Image className={style.productContentImage} src={image} alt={"description"} />
        <div className={style.productContentDescription}>
        <h1 className={style.productContentTitle}>{title}</h1>
        <p>{date}</p>
        <p>{productContent}</p>
        </div>
      </div>
    </div>
  );
}
