import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import { ListItem, ListItemIcon, ListItemText, Button } from '@material-ui/core';
import BuildSharpIcon from '@material-ui/icons/BuildSharp';
import PhoneSharpIcon from '@material-ui/icons/PhoneSharp';
import Link from 'next/link';
import { GAEvent, GAEventCat, GAEventAction } from '../Utils/Tracking';


const useStyles = makeStyles((theme) => ({
    mainNavStyle: {
        marginBottom: '63px',
    },
    flexStyle: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'
    },
    menuButton: {
        marginRight: theme.spacing(0),
        border: 'none',
        outline: 'none',
        "&:focus": {
            outline: 'none'
        }
    },
    titleLinkStyle: {
        color: 'white',
        textDecoration: 'none',
        cursor: 'pointer',
        "&:hover": {
            color: 'white',
            textDecoration: 'none',
            cursor: 'pointer',
        }
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    ListItem: {
        minWidth: '190px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ListIcon: {
        minWidth: '0'
    },
    ListText: {
        textAlign: 'right'
    }
}));

function NavigationBar() {
    const classes = useStyles();
    const [isDrawerOpen, setOpen] = React.useState(false);

    const toggleDrawer = booleanValue => () => {
        if (booleanValue)
            GAEvent(GAEventCat.NAVIGATION_BAR, GAEventAction.OPEN_HAMBURGER_MENU)
        else
            GAEvent(GAEventCat.NAVIGATION_BAR, GAEventAction.CLOSE_HAMBURGER_MENU)

        setOpen(booleanValue);
    };

    return (
        <nav className={classes.mainNavStyle}>
            <AppBar id="AppBar" position="fixed">
                <Toolbar id="Toolbar" className={classes.flexStyle}>
                    <IconButton
                        id="IconButton"
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Link href="/">
                        <Typography component="h1" variant="h6" className={classes.titleLinkStyle} onClick={() => GAEvent(GAEventCat.NAVIGATION_BAR, GAEventAction.HEADER_LINK_CLICKED)}>השכרת כלי עבודה</Typography>
                    </Link>

                </Toolbar>
            </AppBar>

            <Drawer
                variant='temporary'
                anchor='left'
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader} onClick={toggleDrawer(false)}>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <Divider />

                <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>

                    <Link href="/">
                        <ListItem button className={classes.ListItem} onClick={() => GAEvent(GAEventCat.NAVIGATION_BAR, GAEventAction.ITEM_CLICKED, "השכרת כלי עבודה")}>
                            <ListItemText primary='השכרת כלי עבודה' className={classes.ListText} />
                            <ListItemIcon className={classes.ListIcon}>
                                <BuildSharpIcon />
                            </ListItemIcon>
                        </ListItem>
                    </Link>

                    <Link href="/contact">
                        <ListItem button className={classes.ListItem} onClick={() => GAEvent(GAEventCat.NAVIGATION_BAR, GAEventAction.ITEM_CLICKED, "צור קשר")}>
                            <ListItemText primary='צור קשר' className={classes.ListText} />
                            <ListItemIcon className={classes.ListIcon}>
                                <PhoneSharpIcon />
                            </ListItemIcon>
                        </ListItem>
                    </Link>

                </List>
            </Drawer>

        </nav>
    );
}

export default NavigationBar;