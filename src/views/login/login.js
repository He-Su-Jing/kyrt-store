import "./login.scss"
import React from 'react';

import {
    increment,
    decrement,
    addValue,
    syncAddvalue
} from "../../store/modules/counterSlice";
import { useSelector, useDispatch } from "react-redux";

import { menulistAsync } from "../../store/modules/menulistSlice";
import About from "../about/about";

import { Link } from 'react-router-dom';
import { useEffect } from "react";


function Login() {

    // 获取仓库数据 state管理的数据初始状态
    const count = useSelector(state => state.counter.value);
    const menulist = useSelector(state => JSON.stringify(state.menulisttit.menulist));
    // 在redux中修改仓库数据的唯一方法就是dispatch！！！
    const dispatch = useDispatch();

    // dispatch 调用的异步的dispatch
    const menulist1 = async () => {
        console.log("dianjile ");
        dispatch(menulistAsync()).then(res => {

            console.log("这是调用的munulist，，，，，，，，，，，，", res);


        })
    }
    useEffect(() => {
        console.log("useEffect ");
        dispatch(menulistAsync()).then(res => {
            console.log("这是useEffect调用的munulist，，，，，，，，，，，，", res);
        })
    }, [])

    return (
        <div>
            <p>
                仓库数据：{count}
            </p>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <button onClick={() => dispatch(addValue(5))}>+5</button>
            <button onClick={() => dispatch(syncAddvalue(10))}>两秒后+10</button>

            <br />
            <br />
            <br />

            <button onClick={() => menulist1()}>getmenulist</button>
            <div>{menulist}</div>

            <Link to={{ pathname: "/about" }}>
                <button>about</button>
            </Link>

            {/* <About></About> */}
        </div>
    )
}
export default Login