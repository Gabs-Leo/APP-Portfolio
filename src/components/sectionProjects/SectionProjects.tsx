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
            console.log(proj);
        });
    }, []);

    return(
    <section className="container" id="projects" style={{padding: `40px 10px`}} >
        <SectionH2 text="Projetos" />
        <div className="galleryProject" style={{paddingBottom: `60px`}}>
            <div className="projectTwo" style={{position: `relative`}}>
                
                <div data-aos-mirror="true" data-aos="fade-down-right" data-aos-duration="1400" className="projectElement" style={{backgroundImage: `url(${PROJECT_URL}/images/${longProjects[0]?.id})`}}>
                    {longProjects[0] ?
                    <div className="hoverDetails">
                        <div className="hoverContent">
                            <div>
                                <h3>{longProjects[0]?.name || "Em Breve"}</h3>
                                <p>{longProjects[0]?.description || "Em breve."}</p>
                            </div>
                            <Button href={longProjects[0]?.repositoryUrl} style={{backgroundColor: `var(--baseColor)`, border: 0, fontWeight: `bold`}}> Ver Projeto</Button>
                        </div>
                    </div>
                    : <div style={{width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems:`center`}}><CircularProgress color="success" /></div>}
                </div> 
                <div data-aos-mirror="true" data-aos="fade-down-left" data-aos-duration="1400" className="projectElement" style={{backgroundImage: `url(${PROJECT_URL}/images/${longProjects[1]?.id})`}}>
                    { longProjects[1] ?
                    <div className="hoverDetails toLeft">
                        <div className="hoverContent">
                            <div>
                                <h3>{longProjects[1]?.name || "Em Breve"}</h3>
                                <p>{longProjects[1]?.description || "Em breve."}</p>
                            </div>
                            <Button href={longProjects[1]?.repositoryUrl} style={{backgroundColor: `var(--baseColor)`, border: 0, fontWeight: `bold`}}> Ver Projeto</Button>
                        </div>
                    </div> : <div style={{width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems:`center`}}><CircularProgress color="success" /></div>}
                </div>
            </div>
            <div className="projectThree mt-4">
                <div data-aos-mirror="true" data-aos="fade-up-right" data-aos-duration="1400" key={smallProjects[0]?.id || 0} className="projectElement" style={{backgroundImage: `url(${PROJECT_URL}/images/${smallProjects[0]?.id})`}}>
                    {smallProjects[0] ?
                    <div className="hoverDetails">
                        <div className="hoverContent">
                            <div>
                                <h3>{smallProjects[0]?.name || "Em Breve"}</h3>
                                <p>{smallProjects[0]?.description || "Em breve."}</p>
                            </div>
                            <Button variant="primary" href={smallProjects[0]?.repositoryUrl} style={{backgroundColor: `var(--baseColor)`, border: 0, fontWeight: `bold`}}> Ver Projeto</Button>
                        </div>
                    </div>: <div style={{width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems:`center`}}><CircularProgress color="success" /></div>}
                </div>
                <div data-aos-mirror="true" data-aos="fade-up" data-aos-duration="1400"  key={smallProjects[1]?.id || 1} className="projectElement" style={{backgroundImage: `url(${PROJECT_URL}/images/${smallProjects[1]?.id})`}}>
                    { smallProjects[1] ?
                    <div className="hoverDetails">
                        <div className="hoverContent">
                            <div>
                                <h3>{smallProjects[1]?.name || "Em Breve"}</h3>
                                <p>{smallProjects[1]?.description || "Em breve."}</p>
                            </div>
                            <Button href={smallProjects[1]?.repositoryUrl} style={{backgroundColor: `var(--baseColor)`, border: 0, fontWeight: `bold`}}> Ver Projeto</Button>
                        </div>
                    </div> : <div style={{width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems:`center`}}><CircularProgress color="success" /></div>}
                </div>
                <div data-aos-mirror="true" data-aos="fade-up-left" data-aos-duration="1400" key={smallProjects[2]?.id || 2} className="projectElement" style={{backgroundImage: `url(${PROJECT_URL}/images/${smallProjects[2]?.id})`}}>
                    { smallProjects[2] ?    
                    <div className="hoverDetails">
                        <div className="hoverContent">
                            <div>
                                <h3>{smallProjects[2]?.name || "Em Breve"}</h3>
                                <p>{smallProjects[2]?.description || "Em breve."}</p>
                            </div>
                            <Button href={smallProjects[2]?.repositoryUrl} style={{backgroundColor: `var(--baseColor)`, border: 0, fontWeight: `bold`}}> Ver Projeto</Button>
                        </div>
                    </div> : <div style={{width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems:`center`}}><CircularProgress color="success" /></div>}
                </div>
            </div>
        </div>
    </section>
    );
}