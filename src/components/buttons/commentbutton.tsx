import { MessagesSquare } from "lucide-react"
import { useState } from "react"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "../ui/drawer"


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
                
                
            </DrawerContent>
        </Drawer>
        </>
    )
}