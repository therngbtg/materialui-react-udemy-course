import React from 'react';
import {makeStyles} from "@material-ui/styles";
import footerAdornment from '../../assets/Footer Adornment.svg'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex:1302,
        position:"relative"
    },
    adornment: {
        width: "25rem",
        verticalAlign: "bottom",
        [theme.breakpoints.down('md')]: {
            width: "21rem"
        },
        [theme.breakpoints.down('xs')]: {
            width: "15rem"
        },
    }
}))
const Footer = () => {
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <img
                className={classes.adornment}
                src={footerAdornment}
                alt="black decoration slash"/>
        </footer>
    );
};

export default Footer;
