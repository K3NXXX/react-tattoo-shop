import { useForm } from "react-hook-form";
import {useEffect} from "react"
import style from "./Header.module.scss"
import { setClickAccount, userData } from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin, selectIsAuth } from "../../redux/slices/authSlice";
import { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
const LoginForm:React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const isAuth = useSelector(selectIsAuth)

    const {register, handleSubmit, formState: {errors}} = useForm<userData>({mode: "onChange"})
    const onSubmit = async(userData : userData)  => {
        const data = await dispatch(fetchLogin(userData))

        if (!data.payload) {
            return alert("Не вдалось ввійти")
        }

        if ("token" in data.payload) {
            window.localStorage.setItem("token", data.payload.token)
        }

        
        dispatch(setClickAccount(false))
    }   

    

    useEffect(() => {
        if (isAuth) {
          navigate("/react-tattoo-shop");
        }
      }, [isAuth, navigate])
    return (  
        <form onSubmit ={handleSubmit(onSubmit)} className={style.form} >
            <div className={style.popupForm_wrapper}>
            <input {...register("email", {
                required: "Email обов'язкове поле",
                pattern:{
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}\s*$/,
                    message: "Введіть правильний email",
            }
            })
            } placeholder="Email" type="text" />
            {errors.email && (<div  className={style.error}>{errors.email.message}</div>)}
        <input {...register("password", {
            required: "Пароль обов'язкове поле",
            pattern: {
                value: /^(?=.*\d)(?=.*[a-zA-Zа-яА-ЯіїєґёўҐЁЎ])(?=.*[A-ZА-ЯІЇЄҐЁЎ])[0-9a-zA-Zа-яА-ЯіїєґёўҐЁЎ]{8,}$/,
                message: "Введіть кращий пароль"
            }
        
        })
        } placeholder="Пароль" type="password" />
        {errors.password && (<div  className={style.error}>{errors.password.message}</div>)}
    <button>Ввійти</button>
    </div>
</form>
      
    );
}
 
export default LoginForm;