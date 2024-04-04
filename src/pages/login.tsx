import CoffeeBean from "@/components/icons/coffeebean";
import { LoadingOutlined } from '@ant-design/icons';
import { ConfigProvider, Form, Typography, message, theme } from "antd";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [postable, setPostable] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const usenavigate = useNavigate();

  useEffect(()=>{
    if(window.name!=""){
    }
  },[])

  useEffect(() => {
    if (username == "") {
      setPostable(false);
    } else {
      setPostable(true);
    }
    if (password == "") {
      setPostable(false);
    } else {
      setPostable(true);
    }
  }, [username, password]);

  window.name = username;
  localStorage.setItem("username", username)

  const Validate = async () => {
    setUsername(username.toLowerCase());
    setLoading(true)
    try {
      await fetch(
        "https://6586a271468ef171392e80df.mockapi.io/users?username=" +username,)
        .then((res) => res.json())
        .then((data) => {
          data.map((data:any)=>{
            if(data.username== username && data.password == password){

              // window.open('/index', 'rel=noopener noreferrer')
              usenavigate("/feed")
              setLoading(false)

            }
            else{
              setLoading(false)
              message.info("Invalid Password")
            }
          })
          
        });
      
    } catch (error) {
      message.info("Invalid Username")
      setLoading(false)
    }
    
  };
    return(
        <>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100svh", border:""}}>
        <motion.div style={{width:"100%", border:"", display:"flex", alignItems:"center", justifyContent:"center"}} initial={{opacity:0}} whileInView={{opacity:1}}>
            <div className="auth-card" style={{ height:"fit-content", background:"var(--card-color)", borderRadius:"1rem"}}>
            <div style={{padding:"1.5rem", border:"", height:"100%"}}>
                <div style={{display:"flex", gap:"0.5rem"}}>
                {/* <img style={{width:"2.5rem"}} src="/coffee-bag-color.png"/> */}
                <CoffeeBean fill="var(--color)"/>
                <h1 className="coffee" style={{fontWeight:600, fontSize:"1.75rem"}}>COFFEE</h1>
                </div>
                
                <ConfigProvider theme={{algorithm: theme.darkAlgorithm,token:{colorPrimary:"salmon",colorBgContainerDisabled:"rgba(100 100 100 / 10%)", colorTextDisabled:"#9a9a9a", colorText:"var(--color)"} }}>
                    <Form style={{marginTop:"2.75rem"}}>
                        <div style={{display:"flex", flexFlow:"column", gap:"1rem"}}>
                            
                            <input onChange={e=>setUsername(e.target.value.toLowerCase())} style={{fontFamily:"Clash Grotesk", fontSize:"16px"}} placeholder="Username"/>
                            
                            <input type="password" onChange={e=>setPassword(e.target.value)} style={{fontFamily:"Clash Grotesk", fontSize:"16px"}} placeholder="Password"/>
                            
                        
                        <button type="submit" onClick={Validate} className={postable?"active-btn":"disabled"} disabled={!postable} style={{marginTop:"1.5rem", padding:"0.25rem", fontSize:"1rem", fontWeight:500, display:"flex", alignItems:"center", justifyContent:"center", gap:'0.75rem'}}>{loading?<LoadingOutlined/>:null}LOGIN</button>
                        
                        <Typography style={{marginTop:"0.5rem",fontFamily:"Clash Grotesk", textAlign:"center", color:"#6a6a6a"}}>Dont have an account? <Link to="/signup" style={{color:"var(--color)", fontWeight:600}}>Sign-in</Link></Typography>
                        
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