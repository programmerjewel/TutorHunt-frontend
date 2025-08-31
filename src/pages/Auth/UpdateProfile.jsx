import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AuthContext from '../../context/Auth/AuthContext';

const UpdateProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      photo: '',
    },
  });

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      reset({
        name: user?.displayName || '',
        photo: user?.photoURL || '',
      });
    }
  }, [user, navigate, reset]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError(null);
    try {
      await updateUser(data.name, data.photo);
      reset();
      navigate('/');
    } catch (error) {
      setError('Failed to update profile. Please try again.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="w-11/12 mx-auto">
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="fieldset w-xs mx-auto">
        <legend className="fieldset-legend text-4xl text-center font-extrabold mb-6 text-black/85 dark:text-gray-100">
          Update Profile
        </legend>

        <label htmlFor="name" className="label">
          User Name
        </label>
        <input
          id="name"
          {...register('name', { required: 'Name is required' })}
          type="text"
          className="input"
          placeholder="Type user name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}

        <label htmlFor="photo" className="label">
          Photo URL
        </label>
        <input
          id="photo"
          {...register('photo', {
            validate: (value) =>
              !value ||
              /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/.test(value) ||
              'Please enter a valid URL',
          })}
          type="url"
          className="input"
          placeholder="Type a valid url"
        />
        {errors.photo && (
          <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>
        )}

        <button
          type="submit"
          className="btn border-none shadow-none bg-violet-dark text-white hover:bg-violet-light mt-4"
          disabled={isLoading}
        >
          {isLoading ? 'Updating...' : 'Update'}
        </button>
      </form>
    </main>
  );
};

export default UpdateProfile;