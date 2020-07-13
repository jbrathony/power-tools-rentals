import React from "react";
import { Card, CardActionArea, CardContent, Typography, CardMedia } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { GAEvent, GAEventCat, GAEventAction } from "../Utils/Tracking";
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import { GetMainImageForTool } from '../../assets/Database/DatabaseUtils'

const useStyles = makeStyles({
    outerCardDivStyle: {
        width: '150px',
        height: '250px',
        marginLeft: '10px',
        marginBottom: '10px',
    },
    ToolCardStyle: {
        width: '100%',
        height: '100%'
    },
    cardActionStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'none',
        }
    },
    CardMediaStyle: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    TypographyStyle: {
        textAlign: 'center',
        fontSize: '1.1rem',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'none',
        }
    }
});


function ToolCardInCategoryPage(props) {
    const classes = useStyles();

    const hrefLink = '/rentals/' + props.categoryData.urlPostFix + '/' + props.toolData.urlPostFix;

    return (
        <div className={classes.outerCardDivStyle}>
            <Card className={classes.ToolCardStyle} >
                {/* component={Link} */}
                <CardActionArea href={hrefLink} className={classes.cardActionStyle} onClick={() => { GAEvent(GAEventCat.CATEGORY_PAGE, GAEventAction.TOOL_CLICKED, (props.categoryData.urlPostFix + '/' + props.toolData.urlPostFix)) }}>
                    <CardMedia className={classes.CardMediaStyle}
                        component="img"
                        image={GetMainImageForTool(props.toolData.id)}
                        title={props.toolData.HebrewName}
                    />

                    <CardContent>
                        <Typography className={classes.TypographyStyle} variant="h3" component="h2">{props.toolData.HebrewName}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default ToolCardInCategoryPage;