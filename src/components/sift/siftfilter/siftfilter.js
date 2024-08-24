import './siftfilter.scss';
import React from 'react';
import { Tree, Collapse } from 'antd';

const FilterComponent = ({ title, data, onCheck, checkedKeys }) => {
    // 假设 data 是一个包含多个对象的数组，每个对象至少有 key 和 title 属性
    const panel = (
        <div
            style={{
                fontSize: '14px',
                color: '#222222',
                fontWeight: '600',
                // paddingTop: '20px',
                // paddingBottom: '15px',
                paddingLeft: '-15px',
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <div>{title}</div>
            {/* <div>-+</div> */}
        </div>
    );

    return (
        <div>
            <Collapse defaultActiveKey={['1']} ghost style={{ padding: '0' }}>
                <Collapse.Panel header={panel} key="1">
                    <Tree
                        checkable
                        treeData={data.map(item => ({ ...item, title: item.title }))} // 假设 data 已经是正确格式的数组
                        onCheck={onCheck}
                        checkedKeys={checkedKeys}
                    />
                </Collapse.Panel>
            </Collapse>
        </div>
    );
};

export default FilterComponent;




