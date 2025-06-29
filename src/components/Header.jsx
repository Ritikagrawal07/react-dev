import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
const Header = () => {
    const[btnNamereact,setbtnNamereact] = useState("login");

    return(
        <div className = "header">
            <div className="logo-Container">
             <img 
             className="logo" alt ="logo-url"
             src = {LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    
                      <li>
                <button 
             className="login" 
             onClick = {
              () => {
                btnNamereact === "login" ? setbtnNamereact("logut"):setbtnNamereact("login")}
              }>
                {btnNamereact}
                </button>
                </li>
                    
                </ul>
               
            </div>
        </div>
    )
}


export default Header;


export default Header;
