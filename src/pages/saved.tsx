import { Button } from "antd";
import { useNavigate } from "react-router-dom";



export default function Saved(){
    const usenavigate = useNavigate()
    return(
        <>
        <div style={{top:0,position:"absolute", display:"flex", border:"1px solid", width:"100%", justifyContent:"flex-end",alignItems:"center"}}>
            <Button onClick={()=>{usenavigate("/login")}} style={{margin:"1rem"}} type="primary">LOGOUT</Button>
        </div>
        </>
    )
}