import { useEffect } from 'react';
import {
  Outlet,
  useNavigate
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

//  Components
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';

// Stores
import { useAccountStore } from '@stores/login';

const MainLayout = (): JSX.Element => {
  const navigate = useNavigate();
  const token = useAccountStore.persist.getOptions().name;

  useEffect(() => {
    if (!token) {
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
