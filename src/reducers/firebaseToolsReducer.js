const initialState = {
    toolsList: []
}

const downloadedFirebaseToolsList = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_TOOLS_LIST':
            console.log('SAVE_TOOLS_LIST');
            return setTools(state, action);
        case 'DELETE_SAVED_TOOLS_LIST':
            console.log('DELETE_SAVED_TOOLS_LIST');
            return initialState;
    }
    return state;
}

function setTools(state, action) {
    let obj = {};
    obj = { ...state, toolsList: action.downloadedToolsList }
    return obj;
}

export default downloadedFirebaseToolsList;
