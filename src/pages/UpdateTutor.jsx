import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";

const UpdateTutor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const [tutor, setTutor] = useState({
    image: "",
    language: "",
    price: "",
    description: "",
  });

  const [error, setError] = useState({});

  useEffect(() => {
    const fetchTutor = async () => {
      try {
        const { data } = await axiosSecure.get(`/tutors/${id}`);
        setTutor(data);
      } catch (err) {
        toast.error("Failed to load tutor data.", err);
      }
    };
    fetchTutor();
  }, [id, axiosSecure]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTutor((prev) => ({ ...prev, [name]: value }));
    if (error[name]) {
      setError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate URL
    const urlPattern = /^(https?:\/\/)[\w.-]+\.[a-z]{2,}.*$/i;
    if (!tutor.image) {
      newErrors.image = "Image URL is required";
    } else if (!urlPattern.test(tutor.image)) {
      newErrors.image = "Please enter a valid URL (starting with http/https)";
    }

    // Language
    if (!tutor.language) {
      newErrors.language = "Language is required";
    }

    // Price
    if (!tutor.price) {
      newErrors.price = "Price is required";
    } else if (isNaN(tutor.price) || Number(tutor.price) <= 0) {
      newErrors.price = "Price must be a number greater than 0";
    }

    // Description
    if (!tutor.description) {
      newErrors.description = "Description is required";
    } else if (tutor.description.length < 50) {
      newErrors.description = "Description must be at least 50 characters long";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axiosSecure.patch(`/tutors/${id}`, tutor);
      toast.success("Tutor updated successfully!");
      navigate("/my-tutors");
    } catch {
      toast.error("Failed to update tutor.");
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset p-4 w-11/12 mx-auto">
          <legend className="fieldset-legend mx-auto text-3xl font-bold">
            Update Tutor
          </legend>

          <div className="grid grid-cols-1 gap-4 mt-4 w-3/5 mx-auto">
            {/* Image */}
            <div className="flex flex-col">
              <label className="label">Tutor's Image URL</label>
              <input
                type="url"
                className={`input w-full ${error.image ? "border-red-500" : ""}`}
                placeholder="https://example.com/poster.jpg"
                name="image"
                value={tutor.image}
                onChange={handleChange}
              />
              {error.image && <span className="text-red-500 text-sm">{error.image}</span>}
            </div>

            {/* Language */}
            <div>
              <label className="label">Language</label>
              <select
                className={`select w-full ${error.language ? "border-red-500" : ""}`}
                name="language"
                value={tutor.language}
                onChange={handleChange}
              >
                <option disabled value="">Select Language</option>
                <option value="English">English</option>
                <option value="Arabic">Arabic</option>
                <option value="Spanish">Spanish</option>
                <option value="Italic">Italic</option>
                <option value="Chinese">Chinese</option>
                <option value="German">German</option>
                <option value="Japanese">Japanese</option>
                <option value="Portugese">Portugese</option>
              </select>
              {error.language && <span className="text-red-500 text-sm">{error.language}</span>}
            </div>

            {/* Price */}
            <div>
              <label className="label">Price</label>
              <input
                type="number"
                className={`input w-full ${error.price ? "border-red-500" : ""}`}
                placeholder="Price"
                name="price"
                value={tutor.price}
                onChange={handleChange}
              />
              {error.price && <span className="text-red-500 text-sm">{error.price}</span>}
            </div>

            {/* Description */}
            <div>
              <label className="label">Description</label>
              <textarea
                className={`textarea w-full ${error.description ? "border-red-500" : ""}`}
                placeholder="Enter at least 50 characters"
                name="description"
                value={tutor.description}
                onChange={handleChange}
              />
              {error.description && (
                <span className="text-red-500 text-sm">{error.description}</span>
              )}
            </div>
          </div>

          <button type="submit" className="btn btn-neutral mt-6 mx-auto">
            Update Tutor
          </button>
        </fieldset>
      </form>
    </main>
  );
};

export default UpdateTutor;
