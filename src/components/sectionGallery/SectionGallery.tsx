import "./sectiongallery.css"

export const SectionGallery = () => {
    return (
        <section className="container">
            <h2 className="mb-3">Serviços</h2>
            <div className="gallery">
                <div className="galleryElement">
                    <i className="fas fa-power-off mb-2"></i>
                    <h3>Aplicações Rest</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam hic ullam, impedit qui aliquid numquam praesentium.</p>
                </div>
                <div className="galleryElement midGallery">
                    <i className="fas fa-gamepad mb-2"></i>
                    <h3>Game Dev</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam hic ullam, impedit qui aliquid numquam praesentium.</p>
                </div>
                <div className="galleryElement">
                    <i className="fab fa-react mb-2"></i>
                    <h3>Aplicações Web</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam hic ullam, impedit qui aliquid numquam praesentium.</p>
                </div>
            </div>
        </section>
    )
}