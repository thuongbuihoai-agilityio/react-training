import ProductProvider from "./ProductContext";
import SearchProvider from "./SearchContext";

const AppProvider: React.FC<{children: JSX.Element[] | JSX.Element}> = ({ children }) => {
  return (
    <ProductProvider>
      <SearchProvider>
        {children}
      </SearchProvider>
    </ProductProvider>
  );
}

export default AppProvider;