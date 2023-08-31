import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setSuccessData } from "../../../redux/slices/cartSlice";
import { useState, useEffect } from "react";
import { RootState } from "../../../redux/store";
import style from "./UsersData.module.scss"

const UsersData: React.FC = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm({mode:"onChange"})
    const dispatch = useDispatch()
    const [isEmpty, setIsEmpty] = useState<boolean>(true)
    const {items} = useSelector((state:RootState) => state.cartSlice)

    const onSubmit = () : void => {
        dispatch(setSuccessData(true))
        reset()
    }

    useEffect(() => {
        if (items.length < 1) {
            setIsEmpty(true);
        } else {
            setIsEmpty(false);
        }
    }, [items]); 

    return ( 
        <form onSubmit={handleSubmit(onSubmit)} className={style.usersData__form}>
            <div className={style.form__top}>
                <p>01. Інформація про отримувача</p>
                <div className={style.top__row}>
                    <div className={style.column}>
                        <label>ФІО</label>
                        <input {...register("name", {
                                required: `Не всі дані вказані`
                            })} type="text" placeholder="Іванов Іван Іванович"/>
                    </div>
                    <div className={style.column}>
                        <label>Телефон</label>
                        <input {...register("phone", {
                               required: `Не всі дані вказані`,
                               pattern: {
                                value: /\(?(\s*[0-9]{3}\s*)\)?([ .-]?)(\s*[0-9]{3}\s*)\2(\s*[0-9]{4}\s*)/,
                                message: "Номер телефону вказаний неправильно"
                            }
                            })} type="text" placeholder="+380555353535"/>
                    </div>
                    <div className={style.column}>
                        <label>Ел. пошта</label>
                        <input {...register("email", {
                                required: `Не всі дані вказані`,
                                pattern:{
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}\s*$/,
                                    message: "Введіть правильний email",
                            }
                            })} type="text" placeholder="Ivanov2021@gmail.com"/>
                    </div>
                </div>
            </div>
            <div className={style.form__bottom}>
                <p>02. Адреса доставки</p>
                <div className={style.bottom__row}>
                    <div className={style.home}>
                        <div className={style.column}>
                            <label>Місто</label>
                            <input  type="text" placeholder="Львів"/>
                        </div>
                        <div className={style.column}>
                            <label>Вулиця, дім</label>
                            <input  type="text" placeholder="вул. Львівська, 13"/>
                        </div>
                    </div>
                    <div className={style.flat}>
                        <div className={style.column}>
                            <label>Квартира / офіс</label>
                            <input type="text" placeholder="324"/>
                        </div>
                        <div className={style.column}>
                            <label>Під'їзд</label>
                            <input type="text" placeholder="5"/>
                        </div>
                        <div className={style.column}>
                            <label>Поверх</label>
                            <input type="text" placeholder="7"/>
                        </div>
                        <div className={style.column}>
                            <label>Домофон</label>
                            <input type="text" placeholder="6470"/>
                        </div>
                    </div>
                </div>
            </div>
            {(errors.name || errors.phone || errors.email || errors.city || errors.flat) && <div>Дані вказано не всі або некоректно</div>}
            <div className={style.empty__error}>{isEmpty ? "Додайте товар, щоб оформити замовлення" : ""}</div>
            <button disabled={isEmpty}>Оформити замовлення</button>
        </form>
    );
}
 
export default UsersData;