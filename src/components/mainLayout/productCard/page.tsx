import Image from "next/image";
import { IProductCard } from "@/types/common/ComponentsProps";
import style from "./productCard.module.scss";
import { ArrowRightIcon } from "@/assets/scripts/productCard/ArrowRightIcon";

export default function ProductCard({
  image,
  receiptDate,
  title,
  descriptionProduct,
  productAction,
}: IProductCard) {
  return (
    <div className={style.productCardContainer}>
      <Image
        className={style.productCardImage}
        src={image}
        alt="descriptionImage"
        priority={true}
      />
      <h1 className={style.productCardTitle}>{title}</h1>
      <p>{descriptionProduct}</p>
      <p>{receiptDate}</p>
      <button 
      className={style.productCardButton} 
      type="button" 
      onClick={productAction}>
      Подробнее <ArrowRightIcon classNames={style.arrowRightIcon}/> 
      </button>
    </div>
  );
}
