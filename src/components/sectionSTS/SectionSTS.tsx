import "./sectionsts.css"
import myImage from "./../../images/myself.png"
import { ProgressBar } from "../progressBar/ProgressBar"
import { Button } from "../button/Button"

export const SectionSTS = () => {
    return (
    <section>
        <div className="container">
            <h2 className="mb-3">Sobre Mim</h2>
            <div className="sideToSide">
                <div className="img">
                    <img src={myImage} alt="me" />
                    <div></div>
                </div>
                <div className="text">
                    <h3>Oi, eu sou o Gabs!</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, harum tempore debitis adipisci quisquam culpa, vel cum distinctio unde doloremque provident consectetur sit labore, nostrum voluptatibus dolores veniam blanditiis sapiente?</p>
                    <ProgressBar title="Spring Boot" percentage={90}/>
                    <ProgressBar title="GitHub" percentage={75}/>
                    <ProgressBar title="React Js" percentage={70}/>
                    <ProgressBar title="Bootstrap" percentage={70}/>
                    <Button />
                </div>
            </div>
        </div>
    </section>
    )
}