import {applyMiddleware, compose, createStore, Store} from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk"
import {DispatchType, AppAction, AppState} from "../actions/app/app-action-creators";
import appReducer, {initialState} from "../reducers/app/app-reducer";

export const generateStore = (config: object) => {
    const composed = composeWithDevTools(applyMiddleware(thunk));
    const preloadState = {...initialState, ...{config}}
    const store: Store<AppState, AppAction> & { dispatch: DispatchType } = createStore(
        appReducer,
        preloadState,
        composed
    );
    return store;
};
