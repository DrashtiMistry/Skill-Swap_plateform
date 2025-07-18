import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { User } from 'lucide-react'

const SwapRequestModal = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
  const { id } = useParams()
  const [formData, setFormData] = useState({
    offeredSkill: '',
    wantedSkill: '',
    message: ''
  });

  const [user, setUser] = useState({})
  const url = import.meta.env.VITE_BACKEND_URL
  const navigate = useNavigate()
  // const profile = {
  //   name: "Marc Demo",
  //   skillsOffered: ["Graphic Design", "Video Editing"],
  //   skillsWanted: ["Python", "Manager"],
  //   profilePhoto: "https://via.placeholder.com/100",
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token")
    try {
      const res = await fetch(`${url}/api/swaps/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Authorization": token
        },
        body: JSON.stringify({
          toUser: id,
          offeredSkill: formData.offeredSkill,
          wantedSkill: formData.wantedSkill
        })
      })
      const result = await res.json()
      if(!res.ok){
        toast.error("Please login")
        navigate('/login')
      } else{
        toast.success("Requested successfully")
      }
    } catch (error) {
      console.log(error);
    }
    setShowModal(false);
  };

  const handleChange = (e) => {
  const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const fetchDetails = async () => {
    const token = localStorage.getItem("token")
    try {
      const res = await fetch(`${url}/api/users/${id}`, {
        method: "GET",
        headers: {
          "Authorization": `${token}`
        }
      })
      // console.log(res.user);
      
      if(!res.ok){
        toast.error("Please login.")
        navigate('/login')
      } else {
        const result = await res.json()
        setUser(result)
        console.log(result);
        
        // setUser(result.user)
      }
    } catch (error) {
      console.log(error);
      navigate('/login')
    }
    
  }

  useEffect(() => {
    fetchDetails()
  }, [])

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div className="min-h-screen mt-[62px] bg-gray-100 text-black p-10">
      <div className="relative max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-300">
        <button
          onClick={() => setShowModal(true)}
          className="absolute top-3 left-3 bg-teal-600 text-white px-3 py-1 rounded-md text-sm hover:bg-teal-700"
        >
          Request
        </button>

        <h2 className="text-2xl mt-4 font-semibold mb-4">{user.name}</h2>
        <div className="flex justify-between items-start">
          <div>
            <p className="font-semibold">Skills Offered:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {user?.skillsOffered?.map((skill, idx) => (
                <span key={idx} className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>

            <p className="font-semibold mt-4">Skills Wanted:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {user?.skillsWanted?.map((skill, idx) => (
                <span key={idx} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {
              user.profilePhoto ? <div className="w-24 h-24 rounded-full border-2 border-indigo-500">
                                    <img src={user.profilePhoto} alt="" className="w-full h-full rounded-full object-cover object-top" />
                                </div>
                  : 
                  <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-sm">
                    <User />
                  </div>
            }
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-[rgba(255,255,255,0.5)] bg-opacity-40 flex justify-center items-center z-50">
          <div
            ref={modalRef}
            className="bg-white text-black border border-gray-300 rounded-xl p-6 w-[350px] shadow-lg"
          >
            <h3 className="text-lg font-bold mb-4">Send Swap Request</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Your Offered Skill</label>
                <select name="offeredSkill" value={formData.offeredSkill} onChange={handleChange} className="w-full border border-gray-400 rounded-md p-2" required>
                  {user.skillsOffered.map((skill, idx) => (
                    <option key={idx} value={skill}>
                      {skill}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Their Wanted Skill</label>
                <select name="wantedSkill" value={formData.wantedSkill} onChange={handleChange} className="w-full border border-gray-400 rounded-md p-2" required>
                  {user.skillsWanted.map((skill, idx) => (
                    <option key={idx} value={skill}>
                      {skill}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  rows="3"
                  className="w-full border border-gray-400 rounded-md p-2 resize-none"
                  placeholder="Write your message..."
                  required
                />
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SwapRequestModal;






