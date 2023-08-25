import { useForm } from "react-hook-form";
import style from "./UsersDataAccount.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
const UsersDataAccount = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm({mode:"onChange"})
    const dispatch = useDispatch()
    const [isEmpty, setIsEmpty] = useState(true)
    const onSubmit = () => {
        reset()
    }
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
                                value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                                message: "Номер телефону вказаний неправильно"
                            }
                            })} type="text" placeholder="+380555353535"/>
                    </div>
                    <div className={style.column}>
                        <label>Ел. пошта</label>
                        <input {...register("email", {
                                pattern:{
                                    required: `Не всі дані вказані`,
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
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
            <button disabled={isEmpty}>Зберегти дані</button>
        </form>
    );
}
 
 
export default UsersDataAccount;