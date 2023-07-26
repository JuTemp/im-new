import React, { ReactNode } from "react";
import { Card, Layout, Popover } from "antd";
import { MyCopyToClipboard } from "../../utils/Copy";
import { Constant } from "../constants";
import { AlertSuccess, createMessage } from '../../utils/Toast'
import './index.scss'
import { MessageInstance } from "antd/es/message/interface";
import { Content } from "antd/es/layout/layout";

const MyContent = (props: React.PropsWithChildren<{
    bgImg?: string,
    messages?: [...{ name: string, time: Date, text: string }[]],
    children?: ReactNode,
}>) => {

    const [messageApi, contextHolder] = createMessage()

    return (
        <Content id="Content" style={{ background: props.bgImg }}>
            {contextHolder as ReactNode}
            {props.children}
            {props.messages?.map((message, index) => (
                <Card className="message" key={index}>
                    <span className="name">{message.name}</span>
                    <span className="time">{message.time.toLocaleString("en-US", { hour12: false })}</span>
                    <MyCopyToClipboard text={message.text}
                        onCopy={() => AlertSuccess(messageApi as MessageInstance, Constant.Content.CopyContent)} >
                        <Card className="text">
                            <Popover placement="right" content={Constant.Content.CopyText}>{message.text}</Popover>
                        </Card>
                    </MyCopyToClipboard>
                </Card>
            ))}
        </Content>
    )
}

export default MyContent;