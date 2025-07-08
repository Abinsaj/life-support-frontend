export async function loginUser(formData) {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.error || "Login failed")
    }
  
    const data = await response.json()
  
    const  user  = data.data
    if (user) {
      localStorage.setItem("user", JSON.stringify({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      }))
    }

    return data
  
}

export async function registerUser(formData) {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
  
    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.error || "Registration failed")
    }
  
    const data = await response.json()
  
    return data
  }
  