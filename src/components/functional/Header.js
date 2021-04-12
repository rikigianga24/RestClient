import { Nav, Navbar } from "react-bootstrap"

function Header (props)
{
    return (
        <Navbar>
            <Nav className="ms-auto">
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Header;