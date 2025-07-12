import React from "react";
import Navbar from "../components/Navbar";

const users = [
  {
    name: "Marc Demo",
    skillsOffered: ["JavaScript", "Python"],
    skillsWanted: ["Photoshop", "Graphic Designer"],
    rating: 3.9,
    profilePhoto: "", // You can replace this with image URL
  },
  {
    name: "Michell",
    skillsOffered: ["JavaScript", "Python"],
    skillsWanted: ["Photoshop", "Graphic Designer"],
    rating: 2.5,
    profilePhoto: "",
  },
  {
    name: "Joe Wills",
    skillsOffered: ["JavaScript", "Python"],
    skillsWanted: ["Photoshop", "Graphic Designer"],
    rating: 4.0,
    profilePhoto: "",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black px-4 py-6">
        < Navbar />
      {/* Header */}
      {/* <header className="flex justify-between items-center bg-white shadow-md px-6 py-4 rounded-md mb-6">
        <h1 className="text-2xl font-bold">Skill Swap Platform</h1>
        <button className="border border-gray-600 px-4 py-1 rounded hover:bg-gray-200">
          Login
        </button>
      </header> */}

      {/* Search and filter */}
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

      {/* User cards */}
      <div className="space-y-6">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row items-center gap-6"
          >
            {/* Profile Photo */}
            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-sm">
              Profile Photo
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{user.name}</h2>

              <div className="mt-2 text-sm">
                <span className="text-green-600 font-medium">Skills Offered:</span>{" "}
                {user.skillsOffered.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-block border px-2 py-1 mx-1 rounded-full text-xs bg-gray-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-2 text-sm">
                <span className="text-blue-600 font-medium">Skills Wanted:</span>{" "}
                {user.skillsWanted.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-block border px-2 py-1 mx-1 rounded-full text-xs bg-gray-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-2 text-sm text-gray-600">
                Rating: {user.rating}/5
              </div>
            </div>

            {/* Request Button */}
            <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
              Request
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
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

export default HomePage;
