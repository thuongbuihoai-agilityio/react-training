import { useEffect } from 'react';
import {
  Outlet,
  useNavigate
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { shallow } from 'zustand/shallow';

//  Components
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';

// Stores
import { useAuthenticationStore } from '@stores/login';

const MainLayout = (): JSX.Element => {
  const navigate = useNavigate();

  const [accounts] = useAuthenticationStore(
    (state) => [
      state.accounts,
    ],
    shallow
  );

  console.log('account main', accounts);
  useEffect(() => {
    if (accounts.length === 0) {
      console.log('run', accounts);
      navigate('/login');
    }
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* Toaster: library show message */}
      <Toaster position='top-right' />
    </>
  );
};

export default MainLayout;
