import Home from "../application/Home/"
import Rank from '../application/Rank'
import Recommend from "../application/Recommend"
import Singers from "../application/Singers"
import Album from '../application/Album'
import Singer from '../application/Singer'
import Search from '../application/Search'
export default [
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/recommend',
                element: <Recommend />,
            },
            {
                path: '/recommend/album/:id',
                element: <Album />
            },
            {
                path: '/singers',
                element: <Singers />,
            },
            {
                path: '/singer/:id',
                element: <Singer />
            },
            {
                path: '/rank',
                element: <Rank />,
            },
            {
                path : '/search',
                element : <Search />
            }
        ]
    },

]