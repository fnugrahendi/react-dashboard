import React, { useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../AppContext'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    profil: {
        margin: '10px 10px',
    },
    avatar: {
        borderRadius: '50%',
        maxWidth: '60px',
    },
    name: {
        fontSize: '14px',
        marginBottom: 0,
        textAlign: 'left',
        fontWeight: 600,
        color: '#636363',
    },
    email: {
        fontSize: '12px',
        marginTop: '0',
        color: '#636363',
        textAlign: 'left',
    },
}))

const UserGrid = (props) => {
    const { users, getUsers } = useContext(AppContext)
    const classes = useStyles()
    useEffect(() => {
        getUsers()
    }, [users.length])

    return (
        <Grid container>
            {
                users && users.map((user, id) => {
                    return (
                        <Grid className={classes.profil} item xs={4} key={`user_${id}`}>
                            <Grid container>
                                <Grid item xs={4}>
                                    <img className={classes.avatar} src={user.avatar ? user.avatar : undefined} alt="avatar"/>
                                </Grid>
                                <Grid item xs={8}>
                                    <p className={classes.name}>{user['first_name']} {user['last_name']}</p>
                                    <p className={classes.email}>{user.email}</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default UserGrid