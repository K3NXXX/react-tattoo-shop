import CategoryCard from "./CategoryCard";
import CategoryCarousel from "./CategoryCarousel";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useRef, useState } from "react";
import { RootState } from "../../redux/store";
import { CategoryItem, setModal } from "../../redux/slices/categorySlice";
import Skeleton from "../Skeleton/Skeleton";
import style from "./Category.module.scss"
import { useClickOutside } from "../../hooks/useClickOutside";
import modalImage from '../../assets/img/Catalog/modal-image.jpg'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


type CategoryProps = {
    activeCategory: number;
    onClickActiveCategory: (index:number) => void
}
const Category: React.FC<CategoryProps> = ({activeCategory, onClickActiveCategory} ) => {
    const [showMore, setShowMore] = useState<number>(4)
    const isLoading = useSelector((state:RootState) => state.categorySlice.isLoading)
    const skeleton = [...new Array(4)].map((_, index) => (<Skeleton key={index}/>))
    const goods = useSelector((state:RootState) => state.categorySlice.goods)
    const categoryList = ["Нові товари", "Хіти продаж", "Найпопулярніші"]
    const categoryListRef = useRef<HTMLUListElement>(null)
    const popupRef = useRef<HTMLDivElement>(null);
    const modal = useSelector((state:RootState) => state.categorySlice.modal)
    const dispatch = useDispatch()



    useClickOutside(popupRef, () => {
        if (modal) setTimeout(() => dispatch(setModal(false)), 50);
      });

    return (  
        <section className={style.wrapper}>
            <ul ref={categoryListRef} className={style.category__list}>
                {categoryList.map((category, index) => {
                    return (<li onClick={() => (onClickActiveCategory(index))} className={index === activeCategory ? style.category__active : ""} key={index}>{category}</li>)
                })}
            </ul>
            <div className={style.goods}>
                {isLoading ? skeleton : goods.length > 0 ? goods.slice(0, showMore).map((good: CategoryItem) => {
                    return <CategoryCard key={good.id} good = {good}/>
                }) : (<p className={style.noGoods}>Товари відсутні</p>)}
            </div>
            <div className={style.carousel}>
                <CategoryCarousel/>
            </div>
            {showMore === 4 ? (
                <button onClick={() => setShowMore(10)} className={style.moreBtn}>Показати більше</button>
            ) : (
                <button onClick={() => {
                    categoryListRef.current?.scrollIntoView({ behavior: "smooth" })
                    setShowMore(4)}} className={style.moreBtnClose}>Приховати</button>
            )}
            {modal && (
              <div className={style.popup_bg}>
                <div ref={popupRef} className={style.popup}>
                  <p className={style.added}>Товар додано в корзину</p>
                  <img className={style.popup__image} src={modalImage} alt="tattoo machine" />
                 
                  <div className={style.popup__buttons}>
                    <Link onClick={() => dispatch(setModal(false))} to="/react-tattoo-shop/cart">Оформити замовлення</Link>
                    <button onClick={() => dispatch(setModal(false))}>Продовжити покупки</button>
                  </div>
                  <svg
                    onClick={() => dispatch(setModal(false))}
                    className={style.close}
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="40"
                    viewBox="0 0 15 40"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_537_10715)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.5 19.7929L11.0355 16.2573L11.7426 16.9644L8.20711 20.5L11.7426 24.0355L11.0355 24.7426L7.5 21.2071L3.96447 24.7426L3.25736 24.0355L6.79289 20.5L3.25736 16.9644L3.96447 16.2573L7.5 19.7929Z"
                        fill="#636B78"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_537_10715">
                        <rect width="15" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            )}
        </section>
    );
}
 
export default Category;