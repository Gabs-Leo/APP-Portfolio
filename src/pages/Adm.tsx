
import { CircularProgress, Skeleton } from "@mui/material";
import axios from "axios"
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { BASE_URL } from "../services/URLS"
import { JWTUser } from "../types/JWTUser";
import { Project } from "../types/Project";
import "./adm.css";

export const Adm = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        let x:number = 0;

        axios.get(`${BASE_URL}/api/v1/projects`).then((i) => {
            setProjects(i.data.data.content as Project[]);
        });

        if(!localStorage.getItem("token")) {
            setAddress(`/`);
            setRedirect(true);
        } else {
            const user = jwtDecode(localStorage.getItem("token") || "") as JWTUser;
            user.roles.forEach(i => {
                if(i === "ROLE_ADMIN") {
                    x = 1;
                }
            });
            if(x === 0) {
                setAddress(`/`);
                setRedirect(true);
            }
        }
        ;
    }, []);

    const projectJsx = projects.map((i) => 
        <tr className="projectLine" key={i.id}>
            <td>{i.id}</td>
            <td><img src={`${BASE_URL}/api/v1/projects/images/${i.id}`} alt={i.name} /></td>
            <td>{i.name}<br/>{i.description}</td>
            <td className="projectActions">
                <Button
                target="_blank" 
                href={i.link}
                variant="success"
                >
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
        <Navbar logoLink="/" />
        <div className="container" style={{marginTop: `80px`}}>
            <div>
                <h2>Projects</h2>
            </div>

            { projectJsx.length !==0 ? 
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
            </table> : 
                <div style={{width: `100%`, height: `500px`, display: `flex`, justifyContent: `center`, alignItems:`center`}}><CircularProgress color="success" /></div>
            }
        </div>
        </>
    )
}