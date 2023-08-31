import CategoryCard from "../../components/Category/CategoryCard";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CategoryItem, setCatalogGoods, setNewGood } from "../../redux/slices/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { catalogList, catalogListType } from "../../lists/catalogList";
import { catalogListTablet } from "../../lists/catalogListTablet";
import { catalogListPhone } from "../../lists/catalogListPhone";
import { RootState } from "../../redux/store";
import axios from "axios";
import style from "./CatalogFrame.module.scss"

const CatalogFrame: React.FC = () => {
    const {id} = useParams<{id: string}>()
    const [catalog, setCatalog] = useState<catalogListType>();
    const [minPrice, setMinPrice] = useState<string>("100")
    const [maxPrice, setMaxPrice] = useState<string>("50000")
    const [filterButton, setFilterButton] = useState<string>("")
    const [activeBtn, setActiveBtn] = useState<number>()
    const dispatch = useDispatch()

    const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(event.target.value);
      };

    const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(event.target.value)
    }

    useEffect(() => {
        const resizeWindow = () : void => {
            if (id !== undefined) {
                if (window.innerWidth > 1246) {
                    setCatalog(catalogList[Number(id)])
                }else if (window.innerWidth < 1246) {
                    setCatalog(catalogListTablet[Number(id)])
                }else if (window.innerWidth < 768) {
                    setCatalog(catalogListPhone[Number(id)])
                }

            }
        }
        resizeWindow()
        window.addEventListener("resize", resizeWindow)
        return () => {
            window.removeEventListener("resize", resizeWindow)
        }
    }, [id,dispatch])

    const catalogGoods = useSelector((state: RootState) => state.categorySlice.catalogGoods)
    const filteredCatalogGoods = catalogGoods.filter((good: CategoryItem) => good.category === `${catalog && catalog.filterName}`)
    const filteredCatalogGoodsPrice = filteredCatalogGoods.filter((filteredGood: CategoryItem) =>  parseFloat(filteredGood.price) <= parseFloat(maxPrice) && parseFloat(filteredGood.price) >= parseFloat(minPrice))
    dispatch(setNewGood(false))
    useEffect(() => {
        window.scrollTo(0,0)
    }, [dispatch])

    useEffect(() => {
        axios.get(`https://64cc9b3a2eafdcdc851a0362.mockapi.io/goods?search=${filterButton}`)
        .then(res => {
            dispatch(setCatalogGoods(res.data))
        })
        .catch(error => {
            console.log("Error", error)
            alert("Помилка при отриманні товарів з сервера")
        })
    }, [dispatch, filterButton])
    return (  
        <div className={style.wrapper}>
            <div className={style.path}>
                <Link to="/react-tattoo-shop">Головна</Link> / 
                <span> Каталог</span> /
                <Link to={`/react-tattoo-shop/catalog/${id}`}>{catalog && catalog.description}</Link>
            </div>
            <h5 className={style.title}>{catalog && catalog.description}</h5>
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
                    setMinPrice("100")
                    setMaxPrice("50000")
                    setFilterButton("")
                    setActiveBtn(0)
                }} className={style.removeFilters}>Скинути фільтри</button>
            </div>
            <div className={style.catalog__list}>
                {filteredCatalogGoodsPrice.length > 0 ? filteredCatalogGoodsPrice.map((good : CategoryItem) => {
                    return <CategoryCard key={good.id} good={good}/>
                }) : (<span className={style.noGoods}>Товарів не знайдено</span>)}
            </div>
        </div>
    );
}
 
export default CatalogFrame;