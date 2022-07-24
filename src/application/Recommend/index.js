import React, { useEffect } from 'react'
import Slider from '../../components/Slider'
import RecommendList from '../../components/RecommendList'
import Scroll from '../../components/Scroll'
import { Content } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { getBannerList, getRecommendList } from './store/actionCreators'
import Loading2 from '../../components/Loading2/index'
import { motion, AnimatePresence } from 'framer-motion'
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
    const { recommend } = useSelector(state => state)
    const bannerList = recommend.getIn(['banner']).toJS()
    const recommendList = recommend.getIn(['recommend']).toJS()
    const enterLoading = recommend.get('enterLoading')
    return (
        
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}>
                <Content className='111'>
                    <Scroll className="list" >
                        <div>
                            <Slider bannerList={bannerList}></Slider>
                            <RecommendList recommendList={recommendList}></RecommendList>
                        </div>
                        {enterLoading && <Loading2 />}
                    </Scroll>
                </Content>
            </motion.div>
       
    )
}
