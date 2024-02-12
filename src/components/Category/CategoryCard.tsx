import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryItem, setBinCount, setModal} from "../../redux/slices/categorySlice";
import { CartItemType, addItems } from "../../redux/slices/cartSlice";
import { RootState } from "../../redux/store";
import style from "./CategoryCard.module.scss"

type CategoryCardProps = {
    good: CategoryItem;
}

const CategoryCard: React.FC<CategoryCardProps> = ({good}) => {
    const [selectCard, setSelectCard] = useState<boolean>(false)
    const newGood = useSelector((state:RootState) => state.categorySlice.newGood)
    const binCount = useSelector((state:RootState) => state.categorySlice.binCount)
    const dispatch = useDispatch()
    
    const onClickHandle = () : void => {
        const item : CartItemType = {
            id: good.id,
            image: good.image,
            name: good.name,
            count: 0,
            price: parseFloat(good.price.replace(/\s+/g, ""))
        }
        dispatch(addItems(item))
        dispatch(setBinCount(binCount + 1))
        dispatch(setModal(true))
    }

    return (  
        <>
          <div onMouseEnter={() => setSelectCard(true)} onMouseLeave={() => setSelectCard(false)} className={style.categoryCard}>
              {newGood && (
                  <span className={style.new}>Новинка</span>
              )}
              <div className={style.bg} style={{backgroundImage: `url(${process.env.PUBLIC_URL + good.image})`}}></div>
              <div className={style.card__info}>
                  <p className={style.info__name}>{good.name}</p> 
                  <p className={style.info__price}>{good.price} ₴</p>
                  {selectCard && (
                      <span onClick={onClickHandle} className={style.span__add}>Додати в корзину</span>
                  )}
              </div>
          </div>
          <div  className={style.categoryCard__phone}>
              {newGood && (
                  <span className={style.new}>Новинка</span>
              )}
              <div className={style.bg} style={{backgroundImage: `url(${process.env.PUBLIC_URL + good.image})`}}></div>
              <div className={style.card__info}>
                  <p className={style.info__name}>{good.name}</p> 
                  <p className={style.info__price}>{good.price} ₴</p>
                      <span onClick={onClickHandle} className={style.span__add}>Додати в корзину</span>
              </div>
          </div>  
        </>
    );
}

export default CategoryCard;