import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ToolCardInCategoryPage from "../../../src/components/CategoryPageComponents/ToolCardInCategoryPage";
import { GetListOfTools, GetListOfCategories } from "../../../src/assets/Database/DatabaseUtils";
import { GAEventCat, GAEventAction, GAEvent } from "../../../src/components/Utils/Tracking";
// import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Head from "next/head";
import MainComponentContainer from "../../../src/components/ContainerComponents/MainComponentContainer";
import { RemoveNotAllowedChars } from "../../../src/components/Utils/Utils";

const useStyles = makeStyles((theme) => ({
    ToolsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '100%'
    },
    ToolCardItem: {

    },
    TypographyStyle: {
        backgroundColor: '#F5F5F5',
        marginBottom: '10px',
    },
    TypographyH1Style: {
        fontSize: '1.8rem',
        textAlign: 'center'
    },
}));

let data = {
    toolsList: [],
    categoriesList: [],
    urlParamsCategoryID: "",
    currentCategoryData: {},
    currentCategoryTools: [],
}
let CardListOfTools = null;

function ManageData(query) {
    data.toolsList = GetListOfTools();
    data.categoriesList = GetListOfCategories();
    data.urlParamsCategoryID = RemoveNotAllowedChars(query["categoryID"]);

    //filter only relevant category for this page
    data.currentCategoryData = data.categoriesList.find(category => category.urlPostFix == data.urlParamsCategoryID);
    //Filter tools in the same category for this category page
    data.currentCategoryTools = data.toolsList.filter(tool => tool.category == data.currentCategoryData.id);
}

CategoryPage.getInitialProps = ({ query }) => {
    return { query };
}

function CategoryPage({ query }) {
    const classes = useStyles();

    ManageData(query);

    CardListOfTools = data.currentCategoryTools.map((tool) => (<ToolCardInCategoryPage toolData={tool} categoryData={data.currentCategoryData} key={tool.id}></ToolCardInCategoryPage>));

    useEffect(() => {
        GAEvent(GAEventCat.CATEGORY_PAGE, GAEventAction.PAGE_VIEWED);
    }, [])

    return (
        <MainComponentContainer>
            <div>
                <Head>
                    <title>{data.currentCategoryData.pageTitle + " Power-Tools.co.il"}</title>
                    <meta name="description" content={data.currentCategoryData.MetaDescription} />
                    <meta name="keywords" content={data.currentCategoryData.MetaKeywords} />
                </Head>

                {/* <Typography className={classes.TypographyH1Style} variant='h1'>{data.currentTool.HebrewName}</Typography> */}

                <Typography className={classes.TypographyH1Style} variant='h1'>{data.currentCategoryData.HebrewName} </Typography>

                <Typography className={classes.TypographyStyle} align="right">{data.currentCategoryData.Description}</Typography>

                <div className={classes.ToolsContainer}>
                    {CardListOfTools}
                </div>

            </div>
        </MainComponentContainer>
    );
}

export default CategoryPage;