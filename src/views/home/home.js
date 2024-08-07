import "./home.scss"

import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Flex, Input, Breadcrumb, Dropdown, Space } from 'antd';

import Menu from '../../components/menu/menu';
import Menulist from '../../components/menulist/menulist';

function Home() {

    const { Search } = Input;
    const onSearch = (value, _e, info) => console.log(info?.source, value);

    const items = [

        {
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            ),
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
            ),
            key: '1',
        },
        {
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    3nd menu item
                </a>
            ),
            key: '2',
        },
    ];



    return (
        <>
            <img src="assets/toplog.png" alt="" className="logoimg" />

            <div className="top" >
                <div><img src="assets/imagetop3.png" alt="" className="logoimgbot" /></div>
                <div>
                    <Search placeholder="input search text" onSearch={onSearch} enterButton style={{ width: '480px', height: '38px' }} />
                </div>
                <div className="topend">
                    <div style={{ cursor: 'pointer' }}>
                        <Dropdown menu={{ items, }}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <img src="assets/my.png" alt="" className="topendimg" />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>


                    <div style={{ cursor: 'pointer' }} className="topendshop">
                        <div><img src="assets/shopcart.png" alt="" className="topendimg" />0</div>

                        <div className="topendshopxia">
                            <div><img src="assets/shopcarts.png" alt="" className="topendimgs" /></div>
                            <div style={{ marginTop: '10px', marginBottom: '20px' }}>Bolsa de compras está vacía</div>
                            <div>¡Bienvenida/o de regreso! Si tienes artículos en tu bolsa de compras, los guardamos para ti.<a href="https://www.example.com">INICIAR SESIÓN</a> ahora a verlos, o revísalos en cualquier momento.</div>
                        </div>
                    </div>

                    <div style={{ cursor: 'pointer' }}><img src="assets/hart2.png" alt="" className="topendimg" />0</div>

                    <div style={{ cursor: 'pointer' }} className="topenderji">
                        <img src="assets/erji.png" alt="" className="topendimg" />
                        <div className="topenderjixia">
                            <div>1111</div>
                        </div>
                    </div>

                    <div style={{ cursor: 'pointer' }} className="topenddiqiu">
                        <img src="assets/diqiu.png" alt="" className="topendimg" />
                        <div className="topenddiqiuxia">
                            <div>222222222</div>
                        </div>
                    </div>

                </div>
            </div>

            {/* <Menu /> */}
            <Menulist />


            <div className="center">

            </div>
        </>
    )
}

export default Home