import { Link, useParams } from "react-router-dom";
import style from "./TattooMachines.module.scss"
import { useEffect, useMemo } from "react";
import axios from "axios";
import { setCatalogGoods } from "../../redux/slices/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../../components/Category/CategoryCard";
import { catalogList } from "../../lists/catalogList";
const CatalogFrame = () => {
    const {id} = useParams()
    const catalog = catalogList[id]
    const catalogGoods = useSelector(state => state.categorySlice.catalogGoods)
    const filteredCatalogGoods = catalogGoods.filter(good => good.category === `${catalog.filterName}`)
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    useEffect(() => {
        axios.get(`https://64cc9b3a2eafdcdc851a0362.mockapi.io/goods`)
        .then(res => {
             dispatch(setCatalogGoods(res.data))
        })
    }, [])
    return (  
        <div className={style.wrapper}>
            <div className={style.path}>
                <Link to="/react-tattoo-shop">Головна</Link> / 
                <span> Каталог</span> /
                <Link to="/catalog/тату-машинки">{catalog.description}</Link>
            </div>
            <h5 className={style.title}>{catalog.description}</h5>
            <div className={style.catalog__list}>
                {filteredCatalogGoods.map(good => {
                    return <CategoryCard key={good.id} good={good}/>
                })}
            </div>
        </div>
    );
}
 
export default CatalogFrame;