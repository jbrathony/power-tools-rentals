import React, { useEffect, useState, Suspense } from "react";
import { Typography, Card, Box, CardMedia } from "@material-ui/core";
import { RemoveNotAllowedChars } from "../../src/components/Utils/Utils";
// import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { GAEvent, GAEventCat, GAEventAction } from "../../src/components/Utils/Tracking";
import MainComponentContainer from "../../src/components/ContainerComponents/MainComponentContainer";

function GetArticleData(setFetchedArticle) {
    ArticleToShow = React.lazy(() => import(`../../src/assets/Articles/${articleName}.js`));
}

let ArticleToShow = null;
let articleName = "";


const useStyles = makeStyles({
    MainImageStyle: {
        height: '180px',
        width: '100%',
        marginBottom: '5px',
    },
    CardMediaStyle: {
        width: '100%',
        height: '100%',
    },
    MainTextBoxStyle: {
        margin: '0 10px',
        lineHeight: '150%',
    },
    HeaderH1Style: {
        fontWeight: 'bold',
        fontSize: '1.3em'
    },
    SubtitleStyle: {
        margin: '19px 0 13px 0',
        color: 'grey',
        fontWeight: 'bold',
        fontSize: '1em',
        textAlign: 'right',
        lineHeight: '130%',
    },
    ContentStyle: {
        textAlign: 'right',
    }
});

ArticlePage.getInitialProps = ({ query }) => {
    return query;
}

function ArticlePage(query) {
    const classes = useStyles();
    const [fetchedArticle, setFetchedArticle] = useState(false);
    articleName = RemoveNotAllowedChars(query["articleName"]);

    if (!fetchedArticle)
        GetArticleData(setFetchedArticle);

    useEffect(() => {
        GAEvent(GAEventCat.ARTICLE_PAGE, GAEventAction.PAGE_VIEWED);
    });

    return (
        <MainComponentContainer>
            <div>
                <Suspense fallback={<div>השכרת כלי עבודה - טוען את המאמר...</div>}>
                    <ArticleToShow />
                </Suspense>
            </div>
        </MainComponentContainer>
    )
}

export default ArticlePage;
