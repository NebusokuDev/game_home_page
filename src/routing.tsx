import {Route, Routes} from 'react-router-dom';
import {MainPage} from './pages/MainPage.tsx';
import {LoginPage} from './pages/LoginPage.tsx';
import {NotFoundPage} from './pages/NotFoundPage.tsx';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage/>}/>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
  );
};

export default AppRouter;
