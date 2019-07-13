import React, { useRef } from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import { ViewModeEnum } from '../AppContext';

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


const Registration = ({ register, isRegistering, registerMessage, changeViewMode }) => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const classes = useStyles();

    const onLogin = () => {
        const emailValue = emailRef.current.value
        const passwordValue = passwordRef.current.value
        register(emailValue, passwordValue)
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Registration
                </Typography>
                <div className={classes.form} noValidate>
                    <TextField
                        inputRef={emailRef}
                        disabled={isRegistering}
                        defaultValue="eve.holt@reqres.in"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus />
                    <TextField
                        inputRef={passwordRef}
                        disabled={isRegistering}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        defaultValue="cityslicka"
                        autoComplete="current-password" />
                    <Button
                        fullWidth
                        onClick={onLogin}
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >Register
                    </Button>
                    {
                        isRegistering &&  <CircularProgress className={classes.progress} />
                    }
                    {
                        (!registerMessage.success && registerMessage.message) &&
                        <Typography variant="subtitle1" className={classes.textError} gutterBottom>
                            {registerMessage.message}
                        </Typography>
                    }
                    {
                        (registerMessage.success && registerMessage.message) &&
                        <React.Fragment>
                            <Typography variant="subtitle1" gutterBottom>
                                {registerMessage.message}
                            </Typography>
                            <Button color="default" onClick={() => changeViewMode(ViewModeEnum.MAIN)}>Back to Login</Button>
                        </React.Fragment>
                    }
                </div>
            </div>
        </Container>
    );
}

export default Registration