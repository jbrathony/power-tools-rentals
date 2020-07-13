import React from "react";
import MainComponentContainer from '../../../../src/components/ContainerComponents/MainComponentContainer';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardActionArea, Divider } from "@material-ui/core";
import { RemoveNotAllowedChars } from "../../../../src/components/Utils/Utils";
import { useEffect } from "react";
import { GAEvent, GAEventCat, GAEventAction } from "../../../../src/components/Utils/Tracking";
import { GetListOfTools, GetImagesListForTool, GetListOfCategories } from "../../../../src/assets/Database/DatabaseUtils";
import ToolImagesSlider from "../../../../src/components/ToolPageComponents/ToolImagesSlider2";
import Head from 'next/head';

function BakeToolsDetails() {

}

function ManageData(query) {
    data.toolsList = GetListOfTools();
    data.categoriesList = GetListOfCategories();
    data.urlPostFixToolID = RemoveNotAllowedChars(query["toolID"]);
    // data.urlPostFixToolID = RemoveNotAllowedChars(useParams().toolID);
    data.urlPostFixCatID = RemoveNotAllowedChars(query["categoryID"]);
    // data.urlPostFixCatID = RemoveNotAllowedChars(useParams().categoryID);

    //filter only relevant category for this page
    data.currentCategoryData = data.categoriesList.find(category => category.urlPostFix == data.urlPostFixCatID);
    //Filter the tools in the same category
    data.currentCategoryTools = data.toolsList.filter(tool => tool.category == data.currentCategoryData.id);
    //Filter the tool for this page
    data.currentTool = data.currentCategoryTools.filter(tool => tool.urlPostFix == data.urlPostFixToolID)[0];
}

let data = {
    toolsList: [],
    categoriesList: [],
    urlPostFixToolID: "",
    urlPostFixCatID: "",
    currentCategoryData: {},
    currentCategoryTools: [],
    currentTool: {},
}

const useStyles = makeStyles({
    ContainerStyle: {
        // display: 'flex',
        // flexDirection: 'column',
        // width: '100%',
        // height: 'auto',
    },
    DividerStyle: {
        marginLeft: '-1%',
        marginRight: '-1%',
    },
    divProductH1: {
        marginBottom: '10px'
    },
    TypographyH1Style: {
        fontSize: '1.1rem'
    }
});

ToolPage.getInitialProps = ({ query }) => {
    return { query };
}

function ToolPage({ query }) {
    const classes = useStyles();
    ManageData(query);

    useEffect(() => {
        GAEvent(GAEventCat.TOOL_PAGE, GAEventAction.PAGE_VIEWED);
    });

    return (
        <MainComponentContainer>
            <div className={classes.ContainerStyle}>

                <Head>
                    <title>{data.currentTool.pageTitle + " Power-Tools.co.il"}</title>
                    <meta name="description" content={data.currentTool.MetaDescription} />
                    <meta name="keywords" content={data.currentTool.MetaKeywords} />
                </Head>

                <Divider className={classes.DividerStyle} />

                <ToolImagesSlider data={data} />

                <div className={classes.divProductH1}>
                    <Typography className={classes.TypographyH1Style} variant='h1'>השכרת {data.currentTool.HebrewName}</Typography>
                </div>


                <div>
                    <Typography align="right" variant='body2'>{data.currentTool.Description}</Typography>
                </div>

                {/* <ToolPageImageGallery urlCatID={data.urlCatID} urlToolID={data.urlToolID} /> */}
            </div>
        </MainComponentContainer>
    );
}

export default ToolPage;