"use client";

import { useEffect, useState } from "react";
import { fetchLiveClassesByUser } from "@/services/liveClassService";
import { Link } from "lucide-react";

export default function LiveList() {
  const [liveClasses, setLiveClasses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchLiveClassesByUser();
      if (data.data.success === true) {
        setLiveClasses(data.data.results);
      }
    };
    getData();
  }, []);

  return (
    <>
      {liveClasses.map((liveClass) => {
        const isActive = liveClass.status === "active";

        return (
          <div
            key={liveClass._id}
            className="relative rounded-3xl overflow-hidden shadow-lg group"
          >
            <img
              src={liveClass.image || "/placeholder.svg"}
              alt={liveClass.title}
              className={`w-full h-64 object-cover transition duration-300 ${
                !isActive ? "brightness-50 blur-[1px]" : ""
              }`}
            />

            <div className="absolute top-4 right-4 z-10">
              <div className="w-8 h-8 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center">
              <Link/>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 shadow-md z-10">
              <h3 className="text-sm md:text-base font-semibold text-[#0E0E2C] mb-1">
                {liveClass.liveName}
              </h3>
              <p className="text-xs text-gray-500 mb-2">
                Instructors: {liveClass.instructor}
              </p>

              {isActive ? (
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Joined peoples: 0</span>
                  <button className="text-xs text-blue-500 font-semibold hover:underline">
                    Start Live
                  </button>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Live not Started</span>
                  <span className="text-xs text-gray-400">
                    Start at:{" "}
                    {new Date(liveClass.startTime).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
