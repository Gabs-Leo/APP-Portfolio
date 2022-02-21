import "./sectionprojects.css"
import pjt1 from "../../images/pj1.jpg"
import { useEffect, useState } from "react";
import { Project } from "../../types/Project";
import axios from "axios";
import { BASE_URL } from "../../services/URLS";

export const SectionProjects = () => {
    const [longProjects, setLongProjects] = useState<Project[]>([]);
    const [smallProjects, setSmallProjects] = useState<Project[]>([]);
    useEffect(() => {
        axios.get(`${BASE_URL}/api/projects`).then(i => {
            const proj = i.data.data.content as Project[];
            setLongProjects([proj[0], proj[1]]);
            setSmallProjects([proj[2], proj[3], proj[4]]);
            console.log(proj);
        });   
    }, []);

    const smallProjectsJsx = smallProjects.map(i => (
        <div key={i.id} className="projectElement" style={{backgroundImage: `url(${i.image})`}}>
            <div className="hoverDetails">
                <div className="hoverContent">
                    <h3>{i.name}</h3>
                    <p>{i.description}</p>
                </div>
            </div>
        </div>
    ))


    return(
    <section className="container">
        <h2 className="mb-3">Projetos</h2>
        <div className="galleryProject">
            <div className="projectTwo">
                <div className="projectElement" style={{backgroundImage: `url(${longProjects[0]?.image || ""})`}}>
                    <div className="hoverDetails">
                        <div className="hoverContent">
                            <h3>{longProjects[0]?.name || ""}</h3>
                            <p>{longProjects[0]?.description || ""}</p>
                        </div>
                    </div>
                </div>
                <div className="projectElement" style={{backgroundImage: `url(${longProjects[1]?.image || ""})`}}>
                    <div className="hoverDetails toLeft">
                        <div className="hoverContent">
                            <h3>{longProjects[1]?.name || ""}</h3>
                            <p>{longProjects[1]?.description || ""}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projectThree mt-4">
                {smallProjectsJsx}
            </div>
        </div>
    </section>
    );
}