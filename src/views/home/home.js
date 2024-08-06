import "./home.scss"

import React from 'react';
import { Button, Flex, Input } from 'antd';

import Menu from '../../components/menu/menu';
import Menulist from '../../components/menulist/menulist';

function Home() {

    const { Search } = Input;
    const onSearch = (value, _e, info) => console.log(info?.source, value);




    return (
        <>
            <img src="assets/toplog.png" alt="" className="logoimg" />

            <div className="top" >
                <div><img src="assets/imagetop.png" alt="" className="logoimgbot" /></div>
                <div>
                    <Search placeholder="input search text" onSearch={onSearch} enterButton style={{ width: '480px', height: '38px' }} />
                </div>
                <div>
                    <span><img src="assets/my.png" alt="" className="topendimg" /></span>
                    <span><img src="assets/shopcart.png" alt="" className="topendimg" />0</span>
                    <span><img src="assets/hart.png" alt="" className="topendimg" />0</span>
                    <span><img src="assets/erji.png" alt="" className="topendimg" /></span>
                    <span><img src="assets/diqiu.png" alt="" className="topendimg" /></span>
                </div>
            </div>

            {/* <Menu /> */}
            <Menulist />

            11111
        </>
    )
}

export default Home