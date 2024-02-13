import CategoryCard from "./CategoryCard";
import CategoryCarousel from "./CategoryCarousel";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useRef, useState } from "react";
import { RootState } from "../../redux/store";
import { CategoryItem} from "../../redux/slices/categorySlice";
import Skeleton from "../Skeleton/Skeleton";
import style from "./Category.module.scss"



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
        </section>
    );
}
 
export default Category;