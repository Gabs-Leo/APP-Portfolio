import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { MyButton } from "../components/button/MyButton"
import { BASE_URL } from "../services/URLS";

type Login = {
    username:string,
    password:string
}

export const LoginPage = () => {
    const {register, handleSubmit} = useForm<Login>();
    const [redirect, setRedirect] = useState(false);
    const submitForm = (i:Login) => {
        axios.post(`${BASE_URL}/login`, i)
        .then(i => {
            localStorage.setItem("token", i.data.access_token);
            setRedirect(true);
        })
        .catch(() => {
            
        });
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
                    <input {...register("username")} autoComplete="off" type="text" name="username" placeholder="Username" />
                    <input {...register("password")} autoComplete="off" type="password" name="password" placeholder="Senha" />
                </div>
                <br/>
                <MyButton type="submit" link="#" text="Enviar" />
            </form>
        </div>
    )
}