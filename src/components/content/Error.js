import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: "auto",
        marginBottom: "auto",
        "@media (max-width: 768px)": {
            marginLeft: theme.spacing(4),
        },
    },
}));

export const Error = () => {
    const classes = useStyles();

    return (
        <Container component="main" className={classes.main} maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
                <TextDecrypt text="Error 404"/>
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                <TextDecrypt text="Page not found!" />
            </Typography>
        </Container>
    );
};