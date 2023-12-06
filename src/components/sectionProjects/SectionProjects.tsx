import "./sectionprojects.css"
import { useEffect, useState } from "react";
import { Project } from "../../types/Project";
import axios from "axios";
import { PROJECT_URL } from "../../services/URLS";
import { Button } from "react-bootstrap";
import { CircularProgress } from "@mui/material";
import { SectionH2 } from "../sectionH2/SectionH2";

export const SectionProjects = () => {
    const [longProjects, setLongProjects] = useState<Project[]>([]);
    const [smallProjects, setSmallProjects] = useState<Project[]>([]);
    useEffect(() => {
        axios.get(PROJECT_URL).then(i => {
            const proj = i.data.content as Project[];
            setLongProjects([proj[0], proj[1]]);
            setSmallProjects([proj[2], proj[3], proj[4]]);
        });
    }, []);

    return(
    <section className="container" id="projects" style={{padding: `40px 10px`}} >
        <SectionH2 text="Projetos" />
        <div className="galleryProject" style={{paddingBottom: `60px`}}>
            <div className="projectTwo" style={{position: `relative`}}>
                <ProjectComponent projects={longProjects[0]} />
                <ProjectComponent projects={longProjects[1]} />
            </div>
            <div className="projectThree mt-4">
                <ProjectComponent projects={smallProjects[0]} />
                <ProjectComponent projects={smallProjects[1]} />
                <ProjectComponent projects={smallProjects[2]} />
            </div>
        </div>
    </section>
    );
}

//Project Props
interface ProjectProps {
    projects:Project
}
const ProjectComponent = (props:ProjectProps) => {
    return (
        <div 
            data-aos-mirror="true" 
            data-aos="fade-down-right" 
            data-aos-duration="1400" 
            className="projectElement" 
            style={{backgroundImage: `url(${PROJECT_URL}/${props.projects?.id}/image)`}}>
            {props.projects ?
            <div className="hoverDetails">
                <div className="hoverContent">
                    <div>
                        <h3>{props.projects?.name || "Em Breve"}</h3>
                        <p>{props.projects?.description || "Em breve."}</p>
                    </div>
                    <Button href={props.projects?.repositoryUrl} style={{backgroundColor: `var(--baseColor)`, border: 0, fontWeight: `bold`}}> Ver Projeto</Button>
                </div>
            </div>
            : <div style={{width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems:`center`}}><CircularProgress color="success" /></div>}
        </div>
    )
}