import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutBasic.scss";

export default function LayoutBasic(props){
    const { routes } = props;
    const {Content, Footer} = Layout;
    console.log(props);
    

    return(
      
        <Layout>
            <h2>Menu Sider Basic User</h2>
            <Layout>
                <Content>
                    <LoadRoutes routes={routes} />
                </Content>
                <Footer>
                    Patricia Martínez Espert 2021
                </Footer>
            </Layout>
        </Layout>
    );
}

function LoadRoutes({ routes }) {
    console.log(routes)
    return(
        <Switch>
            {routes.map((route,index) => (

                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    );
}