import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/Auth/AuthContext";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const MyTutors = () => {
  const [myTutors, setMyTutors] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/find-tutors?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyTutors(data))
  }, [user?.email]);

  // Handle update
  const handleUpdate= (id) => {
    navigate(`/update-tutor/${id}`);
  };

  // Handle delete
  const handleDelete = (id) =>{
    fetch(`http://localhost:4000/tutors/${id}`, {method: 'DELETE'})
    .then(res=>res.json())
    .then(data => {
        if (data.success) {
          // Update the UI by removing the deleted tutor
          setMyTutors(myTutors.filter(tutor => tutor._id !== id));
        }
      })
      .catch(error => console.error("Error deleting tutor:", error));
    }
  

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