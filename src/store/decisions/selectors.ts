import { StoreState } from '..';
export const getPrint = (state: StoreState) => state.decisions.print;

export const getData = (state: StoreState) => state.decisions.data;

export const getOldTextInput = (state: StoreState) => state.decisions.oldTextInput;
