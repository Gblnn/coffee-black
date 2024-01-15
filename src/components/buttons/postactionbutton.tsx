import { Button, ConfigProvider, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "../ui/drawer";



export default function PostActionButton(){
    const [author, setAuthor] = useState("user")
    const profile = "/coffee.png"
    const date = new Date().toLocaleDateString()
    const accent = "salmon"
    const [draweropen, setDraweropen] = useState(false)
    const [content, setContent] = useState("")
    const [bio, setBio] = useState("")
    // const [colorscheme, setColor] = useState("")
    const [postable, setPostable] = useState(false)
    const [loading, setLoading] = useState(false)
    // const [user, setUser] = useState(window.name)

    //Validation
    useEffect(()=>{
        if(content==""){
            setPostable(false)
        }
        else{
            setPostable(true)
        }
    },[content])

    const setDrawer = () =>{
        if(!draweropen){
            setDraweropen(true)
        }
        else{
            setDraweropen(false)
        }
        
    }

    const Reload = () =>{
        message.loading("Posting")
        setLoading(true)
        setTimeout(()=>{
          setLoading(false)
          window.location.reload()
        },1000)
        
      }

      

      const onPost=()=>{

        
        setAuthor("user")
        
        const obj = {profile, author, content, date, bio}
        
        setLoading(true)
        setTimeout(() => {
            message.loading("Posting")
            fetch("https://6586a271468ef171392e80df.mockapi.io/posts",
            {
                method:"POST",
                headers:{'content-type':'application/json'},
                body:JSON.stringify(obj)
            }
            )
            setLoading(false)
            Reload()
        }, 1000);
        
        
    }
    return(
        <>
        <button onClick={setDrawer} className={location.pathname=="/liked"?"active nav-item":"create"} ><Plus stroke={location.pathname=="/liked"?accent:"#6a6a6a"} /></button>
        
        <Drawer open={draweropen}>
            <DrawerContent className="drawer">
                <DrawerHeader>
                    <DrawerTitle>Create a new post</DrawerTitle>
                    <DrawerDescription></DrawerDescription>
                </DrawerHeader>

                <div style={{overflowY:"auto",height:"35svh", border:"", width:"100%", display:"flex", flexFlow:"column",justifyContent:"flex-start", padding:"1.25rem", gap:"1rem"}}>

                    <TextArea className="comment-input" onChange={e=>setContent(e.target.value)} placeholder="Express your thoughts here" bordered={false} style={{opacity:1,color:"var(--color)",fontFamily:"Clash Grotesk",fontSize:"16px", width:"95%"}}></TextArea>

                </div>

                <div style={{width:"100%", border:"", padding:"2rem", display:"flex", justifyContent:"flex-end",gap:"1rem"}}>

                    <Input onChange={e=>setBio(e.target.value)} className="comment-input" bordered={false} style={{opacity:1,color:"var(--color)",fontFamily:"Clash Grotesk",fontSize:"16px", width:"95%"}} placeholder="Captions (Optional)"></Input>

                <ConfigProvider theme={{token:{ colorBorder:"none", colorBgContainerDisabled:"rgba(100 100 100 / 10%)", colorTextDisabled:"#6a6a6a"}}}>
                
                    <Button type="primary" style={{width:"6rem"}} disabled={!postable} onClick={onPost} loading={loading}>Post</Button>
                    </ConfigProvider>
                </div>
            </DrawerContent>
        </Drawer>
        </>
    )
}