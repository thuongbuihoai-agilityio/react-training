import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
import {
  Route,
  Routes
} from 'react-router-dom';
import {
  Suspense,
  lazy
} from 'react';

// Styles
import './styles/main.css';

// Components

import MainLayout from './layouts/MainLayout';
import Loading from './components/common/Loading';
import Partners from './components/Partners';
import Carousel from './components/common/Carousel';
const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={
              <>
                <Carousel />
                <Partners />
                <ProductList />
              </>}
            />
            <Route path='/products/:id' element={<ProductDetail />} />
          </Route>
        </Routes>
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
