import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: "10px"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        // backgroundColor: "red"
    },
    difficulty: {
        backgroundColor: "red",
        borderRadius: 4

    },
    exercise: {
        marginBottom: 15,
        borderRadius: 4,
        boxShadow: "10px"
    },
}));

export default function SimpleExpansionPanel() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ExpansionPanel className={classes.exercise}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.difficulty}
                >
                    <Typography className={classes.heading}>Exercise 1</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Sets: 4
                        Reps: 8, 8, 10, 12
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel className={classes.exercise}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.difficulty}
                >
                    <Typography className={classes.heading}>Exercise 2</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Sets: 3
                        Reps: 8, 10, 12
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel className={classes.exercise}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.difficulty}
                >
                    <Typography className={classes.heading}>Exercise 3</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Sets: 3
                        Reps: 12, 12, 12
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}