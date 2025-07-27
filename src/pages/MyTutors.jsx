import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/Auth/AuthContext";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const MyTutors = () => {
  const [myTutors, setMyTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchMyTutors = async () => {
      try {
        setLoading(true);
        const { data } = await axiosSecure.get(`/find-tutors?email=${user?.email}`);
        setMyTutors(data.result);
      } catch (error) {
        console.error("Error fetching tutors:", error);
        toast.error("Failed to load your tutors");
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchMyTutors();
    }
  }, [user?.email, axiosSecure]);

  // Handle update
  const handleUpdate = (id) => {
    navigate(`/update-tutor/${id}`);
  };

  // Handle delete
  const handleDelete = async (id) => {
    try {
      const { data } = await axiosSecure.delete(`/tutors/${id}`);
      if (data.success) {
        toast.success("Tutor deleted successfully");
        setMyTutors(myTutors.filter(tutor => tutor._id !== id));
      } else {
        toast.error(data.message || "Failed to delete tutor");
      }
    } catch (error) {
      console.error("Error deleting tutor:", error);
      toast.error(error.response?.data?.message || "Error deleting tutor");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  console.log(myTutors)
  return (
    <main className="w-11/12 mx-auto">
      <h2 className="text-center font-bold text-4xl my-4">My Tutors</h2>
      {myTutors.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl">You haven't added any tutor yet.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Image</th>
                <th>Language</th>
                <th>Description</th>
                <th>Review</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {myTutors.map((tutor, index) => (
                <tr key={tutor._id}>
                  <th>{index + 1}</th>
                  <td>{tutor.name}</td>
                  <td>
                    <img 
                      src={tutor.image} 
                      className="w-15 rounded-lg" 
                      alt={tutor.name} 
                    />
                  </td>
                  <td>{tutor.language}</td>
                  <td>{(tutor.description).slice(0, 60)}...</td>
                  <td>{tutor.review}</td>
                  <td>
                    <button 
                      onClick={() => handleDelete(tutor._id)}
                      
                      className={`text-red-500 hover:text-red-700 text-xl` }
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </td>
                  <td>
                    <button 
                      onClick={() => handleUpdate(tutor._id)}
                      className="text-blue-500 hover:text-blue-700 text-xl"
                    >
                      <TiEdit />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default MyTutors;