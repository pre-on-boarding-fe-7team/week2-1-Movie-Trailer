import { Route, Routes } from 'react-router-dom';
import { ROUTE } from './common/utils/constant';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import NowPlaying from './pages/NowPlaying/NowPlaying';

function App() {
  return (
    <Routes>
      <Route path={ROUTE.MAIN} element={<Main />} />
      <Route path={ROUTE.NOWPLAYING} element={<NowPlaying />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}

export default App;
