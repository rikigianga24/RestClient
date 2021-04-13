import { Nav, Navbar } from "react-bootstrap"
import { useLocation } from "react-router-dom"

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
        <Navbar>
            {back}
            <Nav.Link href="/storage">
                <img src="/icons/history.png" alt="history" width="48" height="48" />
            </Nav.Link>
            <Nav className="ms-auto">
                <Nav.Link href="/login">
                    <img src="/icons/login.png" alt="login" width="48" height="48" />
                </Nav.Link>
                <Nav.Link href="/settings">
                    <img src="/icons/settings.png" alt="settings" width="48" height="48" />
                </Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Header;