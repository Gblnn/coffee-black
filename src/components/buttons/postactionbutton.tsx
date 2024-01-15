import { Plus } from "lucide-react";
import { useState } from "react";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "../ui/drawer";


export default function PostActionButton(){
    const accent = "salmon"
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
        <button onClick={setDrawer} className={location.pathname=="/liked"?"active nav-item":"create"} ><Plus stroke={location.pathname=="/liked"?accent:"#6a6a6a"} /></button>
        
        <Drawer open={draweropen}>
            <DrawerContent className="drawer">
                <DrawerHeader>
                    <DrawerTitle>Create a new post</DrawerTitle>
                    <DrawerDescription></DrawerDescription>
                </DrawerHeader>
                <div style={{height:"65svh", border:"", width:"100%", display:"flex", flexFlow:"column",justifyContent:"flex-end", padding:"1.25rem", gap:"1rem"}}>

        </div>
            </DrawerContent>
        </Drawer>
        </>
    )
}