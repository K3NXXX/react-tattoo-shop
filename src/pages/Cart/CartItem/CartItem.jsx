import style from "./CartItem.module.scss"
import good from "../../../assets/img/Catalog/1.png"
import deleteGood from "../../../assets/img/Cart/cross.svg"
const CartItem = () => {
    return (  
        <div className={style.good}>
            <div><img className={style.goodImg} src={good} alt="good" /></div>
            <p className={style.name}>Foxxx Viper Fox Golden Vintage Lot #1 RCA</p>
            <p className={style.price}>9000₴</p>
            <div className={style.quantity}>
                <svg  xmlns="http://www.w3.org/2000/svg" width="15" height="40" viewBox="0 0 15 40" fill="none">
                <path d="M2 21H13V20H2V21Z" fill="#3E424B"/>
                </svg>
                <span className={style.count__number}>4</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="40" viewBox="0 0 15 40" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 20V15H8V20H13V21H8V26H7V21H2V20H7Z" fill="#3E424B"/>
                </svg>
            </div>
            <span className={style.goodTotalPrice}>34920₴</span>
            <div>
                <img className={style.deleteGood} src={deleteGood} alt="deleteGood" />
            </div>

        </div>
    );
}
 
export default CartItem;