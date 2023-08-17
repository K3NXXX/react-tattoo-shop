import { catalogList } from "../../lists/catalogList";
import {catalogListTablet} from "../../lists/catalogListTablet"
import {catalogListPhone} from "../../lists/catalogListPhone"
import style from "./Catalog.module.scss"
import catalog12 from "../../assets/img/Catalog/catalog12.png"
import catalog13 from "../../assets/img/Catalog/catalog13.png"
import catalog14 from "../../assets/img/Catalog/catalog14.png"
import catalog15 from "../../assets/img/Catalog/catalog15.png"
import { Link, NavLink } from "react-router-dom";
const Catalog = () => {
    return (
        <section id="toCatalog" className={style.catalog}>
            <div className={style.catalog__top}>
                <h4 className={style.title}>Каталог</h4>
                <div className={style.catalog__list}>
                    {catalogList.map((catalogItem, index) => (<Link key={index} className={style.link} to={`/react-tattoo-shop/catalog/${index}`}>
                         {/* catalogItem.url */}
                            <img src={catalogItem.image}/>
                            <p className={style.image__text}>{catalogItem.description}</p>
                        </Link>))
                    }
                </div>
                <div className={style.catalog__listTablet}>
                    <div className={style.catalog__listTablet_wrapper}>
                    {catalogListTablet.map((catalogItem, index) => (<a key={index} className={style.link} href="">
                            <img src={catalogItem.image}/>
                            <p className={style.image__text}>{catalogItem.description}</p>
                        </a>))}
                    </div>
                </div>
                <div className={style.catalog__listPhone}>
                    <div className={style.catalog__listPhone_wrapper}>
                    {catalogListPhone.map((catalogItem, index) => (<a key={index} className={style.link} href="">
                            <img src={catalogItem.image}/>
                            <p className={style.image__text}>{catalogItem.description}</p>
                        </a>))}
                    </div>
                </div>
               
            </div>
            <div className={style.catalog__bottom}>
                <div className={style.left}>
                    <img src={catalog12} alt="catalogImg"/>
                    <p>Фарби Lip Nitn</p>
                    <a href="">Дивитися в каталозі </a>
                </div>
                <div className={style.right}>
                    <img src={catalog13} alt="catalogImg"/>
                    <p>Foxx viper - хіт 2023 року</p>
                    <a href="">Дивитися в каталозі </a>
                  
                </div>
            </div>
            <div className={style.catalog__bottomPhone}>
                <div className={style.left}>
                    <img src={catalog14} alt="catalogImg"/>
                    <p>Фарби Lip Nitn</p>
                    <a href="">Дивитися в каталозі </a>
                </div>
                <div className={style.right}>
                    <img src={catalog15} alt="catalogImg"/>
                    <p>Foxx viper -<br/> хіт 2023 року</p>
                    <a href="">Дивитися в каталозі </a>
                  
                </div>
            </div>
           
        </section>  

    );
}
 
export default Catalog;