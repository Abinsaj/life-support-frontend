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
        className="relative h-64 rounded-3xl overflow-hidden cursor-pointer transition hover:shadow-lg bg-gradient-to-br from-gray-200 to-gray-250 flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
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
