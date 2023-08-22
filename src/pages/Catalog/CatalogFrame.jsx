import { Link, useParams } from "react-router-dom";
import style from "./CatalogFrame.module.scss"
import { useEffect, useState } from "react";
import axios from "axios";
import { setCatalogGoods, setNewGood } from "../../redux/slices/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../../components/Category/CategoryCard";
import { catalogList } from "../../lists/catalogList";
import { catalogListTablet } from "../../lists/catalogListTablet";
import { catalogListPhone } from "../../lists/catalogListPhone";
const CatalogFrame = () => {
    const {id} = useParams()
    const [catalog, setCatalog] = useState("");
    const [minPrice, setMinPrice] = useState("100")
    const [maxPrice, setMaxPrice] = useState("50000")
    const [filterButton, setFilterButton] = useState("")
    const [activeBtn, setActiveBtn] = useState("")
    const dispatch = useDispatch()
    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
      };
    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value)
    }
   
    

    useEffect(() => {
        const resizeWindow = () => {
            if (window.innerWidth > 1246) {
                setCatalog(catalogList[id])
            }else if (window.innerWidth < 1246) {
                setCatalog(catalogListTablet[id])
            }else if (window.innerWidth < 768) {
                setCatalog(catalogListPhone[id])
            }
        }
        resizeWindow()
        window.addEventListener("resize", resizeWindow)
        return () => {
            window.removeEventListener("resize", resizeWindow)
        }
    }, [id,dispatch])
    
    const catalogGoods = useSelector(state => state.categorySlice.catalogGoods)
    const filteredCatalogGoods = catalogGoods.filter(good => good.category === `${catalog.filterName}`)
    const filteredCatalogGoodsPrice = filteredCatalogGoods.filter(filteredGood =>  filteredGood.price <= parseFloat(maxPrice) && filteredGood.price >= parseFloat(minPrice))
    dispatch(setNewGood(false))
    useEffect(() => {
        window.scrollTo(0,0)
    }, [dispatch])
    useEffect(() => {
        axios.get(`https://64cc9b3a2eafdcdc851a0362.mockapi.io/goods?search=${filterButton}`)
        .then(res => {
            dispatch(setCatalogGoods(res.data))
        })
    }, [dispatch, filterButton])

   
    return (  
        <div className={style.wrapper}>
            <div className={style.path}>
                <Link to="/react-tattoo-shop">Головна</Link> / 
                <span> Каталог</span> /
                <Link to={`/react-tattoo-shop/catalog/${id}`}>{catalog.description}</Link>
            </div>
            <h5 className={style.title}>{catalog.description}</h5>
            <div className={style.filterButtons}>
                <button className={activeBtn === 1 ? style.active : ""} onClick={() => {
                    setFilterButton("noobs")
                    setActiveBtn(1)
                }}>Для починаючих</button>
                <button className={activeBtn === 2 ? style.active : ""} onClick={() => {
                    setFilterButton("builders")
                    setActiveBtn(2)
                }}>Від білдерів</button>
                <button className={activeBtn === 3 ? style.active : ""} onClick={() => {
                    setFilterButton("profi")
                    setActiveBtn(3)
                }}>Для професіоналів</button>
            </div>
            <div className={style.filterPrice}>
                <span className={style.price}>Ціна</span>
                <input onChange={handleMinPriceChange} value={minPrice} type="number" className={style.price__number}/>
                <span className={style.price__line}></span>
                <input onChange={handleMaxPriceChange} value={maxPrice} type="number" className={style.price__number}/>
                <button onClick={() => {
                    setMinPrice(100)
                    setMaxPrice(50000)
                    setFilterButton("")
                    setActiveBtn("")
                }} className={style.removeFilters}>Скинути фільтри</button>
            </div>
            <div className={style.catalog__list}>
                {filteredCatalogGoodsPrice.length > 0 ? filteredCatalogGoodsPrice.map(good => {
                    return <CategoryCard key={good.id} good={good}/>
                }) : (<span className={style.noGoods}>Товарів не знайдено</span>)}
            </div>
        </div>
    );
}
 
export default CatalogFrame;