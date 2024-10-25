import style from "./aboutAppPage.module.scss"

export default function AboutApp() {
    return (
        <div className={style.aboutAppContainer}>
            <h1>Страница о приложении.</h1>
            <p>Сделал Жданович Иван за 20 часов. Спасибо за внимание.</p>
        </div>
    )
}