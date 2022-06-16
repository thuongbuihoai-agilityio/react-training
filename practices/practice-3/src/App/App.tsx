import React, { lazy, Suspense } from "react";
import { memo } from "react";
import { SWRConfig } from "swr";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Categories from "@/components/Categories/Categories";
import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import Navigation from "@/components/common/Navigation/Navigation";
import AppProvider from "@/context/AppContext";
import Loading from "@/components/common/Loading/Loading";

const ProductListView = lazy(() => import("@/pages/ProductListView/ProductListView"));
const ProductGridView = lazy(() => import("@/pages/ProductGridView/ProductGridView"));
const ProductDetails = lazy(() => import("@/pages/ProductDetail/ProductDetail"));

const App: React.FC = memo(() => {
  return (
    <SWRConfig value={{ revalidateOnFocus: false }}>
      <Header />
      <AppProvider>
        <Navigation />
        <Categories />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<ProductListView />} />
            <Route path="/products" element={<ProductGridView />} />
            <Route path={`/product/:id`} element={<ProductDetails />} />
          </Routes>
        </Suspense>
      </AppProvider>
      <Footer />
      <ToastContainer />
    </SWRConfig>
  );
});

export default App;
