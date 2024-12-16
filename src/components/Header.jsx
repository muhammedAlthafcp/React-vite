import { URL_LOGO } from "../utils/constants";
import { useState ,useEffect } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [loignReact,SetloginReact] = useState("login")

  useEffect(()=>{
    console.log("hellp");
    
  })
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={ URL_LOGO }
          alt="Header Logo"
          className="logo"
        />
      </div>
      <nav className="nav">
        <ul className="nav-items">
          <li><Link to="/">Home</Link></li>
          <li><Link to='/about'></Link> About</li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Cart</a></li>
          <button className="Login" onClick={()=>{
            if(loignReact === "login"){
              SetloginReact("logout") 
            }else if(loignReact=== "logout"){
              SetloginReact("login")
            }


            
          
          }}>{loignReact}</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header