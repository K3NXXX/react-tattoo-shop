import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { CartItemType } from "../../../redux/slices/cartSlice";
import style from "./CartGoods.module.scss";

const CartGoods:React.FC = ( ) => {
    const {items} = useSelector((state: RootState) => state.cartSlice)

    return (
        <div className={style.left}>
            <div className={style.allCart}>
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
                        {items.length > 0 ? items.map((item: CartItemType) => {
                            return <CartItem  key={item.id} item={item}/>
                        }) : (
                            <div className={style.empty}>Корзина пуста</div>
                        )}
                </div>
            </div>
        </div>
    );
}
 
export default CartGoods;