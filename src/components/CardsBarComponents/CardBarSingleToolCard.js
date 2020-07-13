import React from "react";
import { Card, CardActionArea, CardContent, Typography, CardMedia } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { GAEventAction, GAEventCat, GAEvent } from "../Utils/Tracking.js";
// import { Link } from 'react-router-dom';
import Link from 'next/link';

import { GetMainImageForTool } from "../../assets/Database/DatabaseUtils.js";

const useStyles = makeStyles({
    outerCardDivStyle: {
        minWidth: '130px',
        minHeight: '200px',
        width: '130px',
        height: '250px',
        marginLeft: '10px',
    },
    cardStyle: {
        width: '100%',
        height: '100%'
    },
    cardActionStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%'
    },
    CardMediaStyle: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    CardContentStyle: {
        padding: '5px'
    },
    TypographyStyle: {
        fontSize: '1rem'
    },
});

function CardBarSingleToolCard(props) {
    const classes = useStyles();

    const hrefLink = '/rentals/' + props.categoryData.urlPostFix + '/' + props.tool.urlPostFix;

    return (
        <div className={classes.outerCardDivStyle}>
            <Card className={classes.cardStyle} >
                {/* component={Link} */}
                <CardActionArea href={hrefLink} onClick={() => GAEvent(GAEventCat.CARD_BAR_Main_Page, GAEventAction.TOOL_CARD_CLICKED, props.tool.urlPostFix)} className={classes.cardActionStyle}>
                    <CardMedia className={classes.CardMediaStyle}
                        component="img"
                        image={GetMainImageForTool(props.tool.id)}
                        title={props.tool.HebrewName}
                        alt={"השכרת " + props.tool.HebrewName}
                    />
                    <CardContent className={classes.CardContentStyle}>
                        <Typography className={classes.TypographyStyle} gutterBottom variant="h6" component="h2">
                            {props.tool.HebrewName}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default CardBarSingleToolCard;