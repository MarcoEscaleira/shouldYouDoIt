import * as reducer from "./reducer";
import * as actions from "./actions";
import * as selectors from "./selectors";

export interface ErrorModalState {
  isOpen: boolean;
  message: string | "";
}

export { actions, selectors, reducer };
export default reducer.default;
