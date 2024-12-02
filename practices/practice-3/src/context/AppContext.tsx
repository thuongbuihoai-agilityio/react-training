import SearchProvider from "./SearchContext";

const AppProvider: React.FC<{ children: JSX.Element[] | JSX.Element }> = ({
  children,
}) => {
  return <SearchProvider>{children}</SearchProvider>;
};

export default AppProvider;
