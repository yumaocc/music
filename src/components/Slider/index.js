import { Carousel } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
const contentStyle = {
    height: '120px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    margin : '10px' ,
    borderRadius: '10px',
};

const App = (props) => {
    const { bannerList } = props
    return (
        <Carousel  autoplay>
            {bannerList.map((item) => {
                return <div key={item.imageUrl}> 
                    <h3 style={contentStyle }>
                        <img style={{width:'100%',borderRadius: '5px',}} src={item.imageUrl}/>
                    </h3>
                </div>
            })}
        </Carousel>
    )
}

export default App;