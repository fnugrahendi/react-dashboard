import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ResourceList from '../components/ResourceList'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

const Main = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <div>
            <Grid item >
              <Paper className={fixedHeightPaper}>
                <ResourceList />
              </Paper>
            </Grid>
        </div>
    )
}

export default Main