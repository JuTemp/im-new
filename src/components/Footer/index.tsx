import { Button } from "antd"
import Form from "antd/es/form"
import TextArea from "antd/es/input/TextArea"
import { Footer } from "antd/es/layout/layout"
import React, { ReactNode } from "react"
import './index.scss'

export const MyFooter = (props: React.PropsWithChildren<{
    submitText: string,
    children?: ReactNode,
}>) => {

    const [myForm] = Form.useForm();

    const submit = (values: any) => {
        console.log(values);
    }

    return (
        <Footer id="Footer">
            <Form form={myForm} layout="horizontal" onFinish={(values) => submit(values)}>
                <Form.Item>
                    <TextArea className="input" rows={4} style={{ resize: 'none' }} />
                </Form.Item>
                <Form.Item>
                    <Button className="submit" type="primary" htmlType="submit">{props.submitText}</Button>
                </Form.Item>
            </Form>

        </Footer>
    )
}