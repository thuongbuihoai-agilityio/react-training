import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { SWRConfig } from "swr";
import { CategoriesProvider } from "@context/CategoryContext";
import Header from "@components/common/Header/Header";
import Categories from "@components/Category/Categories";
import CardProductOffer from "@components/CardProduct/CardProductOffer/CardProductOffer";
import CardProductSelling from "@components/CardProduct/CardProductSelling/CardProductSelling";
import CardPopular from "@components/CardProduct/CardPopular/CardPopular";
import SignUpSection from "@components/SignUpSection/SignUpSection";
import Footer from "@components/common/Footer/Footer";
import ProductList from "@pages/ProductList/ProductList";
import ProductDetail from "@pages/ProductDetail/ProductDetail";

const App: React.FC = memo(() => {
  return (
    <SWRConfig value={{ revalidateOnFocus: false }}>
      <CategoriesProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Categories />
                <CardProductOffer />
                <CardProductSelling />
                <CardPopular />
                <SignUpSection />
              </>
            }
          />
          <Route path="/products" element={<ProductList />} />
          <Route path={`/products/:id`} element={<ProductDetail />} />
        </Routes>
      </CategoriesProvider>
      <Footer />
    </SWRConfig>
  );
});

export default App;
