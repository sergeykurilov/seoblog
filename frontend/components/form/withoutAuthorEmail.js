import React, {useState} from 'react';
import {emailContactForm} from "../../actions/form";
import {Switch} from '@headlessui/react'
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const WithoutAuthorEmail = () => {

    const [values, setValues] = useState({
        message: '',
        name: '',
        lastName: '',
        senderEmail: 'enjoy213sasd@gmail.com',
        clientEmail: '',
        sent: false,
        buttonText: 'Send Message',
        success: false,
        error: false
    })

    const {message, name, senderEmail, lastName, success, error, buttonText, clientEmail} = values


    const clickSubmit = (e) => {
        e.preventDefault()
        setValues({...values, buttonText: "Sending..."})
        emailContactForm({name, email: senderEmail, lastName: lastName, message, clientEmail}).then(data => {
            console.log(data)
            if (data.error) {
                setValues({...values, error: data.error})
            } else {
                setValues({
                    ...values,
                    sent: true,
                    name: "",
                    lastName: "",
                    email: "",
                    message: "",
                    clientEmail: "",
                    buttonText: "Sent",
                    success: true
                })
            }
        })
    }

    const [open, setOpen] = useState(true)


    const showError = () => <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>{error}</div>
    const showSuccess = () => success &&
        (
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" static style={{top: '-14em'}} className="fixed z-10 inset-3 overflow-y-auto" open={open} onClose={setOpen}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div style={{top: '-14em'}} className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                <div>
                                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                        <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            Thank you for contacting us!
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                We appreciate your trust to our company and our specialist will get in touch with you as soon as possible.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                        onClick={() => setOpen(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        )
        // <div className="alert alert-info" style={{display: success ? '' : 'none'}}>Thank you for contacting us!</div>
    const handleChange = name => e => setValues({
        ...values,
        [name]: e.target.value,
        error: false,
        success: false,
        buttonText: "Send Message"
    });
    const [agreed, setAgreed] = useState(false)

    const contactForm = () => (
        <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
            <div className="relative max-w-xl mx-auto">
                <svg
                    className="absolute left-full transform translate-x-1/2"
                    width={404}
                    height={404}
                    fill="none"
                    viewBox="0 0 404 404"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="85737c0e-0916-41d7-917f-596dc7edfa27"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor"/>
                        </pattern>
                    </defs>
                    <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"/>
                </svg>
                <svg
                    className="absolute right-full bottom-0 transform -translate-x-1/2"
                    width={404}
                    height={404}
                    fill="none"
                    viewBox="0 0 404 404"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="85737c0e-0916-41d7-917f-596dc7edfa27"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor"/>
                        </pattern>
                    </defs>
                    <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"/>
                </svg>
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Contact sales</h2>
                    <p className="mt-4 text-lg leading-6 text-gray-500">
                        Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien
                        tortor lacus
                        arcu.
                    </p>
                </div>
                <div className="mt-12">
                    <form onSubmit={clickSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                                First name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={handleChange('name')}
                                    name="first_name"
                                    id="first_name"
                                    autoComplete="given-name"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                Last name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="last_name"
                                    value={lastName}
                                    onChange={handleChange('lastName')}
                                    id="last_name"
                                    autoComplete="family-name"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    value={clientEmail}
                                    onChange={handleChange('clientEmail')}
                                    type="email"
                                    autoComplete="email"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <div className="mt-1">
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={handleChange('message')}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    defaultValue={''}
                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {buttonText}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )


    return (
        <>
            {showError()}
            {showSuccess()}
            {contactForm()}
        </>
    );
};

export default WithoutAuthorEmail;
