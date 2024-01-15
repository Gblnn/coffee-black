import { Button, ConfigProvider, Form, Input, Typography, theme } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [postable, setPostable] = useState(false)

    useEffect(()=>{
        if(username==""){
            setPostable(false)
        }
        else{
            setPostable(true)
        }
        if(password==""){
            setPostable(false)
        }
        else{
            setPostable(true)
        }   
    },[username, password])
    return(
        <>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100svh", border:""}}>
        <div className="auth-card" style={{ height:"fit-content", background:"#1a1a1a", borderRadius:"1rem"}}>
            <div style={{padding:"1.5rem", border:"", height:"100%"}}>
                <h1 style={{fontWeight:600, fontSize:"1.75rem"}}>COFFEE</h1>
                <ConfigProvider theme={{algorithm: theme.darkAlgorithm, token:{colorPrimary:"salmon"} }}>
                    <Form style={{marginTop:"2rem"}}>
                        <div style={{display:"flex", flexFlow:"column", gap:"1rem"}}>
                        <Input onChange={e=>setUsername(e.target.value)} style={{fontFamily:"Clash Grotesk", fontSize:"16px"}} placeholder="Username"/>
                        <Input.Password onChange={e=>setPassword(e.target.value)} style={{fontFamily:"Clash Grotesk", fontSize:"16px"}} placeholder="Password"/>
                        <Button disabled={!postable} style={{marginTop:"1.5rem"}}>LOGIN</Button>
                        
                        <Typography style={{marginTop:"0.5rem",fontFamily:"Clash Grotesk", textAlign:"center", color:"rgba(255 255 255/ 50%)"}}>Dont have an account? <Link to="/signup" style={{color:"white"}}>Sign-in</Link></Typography>
                        
                        </div>
                        
                    </Form>
                </ConfigProvider>
                
            </div>
        </div>
        </div>
        
        </>
    )
}