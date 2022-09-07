import { Route, Routes } from 'react-router-dom';
import { ROUTE } from './common/utils/constant';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import NotFound from './pages/NotFound/NotFound';
import Search from './pages/Search/Search';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTE.MAIN} element={<Main />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
        <Route path={ROUTE.MOVIE_ID} element={<MovieDetail />} />
        <Route path={ROUTE.SEARCH} element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
