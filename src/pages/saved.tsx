import DialogBox from "@/components/dialogbox";
import { Button, ConfigProvider } from "antd";
import { LogOut } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Saved(){
    const usenavigate = useNavigate()
    const [dialog, setDialog] = useState(false)
    const [dialogtitle, setDialogtitle] = useState("")
    const [dialogdesc, setdialogdesc] = useState("")

    const handleLogout = () => {
        setDialog(true)
        setDialogtitle("Logout?")
        setdialogdesc("Logging out from current session")
    }
    const handleCancel = () => {
        setDialog(false)
      }

    const handleConfirm = () => {
        usenavigate("/login")
    }
      
    return(
        <>
        <div style={{top:0,position:"absolute", display:"flex", border:"", width:"100%", justifyContent:"flex-end",alignItems:"center"}}>
            <ConfigProvider theme={{token:{colorPrimary:"salmon"}}}>
                <Button onClick={handleLogout} style={{margin:"2rem",display:"flex", gap:"0.5rem", alignItems:"center", justifyContent:"center "}} type="primary"><LogOut width="1rem"/></Button>
            </ConfigProvider>
        </div>
        
        <DialogBox open={dialog} title={dialogtitle} desc={dialogdesc} onCancel={handleCancel} onConfirm={handleConfirm}/>
        
        </>
    )
}