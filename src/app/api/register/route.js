import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const { fullName, email, mobileNumber, password } = await request.json()
    console.log('hi', fullName, email, mobileNumber, password, 'kfhalksdfh')

    const response = await fetch(`${process.env.BACKEND_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: fullName,  
        email,
        mobile: mobileNumber,
        password,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      return NextResponse.json(
        { error: errorData.message || "Registration failed" },
        { status: response.status }
      )
    }

    const data = await response.json()

    return NextResponse.json(data, { status: 201 })

  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Registration failed" }, { status: 500 })
  }
}
