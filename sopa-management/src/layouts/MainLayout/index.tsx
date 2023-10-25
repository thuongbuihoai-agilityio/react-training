import { Outlet } from 'react-router-dom';

//  Components
import Header from '../Header';
import Footer from '../Footer';

const MainLayout = (): JSX.Element => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default MainLayout;
