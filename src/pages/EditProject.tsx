import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import axios from "axios";
import { forwardRef, useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Navigate, useParams } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { PROJECT_ADMIN_URL, PROJECT_URL } from "../services/URLS";
import { Project } from "../types/Project";
import { useDropzone } from "react-dropzone";

export const EditProject = () => {

    

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    };
    interface DropZoneProps {
        project:Project;
    }
    
    function Dropzone(props:DropZoneProps) {
        const onDrop = useCallback(acceptedFiles => {
            const file = acceptedFiles[0];
            const formData = new FormData();
            formData.append("file", file);

            axios.post(`${PROJECT_ADMIN_URL}/${props.project.id}`, {
                headers:{
                    "Content-Type" : "multipart/form-data",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }).then(() => {
                axios.get(`${PROJECT_URL}/${params.projectId}`, config).then((i) => {
                    setProject(i.data.content.content as Project);                    
                })
            })
        }, [props.project.id]);
        const {getRootProps, getInputProps} = useDropzone({onDrop})
        
        return (
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    <img src={`${PROJECT_URL}/images/${props.project.id}`} alt="" />
                }
            </div>
        )
      }

    let params = useParams();
    const [project, setProject] = useState<Project>();
    useEffect(() => {
        axios.get(`${PROJECT_URL}/${params.projectId}`, config).then((i) => {
            setProject(i.data.content as Project);
        })
    }, 
    []);
    
    const {register, handleSubmit} = useForm<Project>({});

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    }

    const submitForm = (i:Project) => {
        if(i.name === ""){
            i.name = project?.name || "";
        }
        if(i.description === ""){
            i.description = project?.description || "";
        }
        if(i.repositoryUrl === ""){
            i.repositoryUrl = project?.repositoryUrl || "";
        }
        axios.put(`${PROJECT_ADMIN_URL}/${params.projectId}`, i, config).then(i => {
            console.log(i);
        }).then(() => {
            setOpen(true);
        }).catch(e => {
            console.log(i);
            console.log(e.response)
        })
    }

    const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
    })

    const [redirect, setRedirect] = useState(false);
    if(redirect){
        return <Navigate to={`/adm`} />
    }
    
    

    return(
        <>
        <Navbar />
        <div id="sideToside" className="container" style={{marginTop: `80px`, display: `flex`}}>
            <div id="sideTosideImg" style={{width: `50%`}}>
                {
                    project ? <Dropzone project={project} /> : 
                    <div></div>
                }
            </div>
            <form onSubmit={handleSubmit(submitForm)} style={{paddingLeft: `30px`}}>
                <div className="longField">
                    <input {...register("name")} autoComplete="off" type="text" id="name" defaultValue={project?.name}/>
                    <input {...register("repositoryUrl")} autoComplete="off" type="text" id="repositoryUrl" defaultValue={project?.repositoryUrl} />
                </div>
                <textarea {...register("description")} placeholder="Mensagem" name="description" id="description" cols={30} rows={5} defaultValue={project?.description}></textarea>
                <div className="sideToside">
                    <Button onClick={() => setRedirect(!redirect)} variant="secondary">Voltar</Button>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </div>
        <Snackbar
            open={open}
            onClose={handleClose}
            autoHideDuration={4000}
        >
            
            <Alert onClose={handleClose} severity="success" sx={{width: "100%"}}>
                Salvo com sucesso!
            </Alert>
        </Snackbar>
        </>
    )
}