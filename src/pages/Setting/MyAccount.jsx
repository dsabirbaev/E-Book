import { useContext } from 'react';
import { Form, Input, Button } from 'antd';

import UploadImage from "../../components/UI/Upload/Upload";

import {langs} from "../../lang/lang";
import { Localization } from '../../store/store';

const MyAccount = () => {
    const {lang} = useContext(Localization)
    const t = langs[lang];

    const onFinish = (value) => {
        console.log(value);
    };
    return (
        <section>
            <div className='container'>
                <div className='flex py-16'>
                    <div className='avatar w-[400px] p-4'>
                        <UploadImage />
                    </div>

                    <div className='form grow'>
                        <h1 className='text-2xl mb-5'>{t?.MyAccount}</h1>
                        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>

                            <label htmlFor="name">
                                <p>{t?.name}</p>
                                <Input className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none' placeholder={t?.name} />
                            </label>

                            <label htmlFor="lastname">
                                <p>{t?.surname}</p>
                                <Input className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none' placeholder={t?.surname} />
                            </label>
                            

                            <div className='flex gap-x-4 w-full'>
                                <label htmlFor="tel" className='grow'>
                                    <p>{t?.tel}:</p>
                                    <Input type="tel" className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none' placeholder={t?.tel} />
                                </label>
                                <label htmlFor="email" className='grow'>
                                    <p>{t?.email}:</p>
                                    <Input type="email" className='mb-4 rounded-lg p-4 bg-slate-100 border-none outline-none' placeholder={t?.email} />
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

export default MyAccount;