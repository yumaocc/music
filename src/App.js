import { GlobalStyle } from './style';
import IconStyle from './assets/iconfont/iconfont'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Recommend from './application/Recommend';
import Home from './application/Home';
import Album from './application/Album';
import Singers from './application/Singers';
import Singer from './application/Singer';
import Rank from './application/Rank';
import Search from './application/Search';
function App() {
  const location = useLocation()
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <AnimatePresence exitBeforeEnter initial={false}>
      {/* location={location} key={location.pathname} */}
        <Routes >
          <Route path='/' element={<Home />}>
          <Route path='/' element={<Navigate to='/recommend'/>}></Route>
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

