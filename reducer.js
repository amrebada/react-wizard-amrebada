export default (state = { index: 0, max: 5 }, action) => {
  switch (action.type) {
    case "NEXT_STEP":
      if (state.index < state.max - 1) {
        return { ...state, index: state.index + 1 };
      } else {
        return { ...state };
      }
    case "GOTO":
      if (action.index < state.max - 1) {
        return { ...state, index: action.index };
      } else {
        return { ...state };
      }
    default:
      return { ...state };
  }
};
