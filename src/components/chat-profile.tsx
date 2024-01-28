import { useEffect, useState } from "react"


interface Props {
    profile:string
    user:string
    message:string
    notify?:boolean
}

export default function ChatProfile(props:Props){
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setLoaded(true)
        },1000)   
    },[])
    return(
    <>
    <div className="chat-profile" style={{width:"100%", border:"", display:"flex", alignItems:"center", gap:"0.5rem", justifyContent:"space-between"}}>
        <div style={{display:"flex", alignItems:"center", gap:"0.5rem"}}>
            {
                !loaded?
                <div className='animate-pulse' style={{width:"2rem", height:"2rem", background:"rgba(120 120 120/ 20%)", borderRadius:"50%"}}></div>
                :
                <img src={props.profile} style={{width:"2rem"}}/>
            }
            
            <div>
                {
                    !loaded?
                    <>
                    <div style={{display:"flex", flexFlow:"column", gap:"0.5rem"}}>
                    <div className='animate-pulse' style={{display:"flex",width:"12rem", height:"0.5rem", background:"rgba(120 120 120/ 20%)"}}></div>
                    <div className='animate-pulse' style={{width:"6rem", height:"0.5rem", background:"rgba(120 120 120/ 20%)"}}></div>
                    </div>
                    
                    </>
                    
                    :
                    <>
                    <p style={{fontWeight:800, fontSize:"0.85rem"}}>{props.user}</p>
                    <p style={{fontSize:"0.85rem", opacity:0.5}}>{props.message}</p>
                    </>
                    
                }
                
            </div>
        </div>
        {
        props.notify&&loaded?
        <p style={{fontWeight:800, fontSize:"1.5rem", color:"salmon", marginRight:"1rem"}}>•</p>
        :null
        }
        
        
                                
    </div>
    </>
    )
}