import { Link } from "react-router-dom"
import style from "./Footer.module.scss"
import phone from "../../assets/img/phone-icon.svg"
import telegram from "../../assets/img/telegram-icon.png"
import viber1 from "../../assets/img/viber-icon.svg"
import viber2 from "../../assets/img/viber2-icon.svg"
import email from "../../assets/img/email-icon.svg"

const Footer:React.FC = () => {
    return (
        <section className={style.root}>
            <div className={style.wrapper}>
                <div className={style.left}>
                    <div className={style.first__column}>
                        <Link to="/react-tattoo-shop" className={style.logo}>
                                <span className={style.logo__name}>mr. driskell</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="192" height="6" viewBox="0 0 192 6" fill="none">
                                    <path d="M0.113249 3.00002L3 5.88677L5.88675 3.00002L3 0.113264L0.113249 3.00002ZM191.887 3L189 0.113248L186.113 3L189 5.88675L191.887 3ZM3 3.50002L189 3.5L189 2.5L3 2.50002L3 3.50002Z" fill="#BB8C5F"/>
                                </svg>
                                <span>Tattoo shop</span>
                        </Link>
                        <Link to="*">
                            <p className={style.copyright}>Політика конфідеційності</p>
                        </Link>
                    </div>
                    <div className={style.second__column}>
                        <ul>
                            <li><Link to="*">Промокоди</Link></li>
                            <li><Link to="*">Знижки</Link></li>
                            <li><Link to="*">Допомога</Link></li>
                        </ul>
                    </div>
                    <div className={style.third__column}>
                        <ul>
                            <li><Link to="*">Про нас</Link></li>
                            <li><Link to="*">Контакти</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.contacts}>
                            <div className={style.contacts__phone}>
                                <div>
                                    <img src={phone} alt="phone-icon" />
                                    <a href="tel:+380975525252"><span className={style.phone__number}>380 97 552-52-52</span></a>
                                </div>
                                <div>
                                    <a href="tel:+380975525252">
                                        <img src={telegram} alt="telegram" />
                                    </a>
                                    <a href="tel:+380975525252">
                                        <img src={viber1} alt="viber" />
                                    </a>
                                    <a href="tel:+380975525252">
                                        <img src={viber2} alt="viber" />
                                    </a>
                                </div>
                            </div>
                            <p>Час роботи: з 9:00 до 20:00</p>
                            <div className={style.email}>
                            <img src={email} alt="email-icon" />
                            <a href="mailto:Mr.Driskell@gmail.com">Mr.Driskell@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      );
}
 
export default Footer;
<section>

</section>