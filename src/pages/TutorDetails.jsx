import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/Auth/AuthContext";
import axios from "axios";


const TutorDetails = () => {
  const {user} = useContext(AuthContext);
  const {id} = useParams();
  const [tutor, setTutor] = useState([]);
  const navigate = useNavigate();


  useEffect(()=>{
  fetch(`http://localhost:4000/tutors/${id}`)
  .then(res => res.json())
  .then(data => setTutor(data))
},[id])

const handleBookedTutor = async () =>{
  const bookedTutor = {
    tutorId: id,
    tutorEmail: tutor.email,
    language: tutor.language,
    image: tutor.image,
    price: tutor.price,
    userEmail: user.email,
  }
  try{
    await axios.post('http://localhost:3000/booked-tutors', bookedTutor);
    alert('Tutor booked successfully!');
    navigate('/booked-tutors')
    
  }
  catch(err){
    console.error(err);
  }
}

  return (
    <main className="my-10 w-11/12 mx-auto">
      <h2 className='text-center text-4xl font-bold mb-6'>Details</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{tutor.name}</h2>
        <img 
          src={tutor.image} 
          alt={`Profile of ${tutor.name}`} 
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <p className="text-lg mb-2">
          <span className="font-medium">Price:</span> {tutor.price}$
        </p>
        <p className="text-lg">
          <span className="font-medium">Rating:</span> {tutor.review} / 5
        </p>
        <p className="mt-4 text-gray-700">{tutor.details}</p>
        <p className="my-2 text-gray-600">
          <span className="font-medium">Experience:</span> {tutor.experience}
        </p>
        <Link className="btn btn-neutral" onClick={handleBookedTutor}>Book Tutor</Link>
      </div>
    </main>
  );
};

export default TutorDetails;