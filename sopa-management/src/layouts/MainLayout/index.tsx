import { useEffect } from 'react';
import {
  Outlet,
  useNavigate
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useShallow } from 'zustand/react/shallow';

//  Components
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';

// Stores
import { useAccountStore } from '@stores/login';

const MainLayout = (): JSX.Element => {
  const navigate = useNavigate();

  const { accounts } = useAccountStore(
    useShallow((state) => ({
      accounts: state.accounts
    }))
  );

  useEffect(() => {
    if (!accounts) {
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
