import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import LoginForm from "@/components/Login"

export default async function LoginPage() {
  const cookieStore = cookies()
  const token = cookieStore.get("auth-token")?.value

  if (token) {
    redirect("/dashboard")
  }

  return <LoginForm />
}
