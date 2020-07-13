const initialState = {
    versionNumber: 1
}

const latestFetchedVersionNumber = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_VERSION_NUMBER':
            return {...state, versionNumber:action.fetchedVersionNumber}
    }
    return state;
}

export default latestFetchedVersionNumber;
