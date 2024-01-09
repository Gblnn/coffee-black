import { Link, useLocation } from "react-router-dom";
import CoffeeBean from "./icons/coffeebean";
import { Coffee, Inbox, Plus, User } from "lucide-react";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "./ui/drawer";
import { useState } from "react";


export default function Navbar() {

    
    const location = useLocation()
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
        <div className="nav-container">

            <nav className="nav"> 
                    
                <Link className={location.pathname=="/feed"?"active nav-item":"nav-item"} to="/feed">  <CoffeeBean fill={location.pathname=="/feed"?accent:"#6a6a6a"} /></Link>
                    
                <Link className={location.pathname=="/brews"?"active nav-item":"nav-item"} to="/brews"><Coffee stroke={location.pathname=="/brews"?accent:"#6a6a6a"}/></Link>


                <button onClick={setDrawer} className={location.pathname=="/liked"?"active nav-item":"create"} ><Plus stroke={location.pathname=="/liked"?accent:"#6a6a6a"} /></button>
         
                <Link className={location.pathname=="/posts"?"active nav-item":"nav-item"} to="/posts"><Inbox stroke={location.pathname=="/posts"?accent:"#6a6a6a"}  /></Link>
                    
                <Link className={location.pathname=="/saved"?"active nav-item":"nav-item"} to="/saved"><User stroke={location.pathname=="/saved"?accent:"#6a6a6a"} /></Link>

            </nav>
            <Drawer open={draweropen}>
                <DrawerContent className="drawer">
                    <DrawerHeader>
                        <DrawerTitle>Create a new post</DrawerTitle>
                        <div style={{height:"45ch"}}></div>
                        <DrawerDescription></DrawerDescription>
                    </DrawerHeader>
                </DrawerContent>
            </Drawer>
            </div>
            
    )
}