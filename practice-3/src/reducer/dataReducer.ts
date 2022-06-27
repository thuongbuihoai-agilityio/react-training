import { Product } from "@common-types/product";

export interface Data extends DataState{
  setProducts?: Function;
}

const initialState: DataState = {
  products: [],
};

export enum Action {
  SetProducts = "SET_PRODUCTS",
  GetProductsSuccess = "GET_PRODUCT_SUCCESS",
  CreateProductsSuccess = "CREATE_PRODUCT_SUCCESS"
}

export interface DataState {
  products: Product[];
}

export interface ActionGetData {
  action: Action;
  payload: Product[];
}

const dataReduce = (state: DataState, actions): DataState => {
  const { action, payload } = actions;
  switch (action) {
    case (Action.GetProductsSuccess): {
      return {...state, products: payload}
    }
    case (Action.CreateProductsSuccess): {
      return {...state.products, products: payload}
    }
    default: {
      return {...state}
    }
  }
}

export {dataReduce, initialState}