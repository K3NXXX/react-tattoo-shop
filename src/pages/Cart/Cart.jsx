import { Link } from "react-router-dom";
import style from "./Cart.module.scss"
import CartItem from "./CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import UsersData from "./UsersData/UsersData";
import { setSuccessData } from "../../redux/slices/cartSlice";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useRef } from "react";
const Cart = () => {
    const {items, totalPrice} = useSelector(state => state.cartSlice)
    const totalCount = items.reduce((sum, item ) => sum + item.count, 0)
    const {successData} = useSelector(state => state.cartSlice)
    const dispatch = useDispatch()
    const popupRef = useRef(null)
    useClickOutside(popupRef, () => { 
        if(successData) setTimeout(() => dispatch(setSuccessData(false)),50)
    })
    return (  
        <section className={style.wrapper}>
             <div className={style.path}>
                <Link to="/react-tattoo-shop">Головна</Link> / 
                <Link to={`/react-tattoo-shop/cart`}> Корзина</Link>
            </div>
            <h5 className={style.title}>Корзина</h5>
            <div className={style.content}>
                <div className={style.left}>
                    <div className={style.left__top}>
                        <p className={style.left__top_name}>Назва</p>
                        <div className={style.left__top_right}>
                            <p>Ціна</p>
                            <p>Кількість</p>
                            <p>Вартість</p>
                        </div>
                    </div>
                    <svg className={style.line} xmlns="http://www.w3.org/2000/svg" width="804" height="6" viewBox="0 0 804 6" fill="none">
                    <path d="M5 2.5L-2.52368e-07 0.113249L2.52368e-07 5.88675L5 3.5L5 2.5ZM799 3.49993L804 5.88668L804 0.113178L799 2.49993L799 3.49993ZM4.5 3.5L799.5 3.49993L799.5 2.49993L4.5 2.5L4.5 3.5Z" fill="#D0D0D0"/>
                    </svg>
                    <div className={style.goods}>
                            {items.map(item => {
                                return <CartItem key={item.id} item={item}/>
                            })}
                    </div>
                    <UsersData />
                </div>
                <div className={style.right}>
                    <div>
                        <span>Загальна кількість товарів: </span>
                        <span className={style.right__number}>{totalCount}</span>
                    </div>
                    <div className={style.sum}>
                        <span >Сума:</span>
                        <span className={style.right__number}>{totalPrice}₴</span>
                    </div>
                    <Link to="/react-tattoo-shop/catalog/0" className={style.backToCatalog}>Вернутися в каталог</Link>        
                </div>
            </div>
            {successData && (
                <div className={style.popup_bg }>
                    <div ref={popupRef} className={style.popup}>
                        <p className={style.thanks}>Дякуємо за замовлення!</p>
                        <p className={style.number}>Номер вашого замовлення: <span>{ Math.floor(Math.random() * (50000 - 1 + 1)) + 1}</span></p>
                        <p className={style.info}>Найближчим часом з вами зв'яжеться наш менеджер для уточнення деталей замовлення</p>
                        <div className={style.popup__buttons}>
                            <Link to="/react-tattoo-shop">Вернутися на головну</Link>
                            <Link to="/react-tattoo-shop/catalog/2">Вернутися в каталог</Link>
                        </div>
                        <svg onClick={() => dispatch(setSuccessData(false))} className={style.close} xmlns="http://www.w3.org/2000/svg" width="15" height="40" viewBox="0 0 15 40" fill="none">
                            <g clip-path="url(#clip0_537_10715)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 19.7929L11.0355 16.2573L11.7426 16.9644L8.20711 20.5L11.7426 24.0355L11.0355 24.7426L7.5 21.2071L3.96447 24.7426L3.25736 24.0355L6.79289 20.5L3.25736 16.9644L3.96447 16.2573L7.5 19.7929Z" fill="#636B78"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_537_10715">
                            <rect width="15" height="40" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>

                    </div>

                </div>
            )}
        </section>
    );
}
 
export default Cart;