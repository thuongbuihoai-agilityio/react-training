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
import Header from './layouts/Header';
const Partners = lazy(() => import('./components/Partners'));
const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {/* TODO: I will create component Loading later */}
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Partners />
                <ProductList />
              </>
            }
          />
          <Route path='/products/:id' element={<ProductDetail />} />
        </Routes>
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
