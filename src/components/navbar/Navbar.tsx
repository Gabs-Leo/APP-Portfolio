import {Divide as Hamburger} from "hamburger-react"
import { useState } from "react"
import logo from "./../../images/icon.png"
import "./navbar.css"

export const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [menuWidth, setMenuWidth] = useState(0);

    const handleOpen = () => {
        setOpen(!isOpen);
        if(!isOpen){
            setMenuWidth(100);
        }else{
            setMenuWidth(0);
        }
    }

    return (
    <>
    <nav style={{backgroundColor: `rgba(0,0,0, 0.6)`}}>
        <div className="container">
            <div>
                <a href="/"><img id="logo" src={logo} alt="ValHalla" /></a>
            </div>
            <Hamburger color="var(--baseColor)" toggled={isOpen} toggle={handleOpen} />
        </div>
    </nav>
    <div className="menuScreen" style={{width: `${menuWidth}%`}}>
        <div>
            <a onClick={handleOpen} href="#header">Home</a>
            <a onClick={handleOpen} href="#projects">Projetos</a>
            <a onClick={handleOpen} href="#services">Serviços</a>
            <a onClick={handleOpen} href="#about">Sobre</a>
            <a onClick={handleOpen} href="#contact">Contato</a>
        </div>
    </div>
    </>
    )
}