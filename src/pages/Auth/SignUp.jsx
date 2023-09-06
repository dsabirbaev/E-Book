


import { Link } from "react-router-dom";
import { Button, Form, Input } from 'antd';

import img from "../../assets/images/signup.png";

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const SignUp = () => (

    <div className='grid grid-cols-2 items-center w-full h-screen mx-auto gap-x-[81px]'>
        <div className='item bg-[#C9AC8C] h-full flex items-center justify-end me-4'>
            <img src={img} alt="" />
        </div>
        <div className='item'>
            <h2 className="text-[36px] text-[#1A1919] font-['ArialBlack']">Ro'yhatdan o'tish</h2>
            <h3 className='my-4 text-sm'>
                Avval ro'yhatdan otganmisiz? <Link to="/signin">Kirish</Link>
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

                    name="firstName"
                    rules={[
                        {
                            required: true,
                            message: 'Iltimos ismingizni kiriting!',
                        },
                    ]}
                >
                    <Input className='rounded-lg outline-none py-2' placeholder="Ism" />
                </Form.Item>

                <Form.Item

                    name="lastName"
                    rules={[
                        {
                            required: true,
                            message: 'Iltimos sharifingizni kiriting!',
                        },
                    ]}
                >
                    <Input className='rounded-lg outline-none py-2' placeholder="Sharif" />
                </Form.Item>

                <Form.Item

                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Iltimos telefon raqam kiriting!',
                        },
                    ]}
                >
                    <Input type="tel" className='rounded-lg outline-none py-2' placeholder="Tel: " />
                </Form.Item>

                <Form.Item

                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Iltimos email kiriting!',
                        },
                    ]}
                >
                    <Input type="email" className='rounded-lg outline-none py-2' placeholder="Email" />
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
                    <Input.Password className='py-2 outline-none' placeholder="Parol" />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 0,
                        span: 16,
                    }}
                >
                    <Button className=' bg-slate-700 text-white rounded-2xl w-full mt-4' htmlType="submit">
                        Ro'yhatdan o'tish
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </div>

);
export default SignUp;