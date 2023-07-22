import React, { ReactNode } from 'react';
import './index.scss';
import { Header } from 'antd/es/layout/layout';

export const MyHeader = (props: React.PropsWithChildren<{
    color: string,
    logo: string,
    children?: ReactNode,
}>) => {

    return (
        <Header id='Header' style={{ backgroundColor: props.color }}>
            <img src={props.logo} alt='logo' />
            {props.children}
        </Header>
    )
}

