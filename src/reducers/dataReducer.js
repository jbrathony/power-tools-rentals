const initialState = {
    categoriesList: [],
    toolsList: [],
    versionNumber: 1
}

const downloadedFirebaseData = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_DATA':
            return saveData(state, action);
        case 'DELETE_DATA':
            return initialState;
    }
    return state;
}

function saveData(state, action) {
    let obj = {};
    obj = { ...state, toolsList: action.downloadedData.toolsList };
    obj = { ...obj, categoriesList: action.downloadedData.categoriesList };
    obj = { ...obj, versionNumber: action.downloadedData.versionNumber };
    console.log('New data saved', obj);
    return obj;
}

export default downloadedFirebaseData;
