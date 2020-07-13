const initialState = {
    categoriesList: []
}

const downloadedFirebaseCategoriesList = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_CATEGORIES_LIST':
            return { ...state, categoriesList: action.downloadedCategoriesList }
        case 'DELETE_SAVED_CATEGORIES_LIST':
            return initialState;
    }
    return state;
}

export default downloadedFirebaseCategoriesList;
