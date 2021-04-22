import { AppBar, Toolbar, IconButton, Typography, Link, Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from "@material-ui/icons/Menu"
import { GoogleLogin } from "react-google-login"

function Header(props)
{
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: {
            flexGrow: 1
        }
    }))

    const classes = useStyles()

    const responseGoogle = (response) => {
        console.log(response)
    }

    return (
        <AppBar position="static" style={{ backgroundColor: props.bg, color: props.textColor }} >
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Temperature
                </Typography>
                <Typography>
                    <GoogleLogin
                        clientId="478269460385-d8cmcem81uqjfcomql3jlal6vc19lgch.apps.googleusercontent.com"
                        cookiePolicy={'single_host_origin'}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                    />
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header