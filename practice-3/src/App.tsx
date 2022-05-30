import { Route, Routes } from "react-router-dom";
import { SWRConfig } from "swr";
import Category from "./components/Categories/Categories"
import Footer from "./components/common/Footer/Footer"
import Header from "./components/common/Header/Header"
import Navigation from "./components/common/Navigation/Navigation"
import ViewProductList from "./components/ViewsProducts/ViewProductList/ViewProductList"
import MainContext from "./context/FilterContext";
import ProductDetails from "./pages/ProductDetail/ProductDetail"
import ProductList from "./pages/ProductList/ProductList"

const swrConfig = {
  revalidateOnFocus: false,
  shouldRetryOnError: true
};

const App: React.FC = () => {
  return (
    <SWRConfig value={swrConfig}>
      <Header />
      <MainContext>
        <Navigation />
        <Category />
        <Routes>
          <Route path="/" element={<ViewProductList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path={`/product/:id`} element={<ProductDetails />} />
        </Routes>
      </MainContext>
      <Footer />
    </SWRConfig>
  )
}

export default App
