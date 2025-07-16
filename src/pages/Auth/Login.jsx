import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/Auth/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { logInWithGoogle, loginUser } = useContext(AuthContext);
  console.log(logInWithGoogle, loginUser);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    loginUser(email, password)
      .then(() => {
        console.log('Successfully logged in with email/password!');
        navigate(location.state?.from || '/');
      })
      .catch(error => {
        toast.error('Something went wrong!')
        console.error('Login error:', error.message);
        if (error.code) console.log("Error code:", error.code); 
      });
  };

  const handleGoogleLogin = () => {
    logInWithGoogle()
      .then(() => {
        console.log('Successfully logged in with Google')
        navigate(location.state?.from || '/');
      })
      .catch(error => {
        toast.error('Login failed' , error.message);
        console.error('Google login error:', error.message);
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <fieldset className="fieldset p-4 md:w-4/12 w-11/12 mx-auto my-8">
        <legend className="text-3xl font-bold text-center">Login</legend>

        <label className="label">Email</label>
        <input type="email" className="input w-full" placeholder="Email" name="email" required />

        <label className="label">Password</label>
        <input type="password" className="input w-full" placeholder="Password" name="password" required />

        <button type="submit" className="btn btn-neutral my-4 btn-wide mx-auto">Login</button>
        
        <button 
          type="button" 
          onClick={handleGoogleLogin} 
          className="btn btn-neutral btn-wide mx-auto"
        >
          Login with Google
        </button>
        
        <p className="text-center text-md mt-3 text-md">
          Don't have an account?{" "}
          <Link
            className="font-semibold text-md hover:underline"
            to="/register"
            state={{ from: location.state?.from }}
          >
            Register
          </Link>{" "}
          here
        </p>
      </fieldset>
    </form>
  );
};

export default Login;