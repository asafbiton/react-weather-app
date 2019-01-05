/**
 * action types
 */

export const CHANGE_UNIT = "CHANGE_UNIT";

/**
 * action creators
 */

export function changeUnit(newUnit: string) {
  return {
    type: CHANGE_UNIT,
    unit: newUnit
  };
}
