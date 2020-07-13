import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PhoneIcon from '@material-ui/icons/Phone';
import BuildIcon from '@material-ui/icons/Build';
import { Box, Typography, Divider, List, ListItem, ListItemText, ListItemIcon, Container } from "@material-ui/core";
import Link from 'next/link';
import { GAEvent, GAEventCat, GAEventAction } from "../Utils/Tracking";

const useStyles = makeStyles({
    FooterStyle: {
        position: 'absolute',
        right: '0',
        left: '0',
        backgroundColor: '#263238',
    },
    FooterItemsStyle: {
        // width: '100vw',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        // padding: '10px 0px 10px 0px',
    },
    ListItemStyel: {
        display: 'flex',
        paddingRight: '0',
        paddingLeft: '0',
    },
    ListItemTextStyle: {
        color: '#DEE4E7',
        textAlign: 'right'
    },
    ListItemTextStyleInset: {
        color: '#DEE4E7',
        textAlign: 'right',
        paddingRight: '10px'
    },
    ListItemIconStyle: {
        flexDirection: 'row-reverse',
        display: 'flex',
        color: '#DEE4E7',
    },
    IconStyle: {
        textAlign: 'left',
    },
    DividerStyle: {
        backgroundColor: '#DEE4E7'
    },

})


function Footer() {
    const classes = useStyles();

    return (
        <Box bgcolor="primary.main" component="footer" className={classes.FooterStyle}>
            <Container>

                <div className={classes.FooterItemsStyle}>

                    <List>
                        <Link href="/">
                            <ListItem button className={classes.ListItemStyel} onClick={() => { GAEvent(GAEventCat.FOOTER, GAEventAction.ITEM_CLICKED, "השכרת כלי עבודה") }}>
                                <ListItemText className={classes.ListItemTextStyle} primary="השכרת כלי עבודה" />
                                <ListItemIcon className={classes.ListItemIconStyle} >
                                    <HomeIcon className={classes.IconStyle} />
                                </ListItemIcon>
                            </ListItem>
                        </Link>

                        <Link href="/rentals/hammers" >
                            <ListItem button className={classes.ListItemStyel} onClick={() => { GAEvent(GAEventCat.FOOTER, GAEventAction.ITEM_CLICKED, "פטישי חציבה להשכרה") }}>
                                <ListItemText className={classes.ListItemTextStyleInset} primary="פטישי חציבה להשכרה" />
                                <ListItemIcon className={classes.ListItemIconStyle} ><BuildIcon /> </ListItemIcon>
                            </ListItem>
                        </Link>
                    </List>

                    <Divider light className={classes.DividerStyle} />

                    <List>

                        <Link href="/contact" >
                            <ListItem button className={classes.ListItemStyel} onClick={() => { GAEvent(GAEventCat.FOOTER, GAEventAction.ITEM_CLICKED, "צור קשר") }}>
                                <ListItemText className={classes.ListItemTextStyle} primary="צור קשר" />
                            </ListItem>
                        </Link>

                        <ListItem button component="a" href="tel:026512579" className={classes.ListItemStyel} onClick={() => { GAEvent(GAEventCat.FOOTER, GAEventAction.ITEM_CLICKED, "טלפון: 02-6512579") }}>
                            <ListItemText className={classes.ListItemTextStyleInset} primary="טלפון: 02-6512579" />
                            <ListItemIcon className={classes.ListItemIconStyle} ><PhoneIcon /> </ListItemIcon>
                        </ListItem>

                        <ListItem button component="a" href="tel:0508312195" className={classes.ListItemStyel} onClick={() => { GAEvent(GAEventCat.FOOTER, GAEventAction.ITEM_CLICKED, "נייד: 050-8312195") }}>
                            <ListItemText className={classes.ListItemTextStyleInset} primary="נייד: 050-8312195" />
                            <ListItemIcon className={classes.ListItemIconStyle} ><PhoneAndroidIcon /> </ListItemIcon>
                        </ListItem>

                        <Link href="/contact" >
                            <ListItem button className={classes.ListItemStyel} onClick={() => { GAEvent(GAEventCat.FOOTER, GAEventAction.ITEM_CLICKED, "כתוב לנו הודעה - לחץ כאן") }}>
                                <ListItemText className={classes.ListItemTextStyleInset} primary="כתוב לנו הודעה - לחץ כאן" />
                            </ListItem>
                        </Link>
                    </List>
                    <Divider light className={classes.DividerStyle} />
                </div>
            </Container>
        </Box>
    );
}

export default Footer;