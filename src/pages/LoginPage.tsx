import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { LOGIN_URL } from "../services/URLS";
import { MyButton } from "../components/button/MyButton";

type Login = {
    email:string,
    password:string
}

export const LoginPage = () => {
    const {register, handleSubmit} = useForm<Login>();
    const [redirect, setRedirect] = useState(false);
    const submitForm = (i:Login) => {
        axios.post(LOGIN_URL, i)
        .then(i => {
            localStorage.setItem("token", i.data.content);
            setRedirect(true);
        })
        .catch(() => {});
    }

    if(redirect) {
        return <Navigate to={"/adm"} /> 
    }

    return (
        <div style={{display: `flex`, justifyContent: `center`, alignItems: `center`, height: `100vh`}}>
            <form 
                style={{
                    width: `500px`
                }}
            data-aos="fade-left" data-aos-duration="1600" onSubmit={handleSubmit(submitForm)}>
                <div className="userFields" style={{display: `flex`, flexDirection: `column`}}>
                    <input {...register("email")} autoComplete="off" type="text" name="email" placeholder="Username" />
                    <input {...register("password")} autoComplete="off" type="password" name="password" placeholder="Senha" />
                </div>
                <br/>
                <MyButton type="submit" link="#" text="Enviar" />
            </form>
        </div>
    )
}