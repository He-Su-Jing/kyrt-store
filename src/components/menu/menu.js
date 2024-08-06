import React, { useState, useRef, useEffect } from 'react';
import './menu.scss';


const SubMenu = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const subMenuRef = useRef(null);

    const handleClick = (event) => {
        event.stopPropagation(); // 阻止事件冒泡
        setIsOpen(!isOpen);
    };

    // 确保点击菜单外部时关闭子菜单
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [subMenuRef]);

    return (
        <div className="menu-item" ref={subMenuRef} onClick={handleClick}>
            {label}
            {isOpen && (
                <div className="sub-menu">
                    {children}
                </div>
            )}
        </div>
    );
};

const Menu = () => {
    return (
        <div className="menu">
            <SubMenu label="主菜单1">
                <div className="sub-item">子菜单1-1</div>
                <div className="sub-item">子菜单1-2</div>
            </SubMenu>
            <SubMenu label="主菜单2">
                <div className="sub-item">21111111111</div>
                <div className="sub-item">222222222222</div>
            </SubMenu>

            <SubMenu label="主菜单2">
                <div className="sub-item">子菜单2-1</div>
                <div className="sub-item">子菜单2-2</div>
            </SubMenu>

            <SubMenu label="主菜单2">
                <div className="sub-item">子菜单2-1</div>
                <div className="sub-item">子菜单2-2</div>
            </SubMenu>

            <SubMenu label="主菜单2">
                <div className="sub-item">子菜单2-1</div>
                <div className="sub-item">子菜单2-2</div>
            </SubMenu>

            <SubMenu label="主菜单2">
                <div className="sub-item">子菜单2-1</div>
                <div className="sub-item">子菜单2-2</div>
            </SubMenu>

            <SubMenu label="主菜单2">
                <div className="sub-item">子菜单2-1</div>
                <div className="sub-item">子菜单2-2</div>
            </SubMenu>
            {/* 更多主菜单项 */}
        </div>
    );
};

export default Menu;