import CartGoods from "./CartGoods/CartGoods";
import UsersData from "./UsersData/UsersData";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CartItemType, setSuccessData } from "../../redux/slices/cartSlice";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useEffect, useRef } from "react";
import { RootState } from "../../redux/store";
import style from "./Cart.module.scss";

const Cart: React.FC = () => {
  const { items, totalPrice } = useSelector(
    (state: RootState) => state.cartSlice
  );
  const totalCount = items.reduce(
    (sum: number, item: CartItemType) => sum + item.count,
    0
  );
  const { successData } = useSelector((state: RootState) => state.cartSlice);
  const dispatch = useDispatch();
  const popupRef = useRef<HTMLDivElement>(null);

  useClickOutside(popupRef, () => {
    if (successData) setTimeout(() => dispatch(setSuccessData(false)), 50);
  });

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <section className={style.wrapper}>
      <div className={style.path}>
        <Link to="/react-tattoo-shop">Головна</Link> /
        <Link to={`/react-tattoo-shop/cart`}> Корзина</Link>
      </div>
      <h5 className={style.title}>Корзина</h5>
      <div className={style.content}>
        <div className={style.left}>
          <CartGoods />
          <UsersData />
        </div>
        <div className={style.right}>
          <div>
            <span>Загальна кількість товарів: </span>
            <span className={style.right__number}>{totalCount}</span>
          </div>
          <div className={style.sum}>
            <span>Сума:</span>
            <span className={style.right__number}>{totalPrice}₴</span>
          </div>
          <Link
            to="/react-tattoo-shop/catalog/0"
            className={style.backToCatalog}
          >
            Вернутися в каталог
          </Link>
        </div>
      </div>
      {successData && (
        <div className={style.popup_bg}>
          <div ref={popupRef} className={style.popup}>
            <p className={style.thanks}>Дякуємо за замовлення!</p>
            <p className={style.number}>
              Номер вашого замовлення:{" "}
              <span>{Math.floor(Math.random() * (50000 - 1 + 1)) + 1}</span>
            </p>
            <p className={style.info}>
              Найближчим часом з вами зв'яжеться наш менеджер для уточнення
              деталей замовлення
            </p>
            <div className={style.popup__buttons}>
              <Link to="/react-tattoo-shop">Вернутися на головну</Link>
              <Link to="/react-tattoo-shop/catalog/2">Вернутися в каталог</Link>
            </div>
            <svg
              onClick={() => dispatch(setSuccessData(false))}
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
};

export default Cart;
