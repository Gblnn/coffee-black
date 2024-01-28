import { MoreHorizontal, Send } from "lucide-react";


export default function ChatWindow(){
    return(
    <>
    <div style={{display:"flex", flexFlow:"column", width:"100%"}}>
    <div style={{display:"flex",alignItems:"center",height:"4rem", width:"100%", background:"var(--semi)", borderTopRightRadius:"1rem", boxShadow:"0 4px 20px -15px rgba(0 0 0/ 50%)", justifyContent:"space-between"}}>
        <div style={{display:'flex', alignItems:"center", marginLeft:"1.5rem", gap:"0.25rem"}}>
            <button className="hoverable" style={{padding:"0.25rem", display:"flex", gap:"0.25rem", alignItems:"center"}}>
            
            <img src="/coffee.png" style={{width:"1.5rem"}}/>
            <p style={{fontWeight:"600", fontSize:"1rem"}}>gbln</p>
            </button>
            
        </div>
        <div style={{marginRight:"1rem", display:'flex', alignItems:"center"}}>
            <button className="hoverable" style={{padding:"0.5rem"}}>
                <MoreHorizontal width="1.25rem" color="salmon"/>
            </button>
        </div>                    
    </div>
    <div style={{display:"flex",flexFlow:"column",width:"100%", height:"100%", background:"var(--hemi)"}}>

    </div>
    <div style={{width:"100%", height:"4rem", background:"var(--semi)", borderBottomRightRadius:'1rem', display:"flex", alignItems:"center"}}>
        <input style={{background:"none", border:'none', marginLeft:"1rem", width:"100%"}} placeholder="Message"></input>
        <button className="hoverable" style={{marginLeft:"0.5rem", marginRight:"1rem"}}><Send color="salmon"/></button>
    </div>
    </div>
    
    </>
    )
}