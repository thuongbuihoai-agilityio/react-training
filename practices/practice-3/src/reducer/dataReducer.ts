import { Action, DataAction, DataState } from "@common-types/data";
import { Product } from "@common-types/product";

const productReducer = (state: DataState, actions: DataAction): DataState => {
  const { action, payload } = actions;
  switch (action) {
    case Action.GetProductSuccess: {
      return { ...state, products: payload as Product[] };
    }
    case Action.CreateProductsSuccess: {
      return { ...state.products, products: state.products.concat(payload as Product) };
    }
    case Action.DeleteProductSuccess: {
      const index = state.products.findIndex(
        (item) => item.id == payload.toString()
      );
      const newProduct = [...state.products];
      newProduct.splice(index, 1);
      return {...state, products: newProduct};
    }
    case Action.UpdateProductSuccess: {
      const updateProduct = state.products.filter(item => item.id === payload);
      return { ...state, products: updateProduct };
    }
    default: {
      return { ...state };
    }
  }
};

export { productReducer };
