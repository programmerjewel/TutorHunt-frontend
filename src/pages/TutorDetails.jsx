import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/Auth/AuthContext";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";

const TutorDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [tutor, setTutor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isBooking, setIsBooking] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchTutorAndBookingStatus = async () => {
      try {
        
        const { data: tutorData } = await axiosSecure.get(`/tutors/${id}`);
        setTutor(tutorData);

        
        if (user?.email) {
          const { data: bookings } = await axiosSecure.get(`/booked-tutors?email=${user.email}`);
          const alreadyBooked = bookings.some(booking => booking.tutorId === id);
          setIsBooked(alreadyBooked);
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to load tutor details");
      } finally {
        setIsLoading(false);
      }
    };
    fetchTutorAndBookingStatus();
  }, [id, user, axiosSecure]);

  const handleBookedTutor = async () => {
    if (isBooked) return;

    setIsBooking(true);
    try {
      const bookedTutor = {
        tutorId: id,
        tutorName: tutor.name,
        tutorEmail: tutor.email,
        language: tutor.language,
        image: tutor.image,
        price: tutor.price,
        userEmail: user.email,
        hasReviewed: false,
      };

      await axiosSecure.post("/booked-tutors", bookedTutor);
      toast.success("Tutor booked successfully!");
      setIsBooked(true);
      navigate("/booked-tutors");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to book tutor");
    } finally {
      setIsBooking(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!tutor) {
    return (
      <div className="text-center py-8 text-red-500">
        Failed to load tutor details
      </div>
    );
  }

  return (
    <main className="my-10 w-11/12 mx-auto">
      <div className="w-full md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{tutor.name}</h2>

          <div className="mb-6">
            <p className="text-lg mb-2">
              <span className="font-semibold">Expertise </span>in {tutor.language}
            </p>
            <p className="text-lg mb-2">
              <span className="font-semibold">Price:</span> ${tutor.price}/hour
            </p>
            <p className="text-lg mb-4">
              <span className="font-semibold">Total Review:</span> {tutor.review || 0}
            </p>
            <div className="mb-6">
              <p className="text-gray-700">{tutor.description}</p>
            </div>

            <button
              onClick={handleBookedTutor}
              disabled={isBooking || isBooked}
              className={`btn w-full md:w-auto ${isBooking || isBooked ? "btn-disabled" : "btn-primary"}`}
            >
              {isBooking ? "Booking..." : isBooked ? "Booked" : "Book Tutor"}
            </button>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={tutor.image}
            alt={`Profile of ${tutor.name}`}
            className="w-4/5 h-3/5 max-w-md aspect-square rounded-md object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default TutorDetails;
