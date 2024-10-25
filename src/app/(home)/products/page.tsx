"use client"

import { useRouter } from "next/navigation"

import ProductCard from "@/components/mainLayout/productCard/page"
import greenApple from "../../../assets/pages/products/apple.png"
import mango from "../../../assets/pages/products/mango.png"
import orange from "../../../assets/pages/products/orange.png"


import { MainPath } from "@/services/router/routes"

import style from "./products.module.scss"



export default function Products () {
    const router = useRouter()

    const transitionList = {
        firstTransition: ()=> {
            router.push(MainPath.ProductPage + "/1");
        },
        secondTransition: ()=> {
            router.push(MainPath.ProductPage + "/2");
        },
        thirdTransition: ()=> {
            router.push(MainPath.ProductPage + "/3")
        }
    }

    return(
        <div className={style.productsWrap}>
            <div className={style.productsContainer}>
            <h1 className={style.productContainerTitle}>Здесь вы найдете самые свежие и вкусные продукты</h1>
            <div className={style.productsCardsContainer}>
            <ProductCard 
            image={greenApple} 
            receiptDate="23 октября 2024"
            title="Яблоко"
            descriptionProduct="Именно яблоко — один из кандидатов на роль запретного плода из Эдемского сада. Согласно греческой мифологии, Геракл сорвал три золотых яблока с Древа Жизни в саду титана Атласа, и это был 12-ый подвиг героя."
            productAction={transitionList.firstTransition}
            id="23"
            />
            <ProductCard 
            image={mango} 
            receiptDate="24 октября 2024"
            title="Манго" 
            descriptionProduct="Плоды манго подходит для людей всех возрастов: для беременных, спортсменов, выздоравливающих и худеющих, для курильщиков и гипертоников." 
            productAction={transitionList.secondTransition}
            id="24"
            />
            <ProductCard 
            image={orange} 
            receiptDate="25 октября 2024" 
            title="Апельсин" 
            descriptionProduct="Знаменитый оранжевый фрукт любим многими не только за свой вкус. Апельсин обладает множеством полезных свойств, известных еще народной медицине."
            productAction={transitionList.thirdTransition}
            id="25"
            />
           </div>
          </div>  
        </div>
    )
}