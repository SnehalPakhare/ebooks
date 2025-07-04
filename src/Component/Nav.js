import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeProvider";
import dark from '../icons/dark_mode_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg';
import light from '../icons/light_mode_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg';

function Nav(){
  const{theme,setTheme}=useContext(ThemeContext);
  console.log(theme);
  let themeStyle = {};
  if(theme==='light'){
    themeStyle={
      background:'#DDA0DD',
      color:'yellow'
    }
  }
else
{
  themeStyle={
    background:'#9400D3',
    color:'#FFFFFF'
  }
}
    return(<>
    <header>
<nav className="navbar navbar-expand-sm" style={themeStyle} >
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to ={'/Home'}>Home</NavLink>
      </li>
    
      <li className="nav-item">
 <NavLink to ={'/Contact'}>Contact</NavLink>     
  </li>
   <li className="nav-item">
 <NavLink to ={'/About'}>About</NavLink>      
 </li>
<li className="nav-item">
  <NavLink to ={'/Portfolio'}>Portfolio</NavLink>
</li>
<li className="nav-item">
  <NavLink to ={'/Product'}>Product</NavLink>
</li>
{
  theme === 'light'
    ? <img src={dark} alt="Switch to dark mode" onClick={() => setTheme('dark')} style={{cursor: 'pointer'}} />
    : <img src={light} alt="Switch to light mode" onClick={() => setTheme('light')} style={{cursor: 'pointer'}} />
}
    </ul>
  </div>
</nav>
</header>
<main>
    <Outlet />
</main>
    </>);
}
export default Nav;