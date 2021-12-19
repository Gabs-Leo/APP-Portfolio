import { Navbar } from "../navbar/Navbar"
import "./header.css"

export const Header = () => {
    return(<>
    <header>
        <Navbar />
        <div className="container">
            <h1>BACK-END</h1>
        </div>
    </header>
    </>
    )
}