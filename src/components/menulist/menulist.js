import './menulist.scss';

import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import { Link } from 'react-router-dom';

const { TabPane } = Tabs;

const SubMenuList = () => {
    const [activeKey, setActiveKey] = useState('0'); // 当前活动标签页  
    const [hoverKey, setHoverKey] = useState(null); // 悬停的标签页  

    const [clothingTypes, setClothingTypes] = useState([]);  //接口
    // const [tabs, setTabs] = useState([]); // 存储tabs数据
    const [tabskeyid, settabskeyid] = useState(null); // 用于存储当前鼠标悬停的cat_id
    const [catIds, setCatIds] = useState([]); // 存储所有cat_id的数组

    const [subCategories, setSubCategories] = useState([]); // 存储子类别信息

    useEffect(() => {
        // 配置请求头
        const headers = new Headers({
            'Content-Type': 'application/json',
            'api_pass_key': 'OzVWJLxQtxf4tOalF' // 添加请求头
        });

        const requestOptions = {
            method: 'GET',
            headers: headers
        };

        // 调用API接口
        fetch('http://emarket.obicbusiness.com/api/v1/app/categories', requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.json(); // 解析JSON数据
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                console.log("6666666666666", data);

                // 提取所有cat_id和category_name并更新状态
                const extractedCategories = data.result.map(item => {
                    return {
                        cat_id: item.cat_id,
                        category_name: item.category_name
                    };
                });

                console.log("7777777777", extractedCategories);
                setClothingTypes(extractedCategories); // 更新状态

                // const extractedCategories = data.result.map(item => item.category_name);
                // console.log("7777777777", extractedCategories);
                // setClothingTypes(extractedCategories); // 更新状态

                // const tabskeyid = data.result.map(item => item.cat_id);
                // console.log("9999966666", tabskeyid);
                // settabskeyid(tabskeyid)

                // const extractedCategories = data.result.map((item, index) => item.category_name);
                // setClothingTypes(extractedCategories); // 更新clothingTypes状态

                // // 提取所有cat_id并更新catIds状态
                // const extractedCatIds = data.result.map(item => item.cat_id);
                // setCatIds(extractedCatIds);

            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);


    const onTabClick = (key) => {
        setActiveKey(key);
    };

    // const onTabMouseEnter = (key) => {

    //     console.log("aaaaaaaaaaaaaaaa", key);

    //     setHoverKey(key);
    // };

    // const onTabMouseEnter = (tabInfo) => {
    //     console.log("aaaaaaaaaaaaaaaa", tabInfo);
    //     console.log("tabInfo.catidtabInfo.catidtabInfo.catid===>", tabInfo.catid);
    //     setHoverKey(tabInfo.key); // 只更新hoverKey状态，如果你需要catid，也可以在这里设置
    // };

    const onTabMouseEnter = async (tabInfo) => {
        console.log("aaaaaaaaaaaaaaaa", tabInfo);
        console.log("tabInfo.catidtabInfo.catidtabInfo.catid===>", tabInfo.catid);
        setHoverKey(tabInfo.key); // 更新hoverKey状态

        // 准备请求头
        const headers = new Headers({
            'Content-Type': 'application/json',
            'api_pass_key': 'OzVWJLxQtxf4tOalF' // 添加请求头
        });

        // 准备请求选项
        const requestOptions = {
            method: 'GET',
            headers: headers
        };

        // 调用API接口
        try {
            const response = await fetch(`http://emarket.obicbusiness.com/api/v1/app/category-as-tree/${tabInfo.catid}`, requestOptions);
            if (response.ok) {
                const data = await response.json(); // 解析JSON数据
                console.log("API Response66666666666666:", data.result);
                // 这里可以处理API返回的数据
                setSubCategories(data.result);
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };




    const onTabMouseLeave = () => {
        if (!document.querySelector('.hover-content-active:hover')) {
            setHoverKey(null);
        }
    };

    // const clothingTypes = [
    //     "Dress",
    //     "Blouse",
    //     "Shirt",
    //     "Pants",
    //     "Jeans",
    //     "Jacket",
    //     "Coat",
    //     "Sweater",
    // ];

    // console.log("clothingTypesziji建造", clothingTypes);

    // const tabs = clothingTypes.map((type, index) => ({
    //     key: `${index + 1}`,
    //     title: type
    // }));

    const tabs = clothingTypes.map((item, index) => ({
        key: `${index + 1}`,
        catid: item.cat_id, // 使用cat_id作为key
        title: item.category_name // 使用category_name作为title
    }));
    // console.log(" tabs tabs tabs tabs tabs tabs tabs tabs ", tabs);


    // 使用catIds数组来生成tabs
    // const tabs = catIds.map((catId, index) => ({
    //     key: catId, // 使用catId作为key
    //     title: clothingTypes[index] // 使用对应的category_name作为title
    // }));

    // // console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqaaaaaaaaaaaaaaa", tabskeyid);
    // console.log("qqqqqqqqqqqqqqqqqqqqqqqqqq", tabs);

    return (
        <div className='tabfuda'>
            <Tabs activeKey={activeKey} onTabClick={onTabClick} onMouseLeave={onTabMouseLeave}>
                {tabs.map((tab, index) => (
                    <TabPane
                        key={tab.key}
                        tab={
                            <span onMouseEnter={() => onTabMouseEnter({ key: tab.key, catid: tab.catid })}>
                                {tab.title}
                            </span>
                        }
                    >
                        {/* 这里的内容根据需要定义 */}
                        <div>48444444444444444</div>
                        {/* Content of {tab.title} */}
                    </TabPane>
                ))}
            </Tabs>

            {hoverKey && (
                <div className="hover-content hover-content-active" onMouseEnter={() => setHoverKey(hoverKey)} onMouseLeave={onTabMouseLeave}>
                    <Tabs activeKey={hoverKey} onTabClick={onTabClick} tabPosition="left" style={{ height: 420 }}>
                        {/* {tabs.map(({ key, title }) => (
                            <TabPane
                                key={key}
                                tab={
                                    <span onMouseEnter={() => onTabMouseEnter({ key: tabs.key, catid: tabs.catid })}>
                                        {title}
                                    </span>
                                }
                            > */}
                        {tabs.map((tab, index) => (
                            <TabPane
                                key={tab.key}
                                tab={
                                    <span onMouseEnter={() => onTabMouseEnter({ key: tab.key, catid: tab.catid })}>
                                        {tab.title}
                                    </span>
                                }
                            >
                                {/* 下方的内容根据需要定义 */}
                                {/* Content of {title} in Hover */}
                                <div className='tabcontent-fuda'>
                                    <div className='tabcontent-fuda-zione'>
                                        <div style={{ color: '#c44a01', fontSize: '14px', fontWeight: '600' }}>SHOP BY CATEGORY</div>
                                        <div className="scrollable-fuda-zione">
                                            {/* <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone4.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link> */}

                                            {subCategories.map((item) => (
                                                <Link to={{ pathname: "/sift", search: `?cat_id=${item.cat_id}` }} style={{ textDecoration: 'none' }}>
                                                    <img src={item.image} alt="" style={{ width: '80px', margin: '0 20px' }} />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='tabcontent-fuda-zitwo'>
                                        <div style={{ fontSize: '14px', fontWeight: '600' }}>Women hair accessories</div>
                                        <div className="scrollable-fuda-zione">
                                            {/* <Link to="/sift" style={{ textDecoration: 'none' }}>
                                                <img src="assets/centerone1.png" alt="" style={{ width: '80px', margin: '0 20px' }} />
                                            </Link> */}
                                            {subCategories.map((item) => (
                                                <Link to={{ pathname: "/sift", search: `?cat_id=${item.cat_id}` }} style={{ textDecoration: 'none' }}>
                                                    <img src={item.image} alt="" style={{ width: '80px', margin: '0 20px' }} />
                                                </Link>
                                            ))}

                                        </div>
                                    </div>
                                </div>

                            </TabPane>
                        ))}
                    </Tabs>
                    {/* 可以增加其他内容 */}
                </div>
            )}
        </div>
    );
};

export default SubMenuList;

