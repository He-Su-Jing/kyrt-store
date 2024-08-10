import React, { useState } from 'react';
import './choose.scss'

import { Carousel } from 'antd';


const Choose = () => {
    const [activeChoose, setActiveChoose] = useState(0);


    const contentStyle = {
        margin: 0,
        color: '#fff',
        textAlign: 'center',
        // background: '#364d79',
    };

    const chooseTitles = ['Buy 3 get 1 of them 50% OFF', 'Buy 3 Get 30% OFF'];
    // const chooseContent = ['这里是选项1的内容', '这里是选项2的内容', '这里是选项3的内容'];
    // 自定义内容放入一个数组中，与选项卡标题数量相同
    const chooseContent = [
        <div className="centertwos" style={{ marginTop: '20px' }}>
            {/* <div className="centertwozi">
                <img src="assets/centertwo.png" alt="" className="centertwozimg" />
                <div style={{ cursor: 'pointer' }}>View more ＞ </div>
            </div> */}
            <div className="centertwozio">
                <Carousel arrows infinite={false} infinite arrowSize={20}>
                    <div>
                        <h3 style={contentStyle} className="wwwwwwww">
                            <img src="assets/choose1.png" alt="" className="centerimgtwo" />
                            <img src="assets/choose2.png" alt="" className="centerimgtwo" />
                            <img src="assets/choose3.png" alt="" className="centerimgtwo" />
                            <img src="assets/choose4.png" alt="" className="centerimgtwo" />
                            <img src="assets/choose5.png" alt="" className="centerimgtwo" />
                            <img src="assets/choose6.png" alt="" className="centerimgtwo" />
                        </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle} className="wwwwwwww">
                            <img src="assets/choose4.png" alt="" className="centerimgtwo" />
                            <img src="assets/choose6.png" alt="" className="centerimgtwo" />
                            <img src="assets/choose5.png" alt="" className="centerimgtwo" />
                            <img src="assets/choose2.png" alt="" className="centerimgtwo" />
                            <img src="assets/choose1.png" alt="" className="centerimgtwo" />
                            <img src="assets/choose3.png" alt="" className="centerimgtwo" />
                        </h3>
                    </div>
                </Carousel>
            </div>
        </div>,
        <div className="centertwos" style={{ marginTop: '20px' }}>
            {/* <div className="centertwozi">
                <img src="assets/centertwo.png" alt="" className="centertwozimg" />
                <div style={{ cursor: 'pointer' }}>View more ＞ </div>
            </div> */}
            <div className="centertwozio">
                <Carousel arrows infinite={false} infinite arrowSize={20}>
                    <div>
                        <h3 style={contentStyle} className="wwwwwwww">
                            <img src="assets/choose7.png" alt="" className="centerimgtwo" />
                            <img src="assets/choose2.png" alt="" className="centerimgtwo" />
                            <img src="assets/choose5.png" alt="" className="centerimgtwo" />
                            <img src="assets/choose8.png" alt="" className="centerimgtwo" />
                            <img src="assets/choose3.png" alt="" className="centerimgtwo" />
                            <img src="assets/choose4.png" alt="" className="centerimgtwo" />
                        </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle} className="wwwwwwww">
                            <img src="assets/choose6.png" alt="" className="centerimgtwo" />
                            <img src="assets/choose7.png" alt="" className="centerimgtwo" />
                            <img src="assets/choose4.png" alt="" className="centerimgtwo" />
                            <img src="assets/choose2.png" alt="" className="centerimgtwo" />
                            <img src="assets/choose8.png" alt="" className="centerimgtwo" />
                            <img src="assets/centertwoimpt1.png" alt="" className="centerimgtwo" />
                        </h3>
                    </div>
                </Carousel>
            </div>
        </div>,
        // '这里是选项2的内容',
        // '这里是选项3的内容'
    ];

    const handleChooseClick = (index) => {
        setActiveChoose(index);
    };

    return (
        <div className="choose">
            <div className="choose-titles">
                {chooseTitles.map((title, index) => (
                    <div
                        key={index}
                        className={`choose-title ${index === activeChoose ? 'active' : ''}`}
                        onClick={() => handleChooseClick(index)}
                    >
                        {title}
                    </div>
                ))}
            </div>
            <div className="choose-content">
                {chooseContent.map((content, index) => (
                    <div key={index} className={`choose-pane ${index === activeChoose ? 'active' : ''}`}>
                        {typeof content === 'string' ? content : content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Choose;