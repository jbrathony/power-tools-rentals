import Head from "next/head";
import { GetListOfCategories, GetListOfTools } from "../src/assets/Database/DatabaseUtils";
import { useEffect } from "react";
import { GAEvent, GAEventCat, GAEventAction } from "../src/components/Utils/Tracking";
import CustomSlider from "../src/components/MainPageComponents/CustomSlider";
import CardsBar from "../src/components/CardsBarComponents/CardsBar";
import ArticlesViewer from "../src/components/ArticleComponents/ArticlesViewer";
import MainComponentContainer from "../src/components/ContainerComponents/MainComponentContainer";

function BakeToolsCardsForCategory(category) {
    let toolsInThisCategory = fetchedData.toolsList.filter(tool => tool.category == category.id);
    return <CardsBar categoryData={category} cardsToShow={toolsInThisCategory} isMainCategoriesDisplay="false" key={category.id} ></CardsBar>
}

let fetchedData = {
    categoriesList: [],
    toolsList: []
}

function index(props) {

    fetchedData.categoriesList = GetListOfCategories();
    fetchedData.toolsList = GetListOfTools();

    useEffect(() => {
        GAEvent(GAEventCat.TOOLS_FOR_RENT_PAGE, GAEventAction.PAGE_VIEWED);
    })

    return (
        <MainComponentContainer>
            <div>
                <Head>
                    <title>השכרת כלי עבודה - מחירים, רשימת כלים וציוד להשכרה</title>
                    <meta name="description" content="צריך כלי עבודה? השכרה של מגוון כלי עבודה ליום, כמה שעות או ימים. השכרת פטיש חציבה מקדחת יהלום וכלי עבודה נוספים" />
                    <link rel="canonical" href="https://power-tools.co.il" />
                    <meta name="keywords" content="השכרת כלי עבודה, השכרת פטיש חציבה, השכרת כלי עבודה בירושלים, השכרת מקדחת יהלום, השכרת מהדק אדמה" />
                </Head>

                <CustomSlider />

                {/* first cards bar with all main categories */}
                <CardsBar cardsTitle={"כלי עבודה להשכרה"} cardsToShow={fetchedData.categoriesList} isMainCategoriesDisplay></CardsBar>

                {/* many cards bar - one for each category with all tools */}
                {fetchedData.categoriesList.map((category) => BakeToolsCardsForCategory(category))}

                <ArticlesViewer />
            </div>
        </MainComponentContainer>
    );
}

export default index;