import { Button, ConfigProvider, Form, Input, Typography, message, theme } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [postable, setPostable] = useState(false)
    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    const usenavigate = useNavigate()

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

    //Fetching Login Details from MockAPI
    useEffect(()=>{
        setTimeout(()=>{ 
            fetch("https://6586a271468ef171392e80df.mockapi.io/users?username="+username)
        .then(res => res.json())
        .then(data => {
            setPosts(data) 
            console.log(data)
        })  
        },3000)
        
    },[username, password])

    window.name = username

    const Validate = () =>{

        setUsername(username.toLowerCase())
        setLoading(true)

        setTimeout(() => {

            setLoading(false)
            posts.map((post)=>{
           
                if(post.username === username && post.password === password){
                    message.success("Logged In")
                    usenavigate('/feed')
                }
                else{
                    message.info("Invalid credentials")
                }
            })

        },1000);
            
    }
    return(
        <>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100svh", border:""}}>
        <div className="auth-card" style={{ height:"fit-content", background:"#1a1a1a", borderRadius:"1rem"}}>
            <div style={{padding:"1.5rem", border:"", height:"100%"}}>
                <div style={{display:"flex", gap:"0.25rem"}}>
                <img style={{width:"2.5rem"}} src="/coffee-bag-color.png"/>
                <h1 style={{fontWeight:600, fontSize:"1.75rem"}}>COFFEE</h1>
                </div>
                
                <ConfigProvider theme={{algorithm: theme.darkAlgorithm, token:{colorPrimary:"salmon"} }}>
                    <Form style={{marginTop:"2.75rem"}}>
                        <div style={{display:"flex", flexFlow:"column", gap:"1rem"}}>
                        <Input onChange={e=>setUsername(e.target.value)} style={{fontFamily:"Clash Grotesk", fontSize:"16px"}} placeholder="Username"/>
                        <Input.Password onChange={e=>setPassword(e.target.value)} style={{fontFamily:"Clash Grotesk", fontSize:"16px"}} placeholder="Password"/>
                        <Button onClick={Validate} loading={loading} disabled={!postable} style={{marginTop:"1.5rem"}}>LOGIN</Button>
                        
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