import { Route, Routes } from 'react-router-dom';
import { ROUTE } from './common/utils/constant';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import UpComing from './pages/Upcoming/Upcoming';
import Search from './pages/Search/Search';
import TopRatedList from './pages/TopRatedList/TopRatedList';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTE.MAIN} element={<Main />} />
        <Route path={ROUTE.MOVIE_ID} element={<MovieDetail />} />
        <Route path={ROUTE.UP_COMING} element={<UpComing />} />
        <Route path={ROUTE.SEARCH} element={<Search />} />
        <Route path={ROUTE.TOP_RATED} element={<TopRatedList />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
