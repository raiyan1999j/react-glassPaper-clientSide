import { useContext } from "react"
import { InfoProvider } from "../ContextProvider/ContextProvider"
import { Navigate, useLocation } from "react-router-dom";

export default function PrivetRoute({children}){
    const {userData} = useContext(InfoProvider);
    const location = useLocation();

    console.log(location)
    if(!userData){
        return <Navigate to="/login" state={location.pathname}/>
    }

    return(
        <>
            {children}
        </>
    )
}