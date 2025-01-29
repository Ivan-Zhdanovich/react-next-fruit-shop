"use client"

import { Controller, useForm } from "react-hook-form";
import { IFeedbackForm } from "../../../types/common/ComponentsProps";

import styles from "./feedbackForm.module.scss"

export default function RegistrationForm() {
  const {
    formState: { },
    control,
    handleSubmit,
  } = useForm<IFeedbackForm>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit =()=> {
    console.log("hi")
  }

  return (
    <form className={styles.registrationFormWrap} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.registrationFormContainer}>
      <div className={styles.inputWrap}>
        <label>Введите имя</label>
        <Controller
          name="name"
          control={control}
          // rules={""}
          defaultValue=""
          render={({ field }) => (
            <input 
              className={styles.input}
              id="name" 
              type="" 
              placeholder="Имя" 
              {...field} 
            />
          )}
        />
      </div>
      <div className={styles.inputWrap}>
        <label>Введите email</label>
        <Controller
          name="email"
          control={control}
          // rules={""}
          defaultValue=""
          render={({ field }) => (
            <input 
              className={styles.input}
              id="email" 
              type="" 
              placeholder="Email" 
              {...field} 
            />
          )}
        />
      </div>
      <div className={styles.inputWrap}>
        <label>Введите телефон</label>
        <Controller
          name="phone"
          control={control}
          // rules={""}
          defaultValue=""
          render={({ field }) => (
            <input 
              className={styles.input}
              id="phone" 
              type="" 
              placeholder="Номер телефона" 
              {...field} 
            />
          )}
        />
      </div>
      <div className={styles.inputWrap}>
        <label>Введите сообщение</label>
        <Controller
          name="message"
          control={control}
          // rules={""}
          defaultValue=""
          render={({ field }) => (
              <textarea 
              className={styles.input}
              id="message" 
              rows={4}
              placeholder="Сообщение" 
              {...field} 
            />           
          )}
        />
      </div>
      <button className={styles.registrationButton}>Зарегистрировать</button>
      </div>
    </form>
  );
}
