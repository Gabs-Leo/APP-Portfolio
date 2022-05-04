import "./sectiongallery.css"
import bg from "./../../images/33253.png"

export const SectionGallery = () => {


    return (
        <div id="services" style={{padding: `110px 0px`, backgroundImage: `url(${bg})`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundAttachment: `fixed`}}>
        <section className="container" style={{paddingTop: `80px`, paddingBottom: `220px`}}>
            <h2 data-aos-mirror="true" data-aos="fade-right" className="mb-3" style={{color: `var(--baseColor)`, fontSize: `60px`}}>Serviços</h2>
            <div className="gallery">
                <div data-aos-mirror="true" data-aos="fade-up" data-aos-duration="1000" className="galleryElement">
                    <i className="fas fa-power-off mb-2"></i>
                    <h3>Aplicações Rest</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam hic ullam, impedit qui aliquid numquam praesentium.</p>
                </div>
                <div data-aos-mirror="true" data-aos="fade-up" data-aos-duration="1500" className="galleryElement midGallery">
                    <i className="fas fa-gamepad mb-2"></i>
                    <h3>Game Dev</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam hic ullam, impedit qui aliquid numquam praesentium.</p>
                </div>
                <div data-aos-mirror="true" data-aos="fade-up" data-aos-duration="1000"className="galleryElement">
                    <i className="fab fa-react mb-2"></i>
                    <h3>Aplicações Web</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam hic ullam, impedit qui aliquid numquam praesentium.</p>
                </div>
            </div>
        </section>
        </div>
    )
}