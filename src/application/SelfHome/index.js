import React from 'react'
import { useSelector } from 'react-redux'
import { Content_A, Content_B, Item, Content_C, Content_D } from './style'
import { getYear, getConstellation } from '../../api/utils'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
export default function Index() {
    const navigate = useNavigate()
    const {
        gender,
        birthday,
        createTime,
        load,
        userSongPlayList,
        userAllSongPlayList } = useSelector(state => {
            let data = state.self.toJS()
            let LoginData = state.login.toJS()
            return {
                gender: data.userDetail.profile.gender === 1 ? '男' : '女',
                listenSongs: data.userDetail.listenSongs,
                birthday: LoginData.userData.profile.birthday,
                createTime: LoginData.userData.profile.createTime,
                load: data.load,
                userSongPlayList: data.userSongPlayList,
                userAllSongPlayList: data.userAllSongPlayList
            }
        })
    const getTime = () => {
        let s = dayjs(createTime)
        let m = s.$M + 1
        if (m < 10) {
            m = `0${m}`
        }
        return `${s.$y}年${m}`
    }
    const MusicPlay = (props) => {
        return (
            props.data.map(item => {
                return <Item key={item.id}>
                    <div className='img'><img src={item.coverImgUrl} /></div>
                    <div>
                        <h2>{item.name}</h2>
                        <h3>{`${item.trackCount - 1} 首，播放${item.playCount}次`}</h3>
                    </div>
                </Item>
            })
        )
    }
    return (
        load && <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}>
            <Content_A>
                <div className='Information'>
                    <h1>基本信息</h1>
                    <h3>{`村龄：${getYear(dayjs, createTime)}年 (${getTime()}月注册)`}</h3>
                    <h3>{`性别：${gender}`}</h3>
                    <h3>{`年龄：${getConstellation(birthday, dayjs)}`}</h3>
                </div>
                <div className='Information_more'>
                    <h3>{`查看全部 >`} </h3>
                </div>
            </Content_A>
            <Content_B>
                <h1>音乐品味</h1>
                <MusicPlay data={userSongPlayList} />
                <Item onClick={() => navigate('/self/history', { state: userAllSongPlayList })}>
                    <div className='img'><img src='http://p4.music.126.net/_-RYyfT805tvjhSosNvtVg==/109951162990317239.jpg?param=200y200' /></div>
                    <div>
                        <h2>历史记录</h2>
                        <h3>{`累计听歌${userAllSongPlayList.length}首`}首</h3>
                    </div>
                </Item>
            </Content_B>
            <Content_C>
                <h1>我的评论 <span>{`(1)`}</span></h1>
                <div className='img'>
                    <img src='https://p1.music.126.net/39KYBwYx1DlYy_zH68uPsw==/109951165442096361.jpg?param=140y140' />
                    <div className='comments_song'>
                        <div className='song_name'>单曲 【Blut im Auge】-Equilibrium</div>
                        <svg t="1659770157366" className="song_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2260" width="16" height="16"><path d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z" p-id="2261"></path></svg>
                    </div>
                </div>
                <h1 className='comments'>邪王真眼永远的神</h1>
                <div className='comments_author'>
                    <div>雨猫 </div>
                    <p>: 掘友们好，「掘金·日新计划」8月更文挑战来了！</p>
                </div>
                <div className='comments_time'>2019年9月14日</div>
            </Content_C>
            <Content_D>
                <h1>愿望清单</h1>
                <h2>{`发布愿望 >`}</h2>
            </Content_D>
        </motion.div>

    )
}
