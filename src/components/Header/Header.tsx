import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { CartItemType } from "../../redux/slices/cartSlice";
import style from "./Header.module.scss";
import phone from "../../assets/img/phone-icon.svg";
import email from "../../assets/img/email-icon.svg";
import shop_bin from "../../assets/img/shop-bin-icon.svg";
import telegram from "../../assets/img/telegram-icon.png";
import viber1 from "../../assets/img/viber-icon.svg";
import viber2 from "../../assets/img/viber2-icon.svg";
import arrow from "../../assets/img/arrow-icon.svg";

const Header: React.FC = () => {
    const catalog = [
        "Набори для тату",
        "Тату тримачі",
        "Тату машинки",
        "Педалі та провода",
        "Тату фарби",
    ];
    const headerCategoryList = [
        "Промокоди",
        "Знижки",
        "Допомога",
        "Про нас",
        "Контакти",
    ];
    const headerPhoneCategoryList = [
        "Каталог",
        "Контакти",
        "Промокоди",
        "Знижки",
        "Допомога",
        "Про нас",
        "Вибране",
    ];
    let [openMenu, setOpenMenu] = useState<boolean>(false);
    const [expandCatalog, setExpandCatalog] = useState<boolean>(false);
    const listRef = useRef<HTMLDivElement | null>(null);
    const isMounted = useRef(false);

    const toggleMenu = (): void => {
        setOpenMenu(!openMenu);
    };

    useEffect(() => {
        document.body.addEventListener("click", (event) => {
            const path = event.composedPath(); // Отримання шляху події і закриття списку
            if (listRef.current && !path.includes(listRef.current)) {
                setExpandCatalog(false);
            }
        });
    }, []);

    // Корзина
    const { items, totalPrice } = useSelector(
        (state: RootState) => state.cartSlice
    );
    const totalCount = items.reduce(
        (sum: number, item: CartItemType) => sum + item.count,
        0
    );

    useEffect(() => {
        if (isMounted) {
            const cartItems = JSON.stringify(items);
            const cartTotalPrice = JSON.stringify(totalPrice);
            localStorage.setItem("cartItems", cartItems);
            localStorage.setItem("cartTotalPrice", cartTotalPrice);
        }
        isMounted.current = true;
    }, [items, totalPrice]);

    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <div className={style.top}>
                    <div className={style.left}>
                        <div className={style.menu}>
                            <p>Меню</p>
                            {openMenu ? (
                                <svg
                                    className={style.menu__cross}
                                    onClick={toggleMenu}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                >
                                    <rect
                                        x="5"
                                        y="21.9706"
                                        width="24"
                                        height="2"
                                        transform="rotate(-45 5 21.9706)"
                                        fill="#BB8C5F"
                                    />
                                    <rect
                                        x="6.22168"
                                        y="4.80761"
                                        width="24"
                                        height="2"
                                        transform="rotate(45 6.22168 4.80761)"
                                        fill="#BB8C5F"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className={style.menu__svg}
                                    onClick={toggleMenu}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                >
                                    <path
                                        d="M2 13H26V15H2V13Z"
                                        fill="#BB8C5F"
                                    />
                                    <path d="M2 7H26V9H2V7Z" fill="#BB8C5F" />
                                    <path
                                        d="M2 19H26V21H2V19Z"
                                        fill="#BB8C5F"
                                    />
                                </svg>
                            )}
                        </div>

                        <div className={style.contacts}>
                            <div className={style.contacts__phone}>
                                <img src={phone} alt="phone-icon" />
                                <a href="tel:+380975525252">
                                    <span className={style.phone__number}>
                                        +380 97 552-52-52
                                    </span>
                                </a>
                            </div>
                            <div className={style.contacts__social}>
                                <span>
                                    <a href="tel:+380975525252">Viber</a>
                                </span>
                                <span>
                                    <a href="tel:+380975525252">Whats app</a>
                                </span>
                                <span>
                                    <a href="tel:+380975525252">Telegram</a>
                                </span>
                            </div>
                        </div>
                        <div className={style.email}>
                            <img src={email} alt="email-icon" />
                            <a href="mailto:Mr.Driskell@gmail.com">
                                Mr.Driskell@gmail.com
                            </a>
                        </div>
                        <Link to="/react-tattoo-shop" className={style.logo}>
                            <span className={style.logo__name}>
                                mr. driskell
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="192"
                                height="6"
                                viewBox="0 0 192 6"
                                fill="none"
                            >
                                <path
                                    d="M0.113249 3.00002L3 5.88677L5.88675 3.00002L3 0.113264L0.113249 3.00002ZM191.887 3L189 0.113248L186.113 3L189 5.88675L191.887 3ZM3 3.50002L189 3.5L189 2.5L3 2.50002L3 3.50002Z"
                                    fill="#BB8C5F"
                                />
                            </svg>
                            <span>Tattoo shop</span>
                        </Link>
                    </div>
                    <div className={style.right}>
                        <Link
                            className={style.shop__bin}
                            to="/react-tattoo-shop/cart"
                        >
                            <span>{totalPrice}₴</span>
                            <img src={shop_bin} alt="shop bin" />
                            <span className={style.bin__number}>
                                {totalCount > 0 ? totalCount : ""}
                            </span>
                        </Link>
                    </div>
                </div>
                <svg
                    className={style.svg__line}
                    xmlns="http://www.w3.org/2000/svg"
                    width="1216"
                    height="6"
                    viewBox="0 0 1216 6"
                    fill="none"
                >
                    <path
                        d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1211 3.5L1216 5.88675V0.113249L1211 2.5V3.5ZM4.5 3.5H1211.5V2.5H4.5V3.5Z"
                        fill="#524336"
                    />
                </svg>

                {openMenu && (
                    <div className={style.phone__menu}>
                        {openMenu && (
                            <div className={style.phone__menu2}>
                                <ul className={style.phone__menu_list}>
                                    {headerPhoneCategoryList.map(
                                        (phonecategory, index) => (
                                            <li
                                                key={index}
                                                className={
                                                    index === 0
                                                        ? `${style.phoneCatalog}`
                                                        : ""
                                                }
                                            >
                                                {phonecategory === "Каталог" ? (
                                                    <LinkScroll
                                                        onClick={() =>
                                                            setOpenMenu(false)
                                                        }
                                                        to="toCatalog"
                                                        smooth={true}
                                                        duration={1000}
                                                    >
                                                        <li
                                                            className={
                                                                style.catalogSpecial
                                                            }
                                                        >
                                                            {phonecategory}
                                                        </li>
                                                    </LinkScroll>
                                                ) : (
                                                    <Link
                                                        onClick={() =>
                                                            setOpenMenu(false)
                                                        }
                                                        to="*"
                                                    >
                                                        {phonecategory}
                                                    </Link>
                                                )}
                                                {phonecategory === "Каталог" &&
                                                    expandCatalog && (
                                                        <ul
                                                            className={
                                                                style.catalogList
                                                            }
                                                        >
                                                            {catalog.map(
                                                                (
                                                                    catalogItem,
                                                                    catalogIndex
                                                                ) => (
                                                                    <Link
                                                                        onClick={() =>
                                                                            setOpenMenu(
                                                                                false
                                                                            )
                                                                        }
                                                                        to={`/react-tattoo-shop/catalog/${catalogIndex}`}
                                                                    >
                                                                        <li
                                                                            key={
                                                                                catalogIndex
                                                                            }
                                                                        >
                                                                            {
                                                                                catalogItem
                                                                            }
                                                                        </li>
                                                                    </Link>
                                                                )
                                                            )}
                                                        </ul>
                                                    )}
                                            </li>
                                        )
                                    )}
                                    <img
                                        onClick={(e) => {
                                            setExpandCatalog(!expandCatalog);
                                            e.stopPropagation();
                                        }}
                                        className={style.arrow}
                                        src={arrow}
                                        alt="arrow"
                                    />
                                </ul>
                            </div>
                        )}

                        <div className={style.contacts__phone}>
                            <img src={phone} alt="phone-icon" />
                            <a href="tel:+380975525252">
                                <span className={style.phone__number}>
                                    +380 97 552-52-52
                                </span>
                            </a>
                        </div>
                        <div className={style.phone__social}>
                            <a href="tel:+380975525252">
                                <img src={telegram} alt="telegram" />
                            </a>
                            <a href="tel:+380975525252">
                                <img src={viber1} alt="viber" />
                            </a>
                            <a href="tel:+380975525252">
                                <img src={viber2} alt="viber" />
                            </a>
                        </div>
                        <p>Графік роботи: з 9:00 до 20:00</p>
                        <div className={style.email__phone}>
                            <img src={email} alt="email-icon" />
                            <a href="mailto:Mr.Driskell@gmail.com">
                                Mr.Driskell@gmail.com
                            </a>
                        </div>
                    </div>
                )}

                <div className={style.bottom}>
                    <div className={style.bottom__left}>
                        <div ref={listRef} className={style.catalog}>
                            <p>Каталог</p>
                            <svg
                                className={style.svg__catalog}
                                onClick={(e) => {
                                    setExpandCatalog(!expandCatalog);
                                    e.stopPropagation();
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                            >
                                <path d="M2 13H26V15H2V13Z" fill="#BB8C5F" />
                                <path d="M2 7H26V9H2V7Z" fill="#BB8C5F" />
                                <path d="M2 19H26V21H2V19Z" fill="#BB8C5F" />
                            </svg>
                            {expandCatalog && (
                                <ul className={style.desktopCatalogList}>
                                    {catalog.map((catalogValue, index) => (
                                        <li
                                            onClick={() =>
                                                setExpandCatalog(false)
                                            }
                                            key={catalogValue}
                                        >
                                            <Link
                                                to={`/react-tattoo-shop/catalog/${index}`}
                                            >
                                                {catalogValue}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className={style.bottom__right}>
                        <ul className={style.right__list}>
                            {headerCategoryList.map((category, index) => {
                                return (
                                    <li key={index}>
                                        <Link to="*">{category}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
