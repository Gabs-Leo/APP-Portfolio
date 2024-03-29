import "./sectionsts.css"
import myImage from "./../../images/myself.png"
import { ProgressBar } from "../progressBar/ProgressBar"
import { MyButton } from "../button/MyButton"
import { SectionH2 } from "../sectionH2/SectionH2"

export const SectionSideToSide = () => {
    return (
    <section id="about" className="pt-5">
        <div className="container">
            <SectionH2 text="Sobre Mim" color="base" />
            <div className="sideToSide">
                <div className="img" data-aos="fade-right" data-aos-duration="1400">
                    <img src={myImage} alt="me" />
                    <div></div>
                </div>
                <div className="text">
                    <h3 data-aos="fade-left" data-aos-duration="1600">Oi, eu sou o <strong>Gabs!</strong></h3>
                    <p data-aos="fade-left" data-aos-duration="2000">Meu nome é Gabriel, tenho {(2003 - new Date().getFullYear())*-1} anos, moro em Franca-Sp (Brasil). Atualmente estou cursando Análise e Desenvolvimento de Sistemas (Fatec Franca-SP) e fazendo o curso online de desenvolvimento de Games da Danki Code.</p>
                    <ul data-aos="fade-left" data-aos-duration="2400">
                        <li>Google Cloud e AWS</li>
                        <li>Docker, Kubernetes e Helm</li>
                        <li>CI/CD (Github Actions, Gitlab-CI, AWS Codepipeline)</li>
                        <li>Terraform e Cloudformation</li>
                        <li>Nginx</li>
                        <li>Linux e Bash Script</li>
                        <li>JavaScript, TypeScript, Python, Java</li>
                        <li>Rest APIs com Spring Boot e NodeJs</li>
                        <li>MySQL, PostgreSQL e SQL Server</li>
                        <li>ReactJs com Bootstrap</li>
                    </ul>
                    <br />
                    <div data-aos="fade-left" data-aos-duration="2400">
                        <br/>
                        <MyButton text="Contato" link="#contact"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

/*
<div data-aos="fade-left" data-aos-duration="2400">
    <ProgressBar title="Java com Spring Boot" percentage={90}/>
    <ProgressBar title="Spring Boot" percentage={90}/>
    <ProgressBar title="GitHub" percentage={75}/>
    <ProgressBar title="React Js" percentage={70}/>
    <ProgressBar title="Bootstrap" percentage={70}/>
</div>
*/