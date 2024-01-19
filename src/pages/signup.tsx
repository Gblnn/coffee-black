import { Button, ConfigProvider, Form, Typography, message, theme } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function SignUp() {

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [postable, setPostable] = useState(false)
    const [loading, setLoading] = useState(false)
    const [profile, setProfile] = useState("/coffee.png")
    window.name = username

    const obj = {profile, email, fullname, username, password}

    const usenavigate = useNavigate()

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

        if(username=="coffee"){
            setProfile("/coffee-white.png")
        }
    },[username, password, profile])

    const SignUp=()=>{

        setLoading(true)

        //Posting data to MockAPI
        setTimeout(() => {
            setLoading(false)
            fetch("https://6586a271468ef171392e80df.mockapi.io/users",
            {
                method:"POST",
                headers:{'content-type':'application/json'},
                body:JSON.stringify(obj)
            }
            )
        }, 1000);
    }

    //Checking for empty fields
    const Validate = () =>{
        if (fullname==""||email==""||username==""||password==""){
            message.info('Fields can not be empty');
        }
        else{
            SignUp()
            setLoading(true)
            setTimeout(() => {
            setLoading(false)
            usenavigate('/feed')
    }, 2000);
        }
        
    }

    return(
        <>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100svh", border:""}}>
        <motion.div style={{width:"100%", border:"", display:"flex", alignItems:"center", justifyContent:"center"}} initial={{opacity:0}} whileInView={{opacity:1}}>
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

                            <Button onClick={Validate} loading={loading} disabled={!postable} style={{marginTop:"1.5rem", border:"1px solid rgba(120 120 120/40%)"}}>Sign-up</Button>
                            
                            <Typography style={{marginTop:"0.5rem",fontFamily:"Clash Grotesk", textAlign:"center", color:"#6a6a6a"}}>Dont have an account? <Link to="/login" style={{color:"var(--color)", fontWeight:600}}>Log-in</Link></Typography>
                            
                            </div>
                            
                        </Form>
                    </ConfigProvider>
                    
                </div>
            </div>
            </motion.div>
        </div>
        
        </>
    )
}