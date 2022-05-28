import Category from "./components/Categories/Categories"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Navigation from "./components/Navigation/Navigation"
import ViewProductItem from "./components/ViewsProducts/ViewProductItem/ViewProductsItem"
import ProductDetails from "./pages/ProductDetail/ProductDetail"
import ProductItem from "./pages/ProductItem/ProductItem"

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Category />
      <ViewProductItem />
      <ProductItem />
      <ProductDetails />
      <Footer />
    </>
  )
}

export default App
