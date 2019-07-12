import React, { useContext, useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { AppContext } from '../AppContext'

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
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

const ResourceList = () => {
    const { resources, getResources } = useContext(AppContext)
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    useEffect(() => {
        getResources()
    }, [])

    return (
        <Paper className={fixedHeightPaper}>
            Resource List
            <Table className={classes.table}>
                <TableHead>
                <TableRow>
                    <TableCell>No</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Year</TableCell>
                    <TableCell align="center">Color</TableCell>
                    <TableCell align="center">Pantone Value</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        resources.map((row, id) => (
                            <TableRow key={row.name}>
                                <TableCell align="left">{id + 1}</TableCell>
                                <TableCell align="center" component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.year}</TableCell>
                                <TableCell align="center">{row.color}</TableCell>
                                <TableCell align="center">{row.pantone_value}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </Paper>
    )
}

export default ResourceList