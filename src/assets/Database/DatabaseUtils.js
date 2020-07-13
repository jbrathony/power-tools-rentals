import { toolsImages, articlesImages } from "./ImagesList";
let categories = require('./categories.json');
let tools = require('./tools.json');

export function GetSmallImageForArticle(articleID) {
    return ((articlesImages[articleID])[0])["source"];
}

export function GetArticleImage(articleID, imageNumber) {
    return ((articlesImages[articleID])[imageNumber])["source"];
}
export function GetListOfCategories() {
    let listOfCategories = [];
    for (var key in categories) {
        if (!categories.hasOwnProperty(key)) continue;

        var categoryObj = categories[key];
        listOfCategories.push(categoryObj);
    }
    return listOfCategories;
}

export function GetListOfTools() {
    let listOfTools = [];
    for (var key in tools) {
        if (!tools.hasOwnProperty(key)) continue;

        var toolObj = tools[key];
        listOfTools.push(toolObj);
    }
    return listOfTools;
}

export function GetMainImageForTool(toolId) {
    return ((toolsImages[toolId])[0])["source"];
}

export function GetImagesListForTool(toolId) {
    let imagesListForTool = [];
    let imagesListWithProto = toolsImages[toolId];

    for (var key in imagesListWithProto) {
        if (!imagesListWithProto.hasOwnProperty(key)) continue;

        var image = imagesListWithProto[key];
        imagesListForTool.push(image);
    }
    return imagesListForTool;
}