import React, {useEffect, useState} from 'react';
import {
    AppBar,
    Button, IconButton, List, ListItem, ListItemText,
    makeStyles,
    Menu,
    MenuItem,
    Slide, SwipeableDrawer,
    Tab,
    Tabs,
    Toolbar, useMediaQuery,
    useScrollTrigger, useTheme
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.svg';
import {Link} from "react-router-dom";

function HideOnScroll(props) {
    const {children} = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        // target: window ? window() : undefined
    });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '4rem',
        [theme.breakpoints.down('md')]: {
            marginBottom: '3rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '2rem',
        }

    },
    logo: {
        height: '7rem',
        [theme.breakpoints.down('md')]: {
            height: '6rem',
        },
        [theme.breakpoints.down('xs')]: {
            height: '5rem',
        }
    },
    tabContainer: {
        marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px'
    },
    button: {
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
        ...theme.typography.estimate
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white",
        borderRadius: "0px"
    },
    menuItem: {
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },
    drawerIconContainer: {
        marginLeft: 'auto',
        "&hover": {
            backgroundColor: "transparent"
        }
    },
    drawer: {
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
        ...theme.typography.tab,
        color: 'white',
        opacity: 0.7,
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange,
    },
    drawerItemSelected: {
        "& .MuiListItemText-root": {
            opacity: 1,
        }

    },
    appbar: {
        zIndex: theme.zIndex.modal + 1
    }


}));
export default function Header(props) {
    const classes = useStyles()
    const themes = useTheme()
    const matches = useMediaQuery(themes.breakpoints.down("md"))
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectIndex, setSelectIndex] = useState(0);
    const [openDrawer, setOpenDrawer] = useState(false);


    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpenMenu(true)
    }
    const handleClose = (e) => {
        setAnchorEl(null)
        setOpenMenu(false)
    }

    const handleChange = (e, value) => {
        setValue(value);
    }
    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        setSelectIndex(i);
    }
    const menuOptions = [
        {name: "Services", link: "/services", activeIndex: 1, selectIndex: 0},
        {name: "Custom software Development", link: "/customerSoftware", activeIndex: 1, selectIndex: 1},
        {name: "Mobile App Development", link: "/mobileApps", activeIndex: 1, selectIndex: 2},
        {name: "Website Development", link: "/website", activeIndex: 1, selectIndex: 3}
    ]
    const routes = [
        {name: "Home", link: "/", activeIndex: 0},
        {
            name: "Service",
            link: "/services",
            activeIndex: 1,
            ariaOwns: anchorEl ? "simple-menu" : undefined,
            ariaHaspopup: anchorEl ? "true" : undefined,
            onMouseOver: e => handleClick(e)
        },
        {name: "The revolution", link: "/revolution", activeIndex: 2},
        {name: "About us", link: "/about", activeIndex: 3},
        {name: "Contact", link: "/contact", activeIndex: 4},
    ]

    useEffect(() => {
        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (value !== route.activeIndex) {
                        setValue(route.activeIndex)
                        if (route.selectIndex && route.selectIndex !== selectIndex) {
                            setSelectIndex(route.selectIndex)
                        }
                    }
                    break;
                default:
                    break;
            }
        })

        // if (window.location.pathname === "/" && value !== 0) {
        //     setValue(0)
        // } else if (window.location.pathname === "/services" && value !== 1) {
        //     setValue(1)
        // } else if (window.location.pathname === "/revolution" && value !== 2) {
        //     setValue(2)
        // } else if (window.location.pathname === "/about" && value !== 3) {
        //     setValue(3)
        // } else if (window.location.pathname === "/contact" && value !== 4) {
        //     setValue(4)
        // } else if (window.location.pathname === "/estimate" && value !== 5) {
        //     setValue(5)
        // }

        // switch (window.location.pathname) {
        //     case "/":
        //         if (value !== 0) {
        //             setValue(0)
        //         }
        //         break;
        //     case "/services":
        //         if (value !== 1) {
        //             setValue(1)
        //             setSelectIndex(0)
        //         }
        //         break;
        //     case "/customerSoftware":
        //         if (value !== 1) {
        //             setValue(1)
        //             setSelectIndex(1)
        //         }
        //         break;
        //     case "/mobileApps":
        //         if (value !== 1) {
        //             setValue(1)
        //             setSelectIndex(2)
        //         }
        //         break;
        //     case "/website":
        //         if (value !== 1) {
        //             setValue(1)
        //             setSelectIndex(3)
        //         }
        //         break;
        //     case "/revolution":
        //         if (value !== 2) {
        //             setValue(2)
        //         }
        //         break;
        //     case "/about":
        //         if (value !== 3) {
        //             setValue(3)
        //         }
        //         break;
        //     case "/contact":
        //         if (value !== 4) {
        //             setValue(4)
        //         }
        //         break;
        //     case "/estimate":
        //         if (value !== 5) {
        //             setValue(5)
        //         }
        //         break;
        //     default:
        //         break;
        // }
    }, [value, menuOptions, selectIndex, routes]);

    const tabs =
        (<React.Fragment>
            <Tabs
                value={value}
                className={classes.tabContainer}
                onChange={handleChange}
                indicatorColor={"primary"}
            >
                {routes.map((route, index) => (
                    <Tab
                        key={`${route}${index}`}
                        className={classes.tab}
                        component={Link}
                        to={route.link}
                        label={route.name}
                        aria-owns={route.ariaOwns}
                        aria-haspopup={route.ariaHaspopup}
                        onMouseOver={route.onMouseOver}
                    />
                ))}
                {/*<Tab*/}
                {/*    className={classes.tab}*/}
                {/*    component={Link}*/}
                {/*    to={'/'}*/}
                {/*    label={'Home'}/>*/}
                {/*<Tab*/}
                {/*    aria-owns={anchorEl ? "simple-menu" : undefined}*/}
                {/*    aria-haspopup={anchorEl ? "true" : undefined}*/}
                {/*    onMouseOver={(e) => handleClick(e)}*/}
                {/*    className={classes.tab}*/}
                {/*    component={Link}*/}
                {/*    to={'/services'}*/}
                {/*    label={'Services'}/>*/}
                {/*<Tab*/}
                {/*    className={classes.tab}*/}
                {/*    component={Link}*/}
                {/*    to={'/revolution'}*/}
                {/*    label={'The Revolution'}/>*/}
                {/*<Tab*/}
                {/*    className={classes.tab}*/}
                {/*    component={Link}*/}
                {/*    to={'/about'}*/}
                {/*    label={'About us'}/>*/}
                {/*<Tab*/}
                {/*    className={classes.tab}*/}
                {/*    to={'/contact'}*/}
                {/*    component={Link}*/}
                {/*    label={'Contact us'}/>*/}
            </Tabs>
            <Button
                variant={'contained'}
                color={'secondary'}
                className={classes.button}
                component={Link}
                to={'estimate'}
            >Free Estimate
            </Button>
            <Menu
                id={"simple-menu"}
                anchorEl={anchorEl}
                open={openMenu}
                classes={{paper: classes.menu}}
                onClose={handleClose}
                MenuListProps={{onMouseLeave: handleClose}}
                elevation={0}
                style={{zIndex: 1302}}
                keepMounted
            >
                {
                    menuOptions.map((option, index) => (
                        <MenuItem
                            key={`${option}${index}`}
                            classes={{
                                root: classes.menuItem
                            }}
                            onClck={(event) => {
                                handleClose();
                                setValue(1);
                                handleMenuItemClick(event, index)
                            }}
                            selected={
                                index === selectIndex && value === 1
                            }
                            component={Link}
                            to={option.link}
                        >
                            {option.name}
                        </MenuItem>
                    ))
                }
            </Menu>
        </React.Fragment>)

    const drawers = (
        <React.Fragment>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onOpen={() => setOpenDrawer(true)}
                onClose={() => setOpenDrawer(false)}
                classes={{paper: classes.drawer}}
            >
                <div className={classes.toolbarMargin}/>
                <List disablePadding={true}
                >
                    {routes.map((route, index) => (
                        <ListItem
                            key={`${route}${route.activeIndex}`}
                            divider
                            button
                            component={Link}
                            to={route.link}
                            selected={value === route.activeIndex}
                            classes={{selected: classes.drawerItemSelected}}
                            onClick={() => {
                                setOpenDrawer(false)
                                setValue(route.activeIndex)
                            }}
                        >
                            <ListItemText
                                disableTypography
                                className={classes.drawerItem}
                                // className={value === route.activeIndex ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
                            >{route.name}</ListItemText>
                        </ListItem>
                    ))}
                    {/*    <ListItem*/}
                    {/*        divider*/}
                    {/*        button*/}
                    {/*        component={Link}*/}
                    {/*        to={'/'}*/}
                    {/*        onClick={() => {*/}
                    {/*            setOpenDrawer(false)*/}
                    {/*            setValue(0)*/}
                    {/*        }}*/}
                    {/*        selected={value === 0}*/}
                    {/*    >*/}
                    {/*        <ListItemText*/}
                    {/*            className={value === 0 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}*/}
                    {/*        >*/}
                    {/*            Home*/}
                    {/*        </ListItemText>*/}
                    {/*    </ListItem>*/}
                    {/*    <ListItem*/}
                    {/*        divider*/}
                    {/*        button*/}
                    {/*        component={Link}*/}
                    {/*        to={'/services'}*/}
                    {/*        onClick={() => {*/}
                    {/*            setOpenDrawer(false)*/}
                    {/*            setValue(1)*/}
                    {/*        }}*/}
                    {/*        selected={value === 1}*/}
                    {/*    >*/}
                    {/*        <ListItemText*/}
                    {/*            className={value === 1 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}*/}
                    {/*        >*/}
                    {/*            Services*/}
                    {/*        </ListItemText>*/}
                    {/*    </ListItem>*/}
                    {/*    <ListItem*/}
                    {/*        divider*/}
                    {/*        button*/}
                    {/*        component={Link}*/}
                    {/*        to={'/revolution'}*/}
                    {/*        onClick={() => {*/}
                    {/*            setOpenDrawer(false)*/}
                    {/*            setValue(2)*/}
                    {/*        }}*/}
                    {/*        selected={value === 2}*/}
                    {/*    >*/}
                    {/*        <ListItemText*/}
                    {/*            className={value === 2 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}*/}
                    {/*        >*/}
                    {/*            The Revolution*/}
                    {/*        </ListItemText>*/}
                    {/*    </ListItem><ListItem*/}
                    {/*    divider*/}
                    {/*    button*/}
                    {/*    component={Link}*/}
                    {/*    to={'/about'}*/}
                    {/*    onClick={() => {*/}
                    {/*        setOpenDrawer(false)*/}
                    {/*        setValue(3)*/}
                    {/*    }}*/}
                    {/*    selected={value === 3}*/}
                    {/*>*/}
                    {/*    <ListItemText*/}
                    {/*        className={value === 3 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}*/}
                    {/*    >*/}
                    {/*        About*/}
                    {/*    </ListItemText>*/}
                    {/*</ListItem>*/}
                    {/*<ListItem*/}
                    {/*    divider*/}
                    {/*    button*/}
                    {/*    component={Link}*/}
                    {/*    to={'/contact'}*/}
                    {/*    onClick={() => {*/}
                    {/*        setOpenDrawer(false)*/}
                    {/*        setValue(4)*/}
                    {/*    }}*/}
                    {/*    selected={value === 4}*/}
                    {/*>*/}
                    {/*    <ListItemText*/}
                    {/*        className={value === 4 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}*/}
                    {/*    >*/}
                    {/*        Contact*/}
                    {/*    </ListItemText>*/}
                    {/*</ListItem>*/}
                    <ListItem
                        divider
                        button
                        component={Link}
                        to={'/estimate'}
                        classes={{
                            root: classes.drawerItemEstimate,
                            selected: classes.drawerItemSelected
                        }}
                        onClick={() => {
                            setOpenDrawer(false)
                            setValue(5)
                        }}
                        selected={value === 5}
                    >
                        <ListItemText
                            className={classes.drawerItem}
                            // className={value === 5 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
                        >
                            Estimate
                        </ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton
                className={classes.drawerIconContainer}
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple
            >
                <MenuIcon

                />
            </IconButton>
        </React.Fragment>
    )


    return (
        <React.Fragment>
            <HideOnScroll {...props}>
                <AppBar
                    position={'fixed'}
                    className={classes.appbar}
                >
                    <Toolbar disableGutters={true}>
                        <Button
                            component={Link}
                            to={'/'}

                            disableRipple={true}
                            className={classes.logoContainer}
                            onClick={() => setValue(0)}
                        >
                            <img className={classes.logo} src={logo} alt="logo"/>
                        </Button>
                        {
                            matches ? drawers : tabs
                        }
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <div className={classes.toolbarMargin}/>
        </React.Fragment>
    );
};


