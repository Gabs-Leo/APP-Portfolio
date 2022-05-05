import { Footer } from "../components/footer/Footer"
import { Form } from "../components/form/Form"
import { Header } from "../components/header/Header"
import { SectionGallery } from "../components/sectionGallery/SectionGallery"
import { SectionProjects } from "../components/sectionProjects/SectionProjects"
import { SectionSTS } from "../components/sectionSTS/SectionSTS"

export const Home = () => {
    return (
        <>
            <Header />
            <SectionProjects />
            <SectionGallery />
            <SectionSTS />
            <Form />
            <Footer />
        </>
    )
}