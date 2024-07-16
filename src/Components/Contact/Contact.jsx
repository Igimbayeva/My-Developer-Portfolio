import React from "react";
import { useState } from 'react';

export const Contact = () => {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    function changeName(event) {
        setName(event.target.value)
    }

    function changeEmail(event) {
        setEmail(event.target.value)
    }

    function changeSubject(event) {
        setSubject(event.target.value)
    }

    function changeMessage(event) {
        setMessage(event.target.value)
    }


    function submitHandler(event) {
        event.preventDefault();

        const warningName = document.getElementById("warning-name")
        const warningEmail = document.getElementById("warning-email")
        const warningSubject = document.getElementById("warning-subject")
        const warningMessage = document.getElementById("warning-message");



        if (name == "") {
            warningName.classList.remove("hidden")
        } else {
            warningName.classList.add("hidden")
        }

        if (email == "") {
            warningEmail.classList.remove("hidden")
        } else {
            warningEmail.classList.add("hidden")
        }

        if (subject == "") {
            warningSubject.classList.remove("hidden")
        } else {
            warningSubject.classList.add("hidden")
        }

        if (message == "") {
            warningMessage.classList.remove("hidden")
        } else {
            warningMessage.classList.add("hidden")
        }







        // alert("Submitted!")
    }


    return (
        <>
            <div class="flex items-center justify-center p-12">
                <div class="mx-auto w-full max-w-[550px]">
                    <form onSubmit={submitHandler}>
                        <div class="mb-5">
                            <label
                                for="name"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={changeName}
                                placeholder="Full Name"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                            <p id="warning-name" className="text-red-500 hidden">Name is required!</p>
                        </div>
                        <div class="mb-5">
                            <label
                                for="email"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={changeEmail}
                                placeholder="example@domain.com"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                            <p id="warning-email" className="text-red-500 hidden">Email is invalid!</p>
                        </div>
                        <div class="mb-5">
                            <label
                                for="subject"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                value={subject}
                                onChange={changeSubject}
                                placeholder="Enter your subject"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                            <p id="warning-subject" className="text-red-500 hidden">Subject is required!</p>
                        </div>
                        <div class="mb-5">
                            <label
                                for="message"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Message
                            </label>
                            <textarea
                                rows="4"
                                name="message"
                                id="message"
                                value={message}
                                onChange={changeMessage}
                                placeholder="Type your message"
                                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                            <p id="warning-message" className="text-red-500 hidden">Message is required!</p>
                        </div>
                        <div>
                            <button
                                class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}