import React from 'react'
import './App.css';
import {AppBar, Button, Container, IconButton, Toolbar, Typography} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import {TodolistsList} from "../features/todolistsList/TodolistsList";
import {LinearProgress} from "@mui/material";
import {ErrorSnackbar} from "../components/ErrorSnackbar/ErrorSnackbar";


// export type TasksStateType = {
//     [key: string]: Array<TaskType>
// }


function App() {

    return (
        <div className="App">
            <ErrorSnackbar/>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
                <LinearProgress />
            </AppBar>
            <Container fixed>
                <TodolistsList />
            </Container>
        </div>
    );
}

type TodolistListPropsType = {}

export default App;
