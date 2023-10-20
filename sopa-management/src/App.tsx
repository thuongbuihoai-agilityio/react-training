import {
  QueryClient,
  QueryClientProvider
} from 'react-query';

// Components
import ProductList from './components/ProductList';

// Styles
import './styles/main.css';

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ProductList />
    </QueryClientProvider>
  );
};

export default App;
