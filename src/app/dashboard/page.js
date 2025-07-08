


import Dashboard from "@/components/Dashboard"
import SidebarWrapper from "@/components/SideBarWrapper"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default function DashboardPage() {

   const cookieStore = cookies()
    const token = cookieStore.get("auth-token")?.value
  
    if (!token) {
      redirect("/")
    }

  const upcomingClass = {
    title: "Real-Time Surgical Annotations Heart Surgery",
    description:
      "Join this crucial heart surgery class and take a significant step in your medical career. Gain invaluable insights from experts—don't miss this opportunity.",
  }

  const activeClasses = [
    {
      id: 1,
      title: "Pediatrics & Child Health",
      description: "Covers newborn care, childhood illnesses, growth monitoring, and pediatric emergency management.",
      icon: "Baby",
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Clinical Research & Medical Ethics",
      description:
        "Explore principles of clinical trials, research methodologies, and ethical considerations in medicine.",
      icon: "FileText",
      color: "bg-blue-500",
    },
    {
      id: 3,
      title: "Emergency & Critical Care Medicine",
      description:
        "Master life-saving procedures, trauma management, and emergency protocols for cardiac arrest, stroke, and sepsis.",
      icon: "Truck",
      color: "bg-blue-500",
    },
    {
      id: 4,
      title: "Radiology & Imaging Techniques",
      description: "Learn the principles of X-rays, CT scans, MRIs, and ultrasound in disease diagnosis.",
      icon:" Scan",
      color: "bg-blue-500",
    },
  ]

  const studentStats = {
    total: 250,
    male: 100,
    female: 150,
  }

  return (
    <SidebarWrapper>
      <main className="flex-1 p-4 lg:p-6 overflow-auto">
      <Dashboard upcomingClass={upcomingClass} activeClasses={activeClasses} studentStats={studentStats} />
      </main>
    </SidebarWrapper>
  )
}
