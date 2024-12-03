import { Outlet } from "react-router-dom"
import Header from "./Header"


const Principal = () => {
    return(
        <>
        <Header />
        <Outlet />
        
        </>
    )
}

export default Principal;