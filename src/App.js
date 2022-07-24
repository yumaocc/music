import { GlobalStyle } from './style';
import IconStyle from './assets/iconfont/iconfont'
import { useRoutes, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import routes from './routes';
import Recommend from './application/Recommend';
import Home from './application/Home';
import Album from './application/Album';
import Singers from './application/Singers';
import Singer from './application/Singer';
import Rank from './application/Rank';
import Search from './application/Search';
function App() {
  const location = useLocation()
  const elementRoute = useRoutes(routes)
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <AnimatePresence exitBeforeEnter initial={false}>
      {/* location={location} key={location.pathname} */}
        <Routes >
          <Route path='/' element={<Home />}>
            <Route path='/recommend' element={<Recommend />}></Route>
            <Route path='/recommend/album/:id' element={<Album />}></Route>
            <Route path='/singers' element={<Singers />}></Route>
            <Route path='/singer/:id' element={<Singer />}></Route>
            <Route path='/rank' element={<Rank />}></Route>
            <Route path='/search' element={<Search />}></Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

