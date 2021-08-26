import './App.css';
import Header from "./components/ui/Header";
import {ThemeProvider} from "@material-ui/core";
import React from "react";
import theme from "./components/ui/Theme";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from "./components/ui/Footer";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path={'/'} component={() => <div
                    style={{height:"2000px"}}
                    >Home</div>}/>
                    <Route exact path={'/services'} component={() => <div>Service</div>}/>
                    <Route exact path={'/customerSoftware'} component={() => <div>customerSoftware</div>}/>
                    <Route exact path={'/mobileApps'} component={() => <div>mobileApps</div>}/>
                    <Route exact path={'/website'} component={() => <div>website</div>}/>
                    <Route exact path={'/revolution'} component={() => <div>revolution</div>}/>
                    <Route exact path={'/about'} component={() => <div>about</div>}/>
                    <Route exact path={'/contact'} component={() => <div>contact</div>}/>
                    <Route exact path={'/estimate'} component={() => <div>estimate</div>}/>
                </Switch>
                <Footer/>
            </Router>
        </ThemeProvider>
    );
}

export default App;
