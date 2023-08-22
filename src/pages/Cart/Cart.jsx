import { Link } from "react-router-dom";
import style from "./Cart.module.scss"
import CartItem from "./CartItem/CartItem";
const Cart = () => {
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
                            <CartItem/>
                            <CartItem/>
                            <CartItem/>
                            <CartItem/>
                    </div>
                </div>
                <div className={style.right}>
                    <div>
                        <span>Загальна кількість товарів: </span>
                        <span className={style.right__number}>7</span>
                    </div>
                    <div className={style.sum}>
                        <span >Сума:</span>
                        <span className={style.right__number}>14900₴</span>
                    </div>
                    <button>Оформии замовлення</button>


                </div>
            </div>
        </section>
    );
}
 
export default Cart;