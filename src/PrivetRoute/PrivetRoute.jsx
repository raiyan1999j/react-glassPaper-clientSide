import { useContext } from "react"
import { InfoProvider } from "../ContextProvider/ContextProvider"
import { Navigate } from "react-router-dom";

export default function PrivetRoute({children}){
    const {userData} = useContext(InfoProvider);
    if(!userData){
        return <Navigate to="/login"/>
    }

    return(
        <>
            {children}
        </>
    )
}