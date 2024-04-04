import CoffeeBean from "@/components/icons/coffeebean";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Onboarding() {
    const usenavigate = useNavigate()
    return(
        <div style={{width:"100%", height:"100svh", display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column"}}>
            
            <div style={{display:"flex", flexFlow:"column", alignItems:"center", gap:"5rem"}}>

                <motion.div style={{width:"100%", border:"", display:"flex", alignItems:"center", justifyContent:"center"}} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}>

                
                <div style={{display:"flex", flexFlow:'column', justifyContent:"center", alignItems:"center"}}>
                    <div style={{display:"flex", gap:"0.5rem"}}>
                        <CoffeeBean fill="salmon" width="2rem"/>
                        <h1 style={{fontWeight:600, fontSize:"2.5rem", letterSpacing:"0.1rem"}}>Coffee</h1>
                    </div>
                    <p style={{fontSize:"0.8rem"}}>Less overwhelming. More Social.</p>
            
                </div>
                </motion.div>
            
                
            </div>
            <Button onClick={()=>usenavigate("/login")} style={{position:"absolute", bottom:0, margin:"5rem", background:"#1a1a1a"}}>Get Started</Button>
            
        </div>
    )
}