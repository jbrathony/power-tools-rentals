import React, { useState } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

//For RTL:
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider } from '@material-ui/styles';
import { jssPreset } from '@material-ui/styles';
import { GAEvent, GAEventCat, GAEventAction } from '../src//components/Utils/Tracking';
import { useEffect } from 'react';
import MainComponentContainer from '../src/components/ContainerComponents/MainComponentContainer';

//-----------------------------------------------------------
//Styles
//-----------------------------------------------------------
const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 200,
        minHeight: 500,
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    }
}));

//-----------------------------------------------------------
//Contact Form Component function
//-----------------------------------------------------------
export default function ContactForm() {
    const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

    //Function state
    const [currentMessage, setContactMessage] = useState({
        email: "",
        tel: "",
        textMessage: ""
    }
    );
    const classes = useStyles();

    //-----------------------------------------------------------
    //Handle input fields change and button send clicked
    //-----------------------------------------------------------
    function handleChange(e) {
        const value = e.target.value;
        setContactMessage({
            ...currentMessage,
            [e.target.name]: value
        });
    }

    async function handleSendEmail(e) {
        GAEvent(GAEventCat.CONTACT_PAGE, GAEventAction.CLICKED_ON_SEND_BUTTON);
        e.preventDefault();
        console.log('CurrentMessage Object is :', currentMessage);
        console.log('email:' + currentMessage.email);
        console.log('tel:' + currentMessage.tel);
        console.log('textMessage:' + currentMessage.textMessage);

        // Test server connection
        await axios.post("https://us-central1-power-tools-ea893.cloudfunctions.net/SendEmail", {
            'email': currentMessage.email,
            'tel': currentMessage.tel,
            'textMessage': currentMessage.textMessage
        })
            .then(response => {
                console.log(response);
            }).catch(error => {
                console.log('error sending email: ' + error);
            });
    }

    useEffect(() => {
        GAEvent(GAEventCat.CONTACT_PAGE, GAEventAction.PAGE_VIEWED);
    });

    //-----------------------------------------------------------
    //HTML and Material UI form
    //-----------------------------------------------------------
    return (
        <MainComponentContainer>
            <StylesProvider jss={jss}>
                <Head>
                    <title>צור קשר - השכרת כלי עבודה</title>
                    <meta name="description" content="מעוניין לשכור כלי עבודה? צור איתנו קשר בטלפון 050-8312195 או 02-6512579 או דרך טופס צור קשר בדף זה" />
                    <meta name="keywords" content="השכרת כלי עבודה טלפון, השכרת כלי עבודה צור קשר, השכרת כלי עבודה בירושלים, השכרת כלי עבודה מחיר" />
                </Head>

                <div className={classes.root}>
                    <CssBaseline />
                    <CardContent >

                        <Typography variant="h5">
                            צור קשר
                     </Typography>

                        <form className={classes.form}>

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="אימייל"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={handleChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="טלפון"
                                name="tel"
                                id="tel"
                                autoComplete="phone"
                                onChange={handleChange}
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                label="כתוב לנו הודעה"
                                id="textMessage"
                                name="textMessage"
                                multiline
                                rows={6}
                                onChange={handleChange}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                fullWidth
                                onClick={handleSendEmail}
                            >
                                שלח
                        </Button>
                            {/* <h1>message is: {JSON.stringify(currentMessage)}</h1> */}
                        </form>
                    </CardContent>
                    <Copyright />
                </div>
            </StylesProvider>
        </MainComponentContainer>
    );
}

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link href={"/"} >
                <a>Power-Tools</a>
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


  //---------------------------------------------------
  //Backup - working for sure - tested V
  // async function handleSendEmail(e) {
  //   e.preventDefault();
  //   console.log('CurrentMessage Object is :', currentMessage);
  //   console.log('email:' + currentMessage.email);
  //   console.log('tel:' + currentMessage.tel);
  //   console.log('textMessage:' + currentMessage.textMessage);

  //   // const form = await axios.post('/api/form', {
  //   //   email,
  //   //   tel,
  //   //   textMessage
  //   // });

  //   // Test server connection
  //   await axios.post("https://us-central1-power-tools-ea893.cloudfunctions.net/SendEmail", {
  //     'email': currentMessage.email,
  //     'tel': currentMessage.tel,
  //     'textMessage': currentMessage.textMessage
  //   })
  //     .then(response => {
  //       console.log(response);
  //     }).catch(error => {
  //       console.log('error sending email: ' + error);
  //     });
  // }