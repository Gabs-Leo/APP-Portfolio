import axios from "axios";
import { useForm } from "react-hook-form"
import { BASE_URL } from "../../services/URLS";
import { Message } from "../../types/Message";
import { MyButton } from "../button/MyButton"
import "./form.css"

export const Form = () => {
    const {register, handleSubmit} = useForm<Message>();
    const submitForm = (i:Message) => {
        axios.post(`${BASE_URL}/api/messages`, i);
    }

    return(
    <div className="container" id="contact" style={{padding: `180px 20px`}}>
        <h2 data-aos="fade-right" data-aos-duration="2000" className="mt-4 mb-3" style={{fontSize: `60px`}}>Contate<strong>-me</strong></h2>
        <div className="formContainer">
            <div data-aos="fade-right" data-aos-duration="1600" className="findMe">
                <h4>EMAIL</h4>
                <p>gabrieldemoraistaveira@gmail.com</p>

                <h4>WHATSAPP</h4>
                <p>(16) 99413-2334</p>

                <h4>ENDEREÇO</h4>
                <p>Rua Pará 1330, Jardim Bueno - Franca(SP)</p>
            </div>
            <form data-aos="fade-left" data-aos-duration="1600" onSubmit={handleSubmit(submitForm)}>
                <div className="userFields">
                    <input {...register("name")} autoComplete="off" type="text" name="name" placeholder="Nome" />
                    <input {...register("email")} autoComplete="off" type="text" name="email" placeholder="Email" />
                    <input {...register("phone")} autoComplete="off" type="text" name="phone" placeholder="Telefone" />
                </div>
                <textarea {...register("message")} placeholder="Mensagem" name="" id="" cols={30} rows={5}></textarea>
                <MyButton type="submit" link="#" text="Enviar" />
            </form>
        </div>
    </div>
    )
}