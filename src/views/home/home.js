import "./home.scss"

import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Flex, Input, Breadcrumb, Dropdown, Space, Carousel, Col, Row } from 'antd';

import Menu from '../../components/menu/menu';
import Menulist from '../../components/menulist/menulist';

function Home() {

    const { Search } = Input;
    const onSearch = (value, _e, info) => console.log(info?.source, value);

    // 我的小图标样式
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

    // 轮播图样式
    const contentStyle = {
        margin: 0,
        color: '#fff',
        textAlign: 'center',
        background: '#364d79',
    };

    // 地球小图标样式
    const menuItems = [

        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    Navigation
                </a>
            ),
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
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src="assets/erji.png" alt="" className="topendimgs" />
                                <div style={{ marginLeft: '10px' }}>
                                    <div>Customer Service</div>
                                    <div>What can we do for you?</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ cursor: 'pointer' }} className="topenddiqiu">
                        <img src="assets/diqiu.png" alt="" className="topendimg" />
                        <div className="topenddiqiuxia">
                            <div>
                                <div>Currency</div>
                                <select style={{ width: '200px', height: '30px', marginTop: '20px', border: '1px solid #ddd', backgroundColor: '#f7f8fa' }}>
                                    <option> SGD / S$ </option>
                                    <option> USD / $ </option>
                                    <option> EUR / € </option>
                                    <option> MYR / RM </option>
                                </select>

                                <div style={{ marginTop: '50px' }}><a href="javascript">International Site</a></div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* <Menu /> */}
            <Menulist />

            <div className="center">
                <div className="centerzi">
                    <div><img src="assets/lunbozuo.png" alt="" className="centerimg" /></div>
                    <div className="centerlunbo">
                        <Carousel arrows infinite={false} autoplay infinite>
                            <div>
                                <h3 style={contentStyle}><img src="assets/lunbo1.png" alt="" className="centerimglb" /></h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}><img src="assets/lunbo2.png" alt="" className="centerimglb" /></h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}><img src="assets/lunbo3.png" alt="" className="centerimglb" /></h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}><img src="assets/lunbo4.png" alt="" className="centerimglb" /></h3>
                            </div>
                        </Carousel>
                    </div>
                    <div className="centerend">
                        111111111
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home