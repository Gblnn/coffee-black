import { Coffee, Inbox, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import PostActionButton from "./buttons/postactionbutton";
import CoffeeBean from "./icons/coffeebean";


export default function Navbar() {

    
    const location = useLocation()
    const accent = "salmon"
    const user_data = window.name
        

    return(
        <div className="nav-container">

            <nav className="nav"> 
                    
                <Link className={location.pathname=="/feed"?"active nav-item":"nav-item"} to="/feed">  <CoffeeBean fill={location.pathname=="/feed"?accent:"#6a6a6a"} /></Link>
                    
                <Link className={location.pathname=="/brews"?"active nav-item":"nav-item"} to="/brews"><Coffee stroke={location.pathname=="/brews"?accent:"#6a6a6a"}/></Link>


                <PostActionButton userdata={user_data}/>
         
                <Link className={location.pathname=="/posts"?"active nav-item":"nav-item"} to="/posts">
        
                        <Inbox stroke={location.pathname=="/posts"?accent:"#6a6a6a"}  />
                    
                </Link>
                    
                <Link className={location.pathname=="/saved"?"active nav-item":"nav-item"} to="/saved"><User stroke={location.pathname=="/saved"?accent:"#6a6a6a"} /></Link>

            </nav>
            
            </div>
            
    )
}