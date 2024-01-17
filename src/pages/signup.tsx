import { Button, ConfigProvider, Form, Typography, theme } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function SignUp() {

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [postable, setPostable] = useState(false)

    useEffect(()=>{
        if(fullname==""){
            setPostable(false)
        }
        else{
            setPostable(true)
        }
        if(email==""){
            setPostable(false)
        }
        else{
            setPostable(true)
        }
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

            <div className="auth-card" style={{ height:"fit-content", background:"var(--card-color)", borderRadius:"1rem"}}>

                <div style={{padding:"1.5rem", border:"", height:"100%"}}>

                    <h1 style={{fontWeight:600, fontSize:"1.75rem"}}>SIGN-UP</h1>

                    <ConfigProvider theme={{algorithm: theme.darkAlgorithm, token:{colorPrimary:"salmon",colorBgContainerDisabled:"rgba(100 100 100 / 10%)", colorTextDisabled:"#9a9a9a", colorText:"var(--color)"} }}>

                        <Form style={{marginTop:"2rem"}}>

                            <div style={{display:"flex", flexFlow:"column", gap:"1rem"}}>

                            <input type="email" onChange={e=>setEmail(e.target.value)} style={{fontFamily:"Clash Grotesk", fontSize:"16px"}} placeholder="Email"/>

                            <input onChange={e=>setFullname(e.target.value)} style={{fontFamily:"Clash Grotesk", fontSize:"16px"}} placeholder="Fullname"/>

                            <input onChange={e=>setUsername(e.target.value)} style={{fontFamily:"Clash Grotesk", fontSize:"16px"}} placeholder="Username"/>

                            <input type="password" onChange={e=>setPassword(e.target.value)} style={{fontFamily:"Clash Grotesk", fontSize:"16px"}} placeholder="Password"/>

                            <Button disabled={!postable} style={{marginTop:"1.5rem", border:"1px solid rgba(120 120 120/40%)"}}>Sign-up</Button>
                            
                            <Typography style={{marginTop:"0.5rem",fontFamily:"Clash Grotesk", textAlign:"center", color:"#6a6a6a"}}>Dont have an account? <Link to="/login" style={{color:"var(--color)", fontWeight:600}}>Log-in</Link></Typography>
                            
                            </div>
                            
                        </Form>
                    </ConfigProvider>
                    
                </div>
            </div>
        </div>
        
        </>
    )
}