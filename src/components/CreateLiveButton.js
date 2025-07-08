"use client";

import { useState } from "react";
import CreateLiveModal from "./CreateLiveModal";
import { createLiveClass } from "@/services/liveClassService";

export default function CreateLiveButton() {
  const [showModal, setShowModal] = useState(false);

  const handleCreateLive = async (liveData) => {
    try {
      await createLiveClass(liveData);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="relative h-64 rounded-3xl overflow-hidden cursor-pointer transition hover:shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <p className="text-blue-500 font-semibold text-lg">Create New Live +</p>
        </div>
      </div>

      {showModal && (
        <CreateLiveModal
          onClose={() => setShowModal(false)}
          onSubmit={handleCreateLive}
        />
      )}
    </>
  );
}
