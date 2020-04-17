import { INCREMENT_COUNT, DECREMENT_COUNT } from "../actions";

const initialState = {
  value: 0,
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        value: state.value + action.count,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        value: state.value - action.count,
      };
    default:
      return state;
  }
}
