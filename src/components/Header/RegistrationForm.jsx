import { useForm } from "react-hook-form"
import style from "./Header.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { setClickAccount, setIsLogin } from "../../redux/slices/loginSlice"
const RegistrationForm = () => {
    const dispatch = useDispatch()
    const isRegistration = useSelector(state => state.loginSlice.isRegistration)
    const {register, handleSubmit, formState: {errors}, reset,} = useForm({mode: "onChange"})
    const onSubmit = (data) => {
        localStorage.setItem("formData", JSON.stringify(data));
        reset()
        dispatch(setIsLogin(true))
        dispatch(setClickAccount(false))
    }   
    return (  
        <form onSubmit={handleSubmit(onSubmit)} className={style.form} >
            {isRegistration ? (
                <div className={style.popupForm_wrapper}>
                    <input {...register("name", {
                    required:"Ім'я обов'язкове поле",
                    maxLength: {
                        value: 20,
                        message: "Максимум 20 символів"
                    }
                    })
                } placeholder="Ім'я" type="text" />
                {errors.name && (<div className={style.error}>{errors.name.message}</div>)}
                <input {...register("password", {
                    required: "Пароль обов'язкове поле",
                    pattern: {
                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                        message: "Введіть кращий пароль"
                    }
                
                })
                } placeholder="Пароль" type="password" />
                {errors.password && (<div  className={style.error}>{errors.password.message}</div>)}

                <input {...register("email", {
                    required: "Email обов'язкове поле",
                    pattern:{
                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Введіть правильний email",
                }
                })
                } placeholder="Email" type="text" />
                {errors.email && (<div  className={style.error}>{errors.email.message}</div>)}

                <input {...register("phone", {
                    required: "Телефон обов'язковий",
                    pattern: {
                        value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                        message: "Номер телефону вказаний неправильно"
                    }
                })
                } placeholder="Номер телефону" type="text" />
                {errors.phone && (<div  className={style.error}>{errors.phone.message}</div>)}
                    </div>
            ) : (
                <div className={style.popupForm_wrapper}>
                     <input {...register("email", {
                    required: "Email обов'язкове поле",
                    pattern:{
                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Введіть правильний email",
                    }
                     })
                    } placeholder="Email" type="text" />
                    {errors.email && (<div  className={style.error}>{errors.email.message}</div>)}
                     <input {...register("password", {
                    required: "Пароль обов'язкове поле",
                    pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                    message: "Введіть кращий пароль"
                    }
                    })
                    } placeholder="Пароль" type="password" />
                    {errors.password && (<div  className={style.error}>{errors.password.message}</div>)}
                </div>
            )}
            
            <button>Зареєструватися</button>
        </form>
    );
}
 
export default RegistrationForm;