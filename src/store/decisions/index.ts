import * as reducer from './reducer';
import * as actions from './actions';
import * as selectors from './selectors';

export type DecisionsStateData = {
  msg: string;
  img: string
}

export interface DecisionsState {
  print: boolean;
  data?: DecisionsStateData;
  oldTextInput: string
};

export { actions, selectors, reducer };
export default reducer.default;
