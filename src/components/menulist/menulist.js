import './menulist.scss';

import React, { useState } from 'react';
import { Tabs } from 'antd';
import { Link } from 'react-router-dom';

const { TabPane } = Tabs;

const SubMenuList = () => {
    const [activeKey, setActiveKey] = useState('0'); // 当前活动标签页  
    const [hoverKey, setHoverKey] = useState(null); // 悬停的标签页  

    const onTabClick = (key) => {
        setActiveKey(key);
    };

    const onTabMouseEnter = (key) => {
        setHoverKey(key);
    };

    const onTabMouseLeave = () => {
        if (!document.querySelector('.hover-content-active:hover')) {
            setHoverKey(null);
        }
    };

    const clothingTypes = [
        "Dress",
        "Blouse",
        "Shirt",
        "Pants",
        "Jeans",
        "Jacket",
        "Coat",
        "Sweater",
        "Trousers",
        "Skirt",
        "Tunic",
        "Top",
        "Cardigan",
        "Sweatshirt",
        "Hoodie",
        "Vest",
        "Shorts",
        "Kilt",
        "Overalls",
        "Camisole",
        "Tank",
        "Halter",
        "Peasant Blouse",
        "Kimono",
        "Jumper",
        "Romper",
        "Bikini",
        "Onesie"
    ];
    const tabs = clothingTypes.map((type, index) => ({
        key: `${index + 1}`,
        title: type
    }));


    return (
        <div className='tabfuda'>
            <Tabs activeKey={activeKey} onTabClick={onTabClick} onMouseLeave={onTabMouseLeave}>
                {tabs.map(({ key, title }) => (
                    <TabPane
                        key={key}
                        tab={
                            <span onMouseEnter={() => onTabMouseEnter(key)}>
                                {title}
                            </span>
                        }
                    >
                        {/* 这里的内容根据需要定义 */}
                        {/* Content of {title} */}
                    </TabPane>
                ))}
            </Tabs>

            {hoverKey && (
                <div className="hover-content hover-content-active" onMouseEnter={() => setHoverKey(hoverKey)} onMouseLeave={onTabMouseLeave}>
                    <Tabs activeKey={hoverKey} onTabClick={onTabClick} tabPosition="left" style={{ height: 420 }}>
                        {tabs.map(({ key, title }) => (
                            <TabPane
                                key={key}
                                tab={
                                    <span onMouseEnter={() => onTabMouseEnter(key)}>
                                        {title}
                                    </span>
                                }
                            >
                                {/* 下方的内容根据需要定义 */}
                                {/* Content of {title} in Hover */}
                                <div className='tabcontent-fuda'>
                                    <div className='tabcontent-fuda-zione'>
                                        <div style={{ color: '#c44a01', fontSize: '14px', fontWeight: '600' }}>SHOP BY CATEGORY</div>
                                        <div className="scrollable-fuda-zione">
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone4.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone4.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone4.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone4.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone4.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone4.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone4.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone4.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone4.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone4.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone4.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>
                                            {/* <a href=''><img src="assets/centerone4.png" alt="" style={{ width: '80px', margin: '0 20px' }} /></a> */}

                                        </div>
                                    </div>
                                    <div className='tabcontent-fuda-zitwo'>
                                        <div style={{ fontSize: '14px', fontWeight: '600' }}>Women hair accessories</div>
                                        <div className="scrollable-fuda-zione">
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone1.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone1.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone1.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone1.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone1.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone1.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone1.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone1.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone1.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone1.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone1.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone1.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>
                                            <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone1.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link>

                                            {/* <a href=''><img src="assets/centerone1.png" alt="" style={{ width: '80px', margin: '0 20px' }} /></a> */}
                                        </div>
                                    </div>
                                </div>

                            </TabPane>
                        ))}
                    </Tabs>
                    {/* 可以增加其他内容 */}
                </div>
            )}
        </div>
    );
};

export default SubMenuList;