import { CHANGE_UNIT } from "./ActionTypes";

const changeUnit = (newUnit: string) => ({ type: CHANGE_UNIT, unit: newUnit });

export default changeUnit;
