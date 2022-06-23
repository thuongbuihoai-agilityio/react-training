import React, { lazy, Suspense } from "react";
import { memo } from "react";
import { SWRConfig } from "swr";
import { Route, Routes } from "react-router-dom";
import Categories from "@/components/Categories/Categories";
import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import Navigation from "@/components/common/Navigation/Navigation";
import Loading from "@/components/common/Loading/Loading";
import { Toaster } from "react-hot-toast";
import SearchProvider from "@/context/SearchContext";

// Lazy-loaded
const ProductListView = lazy(
  () => import("@/pages/ProductListView/ProductListView")
);
const ProductGridView = lazy(
  () => import("@/pages/ProductGridView/ProductGridView")
);
const ProductDetails = lazy(
  () => import("@/pages/ProductDetail/ProductDetail")
);

const App: React.FC = () => {
  return (
    // The context SWRConfig can provide global configurations (options) for all SWR hooks.
    <SWRConfig value={{ revalidateOnFocus: true }}>
      <Header />
      {/* SearchProvider: Handle searchContext */}
      <SearchProvider>
        <Navigation />
        <Categories />
        {/* Suspense: Show a <Loading /> while the product list is loading */}
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<ProductListView />} />
            <Route path="/products" element={<ProductGridView />} />
            <Route path={`/product/:id`} element={<ProductDetails />} />
          </Routes>
        </Suspense>
      </SearchProvider>
      <Footer />
      {/* Toaster: library show message */}
      <Toaster position="top-center" />
    </SWRConfig>
  );
};

export default App;
