import { Route, Routes } from 'react-router-dom';
import { ROUTE } from './common/utils/constant';
import Main from './pages/Main/Main';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import NotFound from './pages/NotFound/NotFound';
import UpComing from './pages/Upcoming/Upcoming';

function App() {
  return (
      <Routes>
        <Route path={ROUTE.MAIN} element={<Main />} />
        <Route path={ROUTE.MOVIE_ID} element={<MovieDetail />} />
        <Route path={ROUTE.UP_COMING} element={<UpComing />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
      </Routes>
  );
}

export default App;
