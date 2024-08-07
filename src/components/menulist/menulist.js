import './menulist.scss';

import React, { useState } from 'react';
import { Radio, Tabs } from 'antd';
const SubMenuList = () => {
    const [mode, setMode] = useState('top');
    // const handleModeChange = (e) => {
    //     setMode(e.target.value);
    // };
    return (
        <div className='tab'>
            <Tabs
                defaultActiveKey="1"
                tabPosition={mode}
                style={{
                }}
                items={new Array(30).fill(null).map((_, i) => {
                    const id = String(i);
                    return {
                        label: `Tab-${id}`,
                        key: id,
                        disabled: i === 28,
                        children: `Content of tab ${id}`,
                    };
                })}
            />
        </div>
    );
};
export default SubMenuList;