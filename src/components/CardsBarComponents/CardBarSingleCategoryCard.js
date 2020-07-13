import React from "react";
import { Card, CardActionArea, CardContent, Typography, CardMedia } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import { GAEvent, GAEventCat, GAEventAction } from "../Utils/Tracking.js";
import { categoriesImages } from "../../assets/Database/ImagesList";

const useStyles = makeStyles({
    outerCardDivStyle: {
        width: '130px',
        height: '200px',
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
        fontSize: '1rem',
    },
});


const CardBarSingleCategoryCard = React.memo(function CardBarSingleCategoryCard(props) {
    const classes = useStyles();

    const hrefLink = '/rentals/' + props.category.urlPostFix;

    const ActionAreaClicked = () => {
        console.log('ActionAreaClicked');
    }

    return (
        <div className={classes.outerCardDivStyle}>
            <Card className={classes.cardStyle} >
                {/* component={Link} */}
                <CardActionArea href={hrefLink} onClick={() => GAEvent(GAEventCat.CARD_BAR_Main_Page, GAEventAction.CATEGORY_CARD_CLICKED, props.category.urlPostFix)} className={classes.cardActionStyle}>
                    <CardMedia className={classes.CardMediaStyle}
                        component="img"
                        alt={props.category.pageTitle}
                        image={categoriesImages[props.category.id]}
                        title={props.category.HebrewName}
                    />
                    <CardContent className={classes.CardContentStyle}>
                        <Typography className={classes.TypographyStyle} gutterBottom variant="h6" component="h2">
                            {props.category.HebrewName}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
});

export default CardBarSingleCategoryCard;