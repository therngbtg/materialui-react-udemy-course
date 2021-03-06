import {createMuiTheme} from "@material-ui/core";

const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"
export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
        },
        primary: {
            main: `${arcBlue}`,
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography:{
        tab:{
            textTransform:'none',
            fontSize:'1rem',
        },
        estimate:{
            fontSize:"1rem",
            fontFamily:"Pacifico",
            textTransform:"none",
            color:"white"
        }
    }
});