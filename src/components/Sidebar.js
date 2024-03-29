import React , {useState} from 'react';
import { NavLink } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import './Sidebar.css';


const Sidebar = () => {
    const [sidebar,setSidebar] = useState(false)

    const showSideBar = () => setSidebar(!sidebar)
    return (
        <div>
            <IconContext.Provider value={{color:'#fff'}}>
            <div className="navbar">
                <NavLink to="spinner" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSideBar} />
                </NavLink>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSideBar} >
                    <li className="navbar-toggle">
                        <Link to="/spinner" className='menu-bars'>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {
                        SidebarData.map((item,index)=>{
                            return (
                                <li key={index} className={item.cName} >
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            </IconContext.Provider>
            
        </div>
    );
};

export default Sidebar;