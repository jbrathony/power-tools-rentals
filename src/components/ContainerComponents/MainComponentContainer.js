import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from '../store/index';
import { initGA } from '../Utils/Tracking';
import { useEffect } from 'react';
import { PrintEnvToConsole } from "../Utils/Utils";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../FooterComponent/Footer";
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

let GAInitialized = false;

const useStyles = makeStyles((theme) => ({
    ContainerStyle: {
        textAlign: 'center'
    }
}));

function MainComponentContainer(props) {
    const classes = useStyles();

    if (!GAInitialized) {
        initGA('UA-25385483-2');
        GAInitialized = true;
    }

    useEffect(() => {
        PrintEnvToConsole();
    }, [])

    return (
        <Provider store={store}>
            <PersistGate loading={<div>loading</div>} persistor={persistor}>
                <NavigationBar />
                <Container className={classes.ContainerStyle}>
                    {props.children}
                </Container>

                <Footer />
            </PersistGate>
        </Provider>
    );
}

export default MainComponentContainer;