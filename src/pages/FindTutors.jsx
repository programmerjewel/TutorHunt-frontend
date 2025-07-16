import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const FindTutors = () => {
  const [tutors, setTutors] = useState([]);
  const AllTutors = async () => {
    try {
      const { data } = await axios.get('http://localhost:4000/find-tutors');
      setTutors(data)
    }
    catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    AllTutors();
  }, [])



  return (
    <main className="my-10">
      <h2 className="text-4xl text-center font-bold mb-6">All Available Tutors</h2>
      <div className="grid gap-6 md:grid-cols-2 grid-cols-1 w-11/12 mx-auto">
        {
          tutors.map(tutor => (
            <div key={tutor._id} className="border bg-gray-100 rounded-lg flex gap-4 items-center">
              <div className="w-1/2">
                <img src={tutor.image} className="" alt="" />
                <h3 className="font-bold text-lg">{tutor.name}</h3>
                <p>{tutor.language}</p>
              </div>
              <div className="w-1/2">
                <p>{tutor.description}...</p>
                <Link to={`/tutors/${tutor._id}`}><button className="btn btn-neutral">Detalis</button></Link>
              </div>
            </div>
          ))
        }
      </div>
    </main>
  );
};

export default FindTutors;