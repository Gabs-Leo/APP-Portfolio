import "./sectiongallery.css"
import bg from "./../../images/33253.png"
import { SectionH2 } from "../sectionH2/SectionH2"

export const SectionGallery = () => {
    return (
        <div id="services" style={{padding: `110px 0px`, backgroundImage: `url(${bg})`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundAttachment: `fixed`}}>
        <section className="container" style={{paddingTop: `80px`, paddingBottom: `220px`}}>
            <SectionH2 text="Serviços" color="base" />
            <div className="gallery">
                <div data-aos-mirror="true" data-aos="fade-up" data-aos-duration="1000" className="galleryElement">
                    <i className="fas fa-power-off mb-2"></i>
                    <h3>Aplicações Rest</h3>
                    <p>Desenvolvimento de aplicações Restfull com o framework <strong>Spring Boot</strong>, persistência em banco de dados com <strong>MySql</strong>, autenticação com tokens <strong>JWT</strong>.</p>
                </div>
                <div data-aos-mirror="true" data-aos="fade-up" data-aos-duration="1500" className="galleryElement midGallery">
                    <i className="fas fa-gamepad mb-2"></i>
                    <h3>Game Dev</h3>
                    <p>Desenvolvimento de jogos 3D e 2D para as mais diversas plataformas, utilizando engines como <strong>Game Maker</strong>, <strong>Unreal</strong> ou manualmente com <strong>Java</strong>.</p>
                </div>
                <div data-aos-mirror="true" data-aos="fade-up" data-aos-duration="1000"className="galleryElement">
                    <i className="fab fa-react mb-2"></i>
                    <h3>Aplicações Web</h3>
                    <p>Criação de apps completos para web, utilizando <strong>ReactJS</strong> no front-end e <strong>Spring Boot</strong> no back-end.</p>
                </div>
            </div>
        </section>
        </div>
    )
}