import { Button, Nav, Navbar } from "react-bootstrap"

function Header (props)
{
    return (
        <div className="p-2" style={{backgroundColor: props.darkMode.navbarBg}}>
            <Button onClick={props.activeDarkMode}>{props.darkMode.text}</Button>
            <Nav className="ms-auto">

            </Nav>
        </div>
    );
}

export default Header;