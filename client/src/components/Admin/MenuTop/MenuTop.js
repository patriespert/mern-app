import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import SVGLogo from "../../../assets/img/svg/lemon.svg";
import { MenuUnfoldOutlined, MenuFoldOutlined, PoweroffOutlined  } from '@ant-design/icons';

import "./MenuTop.scss";

export default function MenuTop(props){
    const {menuCollapsed, setMenuCollapsed} = props;
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <Link to={"/admin"}>
                    <img
                        className="menu-top__left-logo"
                        src={SVGLogo}
                        alt="logo"
                    />
                </Link>
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed) } > 
                    {React.createElement(menuCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
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