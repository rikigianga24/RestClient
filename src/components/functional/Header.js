import { Navbar } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import { AppBar, Toolbar, IconButton } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

function Header ()
{
    let back = null
    if (useLocation().pathname !== "/")
    {
        back = <Navbar.Brand href="/">
            <img src="/icons/back.png" alt="back" width="48" height="48" />
        </Navbar.Brand>
    }

    return (
        <AppBar position="static" style={{backgroundColor: '#121212'}} >
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;