"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { loginUser } from "@/services/authService"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      let response = await loginUser(formData)
      console.log(response,'this is it tbhis is it')
      if(response.success == true){
        window.location.href = "/dashboard"
      }else{
        setError(response.message)
      }
      
    } catch (error) {
      console.log(error)
      setError('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-blue-500">life support</h1>
            <h2 className="text-3xl font-bold text-blue-500">learning</h2>
            <p className="text-sm text-gray-500 mt-1">powered by duty doctor</p>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Hoi, Welcome back</h3>
            <p className="text-gray-600">Enter your credentials to login your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
              <div className="relative">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        showPassword
                          ? "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          : "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                      }
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => setRememberMe(!rememberMe)}
                  className={`w-12 h-6 rounded-full transition-colors ${rememberMe ? "bg-blue-500" : "bg-gray-300"}`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${rememberMe ? "translate-x-6" : "translate-x-1"}`}
                  />
                </button>
                <span className="ml-3 text-sm text-gray-700">Remember Me</span>
              </div>
              <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {error && <div className="text-red-500 text-sm text-center mt-4">{error}</div>}

          <div className="text-center text-sm text-gray-400 mt-8">
            <p>Powered by Duty Doctor</p>
            <p>© 2025 life support learning. All rights reserved.</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block flex-1 pl-2">
        <div className="h-full bg-gradient-to-br  rounded-l-3xl flex items-center justify-center">
        <Image
            src="/images/doctor1.jpg" 
            alt="Doctor illustration"
            width={1000}
            height={1200}
            className="max-w-full max-h-full object-contain"
            priority 
          />
        </div>
      </div>
    </div>
  )
}
