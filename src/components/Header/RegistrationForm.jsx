import { useForm } from "react-hook-form"
import style from "./Header.module.scss"
const RegistrationForm = () => {
    const {register, handleSubmit, formState: {errors}, reset,} = useForm({mode: "onChange"})
    const onSubmit = () => {
        alert("hello")
        reset()
    }   
    return (  
        <form onSubmit={handleSubmit(onSubmit)} className={style.form} >
            <input {...register("name", {
                    required:"Ім'я обов'язкове поле",
                    maxLength: {
                        value: 20,
                        message: "Максимум 20 символів"
                    }
            })
            
            } placeholder="Ім'я" type="text" />
            {errors.name && (<div className={style.error}>{errors.name.message}</div>)}
            <input {...register("surname", {
                required: "Прізвище обов'язкове поле",
                maxLength: {
                    value: 20,
                    message: "Максимум 20 символів"
                }
            })
            } placeholder="Прізвище" type="text" />
            {errors.surname && (<div  className={style.error}>{errors.surname.message}</div>)}

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
            <button>Зареєструватися</button>
        </form>
    );
}
 
export default RegistrationForm;