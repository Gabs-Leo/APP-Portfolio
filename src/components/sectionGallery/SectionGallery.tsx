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
                    <p>Desenvolvimento de jogos 3D e 2D para as mais diversas plataformas, utilizando engines como <strong>Game Maker</strong>, <strong>Unreal</strong> ou engine própria com <strong>Java</strong>.</p>
                </div>
                <div data-aos-mirror="true" data-aos="fade-up" data-aos-duration="1000"className="galleryElement">
                    <i className="fas fa-cloud mb-2"></i>
                    <h3>Devops</h3>
                    <p>Levantamento de infraestruturas completas em plataformas de cloud como <strong>Google Cloud</strong> e <strong>AWS</strong> utilizando ferramentas de IAC como <strong>Terraform</strong> e <strong>Cloudformation</strong>.</p>
                </div>
            </div>
        </section>
        </div>
    )
}