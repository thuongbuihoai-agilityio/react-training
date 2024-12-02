import { ACTION } from "@/constants/message";
import { Product } from "@/types/product";

export const initState = [];

const getProduct = (payload: Product) => {
  return {
    type: ACTION.GET_DATA,
    payload,
  };
};

const reducer = (state: any, action: any) => {
  let newState;
  switch (action.type) {
    case ACTION.GET_DATA:
      return newState = {
        ...state,
        initState: [...state.initState, action.payload]
      }
    default:
      return newState;
  }
};

export {
  getProduct,
  reducer
};
