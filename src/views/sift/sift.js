import "./sift.scss"
import React from 'react';

import Menulist from '../../components/menulist/menulist';
import Bottomtwo from '../../components/bottomtwo/bottomtwo';
// import Bottom from '../../components/bottom/bottom'; // 
import SlideOutSidebar from '../../components/asidefixed/asidefixed'; // 
import FilterComponent from '../../components/sift/siftfilter/siftfilter'; // 
import ColorPalette from '../../components/sift/colorpalette/colorpalette'; //

import ModalCart from '../../components/shopcart/modelcart/modelcart';


import { useState, useRef } from 'react';
import { Button, Flex, Input, Breadcrumb, Dropdown, Space, Carousel, Col, Row, FloatButton, Layout, Menu, theme, Radio, Select, Tree, Pagination, Slider, Switch, Collapse } from 'antd';

import { Link } from 'react-router-dom';

// 布局
const { Header, Content, Footer, Sider } = Layout;
const siderStyle = {
    overflow: 'auto',
    // height: '160vh',
    width: '200px',
    scrollbarWidth: 'thin',
    scrollbarColor: 'unset',
    background: '#ffffff'
};

// 下拉
const options = [];
for (let i = 10; i < 36; i++) {
    options.push({
        value: i.toString(36) + i,
        label: i.toString(36) + i,
    });
}
const handleChange = (value) => {
    console.log(`Selected: ${value}`);
};

// 分页
const showTotal = (total) => `Total ${total} items`;

// 树形
const treeData = [
    {
        title: 'Category ',
        key: '0-0',
        disableCheckbox: true,
        children: [
            {
                title: 'Women Clothing',
                key: '0-0-2',
                disableCheckbox: true,

                children: [
                    {
                        title: 'Women Dresses',
                        key: '0-0-2-0',
                    },
                    {
                        title: 'Women Dresses 22',
                        key: '0-0-2-1',
                    },
                ],
            },
            {
                title: 'World Apparel',
                key: '0-0-1',
                disableCheckbox: true,

                children: [
                    {
                        title: 'Arabian Wear',
                        key: '0-0-1-0',
                    },
                    {
                        title: 'Arabian Wear22',
                        key: '0-0-1-1',
                    },
                ],
            },


        ],
    },
]

function Sift() {
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const { Search } = Input;
    const [modalOpen, setModalOpen] = useState(false);


    // 复选框
    // 尺寸数据
    const sizeData = [
        { title: 'S', key: 's' },
        { title: 'M', key: 'm' },
        { title: 'L', key: 'l' },
        { title: 'XL', key: 'xl' },
    ];

    // 材料数据
    const materialData = [
        { title: 'Cotton', key: 'cotton' },
        { title: 'Ice Silk', key: 'ice-silk' },
        { title: 'Polyester', key: 'polyester' },
        { title: 'PU Leather', key: 'pu-leather' }, // PU皮革
        { title: 'Corduroy', key: 'corduroy' }, // 灯芯绒
        { title: 'Satin', key: 'satin' }, // 缎子
        { title: 'Mesh', key: 'mesh' }, // 网状物
        { title: 'Velvet', key: 'velvet' }, // 天鹅绒
        { title: 'Chiffon', key: 'chiffon' }, // 薄绸
        { title: 'Lace', key: 'lace' }, // 花边
        { title: 'Linen', key: 'linen' }, // 亚麻布
        { title: 'Seersucker', key: 'seersucker' }, // 血清素粗花呢
        { title: 'Fabric', key: 'fabric' }, // 织物
        { title: 'Aluminum Alloy', key: 'aluminum-alloy' }, // 铝合金
    ];

    // 详细数据
    const detailesData = [
        { title: 'Pocket', key: 'Pocket' },
        { title: 'Embroidery', key: 'Embroidery' },
        { title: ' Drawstring', key: ' Drawstring' },
        { title: ' Fringe', key: ' Fringe' },
        { title: ' Cut Out', key: ' Cut Out' },
        { title: ' Zipper', key: ' Zipper' },
        { title: ' Chain', key: ' Chain' },
        { title: ' Button Front', key: ' Button Front' },
        { title: ' Criss Cross', key: ' Criss Cross' },
    ];

    // 用于存储每个筛选组件的选中状态
    const [checkedKeysSize, setCheckedKeysSize] = useState([]);
    const [checkedKeysMaterial, setCheckedKeysMaterial] = useState([]);
    const [checkedKeysDetails, setCheckedKeysDetails] = useState([]);

    // 尺寸筛选的回调函数
    const onCheckSize = (checkedKeys, info) => {
        console.log('Size onCheck', checkedKeys, info);
        setCheckedKeysSize(checkedKeys);
    };

    // 材料筛选的回调函数
    const onCheckMaterial = (checkedKeys, info) => {
        console.log('Material onCheck', checkedKeys, info);
        setCheckedKeysMaterial(checkedKeys);
    };

    // 详细筛选
    const onCheckDetails = (checkedKeys, info) => {
        console.log('Details onCheck', checkedKeys, info);
        setCheckedKeysDetails(checkedKeys);
    };

    // 颜色筛选
    const [selectedColor, setSelectedColor] = useState(null);
    const handleSelectColor = (color) => {
        setSelectedColor(color);
        console.log("color", color);
    };
    const colorsData = [
        { name: 'Pink', hex: '#FFC0CB' },
        { name: 'Blue', hex: '#6495ED' },
        { name: 'Yellow', hex: '#FFFF00' },
        { name: 'Red', hex: '#FF0000' },
        { name: 'white', hex: '#000000' },
        { name: 'Purple', hex: '#800080' },
        { name: 'Orange', hex: '#FFA500' },
        { name: 'Green', hex: '#008000' },
        { name: 'Gray', hex: '#808080' },
        { name: 'Cyan', hex: '#00FFFF' },
        { name: 'Brown', hex: '#A52A2A' },
    ];


    // 单选框
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    // 滑动输入条
    // const [disabled, setDisabled] = useState(false);
    // const onChange = (checked) => {
    //     setDisabled(checked);
    // };

    // 树形
    const [expandedKeys, setExpandedKeys] = useState(['0-0-0', '0-0-1']);
    const [checkedKeys, setCheckedKeys] = useState(['0-0-0']);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [autoExpandParent, setAutoExpandParent] = useState(true);
    const onExpand = (expandedKeysValue) => {
        console.log('onExpand', expandedKeysValue);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        setExpandedKeys(expandedKeysValue);
        setAutoExpandParent(false);
    };
    const onCheck = (checkedKeysValue) => {
        console.log('onCheck', checkedKeysValue);
        setCheckedKeys(checkedKeysValue);
    };
    const onSelect = (selectedKeysValue, info) => {
        console.log('onSelect', info);
        setSelectedKeys(selectedKeysValue);
    };


    // 下拉
    const [size, setSize] = useState('middle');
    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    // 这个是布局
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

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


    const tabsData = [
        {
            id: 1,
            label: 'Women',
            products: [
                { id: 1, name: 'deessdeessdeessdeessdeessdeessdeessdeessdeessdeessd', price: 11.38, img: 'assetssift/siftimg1.png' },
                { id: 2, name: 'Pants', price: 40, img: 'assetssift/siftimg2.png' },
                { id: 3, name: 'Pants', price: 40, img: 'assetssift/siftimg3.png' },
                { id: 4, name: 'Pants', price: 40, img: 'assetssift/siftimg4.png' },
                { id: 5, name: 'deessdeessdeessdeessdeessdeessdeessdeessdeessdeessd', price: 40, img: 'assetssift/siftimg5.png' },
                { id: 6, name: 'Pants', price: 40, img: 'assetssift/siftimg6.png' },
                { id: 7, name: 'Pants', price: 40, img: 'assetssift/siftimg7.png' },
                { id: 8, name: 'Pants', price: 40, img: 'assetssift/siftimg8.png' },
                { id: 9, name: 'Pants', price: 40, img: 'assetssift/siftimg4.png' },
                { id: 10, name: 'deessdeessdeessdeessdeessdeessdeessdeessdeessdeessd', price: 40, img: 'assetssift/siftimg1.png' },
                { id: 11, name: 'Pants', price: 40, img: 'assetssift/siftimg2.png' },
                { id: 12, name: 'Pants', price: 40, img: 'assetssift/siftimg3.png' },
                // { id: 13, name: 'Pants', price: 40, img: 'assetssift/siftimg3.png' },
                // { id: 14, name: 'Pants', price: 40, img: 'assetssift/siftimg2.png' },
                // { id: 15, name: 'Pants', price: 40, img: 'assetssift/siftimg7.png' },
                // { id: 16, name: 'Pants', price: 40, img: 'assetssift/siftimg8.png' },
            ],
        },
    ];

    // 商品数据
    const products = [
        {
            id: 1,
            name: "SHEIN EZwear Women Casual Short Sleeve T-Shirt With Cake Print For Spring And Summer",
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
                { jiankuan: "50", yichang: "60cm", xiongwei: "70-80" },
                { jiankuan: "55", yichang: "65", xiongwei: "80-90" },
                { jiankuan: "60", yichang: "70", xiongwei: "90-100" }
            ],
            bodyInfo: [
                { size: "S", height: "160-165cm", weight: "50-55kg" },
                { size: "M", height: "165-170cm", weight: "55-60kg" },
                { size: "L", height: "170-175cm", weight: "60-65kg" }
            ],
            videoThumbnail: "assetsshop/video.png", // 视频缩略图
            videoUrl: "https://player.vimeo.com/progressive_redirect/playback/995286556/container/2065142c-5b5d-44b5-b276-d97fe3919b28/eb237f3e-4b499127?expires=1725371065&loc=external&oauth2_token_id=1769078295&session_id=dc21dd01f50b375333dd57839aadfd6d3ea462f81725284545&signature=fa4832836b5f56bfa6a270247db402748c08121ad0eef64f8d452344db6ff0c7"
        },
    ];

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };




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

            <div className="siftcontent">
                <div className="siftcontenttop">
                    <div className="siftcontenttopone">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <div style={{ color: '$767676' }}>home</div>
                        </Link>
                    </div> /
                    <div className="siftcontenttopone">diess</div> /
                    <div className="siftcontenttopone">serger werg</div>
                </div>

                <div className="siftcontentctr">
                    <Layout hasSider>
                        <Sider style={siderStyle}>
                            <div className="demo-logo-vertical" />
                            <div style={{ width: '180px' }}>
                                <div style={{ fontSize: '14px', color: '#222222', fontWeight: '600', paddingBottom: '20px', borderBottom: '1px solid #f1f1f1' }}>
                                    Filter
                                </div>


                                <div className="shuxingkj">
                                    <Tree
                                        checkable
                                        onExpand={onExpand}
                                        expandedKeys={expandedKeys}
                                        autoExpandParent={autoExpandParent}
                                        onCheck={onCheck}
                                        checkedKeys={checkedKeys}
                                        onSelect={onSelect}
                                        selectedKeys={selectedKeys}
                                        treeData={treeData}
                                    />
                                </div>


                                <FilterComponent
                                    title="Size"
                                    data={sizeData}
                                    onCheck={onCheckSize}
                                    checkedKeys={checkedKeysSize}
                                />


                                <div>
                                    {/* <div style={{ fontSize: '14px', color: '#222222', fontWeight: '600', paddingTop: '20px', paddingBottom: '15px', display: 'flex', justifyContent: 'space-between' }}>
                                        <div>Color</div>
                                        <div>--</div>
                                    </div> */}
                                    <ColorPalette
                                        colors={colorsData}
                                        onSelectColor={handleSelectColor}
                                    />
                                    {/* {selectedColor && <div>Selected Color: {selectedColor}</div>} */}
                                </div>

                                {/* <FilterComponent
                                    title="Color"
                                    data={colorData}
                                    onCheck={onCheckColor}
                                    checkedKeys={checkedKeysColor}
                                /> */}
                                <FilterComponent
                                    title="Material"
                                    data={materialData}
                                    onCheck={onCheckMaterial}
                                    checkedKeys={checkedKeysMaterial}
                                />

                                <FilterComponent
                                    title="Details"
                                    data={detailesData}
                                    onCheck={onCheckDetails}
                                    checkedKeys={checkedKeysDetails}
                                />




                            </div>
                        </Sider>

                        <Layout>
                            <Content style={{}}>

                                <div style={{ textAlign: 'center', background: '#fff', borderRadius: borderRadiusLG, borderRadius: '0', textAlign: '0' }}>

                                    <div style={{ marginLeft: '50px', marginBottom: '20px' }}>
                                        <Select
                                            size={size}
                                            defaultValue="Sort By  Recommend"
                                            onChange={handleChange}
                                            style={{
                                                width: 200,
                                            }}
                                            options={options}
                                        />
                                    </div>


                                    <div className="tabrecmd-content">
                                        {/* 假设我们只关心tabsData数组中的第一个标签 */}
                                        {tabsData.length > 0 && (
                                            <div key={tabsData[0].id} className="tabrecmd-pane">
                                                <div className="productfu" style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '50px' }}>
                                                    {tabsData[0].products.map(product => (
                                                        <div key={product.id} className="product-item" style={{ width: '25%', boxSizing: 'border-box', paddingLeft: '10px' }}>
                                                            <Link to="/shopcart" style={{ textDecoration: 'none' }}>
                                                                <img src={product.img} alt={product.name} style={{ width: '100%' }} />
                                                            </Link>
                                                            <div>
                                                                <div className='product-itemtit'>{product.name}</div>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                    <div className='product-itemmay'>${product.price.toFixed(2)}</div>



                                                                    <div onClick={handleModalOpen}>
                                                                        <img src="assets/addshop.png" alt="" style={{ width: '25px' }} />
                                                                    </div>

                                                                    {modalOpen && (
                                                                        <ModalCart isOpen={modalOpen} onmodelClose={handleModalClose} products={products}>
                                                                        </ModalCart>
                                                                    )}

                                                                    {/* <div className='product-itemimg'><img src="assets/addshop.png" alt="Add to cart" style={{ width: '25px' }} /></div> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Content>
                        </Layout>
                    </Layout>
                </div>
            </div>

            <div style={{ width: '500px', margin: '30px auto', }}>
                <Pagination size="small" total={50} showTotal={showTotal} />
            </div>

            <div className="threeimg" >
                <img src="assetssift/siftimgbot.png" alt="" className="threeimgs" />
            </div>
            <div className="centerthreesift" style={{ marginTop: '20px' }}>
                <div className="centertwozio">
                    <Carousel arrows infinite={false} infinite arrowSize={20}>
                        <div>
                            <h3 style={contentStyle} className="wwwwwwww">
                                <img src="assetssift/siftimgbot1.png" alt="" className="centerimgtwo" />
                                <img src="assetssift/siftimgbot2.png" alt="" className="centerimgtwo" />
                                <img src="assetssift/siftimgbot3.png" alt="" className="centerimgtwo" />
                                <img src="assetssift/siftimgbot4.png" alt="" className="centerimgtwo" />
                                <img src="assetssift/siftimgbot5.png" alt="" className="centerimgtwo" />
                            </h3>
                        </div>
                        <div>
                            <h3 style={contentStyle} className="wwwwwwww">
                                <img src="assetssift/siftimgbot3.png" alt="" className="centerimgtwo" />
                                <img src="assetssift/siftimgbot5.png" alt="" className="centerimgtwo" />
                                <img src="assetssift/siftimgbot1.png" alt="" className="centerimgtwo" />
                                <img src="assetssift/siftimgbot2.png" alt="" className="centerimgtwo" />
                                <img src="assetssift/siftimgbot4.png" alt="" className="centerimgtwo" />
                            </h3>
                        </div>
                    </Carousel>
                </div>

            </div>

            {/* <Bottom /> */}


            <Bottomtwo />


            <SlideOutSidebar />

        </>
    )
}
export default Sift