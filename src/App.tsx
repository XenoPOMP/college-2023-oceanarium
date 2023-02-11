import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '@pages/MainPage/MainPage';
import NotFound from '@pages/NotFound/NotFound';
import AboutPage from '@pages/AboutPage/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'*'} element={<NotFound />} />

        <Route path={'/'} element={<MainPage />} />

        <Route path={'/about'} element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
