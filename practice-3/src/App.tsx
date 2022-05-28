import { Route, Routes } from "react-router-dom";
import { SWRConfig } from "swr";
import Category from "./components/Categories/Categories"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Navigation from "./components/Navigation/Navigation"
import ViewProductList from "./components/ViewsProducts/ViewProductList/ViewProductList"
import ProductDetails from "./pages/ProductDetail/ProductDetail"
import ProductList from "./pages/ProductList/ProductList"

const swrConfig = {
  revalidateOnFocus: false,
  shouldRetryOnError: true
};

const App: React.FC = () => {
  return (
    <SWRConfig value={swrConfig}>
      <Navigation />
      <Header />
      <Category />
      <Routes>
        <Route path="/" element={<ViewProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path={`/product/:id`} element={<ProductDetails />} />
      </Routes>
      <Footer />
    </SWRConfig>
  )
}

export default App
