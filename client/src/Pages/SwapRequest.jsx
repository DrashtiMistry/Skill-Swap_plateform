import React, { useState } from "react";

const swapData = [
  {
    id: 1,
    name: "Marc Demo",
    rating: 3.9,
    status: "Pending",
    skillsOffered: ["JavaScript"],
    skillsWanted: ["Photoshop"],
    profilePhoto: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    name: "John Doe",
    rating: 3.9,
    status: "Rejected",
    skillsOffered: ["JavaScript"],
    skillsWanted: ["Photoshop"],
    profilePhoto: "https://images.unsplash.com/file-1715652217532-464736461acbimage?w=416&dpr=2&auto=format&fit=crop&q=60",
  },
];

const SwapRequests = () => {
  const [filter, setFilter] = useState("All");

  const filteredRequests =
    filter === "All"
      ? swapData
      : swapData.filter((req) => req.status === filter);

  return (
    <div className="p-6 max-w-5xl mx-auto mt-20">

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <select className="border border-gray-400 px-3 py-2 rounded w-full sm:w-auto">
          <option>Availability</option>
          <option>Online Now</option>
          <option>Weekends</option>
        </select>
        <input
          type="text"
          placeholder="Search by skill or name"
          className="border border-gray-400 px-4 py-2 rounded w-full sm:w-1/2"
        />
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          Search
        </button>
      </div>

      {filteredRequests.map((req) => (
        <div
          key={req.id}
          className="border p-5 rounded-xl mb-4 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-4">
            <img
              src={req.profilePhoto}
              alt={req.name}
              className="w-16 h-16 rounded-full border"
            />
            <div>
              <h2 className="font-semibold text-lg">{req.name}</h2>
              <p>
                <span className="text-green-700 font-semibold">Skills Offered ⇒</span>{" "}
                {req.skillsOffered.join(", ")}
              </p>
              <p>
                <span className="text-blue-700 font-semibold">Skill Wanted ⇒</span>{" "}
                {req.skillsWanted.join(", ")}
              </p>
              <p className="text-sm text-gray-600">Rating: {req.rating}/5</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p
              className={`text-lg font-semibold ${
                req.status === "Pending"
                  ? "text-gray-700"
                  : req.status === "Rejected"
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              Status: {req.status}
            </p>
            {req.status === "Pending" && (
              <div className="mt-2 flex gap-3 justify-center md:justify-end">
                <button className="text-green-600 font-bold hover:underline">
                  Accept
                </button>
                <button className="text-red-600 font-bold hover:underline">
                  Reject
                </button>
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="mt-8 flex justify-center space-x-2">
        <button className="px-3 py-1 rounded border">{"<"}</button>
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <button
            key={num}
            className="px-3 py-1 rounded border hover:bg-gray-200"
          >
            {num}
          </button>
        ))}
        <button className="px-3 py-1 rounded border">{">"}</button>
      </div>
    </div>
  );
};

export default SwapRequests;
