import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(request) {
    const cookieStore = cookies()
    const token = cookieStore.get("auth-token")?.value
  
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
  
    const formData = await request.formData()
    console.log(formData,'this si the formData to be send to backend')
  
    const backendResponse = await fetch(`${process.env.BACKEND_URL}/api/live-classes`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
  
    if (!backendResponse.ok) {
      const errorData = await backendResponse.json()
      return NextResponse.json({ error: errorData.message || "Failed to create live class" }, { status: backendResponse.status })
    }
  
    const data = await backendResponse.json()
    return NextResponse.json(data, { status: 201 })
  }
  

  export async function GET(request) {
    try {
      const backendResponse = await fetch(`${process.env.BACKEND_URL}/api/live-classes`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!backendResponse.ok) {
        const errorData = await backendResponse.json();
        throw new Error(errorData.error || "Failed to fetch live classes");
      }
  
      const data = await backendResponse.json();
      return NextResponse.json({ data });
    } catch (error) {
      console.error("API error fetching user-specific live classes:", error);
      return NextResponse.json({ error: "Failed to fetch user-specific live classes" }, { status: 500 });
    }
  }
