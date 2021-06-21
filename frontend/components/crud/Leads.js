import React, {useState, useEffect} from "react";
import {create, deleteSingleTag, getAllTags} from "../../actions/tags";
import {isAuth, getCookie, signup} from "../../actions/auth";
import Router from "next/router";
import {deleteCategory} from "../../actions/category";
import {leadList, removeFormData} from "../../actions/form";
import moment from "moment";
import {singleBlog} from "../../actions/blog";
const token = getCookie("token")

const Leads = () => {
    const [value, setValue] = useState({
        "name": "",
        "error": false,
        "leads": [],
        "success": false,
        "message": "",
        "removed": false,
        "reload": false
    })

    const {name, success, error, removed, leads, reload, message} = value


    const AllLeads = () => {
        leadList().then(data => {
            if (data.error) {
                setValue({...value, error: data.error, reload: false})
            } else {
                setValue({...value, leads: data, reload: true, success: true, message: data.message})
            }
        })
    }

    useEffect(() => {
        AllLeads()
    }, [reload])


    const handlerClickRemove = (currentId) => {
        const current = leads.filter((item, i) => i === currentId);

        removeFormData(current[0]._id).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValue({...value, success: true, message: data.message})
            }
        });
    }

    function LeadsBlock() {
        return (
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
                <div
                    className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
                    <div className="flex justify-between">
                        <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
                            <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                                <div className="flex">
                                    <span
                                        className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                                        <svg width="18" height="18" className="w-4 lg:w-auto" viewBox="0 0 18 18"
                                             fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z"
                                                stroke="#455A64" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M16.9993 16.9993L13.1328 13.1328" stroke="#455A64"
                                                  stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                </div>
                                <input type="text"
                                       className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin"
                                       placeholder="Search"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                    <table className="min-w-full">
                        <thead>
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Name</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Last
                                Name
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Email</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Message</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Created
                                At
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-300"></th>
                        </tr>
                        </thead>
                        {leads.map((person, i ) => (
                            <tbody className="bg-white">
                            <tr>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                    <div className="flex items-center">
                                        <div>
                                            <div className="text-sm leading-5 text-gray-800">{i+1}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                    <div className="text-sm leading-5 text-blue-900">{person.name}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{person.lastName}</td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{person.email}</td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                    <textarea value={person.message}  cols="30" rows="10"></textarea></td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                                    <p>{moment(person.createdAt).format("YYYY-MM-DD")}</p>
                                    <p> {moment(person.createdAt).format("HH:mm:ss")}</p>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                                    <button
                                        onClick={() => handlerClickRemove(i)}
                                            className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white">
                                        Remove
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
        )
    }


    const showSuccess = () => {
        if (success) {
            return <p className="text-success">{message}</p>
        }
    }
    const showError = () => {
        if (error) {
            return <p className="text-danger">Category already exist!</p>
        }
    }

    const mouseHandler = () => {
        setValue({...value, error: false, success: false, removed: false})
    }

    return <>
        <div onMouseMove={mouseHandler}>
            {showError()}
            {showSuccess()}
        </div>
        {LeadsBlock()}
    </>
}

export default Leads
