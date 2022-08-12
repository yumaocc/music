import React, { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container, Header, Hots, History, HotsList, HistoryList } from './style'
import { useNavigate } from 'react-router-dom'
import {
    changeSearch,
    changeHotSearch,
    changeDefault,
    changeSearchSuggest,
    changeSearchAction,
    changeSearchSuggestAction,
    changeSearchLoading
} from './store/actionCreators'
import { useDispatch, useSelector } from 'react-redux'
import { ClearOutlined } from '@ant-design/icons'
import SearchLists from '../../components/SearchLists/index'
import Suggest from './Suggest'
import { changeCurrentSong, changePlayList, changeCurrentIndex, changeFullScreen } from '../Player/store/actionCreator'
import { Debounce } from '../../api/hooks'
import Loading2 from '../../components/Loading2'

export default function Search() {

    const navigate = useNavigate()
    const searchRef = useRef()
    const [historySearch, setHistorySearch] = useState([])
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const [searchListShow, setSearchListShow] = useState(false)
    const [suggestShow, setSuggestShow] = useState(false)

    useEffect(() => {
        if (searchRef.current) {
            searchRef.current.focus()
        }
        changeDefault(dispatch)
        changeHotSearch(dispatch)
        setHistorySearch(JSON.parse(localStorage.getItem('historySearch')) || [])
    }, [])

    const { defaultSearch, hots, suggest, searchQuest, loading } = useSelector(state => {
        return {
            defaultSearch: state.search.get('default'),
            hots: state.search.get('hots').toJS(),
            suggest: state?.search?.get('suggest')?.toJS(),
            searchQuest: state?.search?.get('searchQuest')?.toJS(),
            loading: state.search.get('loading')
        }
    })

    const searchClick = () => {
        dispatch(changeSearchLoading(true))
        if (value === '') {
            historySearch.push({ name: searchRef.current.placeholder, id: Date.now() })
        } else {
            historySearch.push({ name: searchRef.current.value, id: Date.now() })
        }
        setHistorySearch(historySearch)//将搜索记录存放到浏览器
        localStorage.setItem('historySearch', JSON.stringify(historySearch))
        changeSearch(value, dispatch)
        setSearchListShow(!searchListShow)
        setSuggestShow(false) //关闭提示栏
        dispatch(changeSearchSuggestAction([]))
    }//点击搜索按钮

    const clearHistory = () => {//清除历史搜索
        localStorage.clear()
        setHistorySearch([])
    }
    useEffect(() => {
        if (value.length === 0) {
            dispatch(changeSearchAction([]))//清空所搜到的歌曲
        }
        if (value !== '' && searchListShow === false) {
            dispatch(changeSearchLoading(true))
            setSuggestShow(true) //打开搜索提示
        } else if (value === '') {
            setSuggestShow(false)
            dispatch(changeSearchLoading(false))
            dispatch(changeSearchSuggestAction([]))
        }
    }, [value])

    const debounceChange = Debounce(function () {
        changeSearchSuggest(value, dispatch)
    }, 500)

    const handleChange = (e) => {
        setValue(e.target.value)
        debounceChange()
    }

    const HistorySearchList = (props) => {
        return (
            props.historySearch.map(item => {
                return (
                    <HistoryList key={item.id} onClick={() => setValue(item.name)}>
                        {item.name}
                    </HistoryList>
                )
            })
        )
    }

    const HotsSearchList = (props) => {
        return (
            props.hots.map((item, index) => {
                return (
                    <HotsList key={index}>
                        <div className='num' style={{ color: index + 1 > 3 ? '' : 'red' }}>{index + 1}</div>
                        <motion.div
                            onClick={() => setValue(item.first)}
                            whileTap={{ scale: 1.5 }}
                            className='title'>{item.first}</motion.div>
                    </HotsList>
                )
            })
        )
    }

    return (
        <>
            <Container >
                <AnimatePresence>
                    <motion.div

                        initial={{
                            x: '100vw',
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.3
                        }}>
                        <Header>
                            <div className='back' onClick={() => navigate(-1)}><svg t="1659084604399" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4616" width="200" height="200"><path d="M192.125 548.409L418.327 774.61a36.409 36.409 0 0 1-51.496 51.496L82.55 541.826a42.234 42.234 0 0 1 0-59.71l284.28-284.222a36.409 36.409 0 0 1 51.496 51.496L192.125 475.59H919.78a36.409 36.409 0 1 1 0 72.818H192.125z" p-id="4617"></path></svg></div>
                            <input
                                ref={searchRef}
                                className='input'
                                type='text'
                                onChange={handleChange}
                                placeholder={defaultSearch}
                                value={value} />
                            <div className='btn' onClick={searchClick}>搜索</div>
                        </Header>
                        {
                            loading ? <Loading2 /> : (
                                <div>
                                    {suggest.length > 0 && suggestShow ? (
                                        <Suggest
                                            loading={loading}
                                            setSuggestShow={setSuggestShow}
                                            suggest={suggest}
                                            setValue={setValue}
                                            searchClick={searchClick}
                                        />
                                    ) : ''}
                                    {
                                        searchQuest.length > 0 ? (
                                            <SearchLists
                                                loading={loading}
                                                tracks={searchQuest}
                                                changeCurrentIndex={changeCurrentIndex}
                                                changePlayList={changePlayList}
                                                changeCurrentSong={changeCurrentSong}
                                                changeFullScreen={changeFullScreen}
                                            />
                                        ) : (
                                            <div>
                                                <History>
                                                    <div className='historyBtn'>
                                                        <div className='title'>历史记录</div>
                                                        <ClearOutlined onClick={clearHistory} />
                                                    </div>
                                                    <div className='historyContent'>
                                                        <HistorySearchList historySearch={historySearch} />
                                                    </div>
                                                </History>
                                                <Hots>
                                                    <div className='hots_title'>热搜榜</div>
                                                    <HotsSearchList hots={hots} />
                                                </Hots>
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        }
                    </motion.div>
                </AnimatePresence>
            </Container>

        </>
    )
}
