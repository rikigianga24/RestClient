import { Button, Nav, Navbar } from "react-bootstrap"

function Header (props)
{
    return (
        <Navbar className="p-2" style={{backgroundColor: props.darkMode.navbarBg}}>
            <Nav className="ms-auto">
                  <Nav.Item>
                  <Nav.Link href="/add">Inserisci nuove temperature</Nav.Link>
                  </Nav.Item> 
                  <Nav.Item>
                  <Nav.Link href="/update">Aggiorna le temperature</Nav.Link>
                  </Nav.Item> 
          
                <Button variant="" onClick={props.activeDarkMode}>
                    <svg width="32" height="32" viewBox="0 0 16 16" fill={props.darkMode.iconFill}>
                        {props.darkMode.icon}
                    </svg>
                </Button>
        
            </Nav>
        </Navbar>
    );
}

export default Header;