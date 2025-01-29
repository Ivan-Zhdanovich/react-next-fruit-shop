import { MainPath } from "@/services/router/routes";
import Link from "next/link";
import Image from "next/image";

import logo from "../../../assets/layouts/main/shopLogo.png"

import style from "./mainHeader.module.scss"

export default function MainHeader() {
  const renderNavigationElements = () => {
    return (
      <>
        <Link className={style.navigationLink} href={MainPath.Main}>
          <p className={style.navigationLink__Text}>Главная</p>
        </Link>
        <Link className={style.navigationLink}  href={MainPath.Products}>
          <p className={style.navigationLink__Text}>Продукты</p>
        </Link>
        <Link className={style.navigationLink} href={MainPath.AboutApp}>
          <p className={style.navigationLink__Text}>О приложении</p>
        </Link>
        <Link className={style.navigationLink} href={MainPath.Feedback}>
          <p className={style.navigationLink__Text}>Обратная связь</p>
        </Link>
      </>
    );
  };

  return (
  <header className={style.headerWrap}>
    <div className={style.headerContainer}>
      <Image src={logo} width={110} height={80} priority={true} rel="prefetch" alt="логотип магазина"/>
        <nav className={style.navigationWrap}>{renderNavigationElements()}</nav>
    </div>
  </header>
);
}
