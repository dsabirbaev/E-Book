import React, { useState } from "react";
import { Modal, Input } from "antd";
import { Button, Tabs, Table, Select, Textarea } from "flowbite-react";
import UploadImage from "./../../components/UI/Upload/Upload";
import { Link } from "react-router-dom";

const index = () => {
    const onChange = (key) => {
        console.log(key);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const showModal2 = () => {
        setIsModalOpen2(true);
    };
    const handleOk2 = () => {
        setIsModalOpen2(false);
    };
    const handleCancel2 = () => {
        setIsModalOpen2(false);
    };
    return (
        <section>
            <div className="container">
                <Modal
                    okText="Saqlash"
                    cancelText="Bekor qilish"
                    title="Kitob qushish"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={"1000px"}
                >
                    <div className="flex">
                        <div className="p-5 w-[400px]">
                            <UploadImage />
                        </div>
                        <div className="p-5 grow">
                            <Input
                                type="text"
                                className=" rounded-lg py-3 mb-3"
                                placeholder="Kitob nomi"
                            />
                            <Input
                                type="number"
                                className=" rounded-lg py-3 mb-3"
                                placeholder="Sahifalar soni"
                            />
                            <Input
                                type="date"
                                className=" rounded-lg py-3 mb-3"
                                placeholder="Yili"
                            />
                            <Input
                                type="number"
                                className=" rounded-lg py-3 mb-3"
                                placeholder="Kitob narhi"
                            />
                            <Input
                                type="text"
                                className=" rounded-lg py-3 mb-3"
                                placeholder="Davlati"
                            />
                            <Select className="py-3  mb-3 " id="countries" required defaultValue={'DEFAULT'}>
                                <option disabled value="DEFAULT">
                                    Kitob muallifini tanglang
                                </option>
                                <option>Canada</option>
                                <option>France</option>
                                <option>Germany</option>
                            </Select>

                            <Textarea
                                id="comment"
                                placeholder="Tasnifini yozing"
                                required
                                rows={4}
                            />
                        </div>
                    </div>
                </Modal>

                <Modal
                    okText="Saqlash"
                    cancelText="Bekor qilish"
                    title="Muallif qushish"
                    open={isModalOpen2}
                    onOk={handleOk2}
                    onCancel={handleCancel2}
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
                                <Input
                                    id="country"
                                    type="date"
                                    className=" rounded-lg py-3 mb-3"
                                    placeholder="Davlati"
                                />
                            </label>

                            <Textarea id="comment" placeholder="BIO" required rows={4} />
                        </div>
                    </div>
                </Modal>
                <div className="flex justify-between py-8 border-b-2">
                    <div className="text-xl font-sans flex items-center gap-x-4 ">
                        <Link to="/">
                            <Button gradientDuoTone="purpleToBlue">Bosh sahifa</Button>
                        </Link>
                        <span> Umimiy baza</span>
                    </div>
                    <div className="flex gap-x-2 font-mono">
                        <Button gradientMonochrome="success" onClick={showModal}>
                            Kitob qushish
                        </Button>
                        <Button gradientMonochrome="purple" onClick={showModal2}>
                            Muallif qushish
                        </Button>
                    </div>
                </div>

                <div className="mt-4 font-mono">
                    <Tabs.Group aria-label="Default tabs" style="default">
                        <Tabs.Item title="Kitoblar">
                            <Table hoverable>
                                <Table.Head>
                                    <Table.HeadCell>Nomi</Table.HeadCell>
                                    <Table.HeadCell>Muallifi</Table.HeadCell>
                                    <Table.HeadCell>Narhi</Table.HeadCell>
                                    <Table.HeadCell>Sahifalar</Table.HeadCell>
                                    <Table.HeadCell>Yil</Table.HeadCell>

                                    <Table.HeadCell>
                                        <span className="sr-only">Edit</span>
                                    </Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y">
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            Apple MacBook Pro 17"
                                        </Table.Cell>
                                        <Table.Cell>Sliver</Table.Cell>
                                        <Table.Cell>Laptop</Table.Cell>
                                        <Table.Cell>$2999</Table.Cell>
                                        <Table.Cell>
                                            <a
                                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                                href="/tables"
                                            >
                                                <p>Batafsil</p>
                                            </a>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Tabs.Item>
                        <Tabs.Item title="Mualliflar">
                            <Table hoverable>
                                <Table.Head>
                                    <Table.HeadCell>Muallif</Table.HeadCell>
                                    <Table.HeadCell>Kitoblari soni</Table.HeadCell>
                                    <Table.HeadCell>Tuguligan sanasi</Table.HeadCell>
                                    <Table.HeadCell>BIO</Table.HeadCell>
                                    <Table.HeadCell>
                                        <span className="sr-only">Edit</span>
                                    </Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y">
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            Apple MacBook Pro 17"
                                        </Table.Cell>
                                        <Table.Cell>Sliver</Table.Cell>
                                        <Table.Cell>Laptop</Table.Cell>
                                        <Table.Cell>$2999</Table.Cell>
                                        <Table.Cell>
                                            <a
                                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                                href="/tables"
                                            >
                                                <p>Batafsil</p>
                                            </a>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Tabs.Item>
                    </Tabs.Group>
                </div>
            </div>
        </section>
    );
};

export default index;
