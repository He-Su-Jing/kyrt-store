import './asidefixed.scss'; // 导入相应的CSS文件
import React, { useState, useEffect } from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

const SlideOutSidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleClick = (event) => {
            const sidebarElement = document.querySelector('.sidebar-container');  // 获取侧边栏元素
            if (sidebarElement && !sidebarElement.contains(event.target)) {    // 如果点击的不是侧边栏元素，则关闭侧边栏
                setIsExpanded(false);
            }
        };

        // 添加事件监听器
        document.addEventListener('click', handleClick);

        // 清理事件监听器
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };


    const { Search } = Input;
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1677ff',
            }}
        />
    );
    const onSearch = (value, _e, info) => console.log(info?.source, value);

    return (
        <div className={`sidebar-container ${isExpanded ? 'expanded' : ''}`}>
            <div className="sidebar-content" >
                <div className="sidebar-content-fu">
                    <div onClick={toggleSidebar}>
                        <img src="assets/asideimg0.png" alt="" style={{ width: '', height: '310px' }} />
                    </div>
                    <div className='content-fuzi'>
                        <img src="assets/asideimg.png" alt="" style={{ width: '' }} />
                        <div className='content-fuzier'>
                            <Search
                                placeholder="Enter your email address"
                                allowClear
                                enterButton="SUBSCRIBE"
                                size="large"
                                onSearch={onSearch}
                            />
                            <div className='content-fuziers'>By registering, you agree to our <a href=''>Privacy & Cookie Policy</a> and <a href=''>Terms & Conditions</a> </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SlideOutSidebar;