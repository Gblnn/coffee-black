import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Redirect() {
    const usenavigate = useNavigate()
    useEffect(()=>{
        usenavigate('/feed')

        // if(window.name==""){
        // }

    },[usenavigate])
    return(
        <>
        </>
    )
}