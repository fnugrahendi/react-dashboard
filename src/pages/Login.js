import React, { useRef } from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

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


const Login = ({ login, isLoggingIn, loginErrorMessage }) => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const classes = useStyles();

    const onLogin = () => {
        const emailValue = emailRef.current.value
        const passwordValue = passwordRef.current.value
        login(emailValue, passwordValue)
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Log in
                </Typography>
                <div className={classes.form} noValidate>
                    <TextField
                        inputRef={emailRef}
                        disabled={isLoggingIn}
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
                        disabled={isLoggingIn}
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
                    >Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="#" variant="body2" align="center">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    {
                        isLoggingIn &&  <CircularProgress className={classes.progress} />
                    }
                    <Typography variant="subtitle1" className={classes.textError} gutterBottom>
                        {loginErrorMessage}
                    </Typography>
                </div>
            </div>
        </Container>
    );
}

export default Login