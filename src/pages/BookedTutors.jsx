import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/Auth/AuthContext";
import axios from "axios";

const BookedTutors = () => {
  const { user } = useContext(AuthContext);
  const [tutor, setTutor] = useState([]);

  useEffect(() => {
    const fetchBookedTutors = async () => {
      try {
        const email = user?.email;
        if (!email) {
          console.log("data not available");
        }
        const response = await axios.get(
          `http://localhost:4000/booked-tutors?email=${user.email}`
        );
        setTutor(response.data);
      } catch (error) {
        console.error("Error fetching booked tutors:", error);
      }
    };
    fetchBookedTutors();
  }, [user?.email]);

  return (
    <main>
      <h2 className="text-center font-bold text-3xl">My Booked Tutor</h2>
      {
      tutor.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl">You haven't booked any tutor yet.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
          {tutor.map((singleTutor) => (
            <div className="border p-1" key={singleTutor._id}>
              <h3>{singleTutor.name}</h3>
              <img src={singleTutor.image} alt="" />
              <p>{singleTutor.price}</p>
              <p>{singleTutor.language}</p>
              <button className="btn">Review</button>
            </div>
          ))}
        </div>
      )
      }
    </main>
  );
};

export default BookedTutors;
