import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Redirect() {
    const usenavigate = useNavigate()
    useEffect(()=>{
        usenavigate('/home')

        // if(window.name==""){
        // }

    },[usenavigate])
    return(
        <>
        </>
    )
}