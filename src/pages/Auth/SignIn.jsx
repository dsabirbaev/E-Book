
import {Link} from "react-router-dom";
import { Button, Form, Input } from 'antd';

import img from "../../assets/images/signin.png";

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const SignIn = () => (

    <div className='grid grid-cols-2 items-center w-full h-screen mx-auto gap-x-[81px]'>
        <div className='item bg-[#C9AC8C] h-full flex items-center justify-end me-4'>
            <img src={img} alt="" />
        </div>
        <div className='item'>
            <h2 className="text-[36px] text-[#1A1919] font-['ArialBlack']">Login</h2>
            <h3 className='my-4 text-sm'>
                Siz ro'yhatdan otmaganmisizmi? <Link to="/signup">Sign up</Link>
            </h3>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item

                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Iltimos loginni kiriting!',
                        },
                    ]}
                >
                    <Input className='rounded-lg outline-none py-2' placeholder="Login" />
                </Form.Item>

                <Form.Item

                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Iltimos parolni kiriting!',
                        },
                    ]}
                >
                    <Input.Password className='py-2 outline-none mt-4' placeholder="Parol"/>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 0,
                        span: 16,
                    }}
                >
                    <Button className=' bg-slate-700 text-white rounded-2xl w-full mt-4'  htmlType="submit">
                        Kirish
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </div>

);
export default SignIn;