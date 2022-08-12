import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import {Item } from './styel'
import dayjs from 'dayjs'


export default function Event() {
    const { data, avatar, name } = useSelector(state => {
        return {
            data: state.self.get('event').toJS(),
            avatar: state.self.getIn(['userDetail', 'profile', 'avatarUrl']),
            name: state.self.getIn(['userDetail', 'profile', 'nickname'])
        }
    })
    return (
        <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}>
                {
                    data.map((item,index)=> {
                        let album = JSON.parse(item.json)
                        let songAvatar = album?.song?.album?.blurPicUrl
                        let songName = album?.song?.name
                        let songAuthor = album?.song?.artists[0]?.name
                        if (album.playlist) {
                            songAvatar = album?.playlist?.coverImgUrl
                            songName = album?.playlist.name
                            songAuthor = `by ${album?.playlist?.creator?.nickname}`
                        }
                        return (
                            <Item key={index}>
                                <div className='avatar'>
                                    <div className='img'>
                                        <img src={avatar}></img>
                                    </div>
                                    <div className='title'>
                                        <div className='subTile'>
                                            <span>{name}</span>
                                            <span>分享单曲：</span>
                                        </div>
                                        <div className='time'>{dayjs(item.showTime).format('YYYY年DD月MM')}</div>
                                    </div>
                                </div>
                                <div className='content'>{album.msg}</div>
                                <div className='song'>
                                    <div className='img'>
                                        <img src={songAvatar} />
                                    </div>
                                    <div className='title'>
                                        <div className='songName'>{album.playlist ? <span className='playList'>歌单</span> : ''}{songName}</div>
                                        <div className='songAuthor'>{songAuthor}</div>
                                    </div>
                                </div>
                                <div className='btn'>
                                    <div><svg t="1659947192954" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2248" width="16" height="16"><path d="M71.9 909.8c-2.2 8.4-12.5 5.9-11.9-2.9 13.1-187 71.1-284.1 128.1-352.8C274.7 449.9 469.8 352.7 604 341.3c10.6-0.9 18.9-11.7 18.9-24.8V157.9c0-21.7 21.1-32.9 34.1-18.2l299.5 339.5c9 10.2 8.6 27.6-0.8 37.2L662 817.6c-13.2 13.5-33.3 2-33.3-19V604.3c0-12.9-8.1-23.7-18.6-24.7-85.7-8.5-287.5 10.3-369.1 70.2-34.8 25.4-129.8 112.4-169.1 260z" p-id="2249" fill="#bfbfbf"></path></svg><span>转发</span></div>
                                    <div><svg t="1659947263971" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3376" width="16" height="16"><path d="M511.999488 847.882863c-28.734592 0-56.729303-2.604314-83.969807-7.099698L231.232673 960.185602 231.232673 761.40735C128.618486 689.355337 62.772174 578.889433 62.772174 454.825836c0-217.07906 201.129864-393.058051 449.228338-393.058051 248.084146 0 449.228338 175.980014 449.228338 393.058051C961.227826 671.917176 760.083635 847.882863 511.999488 847.882863zM511.999488 117.91762c-217.086932 0-393.074156 150.851707-393.074156 336.907193 0 114.166179 66.421434 214.898395 167.761552 275.820929l-1.768346 130.234133 132.171551-79.455633c30.4487 6.497994 62.117231 10.308787 94.910422 10.308787 217.101258 0 393.073132-150.825101 393.073132-336.907193C905.073644 268.769326 729.10177 117.91762 511.999488 117.91762zM736.614169 510.976694c-31.011542 0-56.154182-25.128307-56.154182-56.150858 0-31.010271 25.14264-56.151881 56.154182-56.151881s56.154182 25.14161 56.154182 56.151881C792.768351 485.848387 767.624687 510.976694 736.614169 510.976694zM511.999488 510.976694c-31.010518 0-56.153158-25.128307-56.153158-56.150858 0-31.010271 25.14264-56.151881 56.153158-56.151881 31.011542 0 56.154182 25.14161 56.154182 56.151881C568.15367 485.848387 543.01103 510.976694 511.999488 510.976694zM287.385831 510.976694c-31.010518 0-56.153158-25.128307-56.153158-56.150858 0-31.010271 25.14264-56.151881 56.153158-56.151881s56.153158 25.14161 56.153158 56.151881C343.53899 485.848387 318.39635 510.976694 287.385831 510.976694z" p-id="3377" fill="#bfbfbf"></path></svg><span>评论</span></div>
                                    <div><svg t="1659947308889" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4449" width="16" height="16"><path d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z" p-id="4450" fill="#bfbfbf"></path></svg><span>赞</span></div>
                                </div>
                            </Item>
                        )
                    })
                }
        </motion.div>
    )
}
