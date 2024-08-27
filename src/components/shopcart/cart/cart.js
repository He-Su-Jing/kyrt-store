import "./cart.scss"

import React, { useState } from 'react';

import Modal from '../model/model';
import { Affix, Button, Flex, Tooltip, Rate, Slider, Switch, Tabs } from 'antd';
import { SearchOutlined, HeartOutlined } from '@ant-design/icons';

import FilterComponent from '../../sift/siftfilter/siftfilter'; //

const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: 'All Reviews',
        children: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: 'Image',
        children: 'Content of Tab Pane 2',
    },
];


const ShoppingCart = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState(products[0]);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setCurrentImageIndex(0); // 点击商品时重置图片索引
    };

    const handleImageIndexChange = (index) => {
        setCurrentImageIndex(index);
    };

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleAddToCart = () => {
        console.log('Add to cart:', selectedProduct);
        // 实际的添加到购物车逻辑
    };

    const sizeData = [
        { title: 'werrrrrrrrrrr', key: '1' },
        { title: 'whhhhhhhhe', key: '2' },
        { title: 'ffffffffffg', key: '3' },
        { title: 'werrrrrrrrrrr', key: '4' },
        { title: 'werrrrrrrrrrr', key: '5' },
        { title: 'werrrrrrrrrrr', key: '6' },
        { title: 'werrrrrrrrrrr', key: '7' },
        { title: 'werrrrrrrrrrr', key: '8' },
        { title: 'werrrrrrrrrrr', key: '9' },
        { title: 'werrrrrrrrrrr', key: '10' },
    ];
    const [checkedKeysSize, setCheckedKeysSize] = useState([]);
    // 尺寸筛选的回调函数
    const onCheckSize = (checkedKeys, info) => {
        console.log('Size onCheck', checkedKeys, info);
        setCheckedKeysSize(checkedKeys);
    };

    const [disabled, setDisabled] = useState(false);
    const onChange = (checked) => {
        setDisabled(checked);
    };

    // Rating选择状态
    const [selectedRating, setSelectedRating] = useState('');
    // 产品属性选择状态
    const [selectedProductAttribute, setSelectedProductAttribute] = useState('');
    // 排序方式选择状态
    const [selectedSortMethod, setSelectedSortMethod] = useState('');

    // 处理Rating选择变化的函数
    const handleRatingChange = (event) => {
        setSelectedRating(event.target.value);
        const value = event.target.value;
        const text = event.target.options[event.target.selectedIndex].text;
        console.log(`Rating: Value - ${value}, Text - ${text}`);
        setSelectedRating(value);
    };

    // 处理产品属性（颜色或尺寸）选择变化的函数
    const handleProductAttributeChange = (event) => {
        setSelectedProductAttribute(event.target.value);
        const value = event.target.value;
        const text = event.target.options[event.target.selectedIndex].text;
        console.log(`Product Attribute: Value - ${value}, Text - ${text}`);
        setSelectedProductAttribute(value);
    };

    // 处理排序方式选择变化的函数
    const handleSortMethodChange = (event) => {
        setSelectedSortMethod(event.target.value);
        const value = event.target.value;
        const text = event.target.options[event.target.selectedIndex].text;
        console.log(`Sort Method: Value - ${value}, Text - ${text}`);
        setSelectedSortMethod(value);
    };

    return (
        <div className="shopping-cart">
            <div className="selected-product">
                <div className="product-image">
                    <div className="thumbnail-bar">
                        {selectedProduct.images.map((image, index) => (
                            <div>
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index}`}
                                    onMouseEnter={() => handleImageIndexChange(index)} //  onMouseEnter / onClick
                                    style={{ cursor: 'pointer', border: currentImageIndex === index ? '1px solid #222222' : '1px solid transparent', padding: '1px' }} // 鼠标悬停时高亮
                                />
                            </div>

                        ))}
                    </div>
                </div>

                <div className="lunbofuimg">
                    <div style={{ width: '100%' }}>
                        <img src={selectedProduct.images[currentImageIndex]} alt="Product" style={{ width: '100%' }} />

                    </div>

                    <Button shape="circle" className="lunbobutzi1" onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}>
                        &lt;
                    </Button>

                    <Button shape="circle" className="lunbobutzi2" onClick={() => setCurrentImageIndex(Math.min(selectedProduct.images.length - 1, currentImageIndex + 1))}>
                        &gt;
                    </Button>

                    {/* <button className="lunbobutzi1" onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}>&lt;</button>
                    <button className="lunbobutzi2" onClick={() => setCurrentImageIndex(Math.min(selectedProduct.images.length - 1, currentImageIndex + 1))}>&gt;</button> */}

                    <div className="pinglunfu">
                        <div className="pinglunfutit">Customer Reviews</div>

                        <div className="pinglunfenshu">
                            <div className="pinglunfenshut">4.91 <span style={{ marginBottom: '10px' }}><Rate defaultValue={4} /></span></div>

                            <div style={{ marginTop: '8px', display: 'flex', fontSize: '14px' }}>
                                <div style={{ paddingTop: '5px' }}>Small</div>
                                <div style={{ width: '30%', marginLeft: '20px' }}><Slider defaultValue={30} disabled={disabled} /> </div>
                            </div>
                            <div style={{ marginTop: '0px', display: 'flex', fontSize: '14px' }}>
                                <div style={{ paddingTop: '5px' }}>True to Size</div>
                                <div style={{ width: '30%', marginLeft: '20px' }}><Slider defaultValue={60} disabled={disabled} /> </div>
                            </div>
                            <div style={{ marginTop: '0px', display: 'flex', fontSize: '14px' }}>
                                <div style={{ paddingTop: '5px' }}>Large</div>
                                <div style={{ width: '30%', marginLeft: '20px' }}><Slider defaultValue={70} disabled={disabled} /> </div>
                            </div>
                        </div>

                        {/* <Tabs defaultActiveKey="1" items={items} onChange={onChange} /> */}

                        <div className="pinglunsifi">
                            <span style={{ fontSize: '14px', color: '#000000' }}>
                                Rating
                                <select value={selectedRating} onChange={handleRatingChange} style={{ padding: '10px', border: '1px solid #e5e5e5', margin: '0 10px' }}>
                                    <option value="">All</option>
                                    <option value="1">1 Star</option>
                                    <option value="2">2 Stars</option>
                                    <option value="3">3 Stars</option>
                                </select>
                            </span>
                            <span style={{ fontSize: '14px', color: '#000000' }}>
                                Filter by Product (Color or Size)
                                <select value={selectedProductAttribute} onChange={handleProductAttributeChange} style={{ padding: '10px', border: '1px solid #e5e5e5', margin: '0 10px' }}>
                                    <option value="">All</option>
                                    <option value="aaa">pink</option>
                                    <option value="aaa">blue</option>
                                    <option value="bbb">S</option>
                                    <option value="ccc">M</option>
                                    <option value="ccc">L</option>
                                </select>
                            </span>
                            <span style={{ fontSize: '14px', color: '#000000' }}>
                                Sort by
                                <select value={selectedSortMethod} onChange={handleSortMethodChange} style={{ padding: '10px', border: '1px solid #e5e5e5', margin: '0 10px' }}>
                                    <option value="">Recommend</option>
                                    <option value="aaattt">Most Recent to Oldest</option>
                                </select>
                            </span>

                        </div>

                        <div className="pinglunsifitit">
                            <span>Suitable size (1)</span>
                            <span>no smell (1)</span>
                            <span>good fabric material (1)</span>
                            <span>soft (2)</span>
                            <span>love (1)</span>
                        </div>

                        <div className="pinglunzhengwen">
                            <div>aseg</div>
                            <div>****</div>
                            <div>sddgfmmmmm</div>
                            <div>asffffffffffffffffffffffffffffffffff</div>
                        </div>



                    </div>

                </div>

                <div className="product-details">
                    <div className="shoptitle">{selectedProduct.name}</div>
                    <div style={{ color: '#999999', fontSize: '12px', marginBottom: '10px' }}> SKU:{selectedProduct.sku}</div>
                    <div style={{ color: '#FA6338', fontSize: '24px', fontWeight: '600', marginBottom: '30px' }}>${selectedProduct.price}</div>

                    <div style={{ width: '100%', height: '1px', border: '1px dashed #e5e5e5', marginBottom: '30px' }}></div>

                    <div style={{ color: '#222222', fontSize: '16px', marginBottom: '20px', fontWeight: '600' }}>Size</div>
                    <div className="sizechose">
                        <div className="sizechosezi">S</div>
                        <div className="sizechosezi">M</div>
                        <div className="sizechosezi">L</div>
                        <div className="sizechosezi">XL</div>
                    </div>

                    <div onClick={handleModalOpen} style={{ fontSize: '12px', color: '#2d68a8', cursor: 'pointer', marginBottom: '20px' }}>
                        <img src="assetsshop/jianpan.png" alt="" style={{ width: '20px' }} />
                        Size Guide
                    </div>
                    {/* <button onClick={handleModalOpen}>选择尺码</button> */}
                    {/* Modal 组件和其它逻辑 */}
                    {modalOpen && (
                        <Modal isOpen={modalOpen} onClose={handleModalClose}>
                            <table>
                                <tr>
                                    <th>Size</th>
                                    <th>Height</th>
                                    <th>Weight</th>
                                </tr>
                                {selectedProduct.sizeInfo.map((guigechicun, index) => (
                                    <tr key={index}>
                                        <th>{guigechicun.size}</th>
                                        <td>{guigechicun.height}</td>
                                        <td>{guigechicun.weight}</td>
                                    </tr>
                                ))}
                            </table>
                        </Modal>
                    )}
                    <Button onClick={handleAddToCart} style={{ background: 'black', color: 'white', width: '80%', height: '50px', borderRadius: '0', marginRight: '20px' }}>Primary Button</Button>

                    <Tooltip title="search">
                        <Button shape="circle" icon={<HeartOutlined />} style={{ width: '50px', height: '50px' }} />
                    </Tooltip>
                    {/* <button onClick={handleAddToCart}>加入购物车</button> */}

                    {/* 政策 */}
                    <div className="zhengce">
                        <div className="zhengce1">
                            <div style={{ margin: '20px 10px 20px 20px' }}>
                                <img src="assetsshop/zhengceimg1.png" alt="" style={{ width: '20px' }} />
                            </div>
                            <div style={{ marginTop: '20px' }}>
                                <div>Free Shipping</div>
                                <div style={{ color: '#767676' }}>Free pick up at convenience store on orders over $22.57</div>
                                <div style={{ color: '#767676' }}>Estimated to be delivered on 01/09/2024 - 03/09/2024.</div>
                            </div>
                        </div>
                        <div className="zhengce2">
                            <div style={{ margin: '20px 10px 20px 20px' }}>
                                <img src="assetsshop/zhengceimg2.png" alt="" style={{ width: '20px' }} />
                            </div>
                            <div style={{ marginTop: '20px' }}>
                                <div>Return Policy</div>
                                <div style={{ color: '#767676' }}>Learn More</div>
                            </div>
                        </div>
                        <div className="zhengce3">
                            <div style={{ margin: '10px 10px 20px 20px' }}>
                                <img src="assetsshop/zhengceimg3.png" alt="" style={{ width: '20px' }} />
                            </div>
                            <div style={{ marginTop: '10px', marginBottom: '20px' }}>
                                <div>Shopping Security</div>
                                <div style={{ whiteSpace: 'normal', backgroundColor: '#eefaf8' }}>
                                    <img src="assetsshop/zhengceimg4.png" alt="" style={{ width: '12px' }} />
                                    <span style={{ color: '#767676', marginRight: '10px' }}>Safe Payments</span>

                                    <img src="assetsshop/zhengceimg4.png" alt="" style={{ width: '12px' }} />
                                    <span style={{ color: '#767676', marginRight: '10px' }}>Secure Logistics</span>

                                    <img src="assetsshop/zhengceimg4.png" alt="" style={{ width: '12px' }} />
                                    <span style={{ color: '#767676', marginRight: '10px' }}>Customer Service</span>

                                    <img src="assetsshop/zhengceimg4.png" alt="" style={{ width: '12px' }} />
                                    <span style={{ color: '#767676', marginRight: '10px' }}>Privacy Protection</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '20px', fontSize: '16px' }}>
                        <FilterComponent
                            title="Description"
                            data={sizeData}
                            onCheck={onCheckSize}
                            checkedKeys={checkedKeysSize}
                        />
                    </div>

                    <div style={{ marginTop: '10px', fontSize: '14px', marginLeft: '26px', color: '#222222' }}>
                        About Store
                    </div>

                    {/* 商家 */}
                    <div style={{ marginTop: '30px', marginLeft: '26px' }}>
                        <div className="shangjaistore">
                            <div style={{ width: '40px', height: '40px', border: '1px solid #e5e5e5', padding: '5px', marginRight: '10px' }}>
                                <img src="assetsshop/shangjiastore.png" alt="" style={{ width: '100%' }} />
                            </div>
                            <div>
                                <div style={{ fontWeight: '700' }}>H W</div>
                                <div style={{ color: '#767676', fontSize: '12px' }}>
                                    <span style={{ color: '#000000', fontSize: '14px' }}>ad</span> Rating /&emsp;
                                    <span style={{ color: '#000000', fontSize: '14px' }}>ad</span> Rating /&emsp;
                                    <span style={{ color: '#000000', fontSize: '14px' }}>ad</span> Rating /&emsp;
                                </div>
                            </div>
                        </div>
                        <div className="shangjaistore1">
                            <div style={{ border: '1px solid #ccc', padding: '8px 60px' }}>All Items</div>
                            <div style={{ border: '1px solid #ccc', padding: '8px 60px', marginLeft: '10px' }}>+Follow</div>
                        </div>
                    </div>


                </div>

            </div>



        </div >
    );
};

export default ShoppingCart;