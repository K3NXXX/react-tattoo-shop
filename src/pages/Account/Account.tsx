import CartGoods from "../Cart/CartGoods/CartGoods";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogin, setUserData } from "../../redux/slices/loginSlice";
import { RootState } from "../../redux/store";
import style from "./Account.module.scss"
import noAvatar from "../../assets/img/Account/noAvatar.webp"

const Account: React.FC = () => {
    const dispatch = useDispatch()
    const [avatar, setAvatar] = useState<string>(noAvatar);
    const userData = useSelector((state: RootState) => state.loginSlice.userData)
    const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        if (event.target && event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                setAvatar(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    
    useEffect(() => {
        const storedDataString = localStorage.getItem("formData")
        if (storedDataString) {
            const storedData = JSON.parse(storedDataString);
            if (storedData) {
                dispatch(setUserData(storedData));
            }
        }
    }, [dispatch]);
  
    return (  
        <section className={style.wrapper}>
            <div className={style.left}>
                <div className={style.path}>
                    <Link to="/react-tattoo-shop">Головна</Link> / 
                    <Link to="/react-tattoo-shop/account"> Особистий кабінет</Link>
                </div>
                <h2 className={style.title}>Особистий кабінет</h2>
                <div className={style.userInfo}>
                    <div className={style.column}>
                    <input
                    type="file"
                    accept="image/*"
                    id="avatar-input"
                    style={{ display: "none" }}
                    onChange={handleAvatarUpload}
                     />
                    <label htmlFor="avatar-input">
                        <img className={style.avatar} src={avatar} alt="avatar" />
                    </label>
                        <div className={style.online}>
                            <div>
                                <p className={style.name}>{userData.name}</p>
                            </div>
                            <div className={style.status}>
                                <div className={style.circle}></div>
                                <p>В мережі</p>
                            </div>
                            <Link  className={style.exit}  to="/react-tattoo-shop" 
                            onClick={() => {
                                dispatch(setIsLogin(false))
                            }}>Вийти</Link>
                        </div>
                    </div>
                    <div className={style.column}>
                        <div className={style.online}>
                            <div className={style.contacts}>
                                <div>
                                    <p className={style.contactsData}>Ел. пошта:</p>
                                    <p>{userData.email}</p>
                                </div>
                                <div>
                                    <p className={style.contactsData}>Номер тел.:</p>
                                    <p>{userData.phone}</p>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                <svg className={style.line} xmlns="http://www.w3.org/2000/svg" width="800" height="6" viewBox="0 0 800 6" fill="none">
                    <path d="M5 2.5L-2.52368e-07 0.113249L2.52368e-07 5.88675L5 3.5L5 2.5ZM795 3.49993L800 5.88668L800 0.113179L795 2.49993L795 3.49993ZM4.5 3.5L795.5 3.49993L795.5 2.49993L4.5 2.5L4.5 3.5Z" fill="#D0D0D0"/>
                </svg>
                <p className={style.cart}>Товари в корзині</p>  
                <CartGoods />
            </div>
        </section>
    );
}
 
export default Account;