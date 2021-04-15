import { AppBar, Toolbar, IconButton, Typography, Link } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from "@material-ui/icons/Menu"

function Header(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }))

    const classes = useStyles()

    return (
        <AppBar position="static" style={{ backgroundColor: props.bg, color: props.textColor }} >
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
                <Typography>
                    <Link href="/login" color="inherit">
                        Login
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;