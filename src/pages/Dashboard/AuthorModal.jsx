
import UploadImage from "./../../components/UI/Upload/Upload";
import { ToastContainer, toast } from 'react-toastify';
import { Modal, Input, Select } from "antd";
import { Textarea } from "flowbite-react";

const AuthorModal = ({ modal2, countryList, modal }) => {


    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


    const onChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value) => {
        console.log('search:', value);
    };

    return (
        <div>
            <ToastContainer />
            <Modal
                okText="Saqlash"
                cancelText="Bekor qilish"
                title="Muallif qushish"
                open={modal2}
                onOk={() => modal()}
                onCancel={() => modal()}
                width={"1000px"}
            >
                <div className="flex">
                    <div className="p-5 w-[400px]">
                        <UploadImage />
                    </div>
                    <div className="p-5 grow">
                        <label htmlFor="name">
                            <p>Ismi:</p>
                            <Input
                                id="name"
                                type="text"
                                className=" rounded-lg py-3 mb-3"
                                placeholder="Ismi"
                            />
                        </label>
                        <label htmlFor="lastname">
                            <p>Sharifi:</p>
                            <Input
                                id="lastname"
                                type="text"
                                className=" rounded-lg py-3 mb-3"
                                placeholder="Sharifi"
                            />
                        </label>
                        <label htmlFor="birth_of">
                            <p>Tugulgan sanasi:</p>
                            <Input
                                id="birth_of"
                                type="date"
                                className=" rounded-lg py-3 mb-3"
                                placeholder="Tugulgan sanasi"
                            />
                        </label>
                        <label htmlFor="death_of">
                            <p>Vafot etgan sanasi:</p>
                            <Input
                                id="death_of"
                                type="date"
                                className=" rounded-lg py-3 mb-3"
                                placeholder="Vafot etgan sanasi"
                            />
                        </label>
                        <label htmlFor="country">
                            <p>Davlati</p>
                            <Select
                                className="w-full my-8"
                                showSearch
                                placeholder="Select a person"
                                optionFilterProp="children"
                                onChange={onChange}
                                onSearch={onSearch}
                                filterOption={filterOption}
                                options={countryList?.map((item) => {
                                    return {
                                        label: item.name,
                                        value: item.name,
                                    };
                                })}
                            />
                        </label>

                        <Textarea id="comment" placeholder="BIO" required rows={4} />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AuthorModal;