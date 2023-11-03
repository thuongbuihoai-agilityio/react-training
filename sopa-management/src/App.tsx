import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, RouteObject, Routes } from 'react-router-dom';
import { Suspense } from 'react';

// Styles
import './styles/main.css';

// Constants
import { ERROR_MESSAGES } from '@constants/validate';

// Components
import MainLayout from '@layouts/MainLayout';
import Loading from '@components/common/Loading';
import ErrorBoundary from '@components/common/ErrorBoundary';
import { Routers } from './routes';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <ErrorBoundary fallback={<p>{ERROR_MESSAGES.ERROR_BOUNDARY}</p>}>
      <Routes>
        <Route element={<MainLayout />}>
          {Routers.map(({ path, element }: RouteObject) => (
            <Route
              key={path}
              path={path}
              element={
                <QueryClientProvider client={queryClient}>
                  <Suspense fallback={<Loading />}>{element}</Suspense>
                </QueryClientProvider>
              }
            />
          ))}
        </Route>
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
