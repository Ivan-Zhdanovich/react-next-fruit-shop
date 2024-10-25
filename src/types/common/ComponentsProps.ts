import { StaticImageData } from "next/image";

export interface IProductCard {
image: string | StaticImageData,
receiptDate: string,
title: string,
descriptionProduct: string,
productAction?: () => void,
id: string,
}

export interface IProductContent {
    title: string,
    image: string | StaticImageData,
    date: string,
    productContent: string,
    id: string,
    productContentAction?: () => void,
}