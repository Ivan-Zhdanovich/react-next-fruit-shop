"use client";

import { useParams, useRouter } from "next/navigation";

import { products } from "../../../../mocks/Products";


import ProductContent from "@/components/mainLayout/productContent/page";
import { ArrowLeftIcon } from "@/assets/scripts/productPage/ArrowLeftIcon";

import style from "./productPage.module.scss";

export default function ProductPage() {

  const router = useRouter();
  const params = useParams();

  const productPageData = products[+params.productPageId! - 1];

  return (
    <div className={style.productPageWrap}>
      <div className={style.productPageContainer}>
        <div className={style.productPageLeftButtonWrapper}>
          <button className={style.productPageLeftButton} type="button" onClick={() => router.back()}>
          <ArrowLeftIcon classNames={style.productPageLeftButton__Icon} />
          Все продукты
          </button> 
        </div>
        <ProductContent
          image={productPageData.image}
          date={productPageData.receiptDate}
          title={productPageData.title}
          productContent={productPageData.descriptionProduct}
          id={productPageData.id}
        />
      </div>
    </div>
  );
}
