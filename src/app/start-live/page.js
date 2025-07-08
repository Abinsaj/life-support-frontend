import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import CreateLiveButton from "../../components/CreateLiveButton"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import LiveList from "@/components/LiveList"
import SidebarWrapper from "@/components/SideBarWrapper"

export default async function StartLive() {
  const cookieStore = cookies()
  const token = cookieStore.get("auth-token")?.value

  if (!token) {
    redirect("/")
  }


  return (
    <SidebarWrapper>
      <main className="flex-1 p-6 overflow-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Start Live</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <LiveList/>
            <CreateLiveButton />
          </div>
          </main>
    </SidebarWrapper>
  )
}


