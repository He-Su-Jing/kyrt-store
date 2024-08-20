import React, { useState } from 'react';
import './recommend.scss';

const tabsData = [
    {
        id: 1,
        label: 'Women',
        products: [
            { id: 1, name: 'T-shirtT-shirtT-shirtT-shirtT-shirtT-shirtT-shirtT-shirtT-shirtT-shirt', price: 11.38, img: 'assets/choose6.png' },
            { id: 2, name: 'Pants', price: 40, img: 'assets/choose6.png' },
            { id: 3, name: 'Pants', price: 40, img: 'assets/choose6.png' },
            { id: 4, name: 'Pants', price: 40, img: 'assets/choose6.png' },
            { id: 5, name: 'Pants', price: 40, img: 'assets/choose6.png' },
            { id: 6, name: 'Pants', price: 40, img: 'assets/choose6.png' },
            { id: 7, name: 'Pants', price: 40, img: 'assets/choose6.png' },
            { id: 8, name: 'Pants', price: 40, img: 'assets/choose6.png' },
            { id: 9, name: 'Pants', price: 40, img: 'assets/choose6.png' },
            { id: 10, name: 'Pants', price: 40, img: 'assets/choose6.png' },
        ],
    },
    {
        id: 2,
        label: 'Shoes & Bags',
        products: [
            { id: 1, name: 'Bag', price: 25, img: 'assets/choose2.png' },
            { id: 2, name: 'Shoes', price: 55, img: 'assets/choose2.png' },
            { id: 3, name: 'Shoes', price: 55, img: 'assets/choose6.png' },
            { id: 4, name: 'Bag', price: 25, img: 'assets/choose2.png' },
            { id: 5, name: 'Backpack', price: 30, img: 'assets/choose6.png' },
            { id: 6, name: 'Backpack', price: 30, img: 'assets/choose6.png' },
            { id: 7, name: 'Backpack', price: 30, img: 'assets/choose2.png' },
            { id: 8, name: 'Backpack', price: 30, img: 'assets/choose2.png' },
            { id: 9, name: 'Backpack', price: 30, img: 'assets/choose2.png' },
            { id: 10, name: 'Backpack', price: 30, img: 'assets/choose2.png' },
        ],
    },
    {
        id: 3,
        label: 'Beauty & Health',
        products: [
            { id: 1, name: 'Bag', price: 25, img: 'assets/choose2.png' },
            { id: 2, name: 'Shoes', price: 55, img: 'assets/choose6.png' },
            { id: 3, name: 'Shoes', price: 55, img: 'assets/choose4.png' },
            { id: 4, name: 'Bag', price: 25, img: 'assets/choose2.png' },
            { id: 5, name: 'Backpack', price: 30, img: 'assets/choose2.png' },
            { id: 6, name: 'Backpack', price: 30, img: 'assets/choose2.png' },
            { id: 7, name: 'Backpack', price: 30, img: 'assets/choose2.png' },
            { id: 8, name: 'Backpack', price: 30, img: 'assets/choose2.png' },
            { id: 9, name: 'Backpack', price: 30, img: 'assets/choose2.png' },
            { id: 10, name: 'Backpack', price: 30, img: 'assets/choose2.png' },
        ],
    },
    {
        id: 4,
        label: 'Accessories & Jewelry',
        products: [
            { id: 1, name: 'Bag', price: 25, img: 'assets/choose2.png' },
            { id: 2, name: 'Shoes', price: 55, img: 'assets/choose3.png' },
            { id: 3, name: 'Shoes', price: 55, img: 'assets/choose3.png' },
            { id: 4, name: 'Bag', price: 25, img: 'assets/choose2.png' },
            { id: 5, name: 'Backpack', price: 30, img: 'assets/choose2.png' },
            { id: 6, name: 'Backpack', price: 30, img: 'assets/choose2.png' },
            { id: 7, name: 'Backpack', price: 30, img: 'assets/choose2.png' },
            { id: 8, name: 'Backpack', price: 30, img: 'assets/choose2.png' },
            { id: 9, name: 'Backpack', price: 30, img: 'assets/choose2.png' },
            { id: 10, name: 'Backpack', price: 30, img: 'assets/choose2.png' },
        ],
    },
    {
        id: 5,
        label: 'Home & Living',
        products: [
            { id: 1, name: 'Bag', price: 25, img: 'assets/choose2.png' },
            { id: 2, name: 'Shoes', price: 55, img: 'assets/choose2.png' },
            { id: 3, name: 'Shoes', price: 55, img: 'assets/choose2.png' },
            { id: 4, name: 'Bag', price: 25, img: 'assets/choose2.png' },
            { id: 5, name: 'Backpack', price: 30, img: 'assets/choose6.png' },
            { id: 5, name: 'Backpack', price: 30, img: 'assets/choose6.png' },
            { id: 5, name: 'Backpack', price: 30, img: 'assets/choose2.png' },
            { id: 5, name: 'Backpack', price: 30, img: 'assets/choose2.png' },
        ],
    },
    {
        id: 6,
        label: 'Kids',
        products: [
            { id: 1, name: 'Bag', price: 25, img: 'assets/choose7.png' },
            { id: 2, name: 'Shoes', price: 55, img: 'assets/choose7.png' },
            { id: 3, name: 'Shoes', price: 55, img: 'assets/choose7.png' },
            { id: 4, name: 'Bag', price: 25, img: 'assets/choose2.png' },
            { id: 5, name: 'Backpack', price: 30, img: 'assets/choose2.png' },
            { id: 5, name: 'Backpack', price: 30, img: 'assets/choose2.png' },
            { id: 5, name: 'Backpack', price: 30, img: 'assets/choose2.png' },
            { id: 5, name: 'Backpack', price: 30, img: 'assets/choose2.png' },
        ],
    },
    {
        id: 7,
        label: 'Men',
        products: [
            { id: 1, name: 'Bag', price: 25, img: 'assets/choose4.png' },
            { id: 2, name: 'Shoes', price: 55, img: 'assets/choose4.png' },
            { id: 3, name: 'Shoes', price: 55, img: 'assets/choose4.png' },
            { id: 4, name: 'Bag', price: 25, img: 'assets/choose4.png' },
            { id: 5, name: 'Backpack', price: 30, img: 'assets/choose4.png' },
            { id: 5, name: 'Backpack', price: 30, img: 'assets/choose4.png' },
            { id: 5, name: 'Backpack', price: 30, img: 'assets/choose4.png' },
            { id: 5, name: 'Backpack', price: 30, img: 'assets/choose4.png' },
        ],
    },
];


const ProductTabs = () => {
    const [activeTab, setActiveTab] = useState(tabsData[0].id);

    const handleTabClick = (id) => {
        setActiveTab(id);
    };


    return (
        <div>
            <div className="tabsrecmd">
                {tabsData.map(tab => (
                    <div
                        key={tab.id}
                        className={`tabrecmd ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
            <div className="tabrecmd-content">
                {tabsData.map(tab => (
                    tab.id === activeTab && (
                        <div key={tab.id} className="tabrecmd-pane">
                            <div className="productfu" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {tab.products.map(product => (
                                    <div key={product.id} className="product-item" style={{ width: '20%', boxSizing: 'border-box', padding: '10px' }}>
                                        <img src={product.img} alt={product.name} style={{ width: '100%' }} />
                                        <div>
                                            <div className='product-itemtit'>{product.name}</div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div className='product-itemmay'>${product.price.toFixed(2)}</div>
                                                <div className='product-itemimg'><img src="assets/addshop.png" alt="Add to cart" /></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default ProductTabs;  