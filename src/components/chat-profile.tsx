

interface Props {
    profile:string
    user:string
    message:string
    notify?:boolean
}

export default function ChatProfile(props:Props){
    return(
    <>
    <div className="chat-profile" style={{width:"100%", border:"", display:"flex", alignItems:"center", gap:"0.5rem", justifyContent:"space-between"}}>
        <div style={{display:"flex", alignItems:"center", gap:"0.5rem"}}>
            <img src={props.profile} style={{width:"2rem"}}/>
            <div>
                <p style={{fontWeight:800, fontSize:"0.85rem"}}>{props.user}</p>
                <p style={{fontSize:"0.85rem", opacity:0.5}}>{props.message}</p>
            </div>
        </div>
        {props.notify?
        <p style={{fontWeight:800, fontSize:"1.5rem", color:"salmon", marginRight:"1rem"}}>•</p>
        :null
        }
        
        
                                
    </div>
    </>
    )
}