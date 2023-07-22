import { message } from 'antd';
import { MessageInstance } from 'antd/es/message/interface';

export const createMessage = () => {
    const [messageApi, contextHolder] = message.useMessage();
    return [messageApi, contextHolder]
}

export const AlertSuccess = (messageApi: MessageInstance, AlertContent: string) => {
    console.log('success')
    messageApi.open({
        type: 'success',
        content: AlertContent,
    });
};

