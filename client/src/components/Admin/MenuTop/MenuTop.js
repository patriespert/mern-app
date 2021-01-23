import React from "react";
import { Layout, Button } from "antd";
import SVGLogo from "../../../assets/img/svg/lemon.svg";
import { MenuUnfoldOutlined, PoweroffOutlined  } from '@ant-design/icons';

import "./MenuTop.scss";

export default function MenuTop(){
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img
                    className="menu-top__left-logo"
                    src={SVGLogo}
                    alt="PATRIESPERT"
                />
                <Button type="link" onClick={(() => console.log('Click!'))} > 
                    <MenuUnfoldOutlined  type="menu-fold" />
                </Button>               
            </div>
            <div className="menu-top__right">
                <Button type="link">
                    <PoweroffOutlined type="poweroff" />
                </Button>
            </div>
        </div>
    );
}