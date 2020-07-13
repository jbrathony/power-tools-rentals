export function OnProdEnv() {
    // if (process.env.REACT_APP_ENV == "production")
    return process.env.isProd
    // if (process.env.isProd == true)
    //     return true;
    // else
    //     return false;
}

export function OnDevEnv() {
    // if (process.env.REACT_APP_ENV != "production")
    return process.env.isDev;
}

export function PrintEnvToConsole() {
    console.log('Version: ', process.env.REACT_APP_ENV);
}

export function RemoveNotAllowedChars(stringToValidate) {
    return stringToValidate.replace(/[`~!@#$%^&*()_|+=?;:\'\",.<>\{\}\[\]\\\/]/gi, '');
}