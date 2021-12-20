import "./sectionprojects.css"
import pjt1 from "../../images/pj1.jpg"

export const SectionProjects = () => {
    return(
    <section className="container">
        <h2>Projetos</h2>
        <div className="galleryProject">
            <div className="projectTwo">
                <div style={{backgroundImage: `url(${pjt1})`}}></div>
                <div style={{backgroundImage: `url(${pjt1})`}}></div>
            </div>
            <div className="projectThree mt-4">
                <div style={{backgroundImage: `url(${pjt1})`}}></div>
                <div style={{backgroundImage: `url(${pjt1})`}}></div>
                <div style={{backgroundImage: `url(${pjt1})`}}></div>
            </div>
        </div>
    </section>
    );
}