import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure"; 

const TutorsByLanguage = () => {
  const { category } = useParams();
  const [tutors, setTutors] = useState([]);
  const axiosSecure = useAxiosSecure(); 

  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

  useEffect(() => {
    axiosSecure
      .get(`/find-tutors/${category}`)
      .then((res) => {
        setTutors(res.data);
      })
      .catch((error) => {
        console.error("Error fetching tutors by language:", error);
      });
  }, [category, axiosSecure]);

  return (
    <>
      <h2 className="text-center my-10 text-3xl font-bold">{formattedCategory} Tutors</h2>
      <div className="grid grid-cols-3 gap-4">
        {tutors.map((tutor) => (
          <div key={tutor._id} className="border border-gray-300 p-4 rounded-md">
            <h3>{tutor.name}</h3>
            <img src={tutor.image} className="w-30 rounded-xl shadow-2xl" alt="" />
            <Link to={`/tutors/${tutor._id}`} className="btn btn-error">Details</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default TutorsByLanguage;
