import "./modelcart.scss"

import React, { useState } from 'react';

import { Affix, Button, Flex, Tooltip, Rate, Slider, Switch, Tabs, Popover, Steps, Pagination, Drawer } from 'antd';
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

// 步骤
const customDot = (dot, { status, index }) => (
    <Popover>
        {dot}
    </Popover>
);
const description = '';

// 分页
const showTotal = (total) => `Total ${total} items`;



const Modal = ({ isOpen, onmodelClose, products }) => {

    // ！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
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


    // 右侧抽屉
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    // ！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！


    if (!isOpen) return null; // 如果模态框未打开，则不渲染

    const handleBackdropClick = (e) => {
        // 点击模态框的背景时关闭模态框
        if (e.target === e.currentTarget) {
            onmodelClose();
        }
    };



    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onmodelClose}>X</button>
                {/* ！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！ */}
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
                                            style={{ cursor: 'pointer', border: currentImageIndex === index ? '1px solid #222222' : '1px solid transparent', padding: '1px', width: '50px' }} // 鼠标悬停时高亮
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

                            <div style={{ color: '#222222', fontSize: '16px', marginBottom: '20px', fontWeight: '600' }}>Size</div>
                            <div className="sizechose">
                                <span className="sizechosezi">S (80-95kg)</span>
                                <span className="sizechosezi">M (95-110kg)</span>
                                <span className="sizechosezi">L (110-125kg)</span>
                                <span className="sizechosezi">XL (125-140kg)</span>
                            </div>

                            <div onClick={handleModalOpen} style={{ fontSize: '12px', color: '#2d68a8', cursor: 'pointer', marginBottom: '20px' }}>
                                <img src="assetsshop/jianpan.png" alt="" style={{ width: '20px' }} />
                                Size Guide
                            </div>

                            {modalOpen && (
                                <Modal isOpen={modalOpen} onClose={handleModalClose}>

                                    <div className="modeltop">
                                        <div>Size Guide</div>
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






                        </div>

                    </div>



                </div >
                {/* ！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！ */}

            </div>
        </div>
    );
};

export default Modal;

