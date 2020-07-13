import React from "react";
import { Box, Card, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ArticleViewerCard from "./ArticleViewerCard";
import { GetSmallImageForArticle } from "../../assets/Database/DatabaseUtils";

const useStyles = makeStyles({
    BoxStyle: {
        display: 'flex',
        width: '100%',
        marginTop: '20px ',
        padding: '20px 0px 20px',
        backgroundColor: '#F9F8FF',
        justifyContent: 'space-evenly'
    },

    ArticleCard: {
        flexBasis: '45%',
        height: '220px'
    }

});

function ArticlesViewer() {
    const classes = useStyles();

    return (
        <Box className={classes.BoxStyle}>
            <ArticleViewerCard
                ArticleID="rent-or-buy-a-power-tool"
                ArticleTitle="6 יתרונות בהשכרה של כלי עבודה"
                ArticleImageUrl={GetSmallImageForArticle("rent-or-buy-a-power-tool")}
            />
            <ArticleViewerCard
                ArticleID="tool-rental-find-the-nearest-location"
                ArticleTitle="השכרת כלי עבודה - מצא את המיקום הקרוב ביותר"
                ArticleImageUrl={GetSmallImageForArticle("tool-rental-find-the-nearest-location")}
            />
        </Box>
    );
}

export default ArticlesViewer;