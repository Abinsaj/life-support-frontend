"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"

export default function Header({ onMenuClick, showMobileLogo = false }) {
  const [user, setUser] = useState({})

  useEffect(() => {
    const data = localStorage.getItem("user")
    if (data) {
      const parsed = JSON.parse(data)
      setUser(parsed)
    } else {
      const dummyUser = {
        name: "Dr. Manmadhan Naros",
        role: "Doctor",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
      }
      setUser(dummyUser)
    }
  }, [])

  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 lg:hidden">
          <button onClick={onMenuClick} className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
            <Menu className="w-6 h-6" />
          </button>

          {showMobileLogo && (
            <div>
              <h1 className="text-xl font-semibold leading-tight text-blue-500">life support learning</h1>
              <p className="text-[8px] text-blue-300">powered by duty doctor</p>
            </div>
          )}
        </div>

        <div className={`${showMobileLogo ? "hidden" : "block"} lg:block`}>
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">Dashboard</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
            <img
              src={user.avatar || "/placeholder.svg?height=40&width=40"}
              alt={user.name || "User"}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900">{user.name}</h3>
              {user.verified && (
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
            <p className="text-sm text-gray-500">{user.role}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
