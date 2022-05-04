
import axios from "axios"
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { BASE_URL } from "../services/URLS"
import { Project } from "../types/Project";
import "./adm.css";

export const Adm = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    useEffect(() => {
        axios.get(`${BASE_URL}/api/projects`).then((i) => {
            setProjects(i.data.data.content as Project[]);
        });
    }, []);

    const projectJsx = projects.map((i) => 
        <tr className="projectLine" key={i.id}>
            <td>{i.id}</td>
            <td><img src={i.image} alt={i.name} /></td>
            <td>{i.name}<br/>{i.description}</td>
            <td className="projectActions">
                <Button
                target="_blank" 
                href={i.link}
                variant="success">
                    <i className="fas fa-link"></i>
                </Button>
                <Button 
                variant="primary" 
                onClick={() => {
                    setAddress(`/adm/${i.id}`);
                    setRedirect(!redirect);
                }}>
                    <i className="fas fa-edit"></i>
                </Button>
            </td>
        </tr>
    );


    const [redirect, setRedirect] = useState(false);
    const [address, setAddress] = useState("");
    if(redirect){
        return <Navigate to={address} />
    }

    return (
        <>
        <Navbar />
        <div className="container" style={{marginTop: `80px`}}>
            <div>
                <h2>Projects</h2>
                
            </div>

            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Imagem</th>
                        <th>Detalhes</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {projectJsx}
                </tbody>
            </table>
        </div>
        </>
    )
}