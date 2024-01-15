import { MessagesSquare } from "lucide-react"
import { useState } from "react"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "../ui/drawer"
import { Button, ConfigProvider, Input, theme } from "antd"


interface Props {
    comments:string
}

export default function CommentButton(props:Props){
    const [draweropen, setDraweropen] = useState(false)

    const setDrawer = () =>{
        if(!draweropen){
            setDraweropen(true)
        }
        else{
            setDraweropen(false)
        }
        
    }
    return(
        <>
        <div style={{display:"flex", alignItems:"center", gap:"0.25rem"}}>
            <button onClick={setDrawer} className='footer-button'><MessagesSquare style={{marginTop:"0.2rem"}} width='1.25rem' color='#6a6a6a'/></button>
            <p style={{fontSize:"0.9rem", fontWeight:"600", marginTop:"0.2rem"}}>{props.comments}1</p>
        </div>

        <Drawer open={draweropen}>
            <DrawerContent className="drawer">
                <DrawerHeader>
                    <DrawerTitle style={{textAlign:"center"}}>Comments</DrawerTitle>
                    <DrawerDescription>Welcome to the comment section</DrawerDescription>
                </DrawerHeader>
                <div style={{height:"65svh"}}></div>

                <div style={{display:"flex",gap:"1rem", width:"100%",alignItems:"center", justifyContent:"center", padding:"1rem"}}>
                <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
                    <Input placeholder="Add comment" bordered={false} style={{color:"#8a8a8a",fontSize:"16px", width:"90%"}}></Input>
                    <Button type="default">Post</Button>
                </ConfigProvider>
                
                </div>
                
                
                
            </DrawerContent>
        </Drawer>
        </>
    )
}