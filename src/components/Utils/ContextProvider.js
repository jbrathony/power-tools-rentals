import React, { Component, createContext } from 'react';
import { useState } from 'react';

export const Context = createContext();

// function AppContext(){
//     const {GAInitialized, setGAInitialized} = useContext(Context);
//     return (
//         <Context.Provider value={{ GAInitialized, setGAInitialized }}>
//             {props.children}
//         </Context.Provider>
//     );
// }

// export default AppContext;


// const AppContextProvider = (props) => {
//     const [GAInitialized, setGAInitialized] = useState(false);

//     return (
//         <Context.Provider value={{ GAInitialized, setGAInitialized }}>
//             {props.children}
//         </Context.Provider>
//     );
// }

// export { Context as AppContext, AppContextProvider };