import { configureStore, applyMiddleware, ThunkMiddleware } from "@reduxjs/toolkit";
//import rootReducer

const middleware = createLogger();

export const store = configureStore(
    rootReducer,
    applyMiddleware(
        ThunkMiddleware,
        middleware
    )
);