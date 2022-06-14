import ProductProvider from "./ProductContext";
import SearchProvider from "./SearchContext";
import FormProvider from "./FormContext";

const AppProvider: React.FC<{children: JSX.Element[] | JSX.Element}> = ({ children }) => {
  return (
    <ProductProvider>
      <SearchProvider>
        <FormProvider>
          {children}
        </FormProvider>
      </SearchProvider>
    </ProductProvider>
  );
}

export default AppProvider;