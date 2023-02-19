import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '@pages/MainPage/MainPage';
import NotFound from '@pages/NotFound/NotFound';
import AboutPage from '@pages/AboutPage/AboutPage';
import VisitorAccountPage from '@pages/VisitorAccountPage/VisitorAccountPage';
import EmployeeAccountPage from '@pages/EmployeeAccountPage/EmployeeAccountPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'*'} element={<NotFound />} />

        <Route path={'/'} element={<MainPage />} />

        <Route path={'/about'} element={<AboutPage />} />

        <Route path={'/account'}>
          <Route path={'visitor'} element={<VisitorAccountPage />} />

          <Route path={'employee'} element={<EmployeeAccountPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
