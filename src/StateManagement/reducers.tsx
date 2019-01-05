import { CHANGE_UNIT } from "./actions";

type State = {
  readonly unit: string;
};

const initialState: State = {
  unit: "metric"
};

export function weatherAppReducer(state = initialState, action: any) {
  switch (action.type) {
    case CHANGE_UNIT:
      return Object.assign({}, state, { unit: action.unit });
    default:
      return state;
  }
}
