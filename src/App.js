import React from "react";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/Header/NavBar";
import { Content } from "./components/Content/Content";
import { ThemeProvider } from "./components/Theme/ThemeProvider";

import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "./components/logCredits";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    main: {
        marginTop: "auto",
        marginBottom: "auto",
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: "auto",
    },
    fab: {
        margin: theme.spacing(2),
    },
}));

export const App = () => {
    const classes = useStyles();

    logCredits();

    return (
        <ThemeProvider>
            <CssBaseline />
            <div className={classes.root}>
                <NavBar />
                <Content mainClasses={classes.main} />
                <Footer footerClasses={classes.footer} />
            </div>
        </ThemeProvider>
    );
};
