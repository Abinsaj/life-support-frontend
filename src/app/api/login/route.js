import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const { email, password } = await request.json()

    const response = await fetch(`${process.env.BACKEND_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    const data = await response.json()

    const responseObj = NextResponse.json(data)
    responseObj.cookies.set("auth-token", data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
    })

    return responseObj
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Login failed" }, { status: 500 })
  }
}
