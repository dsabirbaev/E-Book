import React, { useState, useReducer, useEffect } from "react";
import { Modal, Input} from "antd";
import { Button, Tabs, Table } from "flowbite-react";

import { Link } from "react-router-dom";
import useCountry from "../../service/country/useCountry";
import { ToastContainer, toast } from 'react-toastify';
import "./style.scss";
import AuthorModal from "./AuthorModal";
import BookModal from "./BookModal";


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
            toast.success("Davlat o'chirildi!", { autoClose: 1000})
        })
    }

    const  SHOW_MODAL_2 = () => {
        dispatch({ type: "MODAL2" });
    }

    const  SHOW_MODAL_3 = () => {
        dispatch({ type: "MODAL3" });
    }
 

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
               
                <AuthorModal modal2={modal2} countryList={countryList} modal={SHOW_MODAL_2}/>

                <BookModal modal3={modal3} modal={SHOW_MODAL_3}/>

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
                                        }) : <h1 className="text-2xl text-bold">Ma'lumot topilmadi</h1>
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
