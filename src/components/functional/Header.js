import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

function Header (props)
{
    return (
        <AppBar position="static" style={{backgroundColor: props.bg, color: props.textColor}} >
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    Temperature
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;