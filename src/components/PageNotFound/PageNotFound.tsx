import { Link } from "react-router-dom";
import { useEffect } from "react";
import style from "./PageNotFound.module.scss"
import man from "../../assets/img/PageNotFound/bg.png"

const PageNotFound: React.FC = () => {
    
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (  
        <section className={style.wrapper}>
            <div className={style.right}>
                <p>Помилка 404!</p>
                <p>Ця сторінка не знайдена, ми вже працюємо, щоб її відновити!</p>
                <div className={style.buttons}>
                    <Link to="/react-tattoo-shop">Вернутися на головну</Link>
                    <Link to="/react-tattoo-shop/catalog/2">Вернутися в каталог</Link>
                </div>
            </div>
            <div className={style.left}>
                <img src={man} alt="man" />
            </div>
        </section>
    );
}
 
export default PageNotFound;