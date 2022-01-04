import { Navbar } from "../navbar/Navbar"
import "./header.css"

export const Header = () => {
    return(<>
    <header>
        <Navbar />
        <div className="container">
            <h2>Eu sou o Gabs, Desenvolvedor</h2>
            <h1>BACK-END</h1>
        </div>
    </header>
    </>
    )
}