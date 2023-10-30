import { useEffect } from 'react';
import {
  Outlet,
  useNavigate
} from 'react-router-dom';

//  Components
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';

// Helpers
import { getStorage } from '@helpers/storage';

// Constants
import { STORAGE_KEY } from '@constants/common';

const MainLayout = (): JSX.Element => {
  const navigate = useNavigate();
  const token = getStorage(STORAGE_KEY.TOKEN);

  useEffect(() => {
    if (!token.email) {
      navigate('/login');
    }
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
