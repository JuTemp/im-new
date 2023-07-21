import { Layout, Space } from 'antd';
import React, { ReactNode } from 'react';
import './index.scss';

const { Header, Footer, Sider, Content } = Layout;

const MyHeader = (props: React.PropsWithChildren<{
    color: string,
    logo: string,
    children?: ReactNode,
}>) => {

    return (
        <Layout>
            <Header id='Header' style={{ backgroundColor: props.color }}>
                <img src={props.logo} alt='logo' />
                {props.children}
            </Header>
        </Layout>

    )
}

export default MyHeader;
