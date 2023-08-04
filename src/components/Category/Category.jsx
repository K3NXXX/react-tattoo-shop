import style from "./Category.module.scss"
import CategoryCard from "./CategoryCard";
const Category = ({goods}) => {
    return (  
        <section className={style.wrapper}>
            <ul className={style.category__list}>
                <li><a href="">Хіти продаж</a></li>
                <li><a href="">Найпопулярніші</a></li>
                <li><a href="">Нове</a></li>
                <li><a href="">Акціонні товари</a></li>
            </ul>
            <div className={style.goods}>
                {goods.map(item => {
                    return <CategoryCard item = {item}/>
                    
                })}
            </div>

        </section>
    );
}
 
export default Category;