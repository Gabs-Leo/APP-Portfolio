import { Button } from "../button/Button"
import "./form.css"

export const Form = () => {
    return(
    <div className="container">
        <h2 className="mt-4 mb-3">Contato</h2>
        <div className="formContainer">
            <div className="findMe">
                <h4>EMAIL</h4>
                <p>gabrieldemoraistaveira@gmail.com</p>
                <p>gabrieldemoraistaveira@gmail.com</p>

                <h4>WHATSAPP</h4>
                <p>(16) 99413-2334</p>

                <h4>ENDEREÇO</h4>
                <p>Rua Pará 1330, Jardim Bueno - Franca(SP)</p>
            </div>
            <form action="">
                <div className="userFields">
                    <input autoComplete="off" type="text" name="name" placeholder="Nome" />
                    <input autoComplete="off" type="text" name="email" placeholder="Email" />
                    <input autoComplete="off" type="text" name="phone" placeholder="Telefone" />
                </div>
                <textarea placeholder="Mensagem" name="" id="" cols={30} rows={5}></textarea>
                <Button />
            </form>
        </div>
    </div>
    )
}