import React, { useRef, useContext, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal';
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import { ViewModeEnum, AppContext } from '../AppContext';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    progress: {
        margin: theme.spacing(2),
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    textError: {
        color: "red"
    }
}));


const ResourceForm = ({ isShowModal, setIsShowModal, type }) => {
    const { isFetchingData,
        fetchingDataResult,
        setfetchingDataResult,
        addResource,
        editResource } = useContext(AppContext)


    const nameRef = useRef()
    const jobRef = useRef()
    const classes = useStyles();

    const closeModal = () => {
        setIsShowModal(false)
    }

    useEffect(() => {
        setfetchingDataResult({})
    }, [isShowModal])

    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={isShowModal}
            onClose={closeModal}
        >
            <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", borderRadius: 7 }}>
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Resource Form
                    </Typography>
                    <div className={classes.form} noValidate>
                        <TextField
                            inputRef={nameRef}
                            disabled={isFetchingData}
                            defaultValue="morpheus"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            autoFocus />
                        <TextField
                            inputRef={jobRef}
                            disabled={isFetchingData}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="jpb"
                            label="Job"
                            id="job"
                            defaultValue="leader"
                            autoComplete="job" />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={type == "add" ? addResource : editResource}
                            className={classes.submit}
                        >{type}
                        </Button>
                        {
                            isFetchingData && <CircularProgress className={classes.progress} />
                        }
                        {
                            (!fetchingDataResult.success && fetchingDataResult.message) &&
                            <Typography variant="subtitle1" className={classes.textError} gutterBottom>
                                {fetchingDataResult.message}
                            </Typography>
                        }
                        {
                            (fetchingDataResult.success && fetchingDataResult.message) &&
                            <Typography variant="subtitle1" gutterBottom>
                                {fetchingDataResult.message}
                            </Typography>
                            
                        }
                    </div>
                </div>
            </Container>
        </Modal>
    );
}

export default ResourceForm