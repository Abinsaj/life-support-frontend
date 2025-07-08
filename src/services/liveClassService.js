export const createLiveClass = async (liveData) => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("user"))
      if (!userInfo || !userInfo._id) {
        throw new Error("User ID not found. Please login again.")
      }
  
      const formData = new FormData()
      formData.append("liveName", liveData.liveName)
      formData.append("instructor", liveData.instructors)
      formData.append("startTime", liveData.startTime)
      formData.append("endTime", liveData.endTime)
      formData.append("instructorId", userInfo._id)
  
      if (liveData.image) {
        formData.append("image", liveData.image) 
      }
  
      const response = await fetch("/api/live-classes", {
        method: "POST",
        body: formData, 
      })
  
      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to create live class")
      }
  
      return await response.json()
    } catch (error) {
      console.error("Create live error:", error)
      throw error
    }
  }

export async function fetchLiveClassesByUser() {
    try {
      const response = await fetch(`/api/live-classes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store", 
      });
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to fetch live classes");
      }
  
      const data = await response.json();
      console.log("Fetched user-specific live classes:", data);
  
      return data;
    } catch (error) {
      console.error("Error fetching user-specific live classes:", error);

    }
  }
  