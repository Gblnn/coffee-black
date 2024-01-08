import { Link, useLocation } from "react-router-dom";
import CoffeeBean from "./icons/coffeebean";
import { Coffee, MessageSquareDot, Plus, User } from "lucide-react";
import Dropdown from "./dropdown";


export default function Navbar() {

    const location = useLocation()
    const accent = "salmon"

    

    return(
        <div className="nav-container">
                <nav className="nav"> 
                    
                        <Link className={location.pathname=="/feed"?"active nav-item":"nav-item"} to="/feed"><CoffeeBean fill={location.pathname=="/feed"?accent:"#8a8a8a"}/></Link>
                    
                        <Link className={location.pathname=="/brews"?"active nav-item":"nav-item"} to="/brews"><Coffee stroke={location.pathname=="/brews"?accent:"#8a8a8a"}/></Link>
                    
                        <Link className={location.pathname=="/liked"?"active nav-item":"nav-item"} to="/liked"><Plus stroke={location.pathname=="/liked"?accent:"#8a8a8a"} /></Link>
         
                        <Link className={location.pathname=="/posts"?"active nav-item":"nav-item"} to="/posts"><MessageSquareDot stroke={location.pathname=="/posts"?accent:"#8a8a8a"}  /></Link>
                    
                        <Link className={location.pathname=="/saved"?"active nav-item":"nav-item"} to="/saved"><User stroke={location.pathname=="/saved"?accent:"#8a8a8a"} /></Link>

                        <Dropdown title="Account" item1="View Profile" item2="Logout"/>
                    
                   
                    
                </nav>
            </div>
    )
}