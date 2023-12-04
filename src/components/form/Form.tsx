import { Alert, AlertColor, Snackbar } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { EMAIL_URL } from "../../services/URLS";
import { Message } from "../../types/Message";
import { MyButton } from "../button/MyButton"
import "./form.css"
import { SectionH2 } from "../sectionH2/SectionH2";

export const Form = () => {
    const {register, handleSubmit} = useForm<Message>();
    const [open, setOpen] = useState(false);
    const [modalText, setModalText] = useState("Email Enviado com Sucesso!");
    const [modalSeverity, setModalSeverity] = useState<AlertColor>('success');

    const submitForm = (i:Message) => {
        axios.post(EMAIL_URL, i).then(x => {
            setModalText("Email enviado com sucesso!")
            setModalSeverity("success")
            setOpen(true);
        }).catch(j => {
            setModalText(j.response.data.errors[0])
            setModalSeverity("error")
            setOpen(true);
            console.log(j.response.data);
        });
    }

    return(
    <div className="container" id="contact" style={{padding: `180px 20px`}}>
        <SectionH2 text="Contate-me" />
        <div className="formContainer">
            <div data-aos="fade-right" data-aos-duration="1600" className="findMe">
                <h4>EMAIL</h4>
                <p>gabrieldemoraistaveira@gmail.com</p>

                <h4>WHATSAPP</h4>
                <p>(16) 99413-2334</p>

                <h4>ENDEREÇO</h4>
                <p>Franca - São Paulo</p>
            </div>
            <form data-aos="fade-left" data-aos-duration="1600" onSubmit={handleSubmit(submitForm)}>
                <div className="userFields">
                    <input {...register("name")} required autoComplete="off" type="text" name="name" placeholder="Nome" />
                    <input {...register("email")} required autoComplete="off" type="text" name="email" placeholder="Email" />
                    <input {...register("phone")} required autoComplete="off" type="text" name="phone" placeholder="Telefone" />
                </div>
                <textarea {...register("message")} placeholder="Mensagem" name="message" id="" cols={30} rows={5}></textarea>
                <MyButton type="submit" link="#" text="Enviar" />
            </form>
        </div>
        <Snackbar
            open={open}
            onClose={() => setOpen(false)}
            autoHideDuration={4000}
            anchorOrigin={{ vertical: `bottom`, horizontal: `right` }}
        >
        <Alert onClose={() => setOpen(false)} severity={modalSeverity} sx={{width: "100%"}}>
            {modalText}
        </Alert>
        </Snackbar>
    </div>
    )
}