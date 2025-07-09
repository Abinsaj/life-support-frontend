"use client"

import { useState } from "react"
import Image from "next/image"
import { registerUser } from "@/services/authService"

export default function RegisterForm() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobileNumber: "",
        password: '',
    })

    const handleRegister = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        try {
            await registerUser(formData)
            window.location.href = "/login"
        } catch (error) {
            console.error(error)
            setError(error.message || "Registration failed")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-white flex">
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-blue-500">life support</h1>
                        <h2 className="text-3xl font-bold text-blue-500">learning</h2>
                        <p className="text-sm text-gray-500 mt-1">powered by duty doctor</p>
                    </div>

                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">Register Your Account</h3>
                        <p className="text-gray-600">Enter your credentials to Register your account</p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                            <input
                                type="text"
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600 "
                                    required
                                />
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                            <input
                                type="tel"
                                value={formData.mobileNumber}
                                onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors disabled:opacity-50"
                            disabled={loading}
                        >
                            {loading ? "Registering..." : "Register Now"}
                        </button>
                    </form>

                    {error && <div className="text-red-500 text-sm text-center mt-4">{error}</div>}

                    <div className="text-center text-sm text-gray-400 mt-8">
                        <p>Powered by Duty Doctor</p>
                        <p>© 2025 life support learning. All rights reserved.</p>
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex flex-1 items-center justify-center bg-white relative overflow-hidden">
                <div className="relative z-10 w-4/5 h-4/5 rounded-3xl overflow-hidden bg-white">
                    <Image
                        src="/images/doctor1.jpg"
                        alt="Professional doctor with stethoscope"
                        fill
                        className="object-cover"
                        priority
                    />

                    <div className="absolute w-28 h-28 z-20 ">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-white rounded-br-3xl">
                            <rect x="0" y="0" width="100" height="100" fill="currentColor" />
                        </svg>
                    </div>
                    <div className="absolute bottom-0 right-0 w-28 h-28 z-20">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-white rounded-tl-3xl">
                            <rect x="0" y="0" width="100" height="100" fill="currentColor" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
