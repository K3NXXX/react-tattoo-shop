import style from "./Subscribe.module.scss"
import checkbox from "../../assets/img/Subscribe/checkbox.svg"
import bgImg from "../../assets/img/Subscribe/bgImg.png"
import returnToTop from "../../assets/img/Brands/prevBtn.png"
import { animateScroll as scroll } from 'react-scroll';
import { useState } from "react";
const Subscribe = () => {
    const [checkboxActive, setCheckboxActive] = useState(false)
    const scrollToTop = () => {
        scroll.scrollToTop({
            smooth: true, // Додає плавність прокрутки
            duration: 1000, // Тривалість анімації прокрутки (в мілісекундах)
        });
    };
    return (  
        <section className={style.wrapper}>
            <div className={style.left}>
                <p>Дізнавайтеся першими</p>
                <p>Підпишіться, щоб знати про новини та акції</p>
                <form className={style.form}>
                    <label>Ел. пошта</label>
                    <input type="text" placeholder="bleachtop@gmail.com"/>
                    <label>Ім'я</label>
                    <input type="text" placeholder="Введіть ім'я"/>
                    <div className={style.checkbox}>
                        {checkboxActive ? (
                            <img className={style.checkboxImg} onClick={() => setCheckboxActive(false)} src={checkbox} alt="checkbox" />
                        ): (
                            <div>
                                <div onClick={() => setCheckboxActive(true)} className={style.checkboxClick}></div>
                            </div>
                        )}
                        <p>Ви погоджуєтесь на обробку ваших персональних даних</p>
                    </div>
                    <button type="submit">Підписатися</button>
                </form>
            </div>
            <div className={style.right}>
                <img className={style.bgImg} src={bgImg} alt="bgImg" />
                <div onClick={scrollToTop} className={style.backTopUp}>
                    <span>Вернутися наверх</span>
                    <img src={returnToTop} alt="returnToTopImg" />
                </div>
            </div>


        </section>
    );
}
 
export default Subscribe;