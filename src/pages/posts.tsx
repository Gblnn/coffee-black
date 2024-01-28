import ChatProfile from "@/components/chat-profile"
import { Edit } from "lucide-react"

export default function Posts(){
    return(
        <>
        <div className="inbox" style={{width:"100svw", height:"100svh", border:""}}>
        
            <div style={{width:"100%", height:"100%", padding:"", border:"", borderRadius:"1rem", background:"var(--semi)", display:"flex"}}>
                <div className="inbox-chats" style={{border:""}}>
                    <div style={{border:"", width:"100%", height:"100%", display:"flex", flexFlow:"column"}}>
                        <div style={{width:"100%", paddingBottom:"0.5rem", boxShadow:"1px 1px 50px var(--card-color)", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                        <h1 style={{fontWeight:"600", fontSize:"1.5rem"}}>Chats</h1>
                        <button className="hoverable" style={{padding:"0.5rem"}}>
                        <Edit width="1.25rem" color="salmon"/>
                        </button>
                        
                        </div>
                        
                        <div className="chats" style={{overflowY:"auto", width:"100%", height:"100%", border:"", paddingTop:"1rem"}}>
                            <ChatProfile profile="/coffee.png" user="gbln___" message="Preview" notify={true}/>
                            <ChatProfile profile="/coffee-bag-color.png" user="moozkeen" message="Preview" notify={true}/>
                            <ChatProfile profile="/coffee-bag-color.png" user="Dummy" message="Preview"/>
                            <ChatProfile profile="/coffee-bag-color.png" user="Dummy" message="Preview"/>
                            <ChatProfile profile="/coffee-bag-color.png" user="Dummy" message="Preview"/>
                            <ChatProfile profile="/coffee-bag-color.png" user="Dummy" message="Preview"/>
                            <ChatProfile profile="/coffee-bag-color.png" user="Dummy" message="Preview"/>
                            <ChatProfile profile="/coffee-bag-color.png" user="Dummy" message="Preview"/>
                            <ChatProfile profile="/coffee-bag-color.png" user="Dummy" message="Preview"/>
                            <ChatProfile profile="/coffee-bag-color.png" user="Dummy" message="Preview"/>
                            <ChatProfile profile="/coffee-bag-color.png" user="Dummy" message="Preview"/>
                            <ChatProfile profile="/coffee-bag-color.png" user="Dummy" message="Preview"/>
                        </div>
                    </div>
                </div>
                <div className="chat-window" style={{width:"70%", height:"100%", border:''}}>

                </div>
                
            </div>
            
        </div>
        </>
    )
}