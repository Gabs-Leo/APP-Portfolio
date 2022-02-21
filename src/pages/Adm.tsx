import axios from "axios"
import { useEffect, useState } from "react";
import { BASE_URL } from "../services/URLS"
import { Project } from "../types/Project";

export const Adm = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    useEffect(() => {
        axios.get(`${BASE_URL}/api/projects`).then((i) => {
            setProjects(i.data.data.content as Project[]);
        });
    }, []);

    const projectJsx = projects.map((i) => 
        <tr key={i.id}>
            <td>{i.name}</td>
            <td>{i.description}</td>
            <td><img src={i.image} alt={i.name} /></td>
            <td><a href={i.link} target="_blank" rel="noreferrer">Link</a></td>
            <td>Ações</td>
        </tr>
    );

    return (
        <div className="container">
            <h2>Projects</h2>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Imagem</th>
                        <th>Link</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {projectJsx}
                </tbody>
            </table>
        </div>
    )
}