import "./cart.scss"

import React, { useState, useEffect } from 'react';

import Modal from '../model/model';
import { Affix, Button, Flex, Tooltip, Rate, Slider, Switch, Tabs, Popover, Steps, Pagination, Drawer } from 'antd';
import { SearchOutlined, HeartOutlined } from '@ant-design/icons';

import FilterComponent from '../../sift/siftfilter/siftfilter'; //

const onChange = (key) => {
    console.log(key);
};

// 步骤
const customDot = (dot, { status, index }) => (
    <Popover
    // content={
    //     <span>
    //         step {index} status: {status}
    //     </span>
    // }
    >
        {dot}
    </Popover>
);
const description = '';

// 分页
const showTotal = (total) => `Total ${total} items`;

const ShoppingCart = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState(products[0]);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0); //图片
    const [currentMediaType, setCurrentMediaType] = useState(''); // 图片或视频



    useEffect(() => {
        // 模拟光标移入视频缩略图，触发视频加载
        handleImageIndexChange(0, 'video');
    }, [selectedProduct]);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setCurrentImageIndex(0); // 点击商品时重置图片索引
    };

    const handleImageIndexChange = (index, mediaType) => {
        setCurrentImageIndex(index);
        setCurrentMediaType(mediaType);
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


    const items = [
        {
            key: '1',
            label: 'Product Measurements',
            children: (
                <table>
                    <thead>
                        <tr>
                            <th>Shoulder</th>
                            <th>clothing length</th>
                            <th>bust</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedProduct.sizeInfo.map((sizechicun, index) => (
                            <tr key={index}>
                                <th>{sizechicun.jiankuan}</th>
                                <td>{sizechicun.yichang}</td>
                                <td>{sizechicun.xiongwei}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ),
        },
        {
            key: '2',
            label: 'Body Measurements',
            children: (
                <table>
                    <thead>
                        <tr>
                            <th>Size</th>
                            <th>Height</th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedProduct.bodyInfo.map((guigechicun, index) => (
                            <tr key={index}>
                                <th>{guigechicun.size}</th>
                                <td>{guigechicun.height}</td>
                                <td>{guigechicun.weight}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ),
        },
    ];


    const sizeData = [
        { title: 'Sleeve Type:  Drop Shoulder', key: '1' },
        { title: 'Style: Casual', key: '2' },
        { title: 'Hem Shaped: Regular', key: '3' },
        { title: 'Color: Apricot Animal, Cartoon, Halloween,', key: '4' },
        { title: 'Pattern Type: Fruit&Vegetable, Plants', key: '5' },
        { title: 'Neckline:Round Neck', key: '6' },
        { title: 'werSleeve Length: Half Sleeve', key: '7' },
        { title: 'Hem Shaped: Regular', key: '8' },
        { title: 'Hem Shaped: Regular', key: '9' },
        { title: 'Neckline:Round Neck', key: '10' },
        { title: 'Style: Casual', key: '11' },
        { title: 'Sleeve Type:Round Neck', key: '12' },
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

    // 右侧抽屉
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    // 气泡卡片

    const [selectedSize, setSelectedSize] = useState('S'); //尺码

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };


    const chimaData = {
        S: {
            description: (
                <>
                    Shoulder: 20.9 inch, Length: 27.2 inch, Sleeve <br /> Length: 8.4 inch, Bust: 43.3 inch
                </>
            ),
            weightRange: '80-95kg'
        },
        M: {
            description: (
                <>
                    Shoulder: 21.1 inch, Length: 27.5 inch, Sleeve <br />  Length: 8.6 inch, Bust: 44.5 inch
                </>
            ),
            weightRange: '96-110kg'
        },
        L: {
            description: (
                <>
                    Shoulder: 21.3 inch, Length: 27.8 inch, Sleeve <br />  Length: 8.8 inch, Bust: 45.7 inch
                </>
            ),
            weightRange: '111-120kg'
        }
    };

    const content = (
        <div>
            <p>{chimaData[selectedSize].description}</p>
            <p>{` ${chimaData[selectedSize].weightRange}`}</p>
        </div>
    );


    // const content = () => (
    //     <div>
    //         <p>{chimaData[selectedSize].description}</p>
    //         <p>{`Weight Range: ${chimaData[selectedSize].weightRange}`}</p>
    //     </div>
    // );

    // const content = (
    //     <div>
    //         <p>Shoulder: 20.9 inch,Length: 27.2 inch, Sleeve</p>
    //         <p>Length: 8.4 inch, Bust: 43.3 inch.</p>
    //     </div>
    // );

    return (
        <div className="shopping-cart">
            <div className="selected-product">
                {/* <div className="product-image">
                    <div className="thumbnail-bar">
                        {selectedProduct.images.map((image, index) => (
                            <div>
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index}`}
                                    onMouseEnter={() => handleImageIndexChange(index)} //  onMouseEnter / onClick
                                    style={{ cursor: 'pointer', border: currentImageIndex === index ? '1px solid #222222' : '1px solid transparent', padding: '1px', width: '50px' }} // 鼠标悬停时高亮
                                />
                            </div>

                        ))}
                    </div>
                </div> */}

                <div className="product-image">
                    <div className="thumbnail-bar">
                        {selectedProduct.videoThumbnail && (
                            <div>
                                <img
                                    src={selectedProduct.videoThumbnail}
                                    alt="Video Thumbnail"
                                    onMouseEnter={() => handleImageIndexChange(0, 'video')} // 假设视频缩略图索引为0
                                    style={{
                                        cursor: 'pointer',
                                        border: currentMediaType === 'video' ? '1px solid #222222' : '1px solid transparent',
                                        padding: '1px',
                                        width: '50px'
                                    }}
                                />
                            </div>
                        )}
                        {selectedProduct.images.map((image, index) => (
                            <div key={index}>
                                <img
                                    src={image}
                                    alt={`Thumbnail ${index}`}
                                    onMouseEnter={() => handleImageIndexChange(index, 'image')} // onMouseEnter
                                    style={{
                                        cursor: 'pointer',
                                        border: currentImageIndex === index && currentMediaType === 'image' ? '1px solid #222222' : '1px solid transparent',
                                        padding: '1px',
                                        width: '50px'
                                    }}
                                />
                            </div>
                        ))}

                    </div>
                </div>



                <div className="lunbofuimg">
                    <div style={{ width: '100%' }}>
                        {/* <img src={selectedProduct.images[currentImageIndex]} alt="Product" style={{ width: '100%' }} /> */}

                        {currentMediaType === 'image' && (
                            <img src={selectedProduct.images[currentImageIndex]} alt="Product" style={{ width: '100%' }} />
                        )}
                        {currentMediaType === 'video' && (
                            <video controls style={{ width: '100%' }}>
                                <source src={selectedProduct.videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>

                    <Button shape="circle" className="lunbobutzi1" onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}>
                        &lt;
                    </Button>

                    <Button shape="circle" className="lunbobutzi2" onClick={() => setCurrentImageIndex(Math.min(selectedProduct.images.length - 1, currentImageIndex + 1))}>
                        &gt;
                    </Button>

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
                            <div className="pinglunzhengwen1"><span>v***4</span>2024/8/23</div>
                            <div><Rate defaultValue={5} style={{ fontSize: '13px' }} /></div>
                            <div className="pinglunzhengwen3">
                                <span style={{ marginRight: '15px' }}> <span style={{ fontWeight: '600' }}>Overall Fit:</span>Large</span>
                                <span style={{ marginRight: '15px' }}> <span style={{ fontWeight: '600' }}>Color:</span>White</span>
                                <span style={{ marginRight: '15px' }}> <span style={{ fontWeight: '600' }}>Size:</span>M</span>
                            </div>
                            {/* <div className="pinglunzhengwen4">Very soft material that isn’t cotton. Fits bigger for a looser fit style.</div> */}
                            <div className="pinglunzhengwen4">
                                <div style={{ marginRight: '20px' }}>
                                    Very soft material that isn’t cotton. Fits bigger for a looser fit style. Fits bigger for a looser fit style. Fits bigger for a looser fit style.
                                </div>
                                <div><img src="assetsshop/pinglunquimg.png" alt="" style={{ width: '98px', height: '98px' }} /></div>
                            </div>
                        </div>

                        <div className="pinglunzhengwen">
                            <div className="pinglunzhengwen1"><span>v***4</span>2024/8/23</div>
                            <div><Rate defaultValue={5} style={{ fontSize: '13px' }} /></div>
                            <div className="pinglunzhengwen3">
                                <span style={{ marginRight: '15px' }}> <span style={{ fontWeight: '600' }}>Overall Fit:</span>Large</span>
                                <span style={{ marginRight: '15px' }}> <span style={{ fontWeight: '600' }}>Color:</span>White</span>
                                <span style={{ marginRight: '15px' }}> <span style={{ fontWeight: '600' }}>Size:</span>M</span>
                            </div>
                            <div className="pinglunzhengwen4">Very soft material that isn’t cotton. Fits bigger for a looser fit style.</div>
                        </div>

                        <div style={{ marginTop: '30px', paddingLeft: '60%', whiteSpace: 'normal' }}>
                            <Pagination size="small" total={50} showTotal={showTotal} />
                        </div>

                    </div>



                </div>

                <div className="product-details">
                    <div className="shoptitle">{selectedProduct.name}</div>
                    <div style={{ color: '#999999', fontSize: '12px', marginBottom: '10px' }}> SKU:{selectedProduct.sku}</div>
                    <div style={{ color: '#FA6338', fontSize: '24px', fontWeight: '600', marginBottom: '30px' }}>${selectedProduct.price}</div>

                    <div style={{ width: '100%', height: '1px', border: '1px dashed #e5e5e5', marginBottom: '30px' }}></div>


                    <div className="colorchoose">
                        <div>Color : <span style={{ fontWeight: '400' }}>Silver</span></div>
                        <div type="primary" onClick={showDrawer} style={{ color: '#3379cb', fontSize: '14px', fontWeight: '400' }}>
                            Large image
                        </div>
                        <Drawer title="Color: Silver" onClose={onClose} open={open} width={578}>
                            <div className="drawercontent">
                                <div className="drawercontent-bar">
                                    {/* {selectedProduct.images.map((image, index) => (
                                        <div>
                                            <img
                                                key={index}
                                                src={image}
                                                alt={`Thumbnail ${index}`}
                                                onMouseEnter={() => handleImageIndexChange(index)} //  onMouseEnter / onClick
                                                style={{ cursor: 'pointer', border: currentImageIndex === index ? '1px solid #222222' : '1px solid transparent', padding: '1px' }} // 鼠标悬停时高亮
                                            />
                                        </div>

                                    ))} */}

                                    {selectedProduct.images.map((image, index) => (
                                        <div key={index}>
                                            <img
                                                src={image}
                                                alt={`Thumbnail ${index}`}
                                                onMouseEnter={() => handleImageIndexChange(index, 'image')} // onMouseEnter
                                                style={{
                                                    cursor: 'pointer',
                                                    border: currentImageIndex === index && currentMediaType === 'image' ? '1px solid #222222' : '1px solid transparent',
                                                    padding: '1px',
                                                    width: '50px'
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <Button className="drawerbutton" style={{ background: 'black', color: 'white' }}>CONFIRM</Button>
                            </div>
                        </Drawer>
                    </div>
                    <div className="colorchoosebt">
                        <div className="colorchoosebtzi"></div>
                        <div className="colorchoosebtzi1"></div>
                        <div className="colorchoosebtzi2"></div>
                    </div>

                    <div style={{ color: '#222222', fontSize: '16px', marginBottom: '20px', fontWeight: '600' }}>
                        <span style={{ marginRight: '15px' }}>Size</span>
                        <select>
                            <option value="" disabled selected>JP Size</option>
                            <option>Default</option>
                            <option>DE</option>
                            <option>JP</option>
                            <option>IT</option>
                            <option>MX</option>
                            <option>FR</option>
                            <option>ES</option>
                        </select>
                    </div>

                    {/* <div className="sizechose">
                        <Popover content={content} title="Product Measurement">
                            <Button>S (80-95kg)</Button>
                        </Popover>
                    </div> */}

                    <div className="sizechose">
                        <Popover content={content} title="Product Measurement">
                            <Button onMouseEnter={() => handleSizeChange('S')}>S ({chimaData.S.weightRange})</Button>
                        </Popover>
                        <Popover content={content} title="Product Measurement">
                            <Button onMouseEnter={() => handleSizeChange('M')}>M ({chimaData.M.weightRange})</Button>
                        </Popover>
                        <Popover content={content} title="Product Measurement">
                            <Button onMouseEnter={() => handleSizeChange('L')}>L ({chimaData.L.weightRange})</Button>
                        </Popover>
                    </div>
                    {/* <div className="sizechose">
                        <span className="sizechosezi">S (80-95kg)</span>
                        <span className="sizechosezi">M (95-110kg)</span>
                        <span className="sizechosezi">L (110-125kg)</span>
                        <span className="sizechosezi">XL (125-140kg)</span>
                    </div> */}

                    <div onClick={handleModalOpen} style={{ fontSize: '12px', color: '#2d68a8', cursor: 'pointer', marginBottom: '20px' }}>
                        <img src="assetsshop/jianpan.png" alt="" style={{ width: '20px' }} />
                        Size Guide
                    </div>
                    {/* <button onClick={handleModalOpen}>选择尺码</button> */}
                    {/* Modal 组件和其它逻辑 */}
                    {modalOpen && (
                        <Modal isOpen={modalOpen} onClose={handleModalClose}>

                            <div className="modeltop">
                                <div>Size Guide</div>
                            </div>

                            <div className="modelbuzhoutop">
                                <div>Switch to</div>
                                <div>
                                    <select>
                                        <option value="" disabled selected>BR Size</option>
                                        <option>Default</option>
                                        <option>DE</option>
                                        <option>JP</option>
                                        <option>IT</option>
                                        <option>MX</option>
                                        <option>FR</option>
                                        <option>ES</option>
                                    </select>

                                    <Button type="primary" style={{ backgroundColor: 'white', color: 'black', marginLeft: '10px' }}>CM</Button>
                                    <Button type="primary" style={{ backgroundColor: 'white', color: 'black', marginLeft: '10px' }}>IN</Button>
                                </div>
                            </div>

                            <div className="modelbuzhou">
                                <div style={{ fontWeight: '600' }}>
                                    Fit Type
                                </div>
                                <div>
                                    <Steps
                                        size={12}
                                        current={1}
                                        progressDot={customDot}
                                        items={[
                                            {
                                                title: 'Skinny',
                                                description,
                                            },
                                            {
                                                title: 'Regular',
                                                description,
                                            },
                                            {
                                                title: 'Oversized',
                                                description,
                                            },
                                        ]}
                                    />
                                </div>
                            </div>

                            <div className="modelbuzhou">
                                <div style={{ fontWeight: '600' }}>
                                    Stretch
                                </div>
                                <div>
                                    <Steps
                                        current={1}
                                        progressDot={customDot}
                                        items={[
                                            {
                                                title: 'Non',
                                                description,
                                            },
                                            {
                                                title: 'Slight',
                                                description,
                                            },
                                            {
                                                title: 'Medium',
                                                description,
                                            },
                                            {
                                                title: 'High',
                                                description,
                                            },
                                        ]}
                                    />
                                </div>
                            </div>



                            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                            {/* <table>
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
                            </table> */}

                            <div className="modeljieshuo">
                                *This data was obtained from manually measuring the product, it may be off by 1-2 CM.
                            </div>

                            <div className="modeljieshuo">
                                Sizes beginning with 'JP-' (e.g. JP-S) are the size notation for Japan. Please note that the international size notations are used on the product size tag.
                            </div>

                            <div className="modelpeizhi">
                                <div className="modelpeizhitit">How to Measure the Product's Size?</div>
                                <div className="modelpeizhicot">
                                    <div className="modelpeizhinub"><span>1</span> Shoulder</div>
                                    <div>Measure from where the shoulder seam meets the sleeve on one side to another side.</div>
                                </div>
                                <div className="modelpeizhicot">
                                    <div className="modelpeizhinub"><span>2</span> Bust</div>
                                    <div>Measure from the stitches below the armpits on one side to another.</div>
                                </div>
                                <div className="modelpeizhicot">
                                    <div className="modelpeizhinub"><span>3</span> Length</div>
                                    <div>Measure from where the shoulder seam meets the collar to the hem.</div>
                                </div>
                                <div className="modelpeizhicot">
                                    <div className="modelpeizhinub"><span>4</span> Sleeves</div>
                                    <div>Measure from where the shoulder seam meets armhole to the cuff.</div>
                                </div>
                            </div>


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