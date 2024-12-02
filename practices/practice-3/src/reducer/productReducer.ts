import { Action, DataAction, DataState } from "@common-types/data";

const productReducer = (state: DataState, actions: DataAction): DataState => {
  const { action, payload } = actions;
  switch (action) {
    case Action.GetProductSuccess: {
      return { ...state, products: payload };
    }
    case Action.CreateProductsSuccess: {
      return { ...state.products, products: state.products.concat(payload) };
    }
    case Action.DeleteProductSuccess: {
      const index = state.products.findIndex(
        (item) => item.id == payload.toString()
      );
      const newProduct = [...state.products];
      newProduct.splice(index, 1);
      return { ...state, products: newProduct };
    }
    case Action.UpdateProductSuccess: {
      const newProduct = [...state.products];
      return { ...state.products, products: newProduct };
    }
    default: {
      return { ...state };
    }
  }
};

export { productReducer };
