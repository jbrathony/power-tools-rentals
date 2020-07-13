import React from 'react';
import { Card, CardMedia, Typography, Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import Head from 'next/head';
import { GetArticleImage } from '../Database/DatabaseUtils';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
    ButtonHomePageStyle: {
        width: '100%',
        marginBottom: '10px',
    },
    MainImageStyle: {
        height: '180px',
        width: '100%',
        marginBottom: '10px',
    },
    CardMediaStyle: {
        width: '100%',
        height: '100%',
    },
    MainTextBoxStyle: {
        margin: '0 10px',
        lineHeight: '150%',
        textAlign: 'right',
    },
    HeaderH1Style: {
        fontWeight: 'bold',
        fontSize: '1.9em',
        lineHeight: '130%'
    },
    SubtitleStyle: {
        margin: '16px 0 20px 0',
        color: 'grey',
        fontWeight: 'bold',
        fontSize: '1em',
        textAlign: 'right',
        lineHeight: '130%',
    },
    InArticleHeader2: {
        fontWeight: 'bold',
        fontSize: '20px',
        marginBottom: '10px',
    },
    InArticleHeader3: {
        fontWeight: 'bold',
        fontSize: '16px',
    },
    ContentStyle: {
        textAlign: 'right',
        marginBottom: '5px',
    },
    ParagraphStyle: {
        textAlign: 'right',
    }
});

function RentOrBuyAPoweTool(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    let articleID = "tool-rental-find-the-nearest-location";

    return (
        <article>
            <Head>
                <title>השכרת כלי עבודה - מצא את המיקום הקרוב ביותר</title>
                <meta name="description" content="השכרת כלי עבודה - רשימת כתובות מהם ניתן לשכור כלי עבודה - מצא את המקום הקרוב ביותר אליך" />
                <meta name="keywords" content="השכרת כלי עבודה בירושלים, השכרת כלי עבודה ירושלים, השכרת כלי עבודה בתל אביב, השכרת כלי עבודה בפתח תקווה, השכרת כלי עבודה בהרצליה, השכרת כלי עבודה כתובת" />
            </Head>

            <header>
                <Typography className={classes.HeaderH1Style} variant="h6" component="p">
                    מצא את נקודת
                    </Typography>
                <Typography className={classes.HeaderH1Style} variant="h6" component="h1">
                    השכרת כלי העבודה
                    </Typography>
                <Typography className={classes.HeaderH1Style} variant="h6" component="p">
                    הקרובה אליך
                    </Typography>
                <br />
            </header>

            <Card variant='outlined' className={classes.MainImageStyle}>
                <CardMedia className={classes.CardMediaStyle}
                    component="img"
                    image={GetArticleImage(articleID, 1)}
                    title="מצא את המיקום הקרוב ביותר עבורך להשכרת כלי עבודה"
                    alt="מצא את המיקום הקרוב ביותר עבורך להשכרת כלי עבודה"
                />
            </Card>



            <main className={classes.MainTextBoxStyle}>

                {/* <Button className={classes.ButtonHomePageStyle} href='/' size="large" color="primary" variant="outlined">לחץ כאן לצפייה בכל כלי העבודה להשכרה</Button> */}

                <Typography className={classes.ContentStyle} component="section">
                    <section>
                        <section>
                            <Typography className={classes.ParagraphStyle} component="p">
                                רשימת נקודות מהן ניתן להשכיר כלי עבודה וציוד לבנייה. לחץ על העיר הקרובה אליך כדי לראות פרטים נוספים אודות השכרת כלי עבודה במיקום קרוב לעיר זאת.
                                </Typography>
                        </section>
                        <p>&nbsp;</p>

                        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className={classes.heading}>השכרת כלי עבודה בירושלים</Typography>
                                {/* <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography> */}
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    לחץ כאן לפרטים נוספים
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography className={classes.heading}>השכרת כלי עבודה בתל אביב</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    בקרוב...
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography className={classes.heading}>השכרת כלי עבודה בפתח תקווה</Typography>
                                <Typography className={classes.secondaryHeading}></Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    בקרוב...
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </section>
                </Typography>
                <br />
                <Button className={classes.ButtonHomePageStyle} href='/' size="large" color="primary" variant="outlined">לחץ כאן לצפייה בכל כלי העבודה להשכרה</Button>
            </main>
        </article>
    );
}

export default RentOrBuyAPoweTool;