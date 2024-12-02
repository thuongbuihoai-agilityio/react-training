import { Action, DataAction, DataState } from "@common-types/data";
<<<<<<< HEAD
=======
import { Product } from "@common-types/product";
>>>>>>> fb2d47e9 (move practice-3 into practices folder)

const productReducer = (state: DataState, actions: DataAction): DataState => {
  const { action, payload } = actions;
  switch (action) {
    case Action.GetProductSuccess: {
<<<<<<< HEAD
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
=======
      return { ...state, products: payload as Product[] };
    }
    case Action.CreateProductsSuccess: {
      return { ...state.products, products: state.products.concat(payload as Product) };
    }
    case Action.DeleteProductSuccess: {
      const deleteProduct = state.products.filter(item => item.id != payload)
      return {...state, products: deleteProduct};
    }
    case Action.UpdateProductSuccess: {
      state.products.findIndex(item => item.id == payload);
      return {...state};
>>>>>>> fb2d47e9 (move practice-3 into practices folder)
    }
    default: {
      return { ...state };
    }
  }
};

export { productReducer };
