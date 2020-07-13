import React from 'react';
import { Card, Typography, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GAEvent, GAEventCat, GAEventAction } from '../Utils/Tracking';
// import { Link } from 'react-router-dom';
import Link from 'next/link';

const useStyles = makeStyles({
    ArticleCard: {
        width: '160px',
        height: '200px',
    },
    cardActionStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        border: 'none',
        outline: 'none',
        "&:focus": {
            outline: 'none'
        }
    },
    CardMediaStyle: {
    },
    TypographyStyle: {
        fontSize: '1rem',
    },
});

function ArticleViewerCard(props) {
    const classes = useStyles();

    const hrefLink = '/articles/' + props.ArticleID;

    return (
        <Card className={classes.ArticleCard}>
            {/* component={Link} */}
            <CardActionArea href={hrefLink} className={classes.cardActionStyle} onClick={() => GAEvent(GAEventCat.ARTICLE_PAGE, GAEventAction.CARD_CLICKED, props.ArticleName)}>
                <CardMedia
                    className={classes.CardMediaStyle}
                    component="img"
                    image={props.ArticleImageUrl}
                    title={props.ArticleTitle}
                    alt={props.ArticleTitle}
                />
                <Typography className={classes.TypographyStyle} gutterBottom variant="h6" component="h2">
                    {props.ArticleTitle}
                </Typography>

            </CardActionArea>

        </Card>
    );
}

export default ArticleViewerCard;