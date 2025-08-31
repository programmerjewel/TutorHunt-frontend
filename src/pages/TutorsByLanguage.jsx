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
    <main className="my-10 w-11/12 mx-auto">
      <h2 className="text-4xl text-center font-extrabold mb-6 text-black/85 dark:text-gray-100">{formattedCategory} Tutors</h2>
      <div className="grid  grid-cols-2 md:grid-cols-4 gap-6">
        {tutors.map((tutor) => (
          <div key={tutor._id} className="border border-gray-200 dark:border-gray-600 p-3 rounded-md">
            <img src={tutor.image} className="w-full h-50 object-cover rounded-md mb-4" alt="" />
            <h3 className="font-bold text-xl">{tutor.name}</h3>
            <p className="text-sm my-1"><span className="font-semibold">Total Reviews: </span>{tutor.review}</p>
            <p className="text-sm mb-1"><span className="font-semibold">Price: </span>${tutor.price}/hr</p>
            <Link to={`/tutors/${tutor._id}`} className="btn btn-wide border-none shadow-none bg-violet-dark text-white hover:bg-violet-light">Details</Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TutorsByLanguage;
