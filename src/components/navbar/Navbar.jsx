import "./navbar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext.jsx";
import { useContext } from "react";


const Navbar = () =>{

    const { toggle } = useContext(DarkModeContext);
    return(
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{ textDecoration: "none"}}>
                <span>BookSocial</span>
                </Link>
                <HomeOutlinedIcon />
                <DarkModeOutlinedIcon onClick={ toggle }/>
                <GridViewOutlinedIcon />
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="right">
                <PersonOutlineOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className="user">
                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" alt="" />
                    <span>Babis Vovos</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;