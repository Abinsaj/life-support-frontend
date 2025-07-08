"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { LayoutDashboard, Video, DollarSign, Star, Bell, Settings, Sun, Moon, X } from "lucide-react"

export default function Sidebar({ isOpen, onClose }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentPath, setCurrentPath] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    setCurrentPath(pathname)
  }, [pathname])

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Start Live", href: "/start-live", icon: Video },
    { name: "Monetization", href: "/monetization", icon: DollarSign },
    { name: "Reviews", href: "/reviews", icon: Star },
    { name: "Notification", href: "/notification", icon: Bell },
    { name: "Settings", href: "/settings", icon: Settings },
  ]

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />}

      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-50 lg:z-auto
        w-72 bg-white border-r border-gray-300 flex flex-col h-screen justify-between overflow-hidden
        transform transition-transform duration-300 ease-in-out lg:transform-none
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Close button for mobile */}
        <button onClick={onClose} className="absolute top-4 right-4 p-2 lg:hidden text-gray-500 hover:text-gray-700">
          <X className="w-5 h-5" />
        </button>

        <div>
          <div className="p-6">
            <h1 className="text-3xl font-semibold leading-tight text-blue-500">
              life support
              <br />
              <span className="text-blue-500">learning</span>
            </h1>
            <p className="text-[10px] text-blue-300 mt-1">powered by duty doctor</p>
          </div>

          <nav className="px-4">
            <ul className="space-y-3">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = currentPath === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={onClose} 
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-sm font-medium ${
                        isActive ? "bg-blue-50 text-blue-500" : "text-black hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        <div className="p-4 space-y-6">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-4 text-center shadow-sm">
            <div className="text-2xl mb-2">🥳</div>
            <p className="text-xs text-gray-700 mb-3 leading-snug">
              Upgrade to able to make as many videos as you like 🔥
            </p>
            <button className="w-full border border-gray-200 py-2 px-4 rounded-full text-sm font-semibold hover:bg-orange-100 transition">
              Upgrade now 🔥
            </button>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-20 h-10 rounded-full flex items-center px-1 border border-gray-300 bg-white"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDarkMode ? "translate-x-10 bg-black" : "translate-x-0 bg-black"
                }`}
              >
                {isDarkMode ? <Moon className="w-4 h-4 text-white" /> : <Sun className="w-4 h-4 text-white" />}
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
