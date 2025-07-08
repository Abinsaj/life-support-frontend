"use client"

import { Heart,Baby, FileText, Truck, Scan } from "lucide-react"

const ICONS = {
    Baby,
    FileText,
    Truck,
    Scan,
  }

export default function Dashboard({ upcomingClass, activeClasses, studentStats }) {
  return (
    <>
      <div className="mb-8">
        <p className="text-blue-500 text-sm mb-4 font-medium">Upcoming Live class</p>
        <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex-1 max-w-2xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">{upcomingClass.title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{upcomingClass.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors">
                  Start the class
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                  Schedule the class
                </button>
              </div>
            </div>

            <div className="hidden lg:block flex-shrink-0">
              <div className="w-80 h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Heart className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-blue-700 font-medium">Medical Illustration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Active Lesson</h3>
          <div className="space-y-4">
            {activeClasses.map((lesson) => {
              const Icon = ICONS[lesson.icon] || Baby
              return (
                <div key={lesson.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 ${lesson.color} rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 mb-2 leading-tight">{lesson.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{lesson.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Student Analytics</h3>
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
            <div className="flex items-center justify-center mb-8">
              <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="35" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(studentStats.male / studentStats.total) * 220} 220`}
                    strokeLinecap="round"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    stroke="#ef4444"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(studentStats.female / studentStats.total) * 220} 220`}
                    strokeDashoffset={`-${(studentStats.male / studentStats.total) * 220}`}
                    strokeLinecap="round"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-sm text-gray-600 mb-1">Total Student's</p>
                  <p className="text-2xl lg:text-3xl font-bold text-gray-900">{studentStats.total} Peoples</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-blue-500 font-medium">Male</span>
                </div>
                <p className="text-xl lg:text-2xl font-bold text-gray-900">{studentStats.male}</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-red-500 font-medium">Female</span>
                </div>
                <p className="text-xl lg:text-2xl font-bold text-gray-900">{studentStats.female}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
