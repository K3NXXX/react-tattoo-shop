import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { setClickAccount, setIsLogin, setUserData } from "../../redux/slices/loginSlice"
import style from "./Header.module.scss"

export type Data = {
    email: string;    
    name: string;
    password: string;
    phone: string;
}
const RegistrationForm: React.FC = () => {
    const dispatch = useDispatch()
    const {register, handleSubmit, formState: {errors}, reset,} = useForm<Data>({mode: "onChange"})
    const onSubmit = (data : Data)  => {
        localStorage.setItem("formData", JSON.stringify(data));
        dispatch(setIsLogin(true))
        dispatch(setClickAccount(false))
        dispatch(setUserData(data));
        reset()
    }   

    return (  
        <form onSubmit ={handleSubmit(onSubmit)} className={style.form} >
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

                <input {...register("phone", {
                    required: "Телефон обов'язковий",
                    pattern: {
                        value: /\(?(\s*[0-9]{3}\s*)\)?([ .-]?)(\s*[0-9]{3}\s*)\2(\s*[0-9]{4}\s*)/,
                        message: "Номер телефону вказаний неправильно"
                    }
                })
                } placeholder="Номер телефону" type="text" />
                {errors.phone && (<div  className={style.error}>{errors.phone.message}</div>)}
                    </div>
            
            <button>Зареєструватися</button>
        </form>
    );
}
 
export default RegistrationForm;