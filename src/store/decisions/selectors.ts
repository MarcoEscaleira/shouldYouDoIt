import { StoreState } from "..";
import { DecisionsStateData } from ".";

export const getPrint = (state: StoreState): boolean => state.decisions.print;

export const getData = (state: StoreState): DecisionsStateData | {} =>
  state.decisions.data || {};

export const getOldTextInput = (state: StoreState): string =>
  state.decisions.oldTextInput;
