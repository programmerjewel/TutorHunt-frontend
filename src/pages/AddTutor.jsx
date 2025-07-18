

import { useContext} from "react";
import AuthContext from "../context/Auth/AuthContext";
import axios from "axios";

const AddTutor = () => {
  const {user} = useContext(AuthContext);
  
  const handleSubmit = async e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const language = form.language.value;
    const price = form.price.value;
    const review = parseInt(form.review.value);
    const description = form.description.value;

    const tutorData = {name, email, image, language, price, review, description};
    console.log(tutorData);
    try{
      await axios.post('http://localhost:4000/tutors', tutorData);
      alert('data added successfully!');
      form.reset();
    }
    catch(err){
      console.error(err);
      alert('Something went wrong!');
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
                className="input w-full"
                placeholder="https://example.com/poster.jpg"
                name="image"
              />
            </div>
            <div>
              <label className="label">Language</label>
              <select
                className="select w-full"
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
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="label">Price</label>
              <input
                type="number"
                className="input w-full"
                placeholder="price"
                name="price"
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
              className="textarea w-full"
              placeholder="Enter at least 50 characters"
              name="description"
            ></textarea>
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