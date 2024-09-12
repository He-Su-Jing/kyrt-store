import "./home.scss"

import React from 'react';
import { useState, useRef } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Flex, Input, Breadcrumb, Dropdown, Space, Carousel, Col, Row, FloatButton } from 'antd';


import Menu from '../../components/menu/menu';
import Menulist from '../../components/menulist/menulist';
import Choose from '../../components/choose/choose';
import ProductTabs from '../../components/recommend/recommend'; // 
// import Bottom from '../../components/bottom/bottom'; 
import Bottomtwo from '../../components/bottomtwo/bottomtwo';
import SlideOutSidebar from '../../components/asidefixed/asidefixed'; // 

function Home() {
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const { Search } = Input;



    const onSearch = (value, _e, info) => {
        console.log(info?.source, value);
    }

    const toggleOverlay = () => {
        setOverlayVisible(true);
        document.body.style.overflow = 'hidden';
    };

    const closeOverlay = () => {
        setOverlayVisible(false);
        document.body.style.overflow = 'auto';
    };

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

    const contentStyle = {
        margin: 0,
        color: '#fff',
        textAlign: 'center',
        // background: '#364d79',
    };

    return (
        <div style={{
            height: '50vh',
            padding: 10,
        }}>
            <img src="assets/toplog.png" alt="" className="logoimg" />
            {/* <div class="text-3xl font-bold underline text-rose-300">999999999999999999999999</div> */}

            {/* <div class="flex justify-between items-center margin-auto max-width-1450 width-92"> */}
            <div className="top" >
                <div><img src="assets/imagetop3.png" alt="" className="logoimgbot" /></div>
                <div className="inputsch">
                    <div className="search-container">
                        <Search
                            placeholder="input search text"
                            onSearch={onSearch}
                            enterButton
                            style={{ width: '180%', height: '38px' }}
                            onFocus={toggleOverlay} /* 当输入框获得焦点时显示遮罩层 */
                            onBlur={closeOverlay} /* 当输入框失去焦点时隐藏遮罩层 */
                        />
                    </div>
                    {isOverlayVisible && (
                        <div class="fixed top15 left-0 w-full h-full bgtouming z-50" className="overlay" onClick={closeOverlay}>
                        </div>
                        // <div className="overlay" onClick={closeOverlay}>
                        // </div>
                    )}

                    {isOverlayVisible && (
                        <div className="overlaywhite" onClick={closeOverlay}>
                            <div style={{ marginBottom: '20px', fontWeight: '600' }}>Search Discovery</div>

                            <div style={{ display: 'flex', fontSize: '12px' }}>
                                <div>
                                    dress
                                    <img src="assets/hort.png" alt="" style={{ width: '17px', marginRight: '5px' }} />
                                </div>
                                <div>
                                    Maija
                                    <img src="assets/hort.png" alt="" style={{ width: '17px', marginRight: '5px' }} />
                                </div>
                            </div>

                        </div>
                    )}

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
                        <div style={{ color: '#A4003B', fontWeight: '600', marginBottom: '5px' }}>
                            <img src="assets/hort.png" alt="" style={{ width: '17px', marginRight: '5px' }} />
                            Weekly Wonders
                        </div>
                        <div className="centerendzi">
                            <div>
                                <img src="assets/lunboy1.png" alt="" className="centerimglby" />
                                <div className="centerimglbyqian">s$1.91</div>
                            </div>
                            <div>
                                <img src="assets/lunboy2.png" alt="" className="centerimglby" />
                                <div className="centerimglbyqian2">s$1.91</div>
                            </div>
                            <div>
                                <img src="assets/lunboy3.png" alt="" className="centerimglby" />
                                <div className="centerimglbyqian3">s$1.91</div>
                            </div>
                        </div>
                        <div className="centerendzi">
                            <div>
                                <img src="assets/lunboy4.png" alt="" className="centerimglby" />
                                <div className="centerimglbyqian">s$1.91</div>
                            </div>
                            <div>
                                <img src="assets/lunboy5.png" alt="" className="centerimglby" />
                                <div className="centerimglbyqian2">s$1.91</div>
                            </div>
                            <div>
                                <img src="assets/lunboy6.png" alt="" className="centerimglby" />
                                <div className="centerimglbyqian3">s$1.91</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="centerone">
                <div className="centeronez"><img src="assets/centerone1.png" alt="" className="centeronezimg" /></div>
                <div className="centeronez"><img src="assets/centerone2.png" alt="" className="centeronezimg" /></div>
                <div className="centeronez"><img src="assets/centerone3.png" alt="" className="centeronezimg" /></div>
                <div className="centeronez"><img src="assets/centerone4.png" alt="" className="centeronezimg" /></div>
                <div className="centeronez"><img src="assets/centerone5.png" alt="" className="centeronezimg" /></div>
                <div className="centeronez"><img src="assets/centerone6.png" alt="" className="centeronezimg" /></div>
                <div className="centeronez"><img src="assets/centerone7.png" alt="" className="centeronezimg" /></div>
            </div>

            <div className="centerone" style={{ marginTop: '20px' }}>
                <div className="centeronez"><img src="assets/centerone6.png" alt="" className="centeronezimg" /></div>
                <div className="centeronez"><img src="assets/centerone5.png" alt="" className="centeronezimg" /></div>
                <div className="centeronez"><img src="assets/centerone7.png" alt="" className="centeronezimg" /></div>
                <div className="centeronez"><img src="assets/centerone3.png" alt="" className="centeronezimg" /></div>
                <div className="centeronez"><img src="assets/centerone2.png" alt="" className="centeronezimg" /></div>
                <div className="centeronez"><img src="assets/centerone1.png" alt="" className="centeronezimg" /></div>
                <div className="centeronez"><img src="assets/centerone2.png" alt="" className="centeronezimg" /></div>
            </div>

            <div className="centertwo" style={{ marginTop: '20px' }}>
                <div className="centertwozi">
                    <img src="assets/centertwo.png" alt="" className="centertwozimg" />
                    <div style={{ cursor: 'pointer' }}>View more ＞ </div>
                </div>


                <div className="centertwozio">
                    <Carousel arrows infinite={false} infinite arrowSize={20}>
                        <div>
                            <h3 style={contentStyle} className="wwwwwwww">
                                <img src="assets/centertwoimpt4.png" alt="" className="centerimgtwo" />
                                <img src="assets/centertwoimpt1.png" alt="" className="centerimgtwo" />
                                <img src="assets/centertwoimpt2.png" alt="" className="centerimgtwo" />
                                <img src="assets/centertwoimpt5.png" alt="" className="centerimgtwo" />
                                <img src="assets/centertwoimpt6.png" alt="" className="centerimgtwo" />
                                <img src="assets/centertwoimpt3.png" alt="" className="centerimgtwo" />
                            </h3>
                        </div>
                        <div>
                            <h3 style={contentStyle} className="wwwwwwww">
                                <img src="assets/centertwoimpt6.png" alt="" className="centerimgtwo" />
                                <img src="assets/centertwoimpt3.png" alt="" className="centerimgtwo" />
                                <img src="assets/centertwoimpt1.png" alt="" className="centerimgtwo" />
                                <img src="assets/centertwoimpt4.png" alt="" className="centerimgtwo" />
                                <img src="assets/centertwoimpt7.png" alt="" className="centerimgtwo" />
                                <img src="assets/centertwoimpt5.png" alt="" className="centerimgtwo" />
                            </h3>
                        </div>
                        {/* <div>
                            <h3 style={contentStyle}><img src="assets/lunbo3.png" alt="" className="centerimgtwo" /></h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}><img src="assets/lunbo4.png" alt="" className="centerimgtwo" /></h3>
                        </div> */}
                    </Carousel>
                </div>

            </div>

            <div>
                <Choose />
            </div>

            <div className="threeimg" >
                <img src="assets/centerthree.png" alt="" className="threeimgs" />
            </div>
            <div className="centerthree" style={{ marginTop: '20px' }}>
                <div className="centertwozio">
                    <Carousel arrows infinite={false} infinite arrowSize={20}>
                        <div>
                            <h3 style={contentStyle} className="wwwwwwww">
                                <img src="assets/centerthree1.png" alt="" className="centerimgtwo" />
                                <img src="assets/centerthree2.png" alt="" className="centerimgtwo" />
                                <img src="assets/centerthree3.png" alt="" className="centerimgtwo" />
                                <img src="assets/centerthree4.png" alt="" className="centerimgtwo" />
                                <img src="assets/centerthree5.png" alt="" className="centerimgtwo" />
                                {/* <img src="assets/centerthree6.png" alt="" className="centerimgtwo" /> */}
                            </h3>
                        </div>
                        <div>
                            <h3 style={contentStyle} className="wwwwwwww">
                                <img src="assets/centerthree9.png" alt="" className="centerimgtwo" />
                                <img src="assets/centerthree8.png" alt="" className="centerimgtwo" />
                                <img src="assets/centerthree6.png" alt="" className="centerimgtwo" />
                                <img src="assets/centerthree7.png" alt="" className="centerimgtwo" />
                                <img src="assets/centerthree10.png" alt="" className="centerimgtwo" />
                                {/* <img src="assets/centerthree4.png" alt="" className="centerimgtwo" /> */}
                            </h3>
                        </div>
                    </Carousel>
                </div>

            </div>

            <div className="threeimg" >
                <img src="assets/fourimg.png" alt="" className="threeimgs" />
            </div>
            <div className="centerthree" style={{ marginTop: '20px' }}>
                <div className="centertwozio">
                    <Carousel arrows infinite={false} infinite arrowSize={20}>
                        <div>
                            <h3 style={contentStyle} className="wwwwwwww">
                                <img src="assets/centerfour1.png" alt="" className="centerimgtwo" />
                                <img src="assets/centerfour2.png" alt="" className="centerimgtwo" />
                                <img src="assets/centerfour3.png" alt="" className="centerimgtwo" />
                                <img src="assets/centerfour4.png" alt="" className="centerimgtwo" />
                                <img src="assets/centerfour5.png" alt="" className="centerimgtwo" />
                            </h3>
                        </div>
                        <div>
                            <h3 style={contentStyle} className="wwwwwwww">
                                <img src="assets/centerfour6.png" alt="" className="centerimgtwo" />
                                <img src="assets/centerfour7.png" alt="" className="centerimgtwo" />
                                <img src="assets/centerfour8.png" alt="" className="centerimgtwo" />
                                <img src="assets/centerfour9.png" alt="" className="centerimgtwo" />
                                <img src="assets/centerthree10.png" alt="" className="centerimgtwo" />
                            </h3>
                        </div>
                    </Carousel>
                </div>

            </div>

            <div className="threeimg" >
                <img src="assets/recommend.png" alt="" className="threeimgs" />
            </div>
            <ProductTabs />

            <div className="threeimg" >
                <img src="assets/stylegallery.png" alt="" className="threeimgs" />
            </div>

            <div className="centergallery" style={{ marginTop: '20px' }}>
                <div className="centertwozio">
                    <div>
                        <h3 style={contentStyle} className="wwwwwwww">
                            <img src="assets/stylegallery1.png" alt="" className="centerimgtwo" />
                            <img src="assets/stylegallery2.png" alt="" className="centerimgtwo" />
                            <img src="assets/stylegallery3.png" alt="" className="centerimgtwo" />
                            <img src="assets/stylegallery4.png" alt="" className="centerimgtwo" />
                            <img src="assets/stylegallery5.png" alt="" className="centerimgtwo" />
                        </h3>
                    </div>
                </div>

            </div>

            <div className="tenlistfu">
                <div className="tenlist" style={{ backgroundColor: 'rgb(42,66,83)' }}>
                    Fall Style
                </div>
                <div className="tenlist" style={{ backgroundColor: 'rgb(121,48,75)' }}>
                    Cozy Comforts
                </div>
                <div className="tenlist" style={{ backgroundColor: 'rgb(215,201,189)' }}>
                    Casual Lookbook
                </div>
                <div className="tenlist" style={{ backgroundColor: 'rgb(220,202,215)' }}>
                    Electric Nights
                </div>
                <div className="tenlist" style={{ backgroundColor: 'rgb(166,123,96)' }}>
                    Time To Shine
                </div>
                <div className="tenlist" style={{ backgroundColor: 'rgb(211,196,175)' }}>
                    Urban Chic
                </div>
                <div className="tenlist" style={{ backgroundColor: 'rgb(189,141,142)' }}>
                    Chic & Chill
                </div>
                <div className="tenlist" style={{ backgroundColor: 'rgb(213,187,162)' }}>
                    Denim Guide
                </div>
                <div className="tenlist" style={{ backgroundColor: 'rgb(136,117,111)' }}>
                    Highstreet Fashion
                </div>
                <div className="tenlist" style={{ backgroundColor: 'rgb(47,53,75)' }}>
                    Date Wear
                </div>
            </div>

            {/* <Bottom /> */}
            <Bottomtwo />


            <SlideOutSidebar />

            <FloatButton.BackTop />


        </div>
    )
}

export default Home