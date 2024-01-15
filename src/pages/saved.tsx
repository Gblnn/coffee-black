import { Button } from "antd";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";



export default function Saved(){
    const usenavigate = useNavigate()
    return(
        <>
        <div style={{top:0,position:"absolute", display:"flex", border:"", width:"100%", justifyContent:"flex-end",alignItems:"center"}}>
            <Button onClick={()=>{usenavigate("/login")}} style={{margin:"1rem",display:"flex", gap:"0.5rem", alignItems:"center", justifyContent:"center "}} type="primary"><LogOut width="1rem"/>LOGOUT</Button>
        </div>
        </>
    )
}