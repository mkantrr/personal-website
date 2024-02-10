import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@material-ui/lab";
import Resume from "../../settings/resume.json";

const useStyles = makeStyles((theme) => ({
    speedDial: {
        position: "absolute",
        top: theme.spacing(6),
        right: theme.spacing(6),
    },
    iconColor: {
        color: theme.palette.foreground.default,
    },
}));

export const SpeedDials = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const actionIcons = Resume.basics.profiles.map((action) => (
        <SpeedDialAction
            key={action.network.toLowerCase()}
            icon={<i className={`${action.x_icon} ${classes.iconColor}`}></i>}
            tooltipTitle={action.network}
            onClick={handleClose}
            href={action.url}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            color="inherit"
        />
    ));

    const portfolioActionIcons = Resume.basics.menuIcons.map((action) => (
        <SpeedDialAction
            key={action.network.toLowerCase()}
            icon={<i className={`${action.x_icon} ${classes.iconColor}`}></i>}
            tooltipTitle={action.network}
            onClick={handleClose}
            href={action.url}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            color="inherit"
        />
    ));

    return (
        <>
            {window.location.pathname === '/portfolio' && (
                <SpeedDial
                    ariaLabel="SpeedDial"
                    className={classes.speedDial}
                    hidden={false}
                    icon={<SpeedDialIcon />}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    open={open}
                    direction="down"
                >
                    <SpeedDialAction
                        key='portfolio'
                        icon={<i className={`fas fa-folder-open ${classes.iconColor}`}></i>}
                        tooltipTitle='Portfolio'
                        onClick={handleClose}
                        href='/portfolio'
                        rel="noopener noreferrer"
                        underline="none"
                        color="inherit"
                    />
                    {portfolioActionIcons}
                </SpeedDial>
            )}
            {window.location.pathname !== '/portfolio' && (
                <SpeedDial
                    ariaLabel="SpeedDial"
                    className={classes.speedDial}
                    hidden={false}
                    icon={<SpeedDialIcon />}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    open={open}
                    direction="down"
                >
                    <SpeedDialAction
                        key='portfolio'
                        icon={<i className={`fas fa-folder-open ${classes.iconColor}`}></i>}
                        tooltipTitle='Portfolio'
                        onClick={handleClose}
                        href='/portfolio'
                        rel="noopener noreferrer"
                        underline="none"
                        color="inherit"
                    />
                    {actionIcons}
                </SpeedDial>
            )}
        </>
    );
};
