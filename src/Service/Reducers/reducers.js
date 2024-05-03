import { ADD_TO_CART, REMOVE_TO_CART } from "../constant";

const initialState = {
  cartData: [],
};

export default function cartItem(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartData: [...state.cartData, action.data], // appending action data to cartData array
      };
    case REMOVE_TO_CART:
      // Create a new array without the last item
      const Data = state.cartData.slice(0, -1);
      return {
        ...state,
        cartData: Data,
      };
    default:
      return state;
  }
}
