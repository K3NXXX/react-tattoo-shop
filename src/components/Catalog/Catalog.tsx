import { Link } from "react-router-dom";
import { catalogList } from "../../lists/catalogList";
import {catalogListTablet} from "../../lists/catalogListTablet"
import {catalogListPhone} from "../../lists/catalogListPhone"
import catalog12 from "../../assets/img/Catalog/catalog12.png"
import catalog13 from "../../assets/img/Catalog/catalog13.png"
import catalog14 from "../../assets/img/Catalog/catalog14.png"
import catalog15 from "../../assets/img/Catalog/catalog15.png"
import style from "./Catalog.module.scss"

const Catalog: React.FC = () => {
    return (
        <section id="toCatalog" className={style.catalog}>
            <div className={style.catalog__top}>
                <h4 className={style.title}>Каталог</h4>
                <div className={style.catalog__list}>
                    {catalogList.map((catalogItem, index) => (<Link key={index} className={style.link} to={`/react-tattoo-shop/catalog/${index}`}>
                            <img src={catalogItem.image}/>
                            <p className={style.image__text}>{catalogItem.description}</p>
                        </Link>))
                    }
                </div>
                <div className={style.catalog__listTablet}>
                    <div className={style.catalog__listTablet_wrapper}>
                    {catalogListTablet.map((catalogItem, index) => (<Link key={index} className={style.link} to={`/react-tattoo-shop/catalog/${index}`}>
                            <img src={catalogItem.image}/>
                            <p className={style.image__text}>{catalogItem.description}</p>
                        </Link>))}
                    </div>
                </div>
                <div className={style.catalog__listPhone}>
                    <div className={style.catalog__listPhone_wrapper}>
                    {catalogListPhone.map((catalogItem, index) => (<Link key={index} className={style.link} to={`/react-tattoo-shop/catalog/${index}`}>
                            <img src={catalogItem.image}/>
                            <p className={style.image__text}>{catalogItem.description}</p>
                        </Link>))}
                    </div>
                </div>
            </div>
            <div className={style.catalog__bottom}>
                <div className={style.left}>
                    <img src={catalog12} alt="catalogImg"/>
                    <p>Фарби True Magic</p>
                    <Link to="/react-tattoo-shop/catalog/4">Дивитися в каталозі </Link>
                </div>
                <div className={style.right}>
                    <img src={catalog13} alt="catalogImg"/>
                    <p>Foxx kitsune - хіт 2023 року</p>
                    <Link to="/react-tattoo-shop/catalog/2">Дивитися в каталозі </Link>
                </div>
            </div>
            <div className={style.catalog__bottomPhone}>
                <div className={style.left}>
                    <img src={catalog14} alt="catalogImg"/>
                    <p>Фарби True Magic</p>
                    <Link to="/react-tattoo-shop/catalog/4">Дивитися в каталозі </Link>
                </div>
                <div className={style.right}>
                    <img src={catalog15} alt="catalogImg"/>
                    <p>Foxx kitsune -<br/> хіт 2023 року</p>
                    <Link to="/react-tattoo-shop/catalog/2">Дивитися в каталозі </Link>
                </div>
            </div>
        </section>  
    );
}
 
export default Catalog;