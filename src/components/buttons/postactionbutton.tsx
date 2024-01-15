import { Button, ConfigProvider, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "../ui/drawer";


export default function PostActionButton(){
    const accent = "salmon"
    const [draweropen, setDraweropen] = useState(false)
    const [post, setPost] = useState("")
    const [postable, setPostable] = useState(false)
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(window.name)

    //Validation
    useEffect(()=>{
        if(post==""){
            setPostable(false)
        }
        else{
            setPostable(true)
        }
    },[post])

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

      

    const onPost = () => {
    if(user==""){
        setUser("user")
    }
    
        Reload()
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
                <TextArea className="comment-input" onChange={e=>setPost(e.target.value)} placeholder="Express your thoughts here" bordered={false} style={{opacity:1,color:"var(--color)",fontFamily:"Clash Grotesk",fontSize:"16px", width:"95%"}}></TextArea>
                </div>
                <div style={{width:"100%", border:"", padding:"2rem", display:"flex", justifyContent:"flex-end"}}>
                <ConfigProvider theme={{token:{ colorBorder:"none", colorBgContainerDisabled:"rgba(100 100 100 / 10%)", colorTextDisabled:"#6a6a6a"}}}>
                    <Button type="primary" style={{}} disabled={!postable} onClick={onPost} loading={loading}>Post</Button>
                    </ConfigProvider>
                </div>
            </DrawerContent>
        </Drawer>
        </>
    )
}