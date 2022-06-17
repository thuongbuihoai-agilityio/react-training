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

// Lazy-loaded
const ProductListView = lazy(() => import("@/pages/ProductListView/ProductListView"));
const ProductGridView = lazy(() => import("@/pages/ProductGridView/ProductGridView"));
const ProductDetails = lazy(() => import("@/pages/ProductDetail/ProductDetail"));

const App: React.FC = memo(() => {
  return (
    // The context SWRConfig can provide global configurations (options) for all SWR hooks.
    <SWRConfig value={{ revalidateOnFocus: true }}>
      <Header />
      {/* AppProvider: Handle searchContext */}
      <AppProvider>
        {/* Navigation: Handle search by name */}
        <Navigation />
        {/* Categories: Handle search by categoryId */}
        <Categories />
        {/* Suspense:  Show a <Loading /> while the profile is loading */}
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* "/": redirect to ProductListView */}
            <Route path="/home" element={<ProductListView />} />
            {/* "/products": redirect to ProductGridView */}
            <Route path="/products" element={<ProductGridView />} />
            {/* "/products/:id": redirect to ProductDetails */}
            <Route path={`/product/:id`} element={<ProductDetails />} />
          </Routes>
        </Suspense>
      </AppProvider>
      <Footer />
      {/* ToastContainer: library show message */}
      <ToastContainer />
    </SWRConfig>
  );
});

export default App;
