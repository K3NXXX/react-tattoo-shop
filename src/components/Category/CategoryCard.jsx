import { useState } from "react";
import style from "./CategoryCard.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { setBinCount} from "../../redux/slices/categorySlice";
import { addItems } from "../../redux/slices/cartSlice";

const CategoryCard = ({good}) => {
    const [selectSvg, setSelectSvg] = useState(false)
    const [selectCard, setSelectCard] = useState(false)
    const [binClick, setBinClick] = useState(false)
    const newGood = useSelector(state => state.categorySlice.newGood)
    const binCount = useSelector(state => state.categorySlice.binCount)
    const dispatch = useDispatch()
    
    const onClickAdd = () => {
        const item = {
            id: good.id,
            image: good.image,
            name: good.name,
            price: parseFloat(good.price.replace(/\s+/g, ""))
        }
        dispatch(addItems(item))
        dispatch(setBinCount(binCount + 1))
        setBinClick(true)
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
                        <span onClick={onClickAdd} className={style.span__add}>Додати в корзину</span>
                    )}
                </div>
            </div>
            <div  className={style.categoryCard__phone}>
                {!selectSvg ? (
                    <svg onClick={() => {
                        setSelectSvg(!selectSvg)
                    }} className={style.fav} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path  fillRule="evenodd" clipRule="evenodd" d="M22.262 14.6259V14.6228C22.7615 14.1001 23.1543 13.4846 23.418 12.8106C23.697 12.0975 23.8254 11.3345 23.7952 10.5694C23.765 9.80427 23.5768 9.0537 23.2424 8.36487C22.9081 7.67604 22.4348 7.06385 21.8524 6.56679C21.27 6.06974 20.591 5.69857 19.8582 5.47664C19.1253 5.25471 18.3545 5.18682 17.5942 5.27723C16.8339 5.36764 16.1005 5.61441 15.4401 6.002C14.8934 6.32291 14.4065 6.73461 14 7.21855C13.5935 6.73461 13.1066 6.32291 12.5599 6.002C11.8995 5.61441 11.1661 5.36764 10.4058 5.27723C9.64545 5.18682 8.87463 5.25471 8.14181 5.47664C7.40899 5.69857 6.73002 6.06974 6.14759 6.56679C5.56517 7.06385 5.0919 7.67604 4.75755 8.36487C4.42319 9.0537 4.23498 9.80427 4.20476 10.5694C4.17454 11.3345 4.30296 12.0975 4.58195 12.8106C4.86093 13.5236 5.28446 14.1713 5.82587 14.7127L14 22.8858L22.262 14.6259ZM7.04399 13.6673L14 20.6243L21.0438 13.5785C21.4419 13.1803 21.7503 12.7015 21.9483 12.1744C22.1462 11.6472 22.2292 11.0838 22.1916 10.522C22.154 9.96017 21.9967 9.41287 21.7303 8.91679C21.4638 8.42072 21.0944 7.98735 20.6468 7.64573C20.1992 7.30411 19.6837 7.06215 19.1349 6.93606C18.5861 6.80997 18.0167 6.80267 17.4648 6.91466C16.913 7.02664 16.3915 7.25532 15.9352 7.58536C15.479 7.91539 15.0986 8.33916 14.8196 8.82824L14.7332 8.97957H13.2668L13.1804 8.82824C12.9014 8.33916 12.521 7.91539 12.0647 7.58536C11.6085 7.25532 11.087 7.02664 10.5351 6.91466C9.98329 6.80267 9.41389 6.80997 8.86509 6.93606C8.3163 7.06215 7.80081 7.30411 7.35318 7.64573C6.90556 7.98735 6.53614 8.42072 6.26971 8.91679C6.00328 9.41287 5.846 9.96017 5.8084 10.522C5.7708 11.0838 5.85375 11.6472 6.05171 12.1744C6.24966 12.7015 6.55803 13.1802 6.95615 13.5785L7.04399 13.6673Z" fill= "#BB8C5F"/>
                </svg>
                ) : 
                (<svg onClick={() => {
                    setSelectSvg(false)
                    }} className={style.fav} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M22.262 14.6259V14.6228C22.7615 14.1001 23.1543 13.4846 23.418 12.8106C23.697 12.0975 23.8254 11.3345 23.7952 10.5694C23.765 9.80427 23.5768 9.0537 23.2424 8.36487C22.9081 7.67604 22.4348 7.06385 21.8524 6.56679C21.27 6.06974 20.591 5.69857 19.8582 5.47664C19.1253 5.25471 18.3545 5.18682 17.5942 5.27723C16.8339 5.36764 16.1005 5.61441 15.4401 6.002C14.8934 6.32291 14.4065 6.73462 14 7.21855C13.5935 6.73462 13.1066 6.32291 12.5599 6.002C11.8995 5.61441 11.1661 5.36764 10.4058 5.27723C9.64545 5.18682 8.87463 5.25471 8.14181 5.47664C7.40899 5.69857 6.73002 6.06974 6.14759 6.56679C5.56517 7.06385 5.0919 7.67604 4.75754 8.36487C4.42319 9.0537 4.23498 9.80427 4.20476 10.5694C4.17454 11.3345 4.30296 12.0975 4.58195 12.8106C4.86093 13.5236 5.28446 14.1713 5.82587 14.7127L14 22.8858L22.262 14.6259Z" fill="#BB8C5F"/>
                </svg>)
                }
            
                {newGood && (
                    <span className={style.new}>Новинка</span>
                )}
                <div className={style.bg} style={{backgroundImage: `url(${process.env.PUBLIC_URL + good.image})`}}></div>
                <div className={style.card__info}>
                    <p className={style.info__name}>{good.name}</p> 
                    <p className={style.info__price}>{good.price} ₴</p>
                        <span onClick={onClickAdd} className={style.span__add}>Додати в корзину</span>
                </div>
            </div>  
        </>
    );
}
 
export default CategoryCard;