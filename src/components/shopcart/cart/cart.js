import "./cart.scss"

import React, { useState } from 'react';

import Modal from '../model/model';
import { Button, Flex, Tooltip } from 'antd';
import { SearchOutlined, HeartOutlined } from '@ant-design/icons';
// import React, { useState } from 'react';

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

    return (
        <div className="shopping-cart">
            {/* <div className="product-list">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="product-preview"
                        onClick={() => handleProductClick(product)}
                    >
                        <img src={product.thumbnail} alt="Thumbnail" style={{ width: '100px' }} />
                        <h3>{product.name}</h3>
                    </div>
                ))}
            </div> */}
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
                            <div style={{ marginRight: '10px' }}>
                                img
                            </div>
                            <div>
                                <div>Free Shipping</div>
                                <div style={{ color: '#767676' }}>Free pick up at convenience store on orders over $22.57</div>
                                <div style={{ color: '#767676' }}>Estimated to be delivered on 01/09/2024 - 03/09/2024.</div>
                            </div>
                        </div>
                        <div className="zhengce2">
                            <div style={{ marginRight: '10px' }}>
                                img
                            </div>
                            <div>
                                <div>Return Policy</div>
                                <div style={{ color: '#767676' }}>Learn More</div>
                            </div>
                        </div>
                        <div className="zhengce3">
                            <div style={{ marginRight: '10px' }}>
                                img
                            </div>
                            <div>
                                <div>Shopping Security</div>
                                <div>
                                    <span style={{ color: '#767676' }}>Safe Payments</span>
                                    <span style={{ color: '#767676' }}>Secure Logistics</span>
                                    <span style={{ color: '#767676' }}>Customer Service</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </div >
    );
};

export default ShoppingCart;