import React, { useEffect, useState } from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CardBarSingleCategoryCard from "./CardBarSingleCategoryCard";
import CardBarSingleToolCard from "./CardBarSingleToolCard";
import { GAEventCat, GAEventAction, GAEvent } from "../Utils/Tracking";
import Link from 'next/link';

const useStyles = makeStyles({
    CategoryDivStyle: {
        marginRight: '10px',
        // backgroundColor: '#F9F8FF',
    },
    ScrollLeftDiv: {
        display: 'flex',
        marginTop: '10px',
        paddingTop: '10px',
        paddingBottom: '10px',
        height: '100%',
        width: '100%',
        overflowX: 'scroll',
        '-ms-overflow-style': 'none',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    CardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
        alignItems: 'center',
        width: '100%',
    },
    CardHeaderTypography: {
        fontSize: '17px'
    }
});


function CardsBar(props) {
    const classes = useStyles();
    let CardsBarList = [];
    let buttonWatchAll = null;

    if (props.isMainCategoriesDisplay !== true) {
        const hrefLink = '/rentals/' + props.categoryData.urlPostFix;
        buttonWatchAll =
            <Link href={hrefLink}>
                <Button variant="outlined" color="primary" size="small" onClick={() => GAEvent(GAEventCat.CARD_BAR_Main_Page, GAEventAction.WATCH_ALL_CLICKED, props.categoryData.urlPostFix)}>
                    צפה בהכל
                </Button>
            </Link>
    }

    for (var key in props.cardsToShow) {
        if (!props.cardsToShow.hasOwnProperty(key)) continue;
        var toolOrCategory = props.cardsToShow[key];

        if (props.isMainCategoriesDisplay === true)
            CardsBarList.push(<CardBarSingleCategoryCard key={toolOrCategory.urlPostFix} category={toolOrCategory} ></CardBarSingleCategoryCard >);
        else
            CardsBarList.push(<CardBarSingleToolCard key={toolOrCategory.urlPostFix} categoryData={props.categoryData} tool={toolOrCategory} ></CardBarSingleToolCard >);

    };

    let cardsTitle = props.cardsTitle ? props.cardsTitle : props.categoryData.HebrewName;

    return (
        <div className={classes.CategoryDivStyle}>
            <div className={classes.CardHeader}>
                <Typography variant="h1" className={classes.CardHeaderTypography}>{cardsTitle}</Typography>
                {buttonWatchAll}
            </div>

            <div className={classes.ScrollLeftDiv}>
                {CardsBarList}
            </div>
        </div>
    );
}

export default CardsBar;

