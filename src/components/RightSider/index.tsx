import Sider from "antd/es/layout/Sider"
import React from "react"
import './index.scss'
import Card from "antd/es/card/Card"

export const MyRightSider = (props: React.PropsWithChildren<{
    users: [...{ username: string, description: string }[]]
}>) => {

    const Empty = {
        username: 'nouser',
        description: ''
    }

    return (
        <Sider id="RightSider">
            {props.users.length !== 0
                ?
                props.users.map((user, index) => (
                    <Card className="user" key={index}>
                        <span className="username">{user.username}</span>
                        <span className="description">{user.description}</span>
                    </Card>
                ))
                :
                <Card className="user" >
                    <span className="username">{Empty.username}</span>
                    <span className="description">{Empty.description}</span>
                </Card>
            }
        </Sider>
    )
}