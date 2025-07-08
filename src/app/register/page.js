import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import RegisterForm from "@/components/Register"

export default async function RegisterPage() {
  const cookieStore = cookies()
  const token = cookieStore.get("auth-token")?.value

  if (token) {
    redirect("/dashboard")
  }

  return <RegisterForm />
}
