import React, { useState, useReducer, useEffect } from "react";
import { Modal, Input, Select } from "antd";
import { Button, Tabs, Table, Textarea } from "flowbite-react";
import UploadImage from "./../../components/UI/Upload/Upload";
import { Link } from "react-router-dom";
import useCountry from "../../service/country/useCountry";
import { ToastContainer, toast } from 'react-toastify';
import "./style.scss";


const onChange = (key) => {
    console.log(key);
};
const index = () => {
    


    const initState = {
        modal1: false,
        modal2: false,
        modal3: false,
        countryName: "",
        countryIcon: "",
        countryList: [],
        countryLoad: false
    }

    const [btnDisable, btnEnable] = useState(false);
    const reducer = (state, action) => {
        switch (action.type) {
            case "MODAL1":
                return { ...state, modal1: !state.modal1 };
            case "MODAL2":
                return { ...state, modal2: !state.modal2 };
            case "MODAL3":
                return { ...state, modal3: !state.modal3 };
            case "SETCOUNTRY_NAME":
                return { ...state, countryName: action.payload };
            case "SETCOUNTRY_ICON":
                return { ...state, countryIcon: action.payload };
            case "SET_COUNTRY":
                return { ...state, countryList: action.payload };
            case "SET_COUNTRY_LOAD":
                return { ...state, countryLoad: true };
            case "CLEAR_COUNTRY_INPUT":
                return { ...state, countryName: " ", countryIcon: " " };
            default:
                return state;
        }
    }

    const [{ modal1, modal2, modal3, countryName, countryIcon, countryList, countryLoad }, dispatch] = useReducer(reducer, initState);

    const addNewCountry = () => {
        btnEnable(true);
        const newCountry = {
            name: countryName,
            icon: countryIcon
        }

        if (newCountry.name.trim().length === 0 || newCountry.icon.trim().length === 0) {
            toast.warn("Maydonlarni to'ldiring!");
        } else {
            useCountry.createCountry(newCountry).then((res) => {

                if (res.status === 201) {
                    getCountry();
                    toast.success("Davlat qo'shildi!");
                    dispatch({ type: "MODAL1" });
                    dispatch({ type: "CLEAR_COUNTRY_INPUT" });
                    btnEnable(false);
                }
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    const getCountry = () => {
        useCountry.getCountry().then((res) => {
            dispatch({ type: "SET_COUNTRY", payload: res.data })
            dispatch({ type: "SET_COUNTRY_LOAD" })
        })
    }

    const deleteCountry = (id) => {
        useCountry.deleteCountry(id).then((res) => {
            getCountry()
            toast.success("Davlat o'chirildi!")
        })
    }

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value) => {
        console.log('search:', value);
    };

    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


    useEffect(() => {
        getCountry()
    }, [])

    // if(countryLoad){
    //     return <h1 className="text-2xl">Loading . . .</h1>
    // }
    return (
        <section>
            <div className="container">
                <ToastContainer />
                {/* Book modal */}
                <Modal
                    okText="Saqlash"
                    cancelText="Bekor qilish"
                    title="Kitob qushish"
                    open={modal3}
                    onOk={() => dispatch({ type: "MODAL3" })}
                    onCancel={() => dispatch({ type: "MODAL3" })}
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

                {/* Author modal */}
                <Modal
                    okText="Saqlash"
                    cancelText="Bekor qilish"
                    title="Muallif qushish"
                    open={modal2}
                    onOk={() => dispatch({ type: "MODAL2" })}
                    onCancel={() => dispatch({ type: "MODAL2" })}
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

                {/* Country modal */}
                <Modal
                    okText="Saqlash"
                    cancelText="Bekor qilish"
                    title="Davlat qushish"
                    open={modal1}
                    onOk={() => addNewCountry()}
                    onCancel={() => dispatch({ type: "MODAL1" })}
                    width={"1000px"}
                    okButtonProps={{ disabled: btnDisable }}
                >
                    <div className="flex">

                        <div className="p-5 grow">
                            <label htmlFor="name">
                                <p>Davlat nomi:</p>
                                <Input
                                    id="name"
                                    type="text"
                                    className=" rounded-lg py-3 mb-3"
                                    placeholder="Davlat nomini yozing"
                                    value={countryName}
                                    onChange={(e) => dispatch({ type: "SETCOUNTRY_NAME", payload: e.target.value })}
                                />
                            </label>
                            <label htmlFor="lastname">
                                <p>Icon:</p>
                                <Input
                                    id="lastname"
                                    type="text"
                                    className=" rounded-lg py-3 mb-3"
                                    placeholder="Bayroq linki: "
                                    value={countryIcon}
                                    onChange={(e) => dispatch({ type: "SETCOUNTRY_ICON", payload: e.target.value })}
                                />
                            </label>
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
                        <Button gradientMonochrome="info" onClick={() => dispatch({ type: "MODAL1" })}>
                            DAvlat qushish
                        </Button>
                        <Button gradientMonochrome="purple" onClick={() => dispatch({ type: "MODAL2" })}>
                            Muallif qushish
                        </Button>
                        <Button gradientMonochrome="success" onClick={() => dispatch({ type: "MODAL3" })}>
                            Kitob qushish
                        </Button>

                    </div>
                </div>

                <div className="mt-4 font-mono">
                    <Tabs.Group aria-label="Default tabs" style="default">
                        <Tabs.Item title="Davlatlar">
                            <Table hoverable>
                                <Table.Head>
                                    <Table.HeadCell>Nomi</Table.HeadCell>
                                    <Table.HeadCell>Belgisi</Table.HeadCell>
                                    <Table.HeadCell>O'chirish</Table.HeadCell>
                                    <Table.HeadCell>Tahrirlash</Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y">

                                    {
                                        countryList.length ? countryList.map((item) => {
                                            return <Table.Row key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                    {item?.name}
                                                </Table.Cell>
                                                <Table.Cell>{item?.icon}</Table.Cell>
                                                <Table.Cell>
                                                    <Button onClick={() => deleteCountry(item.id)} gradientMonochrome="failure">O'chirish </Button>
                                                </Table.Cell>
                                                <Table.Cell>
                                                    <p className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                        Tahrirlash
                                                    </p>
                                                </Table.Cell>
                                            </Table.Row>
                                        }) : null
                                    }

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

                    </Tabs.Group>
                </div>
            </div>
        </section>
    );
};

export default index;
