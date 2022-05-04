import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import axios from "axios";
import { forwardRef, useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Navigate, useParams } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar"
import { BASE_URL } from "../services/URLS";
import { Project } from "../types/Project"
import { useDropzone } from "react-dropzone";
import defaultImage from "./../images/pj1.jpg"

export const EditProject = () => {
    let params = useParams();
    const [project, setProject] = useState<Project>();
    useEffect(() => {
        axios.get(`${BASE_URL}/api/projects/${params.projectId}`).then((i) => {
            setProject(i.data.data as Project);
        })
    }, [])
    
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
        if(i.image === ""){
            i.image = project?.image || "";
        }
        if(i.link === ""){
            i.link = project?.link || "";
        }
        axios.put(`${BASE_URL}/adm/v1/projects/${params.projectId}`, i).then(i => {
            console.log(i);
        }).then(() => {
            setOpen(true);
        })
    }

    const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
    })

    const [redirect, setRedirect] = useState(false)
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
                    <input {...register("link")} autoComplete="off" type="text" id="link" defaultValue={project?.link} />
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

interface DropZoneProps {
    project:Project;
}

function Dropzone(props:DropZoneProps) {
    const onDrop = useCallback(acceptedFiles => {
      const file = acceptedFiles[0];
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
            <img src={`${props.project.image || defaultImage}`} alt="" />
        }
      </div>
    )
  }

//anchorOrigin={{'bottom', 'right'}}