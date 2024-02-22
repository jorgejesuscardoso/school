const initialState = {
  counter: 0,
};
type ActionType = {
  type: string;
};
export const newPost = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}