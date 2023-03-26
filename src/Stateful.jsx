import React, { useState, useEffect } from 'react'
import MyNav from './MyNav'

export default function Stateful() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    function handleSubmit() {
        console.log(formData)
    }

    useEffect(() => {
        console.log(formData)
    })


    return (
        <>
            <MyNav />


            <form onSubmit={() => handleSubmit()}>
                <p>
                    <label>
                        Your Name: <input type="text" name="name" value={formData.name} onChange={(e) => {
                            setFormData(eVals => ({
                                ...eVals, name: e.target.value
                            }))
                        }} />
                    </label>
                </p>
                <p>
                    <label>
                        Your Email: <input type="email" name="email" value={formData.email} onChange={(e) => {
                            setFormData(eVals => ({
                                ...eVals, email: e.target.value
                            }))
                        }} />
                    </label>
                </p>
                <p>
                    <label>
                        Message: <textarea name="message" value={formData.message} onChange={(e) => {
                            setFormData(eVals => ({
                                ...eVals, message: e.target.value
                            }))
                        }} />
                    </label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </>
    )
}
