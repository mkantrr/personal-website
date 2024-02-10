import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";

import { Home } from "../pages/Home";
import { Portfolio } from "../pages/Portfolio";
import { Career } from "../pages/Career";
import { Projects } from "../pages/Projects";
import { Credits } from "../pages/Credits";
import { PageNotFound } from "../pages/PageNotFound";
//import { ProjectPage } from "../pages/ProjectPage"

export const App = () => {
    logCredits();

    return (
        <ThemeProvider>
            <CssBaseline />
            <Router>
                <HelmetMeta />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/github" component={() =>{
                        window.location.href = "https://github.com/mkantrr";
                        return null;
                    }} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path='/portfolio/career' component={Career} />
                    <Route path='/portfolio/projects' component={Projects} />
                    <Route path='/portfolio/credits' component={Credits} />
                    <Route path='/credits' component={Credits} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};
