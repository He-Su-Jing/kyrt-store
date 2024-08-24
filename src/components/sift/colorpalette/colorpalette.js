import './colorpalette.scss';
import React from 'react';
import { Collapse } from 'antd';

const ColorPalette = ({ colors, onSelectColor }) => {
    const colorElements = colors.map((color) => (
        <div
            key={color.name}
            style={{
                width: '20px',
                height: '20px',
                background: color.hex,
                margin: '5px',
                border: '1px solid #fff',
                borderRadius: '3px',
                cursor: 'pointer',
                display: 'inline-block',
                borderRadius: '50px'
            }}
            onClick={() => onSelectColor(color.name)}
        />
    ));

    const items = [
        {
            key: '1',
            label: 'Color',
            children: <div style={{ display: 'flex', flexWrap: 'wrap' }}>{colorElements}</div>,
        },
    ];

    return (
        <div>
            <Collapse defaultActiveKey={['1']} ghost items={items} />
        </div>
    );
};

export default ColorPalette;

