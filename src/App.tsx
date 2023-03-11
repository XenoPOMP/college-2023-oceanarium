import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '@pages/MainPage/MainPage';
import NotFound from '@pages/NotFound/NotFound';
import AboutPage from '@pages/AboutPage/AboutPage';
import VisitorAccountPage from '@pages/VisitorAccountPage/VisitorAccountPage';
import EmployeeAccountPage from '@pages/EmployeeAccountPage/EmployeeAccountPage';
import Breakfast from '@pages/restaurant/Breakfast/Breakfast';
import DailyMenuPage from '@pages/restaurant/DailyMenuPage/DailyMenuPage';

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

        <Route path={'/restaurant'}>
          <Route path={'breakfast'} element={<Breakfast />} />

          <Route path={'daily'} element={<DailyMenuPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
