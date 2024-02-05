import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";

import { Home } from "../pages/Home";
import { PageNotFound } from "../pages/PageNotFound";

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
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};
