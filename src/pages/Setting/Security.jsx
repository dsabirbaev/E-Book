
import { useContext } from 'react';
import { Form, Input, Button } from 'antd';
import {langs} from "../../lang/lang";
import { Localization } from '../../store/store';


const Security = () => {
    const {lang} = useContext(Localization)
    const t = langs[lang];

    const onFinish = (value) => {
        console.log(value);
    };
    return (
        <section>
            <div className='container'>
                <div className='flex py-16'>
                   

                    <div className='form grow'>
                        <h1 className='text-2xl mb-5'>{t?.updateData}</h1>

                        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
                            
                            <label htmlFor="email" className='block mb-8'>
                                <p>Email</p>
                                <Input type="email" className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none' placeholder={t?.email} />
                            </label>

                            <label htmlFor="lastname" className='block mb-8'>
                                <p>{t?.currentPassword}:</p>
                                <Input type="password" className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none' placeholder='***********' />
                            </label>


                            <div className='flex gap-x-4 w-full mb-8'>
                                <label htmlFor="tel" className='grow'>
                                    <p>{t?.newPassword}:</p>
                                    <Input type="password" className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none' placeholder='**********' />
                                </label>
                                <label htmlFor="email" className='grow'>
                                    <p>{t?.confirmPassword}:</p>
                                    <Input type="password" className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none' placeholder='**********' />
                                </label>

                            </div>

                            <Button className='bg-slate-500 text-white' htmlType="submit">
                                {t?.save}
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Security;