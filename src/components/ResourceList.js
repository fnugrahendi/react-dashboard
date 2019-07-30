import React, { useContext, useEffect, useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { AppContext } from '../AppContext'
import ResourceForm from './ResourceForm';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    button: {
        margin: theme.spacing(1),
        width: 75
    },
    table: {
        minWidth: 650,
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
    fixedHeight: {
        height: 400,
    },
    fab: {
        margin: theme.spacing(1),
        width: 35,
        height: 35,
    },
}));

const ResourceList = () => {
    const [isShowModal, setIsShowModal] = React.useState(false);
    const { resources, getResources, deleteResource } = useContext(AppContext)
    const [formType, setFormType] = useState("add")
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const openModal = (type) => {
        setFormType(type)
        setIsShowModal(true)
    }

    const onDelete = (id) => {
        deleteResource(id)
    }

    useEffect(() => {
        getResources()
    }, [])

    return (
        <React.Fragment>
            <Paper className={fixedHeightPaper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Year</TableCell>
                            <TableCell align="center">Color</TableCell>
                            <TableCell align="center">Pantone Value</TableCell>
                            <TableCell align="center">Actions</TableCell>
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
                                    <TableCell align="center">
                                        <Fab color="primary" aria-label="Add" className={classes.fab} onClick={() => openModal("edit")}>
                                            <EditIcon style={{ width: 18 }} />
                                        </Fab>
                                        <Fab color="secondary" aria-label="Edit" className={classes.fab} onClick={() => onDelete(id)}>
                                            <DeleteIcon style={{ width: 18 }} />
                                        </Fab>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
                <Button onClick={() => openModal("add")} variant="contained" color="primary" className={classes.button}>
                    <AddIcon style={{ marginRight: 3 }} />
                    Add
                </Button>
            </Paper>
            <ResourceForm isShowModal={isShowModal} setIsShowModal={setIsShowModal} type={formType} />
        </React.Fragment>
    )
}

export default ResourceList