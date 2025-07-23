import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/Auth/AuthContext";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure"; // ✅ import the custom hook

const BookedTutors = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure(); // ✅ get secure axios instance

  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviewingId, setReviewingId] = useState(null);

  useEffect(() => {
    const fetchBookedTutors = async () => {
      try {
        setLoading(true);
        const email = user?.email;
        const response = await axiosSecure.get(
          `/booked-tutors?email=${email}` // ✅ secured GET request
        );
        setTutors(response.data);
      } catch (error) {
        toast.error("Failed to load booked tutors");
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchBookedTutors();
    }
  }, [user?.email, axiosSecure]);

  const handleReview = async (tutorId) => {
    try {
      setReviewingId(tutorId);

      const response = await axiosSecure.patch(
        `/tutors/${tutorId}/review?email=${user.email}` // ✅ secured PATCH request
      );

      if (response.data.success) {
        toast.success("Review submitted successfully");

        setTutors((prevTutors) =>
          prevTutors.map((tutor) =>
            tutor.tutorId === tutorId
              ? { ...tutor, hasReviewed: true }
              : tutor
          )
        );
      } else {
        toast.error(response.data.message || "Failed to submit review");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error submitting review");
      console.error("Review error:", error);
    } finally {
      setReviewingId(null);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <main className="my-10 w-11/12 mx-auto">
      <h2 className="text-center font-bold text-3xl mb-8">My Booked Tutors</h2>

      {tutors.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl">You haven't booked any tutor yet.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
          {tutors.map((tutor) => (
            <div className="border p-4 rounded-lg" key={tutor._id}>
              <h3 className="font-bold text-lg mb-2">{tutor.tutorName}</h3>
              <img
                src={tutor.image}
                alt={tutor.tutorName}
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <p className="mb-1">${tutor.price}/hour</p>
              <p className="mb-3">{tutor.language}</p>
              <button
                onClick={() => handleReview(tutor.tutorId)}
                disabled={tutor.hasReviewed || reviewingId === tutor.tutorId}
                className={`btn btn-sm w-full ${
                  tutor.hasReviewed ? "btn-disabled" : "btn-primary"
                }`}
              >
                {reviewingId === tutor.tutorId ? (
                  <span className="loading loading-spinner"></span>
                ) : tutor.hasReviewed ? (
                  "Reviewed"
                ) : (
                  "Review"
                )}
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default BookedTutors;
