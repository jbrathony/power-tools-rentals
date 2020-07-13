import React from 'react';
import { Card, CardMedia, Typography, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import Head from 'next/head';
import { GetArticleImage } from '../Database/DatabaseUtils';

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
        fontSize: '1.3em'
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

    let articleID = "rent-or-buy-a-power-tool";

    return (
        <article>
            <Head>
                <title>6 יתרונות בהשכרה של כלי עבודה</title>
                <meta name="description" content="קרא כאן על 6 יתרונות מהם נהנים כאשר שוכרים כלי עבודה" />
                <meta name="keywords" content="יתרונות בהשכרת כלי עבודה, קניה או השכרת כלי עבודה, השכרה או רכישת כלי עבודה" />
            </Head>

            <Card variant='outlined' className={classes.MainImageStyle}>
                <CardMedia className={classes.CardMediaStyle}
                    component="img"
                    image={GetArticleImage(articleID, 1)}
                    title="6 יתרונות בהשכרה של כלי עבודה"
                    alt="6 יתרונות בהשכרה של כלי עבודה"
                />
            </Card>
            <main className={classes.MainTextBoxStyle}>
                <header>
                    <Typography className={classes.HeaderH1Style} variant="h6" component="h1">
                        השכרה או קניה של כלי עבודה - מה עדיף?
                    </Typography>

                    <Typography className={classes.SubtitleStyle} variant="h3" component="p">
                        מתי כדאי לשכור ומתי עדיף לקנות את כלי העבודה, מספר נקודות שיעזרו לך להחליט אם לקנות או להשכיר את כלי העבודה שאתה צריך:
                    </Typography>
                </header>

                <Button className={classes.ButtonHomePageStyle} href='/' size="large" color="primary" variant="outlined">לחץ כאן לצפייה בכל כלי העבודה להשכרה</Button>

                <Typography className={classes.ContentStyle} component="section">
                    <section>
                        <Typography className={classes.InArticleHeader2} component="h2">
                            6 יתרונות בהשכרה של כלי העבודה
                                </Typography>

                        <section>
                            <Typography className={classes.InArticleHeader3} component="h2">1. מחיר</Typography>
                            <Typography className={classes.ParagraphStyle} component="p">
                                צריך לבצע עבודה הדורשת שימוש בכלי עבודה יקר? הרבה יותר זול לשכור אותו.
                                </Typography>
                        </section>
                        <p>&nbsp;</p>
                        <section>
                            <Typography className={classes.InArticleHeader3} component="h2">2. עבודה חד פעמית או קצרה</Typography>
                            <Typography>
                                בהמשך לסעיף הקודם, אם כלי העבודה נדרש לעבודה חד פעמית או קצרה והוא גם יקר יחסית, משתלם הרבה יותר לשכור את הכלי, מאשר לקנות אותו.
                                    </Typography>
                        </section>
                        <p>&nbsp;</p>
                        <section>
                            <Typography className={classes.InArticleHeader3} component="h2">3. כלי עבודה מיוחדים</Typography>
                            <Typography>
                                צריך כלי עבודה מיוחד? לפעמים נדרשת עבודה עם כלי עבודה מיוחד ומאוד ספציפי, במקרה כזה כדאי מאוד לשכור את כלי העבודה ולא לקנות.
                                    </Typography>
                        </section>
                        <p>&nbsp;</p>
                        <section>
                            <Typography className={classes.InArticleHeader3} component="h2">4. אחריות</Typography>
                            <Typography>כאשר שוכרים מאיתנו כלי עבודה ישנה אחריות על הכלי, כל עוד עבדתם לפי ההנחיות, בדיוק כמו שקונים כלי עבודה חדש וישנה אחריות לשנה שלמה. לכן אפשר לשכור את כלי העבודה בראש שקט. רק לעבוד בצורה נכונה ובטוחה.</Typography>
                        </section>
                        <p>&nbsp;</p>
                        <section>
                            <Typography className={classes.InArticleHeader3} component="h2">5. אחסון</Typography>
                            <Typography>
                                יתרון בולט בהשכרה של כלי עבודה הוא נושא האחסון, כלים גדולים תופסים מקום רב ולעיתים דורשים תחזוקה שוטפת גם בתקופות שלא עובדים איתם. אפילו אם זה פטיש חציבה לא גדול במיוחד, אחסון הכלי זה משהו שצריך להתמודד איתו, במיוחד אם אתם צריכים כלי עבודה גדול יותר, מסורבל או מלוכלך, בהשכרה לא תצטרכו לדאוג.
                                    </Typography>
                        </section>
                        <p>&nbsp;</p>
                        <section>
                            <Typography className={classes.InArticleHeader3} component="h2">6. אפשרות לבדוק את כלי העבודה</Typography>
                            <Typography>
                                לפני רכישה של כלי עבודה, לפעמים לא בטוחים שזהו כלי העבודה הנוח והמתאים עבורנו ושהוא הכלי המתאים למשימה, אפשר לשכור את הכלי, לבדוק אותו ורק אם נמצא שהוא מתאים לקנות אחד. לדוגמא, בדיקת גודל פטיש החציבה המתאים לסוג העבודות של כל אחד, השכרת מכונת פוליש לרצפה כדי לבדוק את יכולת העבודה של הכלי על משטחים שונים, השכרת מקדחת יהלום ממותגים ובקטרים שונים ועוד.
                                    </Typography>
                        </section>
                    </section>
                </Typography>
                <Button className={classes.ButtonHomePageStyle} href='/' size="large" color="primary" variant="outlined">לחץ כאן לצפייה בכל כלי העבודה להשכרה</Button>
            </main>
        </article>
    );
}

export default RentOrBuyAPoweTool;