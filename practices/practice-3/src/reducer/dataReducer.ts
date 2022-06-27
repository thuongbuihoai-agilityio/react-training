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
  CreateProductsSuccess = "CREATE_PRODUCT_SUCCESS",
  DeleteProductSuccess = "DELETE_PRODUCT_SUCCESS"
}

export interface DataState {
  products: Product[];
}

export interface DataAction {
  action: Action;
  payload: Product[];
}

const dataReduce = (state: DataState, actions: DataAction): DataState => {
  const { action, payload } = actions;
  switch (action) {
    case (Action.GetProductsSuccess): {
      return {...state, products: payload}
    }
    case (Action.CreateProductsSuccess): {
      return {...state.products, products: payload}
    }
    case (Action.DeleteProductSuccess): {
      return {...state, products: []}
    }
    default: {
      return {...state}
    }
  }
}

export {dataReduce, initialState}