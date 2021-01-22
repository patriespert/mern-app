import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutAdmin.scss";

export default function LayoutAdmin(props){
    const { routes } = props;
    const {Header, Content, Footer} = Layout;
    console.log(props);


    return(
        <Layout>
            <h2>Menu Sider Admin</h2>
            <Layout>
                <Header> Header.. </Header>
                <Content>
                    <LoadRouters routes={routes} />
                </Content>
                <Footer>
                    Patricia Martínez Espert 2021
                </Footer>
            </Layout>
        </Layout>
    );
}

function LoadRouters({ routes }) {
    console.log(routes)
    return routes.map((route,index) => (
        <Route 
            key={index}
            path={route.path}
            exzct={route.exact}
            component={route.component}
        />
    ));
}