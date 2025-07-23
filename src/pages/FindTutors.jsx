import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const FindTutors = () => {
  // Initialize tutors as an array instead of object
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const AllTutors = async () => {
      try {
        setLoading(true);
        const { data } = await axiosSecure.get('/find-tutors');
        setTutors(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    AllTutors();
  }, [axiosSecure]); // Include axiosSecure in dependencies

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <main className="my-10">
      <h2 className="text-4xl text-center font-bold mb-6">All Available Tutors</h2>
      <div className="grid gap-6 md:grid-cols-2 grid-cols-1 w-11/12 mx-auto">
        {tutors.length > 0 ? (
          tutors.map(tutor => (
            <div key={tutor._id} className="border bg-gray-100 rounded-lg flex gap-4 items-center p-4">
              <div className="w-1/2">
                <img 
                  src={tutor.image} 
                  className="w-25 aspect-square object-cover rounded-md border" 
                  alt={tutor.name} 
                />
                <h3 className="font-bold text-lg mt-2">{tutor.name}</h3>
                <p className="text-gray-600">{tutor.language}</p>
              </div>
              <div className="w-1/2">
                <p className="mb-4 line-clamp-3">{tutor.description}</p>
                <Link to={`/tutors/${tutor._id}`}>
                  <button className="btn btn-neutral">Details</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-10">
            <p className="text-xl">No tutors available at the moment.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default FindTutors;