import { GlobalStyle } from './style';
import IconStyle from './assets/iconfont/iconfont'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import 'animate.css';
const Home = lazy(() => import('./application/Home'))
const Album = lazy(() => import('./application/Album'))
const Recommend = lazy(() => import('./application/Recommend'))
const Singers = lazy(() => import('./application/Singers'))
const Singer = lazy(() => import('./application/Singer'))
const Rank = lazy(() => import('./application/Rank'))
const Search = lazy(() => import('./application/Search'))
const Login = lazy(() => import('./application/Private/Login'))
const Self = lazy(() => import('./application/Self'))
const SelfHome = lazy(() => import('./application/SelfHome'))
const Event = lazy(() => import('./application/Event'))
const Podcast = lazy(() => import('./application/Podcast'))
const History = lazy(() => import('./application/History'))
function App() {
  const location = useLocation()
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
        <Routes >
          <Route path='/' element={<Suspense fallback='loading'><Home /></Suspense>}>

            <Route path='/' element={<Navigate to='/recommend' />}></Route>

            <Route path='/recommend' element={<Suspense fallback='loading'><Recommend /></Suspense>}></Route>

            <Route path='/recommend/album/:id' element={<Suspense fallback='loading'><Album /></Suspense>}></Route>

            <Route path='/singers' element={<Suspense fallback='loading'><Singers /></Suspense>}></Route>

            <Route path='/singer/:id' element={<Suspense fallback='loading'><Singer /></Suspense>}></Route>

            <Route path='/rank' element={<Suspense fallback='loading'><Rank /></Suspense>}></Route>

            <Route path='/search' element={<Suspense fallback='loading'><Search /></Suspense>}></Route>

            <Route path='/self' element={<Suspense fallback='loading'><Self /></Suspense>}>
              <Route path='/self' element={<Navigate to='/self/home' />}></Route>

              <Route path='/self/home' element={<Suspense fallback='loading'><SelfHome /></Suspense>}></Route>

              <Route path='/self/event' element={<Suspense fallback='loading'><Event /></Suspense>}></Route>

              <Route path='/self/podcast' element={<Suspense fallback='loading'><Podcast /></Suspense>}></Route>

              <Route path='/self/history' element={<Suspense fallback='loading'><History /></Suspense>}></Route>
            </Route>
          </Route>
          <Route path='/login' element={<Suspense fallback='loading'><Login /></Suspense>}></Route>
        </Routes>
    </>
  );
}

export default App;

