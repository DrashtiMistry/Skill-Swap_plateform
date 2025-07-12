import React, { useState } from "react";
import user from '../assets/user.avif'
import { Camera } from 'lucide-react'

const ProfileForm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [availability, setAvailability] = useState("Weekdays");
  const [profileType, setProfileType] = useState("Public");
  const [skillsOffered, setSkillsOffered] = useState([]);
  const [skillsWanted, setSkillsWanted] = useState([]);
  const [newOfferedSkill, setNewOfferedSkill] = useState("");
  const [newWantedSkill, setNewWantedSkill] = useState("");
  const [image, setImage] = useState(null)

  const removeSkill = (skill, type) => {
    if (type === "offered") {
      setSkillsOffered(skillsOffered.filter((s) => s !== skill));
    } else {
      setSkillsWanted(skillsWanted.filter((s) => s !== skill));
    }
  };

  const addSkill = (type) => {
    if (type === "offered" && newOfferedSkill.trim()) {
      setSkillsOffered([...skillsOffered, newOfferedSkill.trim()]);
      setNewOfferedSkill("");
    } else if (type === "wanted" && newWantedSkill.trim()) {
      setSkillsWanted([...skillsWanted, newWantedSkill.trim()]);
      setNewWantedSkill("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      location,
      availability,
      profileType,
      skillsOffered,
      skillsWanted
    };

    console.log("🚀 Submitted Data:", userData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white mt-[62px] mb-[10px] text-gray-900 rounded-xl shadow-lg p-8 w-full max-w-4xl mx-auto border"
    >
      <div className="flex justify-between items-start gap-8">
        <div className="flex-1 space-y-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Location</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Skills Offered</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {skillsOffered.map((skill) => (
                <span
                  key={skill}
                  className="bg-green-200 text-green-800 text-sm px-3 cursor-default py-1 rounded-full flex items-center gap-1"
                >
                  {skill}
                  <button
                    className="text-red-500 font-bold cursor-pointer"
                    onClick={() => removeSkill(skill, "offered")}
                  >
                    x
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newOfferedSkill}
                onChange={(e) => setNewOfferedSkill(e.target.value)}
                className="flex-1 border px-3 py-2 rounded"
                placeholder="Add a skill..."
              />
              <button
                onClick={() => addSkill("offered")}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                type="button"
              >
                Add
              </button>
            </div>
          </div>
          <div>
            <label className="block font-medium mb-1">Availability</label>
            <select
              className="w-full border px-3 py-2 rounded"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
            >
              <option>Weekdays</option>
              <option>Weekends</option>
              <option>Evenings</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Profile</label>
            <select
              className="w-full border px-3 py-2 rounded"
              value={profileType}
              onChange={(e) => setProfileType(e.target.value)}
            >
              <option>Public</option>
              <option>Private</option>
            </select>
          </div>
        </div>
        <div className="w-40 flex flex-col items-center text-center">
  <div className="relative w-40 h-40 group">
    <img
      src={image ? URL.createObjectURL(image) : user}
      alt="profile"
      className="w-full h-full object-cover object-top rounded-full border-4 border-gray-300 transition-transform duration-300 group-hover:scale-105"
    />
    <label
      htmlFor="image"
      className="absolute bottom-2 right-2 bg-white border border-gray-400 text-gray-700 p-2 rounded-full shadow-sm hover:bg-gray-100 transition"
    >
      <Camera size={18} className="cursor-pointer" />
    </label>
    <input
      type="file"
      accept="image/*"
      hidden
      id="image"
      onChange={(e) => setImage(e.target.files[0])}
    />
  </div>
</div>

      </div>
      <div className="mt-6">
        <label className="block font-medium mb-1">Skills Wanted</label>
        <div className="flex flex-wrap gap-2 mb-2">
          {skillsWanted.map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 cursor-default text-blue-800 text-sm px-3 py-1 rounded-full flex items-center gap-1"
            >
              {skill}
              <button
                className="text-red-500 font-bold cursor-pointer"
                onClick={() => removeSkill(skill, "wanted")}
              >
                x
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={newWantedSkill}
            onChange={(e) => setNewWantedSkill(e.target.value)}
            className="flex-1 border px-3 py-2 rounded"
            placeholder="Add a skill..."
          />
          <button
            onClick={() => addSkill("wanted")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            type="button"
          >
            Add
          </button>
        </div>
      </div>
      <div className="mt-6 text-right">
        <button
          type="submit"
          className="bg-black cursor-pointer text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          Save Profile
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
