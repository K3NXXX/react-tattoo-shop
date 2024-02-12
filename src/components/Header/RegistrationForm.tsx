import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { userData } from "../../redux/slices/authSlice"
import style from "./Header.module.scss"
import { fetchRegister } from "../../redux/slices/authSlice"
import { AppDispatch } from "../../redux/store"
import { setClickAccount } from "../../redux/slices/authSlice"


const RegistrationForm: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {register, handleSubmit, formState: {errors}} = useForm<userData>({mode: "onChange"})
    const onSubmit = async(userData : userData)  => {
        const data = await dispatch(fetchRegister(userData))

        if(!data.payload) {
            return alert("Не вдалось зареєструватися")
        }

        if ("token" in data.payload) {
            window.localStorage.setItem("token", data.payload.token)
        }

        dispatch(setClickAccount(false))
       
    }   

    return (  
        <form onSubmit ={handleSubmit(onSubmit)} className={style.form} >
                <div className={style.popupForm_wrapper}>
                    <input {...register("fullName", {
                    required:"Ім'я обов'язкове поле",
                    maxLength: {
                        value: 20,
                        message: "Максимум 20 символів"
                    }
                    })
                } placeholder="Ім'я" type="text" />
                {errors.fullName && (<div className={style.error}>{errors.fullName.message}</div>)}
                <input {...register("password", {
                    required: "Пароль обов'язкове поле",
                    pattern: {
                        value: /^(?=.*\d)(?=.*[a-zA-Zа-яА-ЯіїєґёўҐЁЎ])(?=.*[A-ZА-ЯІЇЄҐЁЎ])[0-9a-zA-Zа-яА-ЯіїєґёўҐЁЎ]{8,}$/,
                        message: "Введіть кращий пароль"
                    }
                
                })
                } placeholder="Пароль" type="password" />
                {errors.password && (<div  className={style.error}>{errors.password.message}</div>)}

                <input {...register("email", {
                    required: "Email обов'язкове поле",
                    pattern:{
                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}\s*$/,
                        message: "Введіть правильний email",
                }
                })
                } placeholder="Email" type="text" />
                {errors.email && (<div  className={style.error}>{errors.email.message}</div>)}
                </div>
            
            <button>Зареєструватися</button>
        </form>
    );
}
 
export default RegistrationForm;