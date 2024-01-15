import { Button, ConfigProvider, Input, Select, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { PlusSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "../ui/drawer";

interface Props{
    userdata:string
}

export default function PostActionButton(props:Props){
    let [author, setAuthor] = useState("")
    const profile = "/coffee.png"
    const date = new Date().toLocaleDateString()
    const accent = "salmon"
    const [draweropen, setDraweropen] = useState(false)
    const [content, setContent] = useState("")
    const [bio, setBio] = useState("")
    const [colorscheme, setColor] = useState("")
    const [postable, setPostable] = useState(false)
    const [loading, setLoading] = useState(false)
    // const [user, setUser] = useState(window.name)
    const [rejected, setRejected] = useState(false)

    //Validation
    useEffect(()=>{
        if(content==""){
            setPostable(false)
        }
        else{
            setPostable(true)
        }
    },[content])

    //censorship
    useEffect(()=>{
        if(content.includes("kissing")||content.includes("Making out")){
            setRejected(true)
        }
        else{
            setRejected(false)
        }

        if(bio.includes("kissing")||content.includes("Making out")){
            setRejected(true)
        }
        else{
            setRejected(false)
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

        
        author = props.userdata
        
        const obj = {profile, author, content, colorscheme, date, bio}
        
        setLoading(true)
        setTimeout(() => {
            if(rejected){
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
            }
            else{
                message.error("Posting failed")
                setLoading(false)
            }
            
        }, 1000);
        
        
    }
    return(
        <>
        <button onClick={setDrawer} className={location.pathname=="/liked"?"active nav-item":"create"} ><PlusSquare stroke={location.pathname=="/liked"?accent:"#6a6a6a"} /></button>
        
        <Drawer open={draweropen}>
            <DrawerContent className="drawer">
                <DrawerHeader>
                    <DrawerTitle>Create a new post</DrawerTitle>
                    <DrawerDescription></DrawerDescription>
                </DrawerHeader>

                <div style={{overflowY:"auto",height:"35svh", border:"", width:"100%", display:"flex", flexFlow:"column",justifyContent:"flex-start", padding:"1.25rem", gap:"1rem"}}>

                    <div style={{display:"flex"}}>
                    <Input disabled value={props.userdata} onChange={e=>setAuthor(e.target.value)} style={{fontWeight:700, color:"#6a6a6a", fontFamily:"Clash Grotesk", fontSize:"1rem"}} bordered={false} placeholder="How you'll appear"/>
                    
                    <Select
                        defaultValue="white"
                        bordered={false}
                        style={{ width: 150, marginLeft:"1rem", fontSize:"16px", color:"#6a6a6a", zIndex:"10" }}
                        onChange={setColor}
                        options={[
                            { value: 'white', label: 'White' },
                            { value: 'black', label: 'Dark' },
                            { value: 'sad', label: 'Night' },
                            { value: 'royal', label: 'Neon' },
                            { value: 'pink', label: 'Pink' },
                            { value: 'sky', label: 'Sky' },
                            { value: 'coffee', label: 'Coffee' }
                        ]}
                        />
                    </div>
                    

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