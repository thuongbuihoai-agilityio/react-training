import React from "react";
import { memo } from "react";
import { SWRConfig } from "swr";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Categories from "@/components/Categories/Categories";
import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import Navigation from "@/components/common/Navigation/Navigation";
import ProductDetails from "@/pages/ProductDetail/ProductDetail";
import ProductListView from "@/pages/ProductListView/ProductListView";
import ProductGridView from "@/pages/ProductGridView/ProductGridView";
import AppProvider from "@/context/AppContext";

const App: React.FC = memo(() => {
  return (
    <SWRConfig value={{ revalidateOnFocus: false }}>
      <ToastContainer />
      <Header />
      <AppProvider>
        <Navigation />
        <Categories />
        <Routes>
          <Route path="/" element={<ProductListView />} />
          <Route path="/products" element={<ProductGridView />} />
          <Route path={`/product/:id`} element={<ProductDetails />} />
        </Routes>
      </AppProvider>
      <Footer />
    </SWRConfig>
  );
});

export default App;
