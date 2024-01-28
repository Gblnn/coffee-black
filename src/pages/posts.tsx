import ChatProfile from "@/components/chat-profile"

export default function Posts(){
    return(
        <>
        <div className="inbox" style={{width:"100svw", height:"100svh", border:""}}>
        
            <div style={{width:"100%", height:"100%", padding:"", border:"", borderRadius:"1rem", background:"var(--semi)", display:"flex"}}>
                <div className="inbox-chats" style={{border:""}}>
                    <div style={{border:"", width:"100%", height:"100%", display:"flex", flexFlow:"column"}}>
                        <h1 style={{fontWeight:"600", fontSize:"1.5rem"}}>Chats</h1>
                        <div className="chats" style={{overflowY:"auto", width:"100%", height:"100%", border:"", paddingTop:"1rem"}}>
                            <ChatProfile profile="/coffee.png" user="gbln___" message="Preview" notify={true}/>
                            <ChatProfile profile="/coffee-bag-color.png" user="moozkeen" message="Preview"/>
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