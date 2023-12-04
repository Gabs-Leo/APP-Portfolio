import { Navbar } from "../navbar/Navbar"
import "./header.css"

export const Header = () => {
    return(<>
    <header id="header">
        <Navbar logoLink="/adm" />
        <div className="container">
            <h2 
                data-aos-mirror="true" 
                data-aos="fade-right" 
                data-aos-duration="1600">
                Eu sou o Gabs, Desenvolvedor
            </h2>
            <h1 
                data-aos-mirror="true" 
                data-aos="fade-left" 
                data-aos-duration="1600">
                BACK-END
            </h1>
        </div>
    </header>
    </>
    )
}