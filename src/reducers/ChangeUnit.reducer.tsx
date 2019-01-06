import { CHANGE_UNIT } from "../actions/ActionTypes";
import changeUnit from "../actions/Actions";

type State = {
  readonly unit: string;
};

const initialState: State = {
  unit: "metric"
};

export default function(state = "metric", action: any) {
  const { type } = action;
  const reducer = {
    [CHANGE_UNIT]: action.unit
  };

  // @ts-ignore
  return reducer[type] || state;
}
