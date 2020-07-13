import { combineReducers } from 'redux';

import latestFetchedVersionNumber from './versionReducer';
import downloadedFirebaseCategoriesList from './firebaseCategoriesReducer'
import downloadedFirebaseToolsList from "./firebaseToolsReducer";
import downloadedFirebaseData from './dataReducer';

const rootReducer = combineReducers({
    latestFetchedVersionNumber,
    downloadedFirebaseCategoriesList,
    downloadedFirebaseToolsList,
    downloadedFirebaseData
})

export default rootReducer;

