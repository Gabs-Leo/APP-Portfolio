import "./sectionsds.css"
import myImage from "./../../images/myself.png"

export const SectionSDS = () => {
    return (
    <section>
        <div className="container">
            <h2>Sobre Mim</h2>
            <div className="sideToSide">
                <div className="img">
                    <img src={myImage} alt="me" />
                </div>
                <div className="text">
                    <h3>Oi, eu sou o Gabs!</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, harum tempore debitis adipisci quisquam culpa, vel cum distinctio unde doloremque provident consectetur sit labore, nostrum voluptatibus dolores veniam blanditiis sapiente?</p>
                </div>
            </div>
        </div>
    </section>
    )
}