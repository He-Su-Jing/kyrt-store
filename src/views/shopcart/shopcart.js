import "./shopcart.scss"
import React from 'react';
import Menulist from '../../components/menulist/menulist';
import ShoppingCart from '../../components/shopcart/cart/cart';

import { useState, useRef } from 'react';

// import { Dropdown, Space, } from 'antd';
import { Button, Flex, Input, Breadcrumb, Dropdown, Space, Carousel, Col, Row, FloatButton, Layout, Menu, theme, Radio, Select, Tree, Pagination, Slider, Switch, Collapse } from 'antd';



function Shopcart() {

    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const { Search } = Input;

    // 下拉
    const [size, setSize] = useState('middle');
    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

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


    // 商品数据
    const products = [
        {
            id: 1,
            name: "SHEIN EZwear Women Casual Short Sleeve T-Shirt With Cake Print For Spring And Summer ",
            sku: "sz2404036729247011",
            price: 299.99,
            thumbnail: "assetsshop/shopdaimgz.png",
            images: [
                "assetsshop/shopdaimgz.png",
                "assetsshop/shopdaimg1.png",
                "assetsshop/shopdaimg22.png",
                "assetsshop/shopdaimg1.png",
                "assetsshop/shopdaimg22.png"
            ],
            sizeInfo: [
                { size: "S", height: "160-165cm", weight: "50-55kg" },
                { size: "M", height: "165-170cm", weight: "55-60kg" },
                { size: "L", height: "170-175cm", weight: "60-65kg" }
            ]
        },
    ];

    return (
        <>
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
                        <div className="overlay" onClick={closeOverlay}>
                        </div>
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

            <div className="topahref">
                <a href="" className="topahrefzi">Home</a>&ensp;/&ensp;
                <a href="" className="topahrefzi">Women Apparel</a>&ensp;/&ensp;
                <a href="" className="topahrefzi">Women Clothing</a> /&ensp;
                <a href="" className="topahrefzi">Women Tops, Blouses & Tee</a> /&ensp;
                <a href="" className="topahrefzi">Women Tank Tops & Camis</a> /&ensp;
                <span className="topahrefzi">SHEIN MOD 3pcs Plain Knitted Fitted Tie-Up Cropped Camisole For Women</span>
            </div>

            <div className="imgshopdetail">
                <ShoppingCart products={products} />
            </div>

            {/* <div style={{ width: '65px', border: '1px solid pink' }}>
                4899999999999999999
            </div> */}
        </>
    )
}
export default Shopcart