

import { useContext, useState} from "react";
import AuthContext from "../context/Auth/AuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddTutor = () => {
  const {user} = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [errors, setErrors] = useState({});
  
  const validateForm = (formData) => {
    const newErrors = {};
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

    if (!formData.image || !urlRegex.test(formData.image)) {
      newErrors.image = "Please enter a valid image URL";
    }

    if (formData.language === "Select") {
      newErrors.language = "Please select a language";
    }

    if (!formData.price || formData.price <= 0) {
      newErrors.price = "Price must be a positive number";
    }

    if (!formData.description || formData.description.length < 50) {
      newErrors.description = "Description must be at least 50 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e =>{
    e.preventDefault();
    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      image: form.image.value,
      language: form.language.value,
      price: parseFloat(form.price.value),
      review: parseInt(form.review.value),
      description: form.description.value
    }
    
    if (!validateForm(formData)) {
      return;
    }

    try{
      await axiosSecure.post('/tutors', formData);
      toast.success('data added successfully!');
      form.reset();
      setErrors({});
    }
    catch(err){
      console.error(err);
      toast.error('Something went wrong!');
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset p-4 w-11/12 mx-auto">
          <legend className="fieldset-legend mx-auto text-3xl font-bold">
            Add Tutor
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                className="input w-full"
                name="name"
                disabled={true}
                defaultValue={user?.displayName}
              />
            </div>
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                name="email"
                disabled={true}
                defaultValue={user?.email}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col">
              <label className="label">Tutor's Image URL</label>
              <input
                type="url"
                className={`input w-full ${errors.image ? 'input-error' : ''}`}
                placeholder="https://example.com/poster.jpg"
                name="image"
              />
              {errors.image && <span className="text-red-500 text-sm">{errors.image}</span>}
            </div>
            <div>
              <label className="label">Language</label>
              <select
                className={`select w-full ${errors.language ? 'select-error' : ''}`}
                name="language"
                defaultValue="Select"
              >
                <option disabled value="Select">
                  Select Language
                </option>
                <option value="English">English</option>
                <option value="Arabic">Arabic</option>
                <option value="Spanish">Spanish</option>
                <option value="Italic">Italic</option>
                <option value="Chinese">Chinese</option>
                <option value="German">German</option>
                <option value="Japanese">Japanese</option>
                <option value="Portugese">Portugese</option>
              </select>
              {errors.language && <span className="text-red-500 text-sm">{errors.language}</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="label">Price</label>
              <input
                type="number"
                className={`input w-full ${errors.price ? 'input-error' : ''}`}
                placeholder="price per hour"
                name="price"
                min="1"
                step="0.01"
              />
            </div>
            <div>
              <label className="label">Review</label>
              <input type="number" name="review" defaultValue={0} disabled className="input w-full" />
              
            </div>
          </div>

          <div className="mt-4">
            <label className="label">Description</label>
            <textarea
              className={`textarea w-full ${errors.description ? 'textarea-error' : ''}`}
              placeholder="Enter at least 50 characters"
              name="description"
            ></textarea>
            {errors.description && (
              <span className="text-red-500 text-sm">
                {errors.description}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-neutral mt-6 w-full md:w-auto"
          >
            Add Tutor
          </button>
        </fieldset>
      </form>
    </main>
  );
};

export default AddTutor;