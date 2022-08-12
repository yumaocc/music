import React, { useEffect } from 'react'
import Slider from '../../components/Slider'
import RecommendList from '../../components/RecommendList'
import { Content, List } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { getBannerList, getRecommendList } from './store/actionCreators'
import Loading2 from '../../components/Loading2/index'
import { motion, AnimatePresence } from 'framer-motion'
import Bs from '../../components/BS'
export default function Recommend() {
    //初始化数据
    useEffect(() => {
        const dispatchBannerList = getBannerList()
        const dispatchRecommendList = getRecommendList()
        if (!bannerList.length && !recommendList.length) {
            dispatchBannerList(dispatch)
            dispatchRecommendList(dispatch)
        }
    }, []) //请求轮播图数据和推荐歌曲数据
    const dispatch = useDispatch()
    const { bannerList , recommendList ,enterLoading ,currentSongStatus} = useSelector(state => {
        return {
            bannerList : state.recommend.getIn(['banner']).toJS(),
            recommendList : state.recommend.getIn(['recommend']).toJS(),
            enterLoading : state.recommend.get('enterLoading'),
            currentSongStatus : state.player.toJS().currentSong.id
        }
    })
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Content currentSongStatus={currentSongStatus}>
                <Bs >
                <Slider bannerList={bannerList}></Slider>
                    <List><RecommendList recommendList={recommendList}></RecommendList> </List>
                    {enterLoading && <Loading2 />}
                </Bs>
            </Content>
        </motion.div>
    )
}
