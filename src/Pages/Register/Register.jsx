import Lottie from 'lottie-react';
import registerLottieData from '../../assets/Register.json';
import { Link, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext/AuthContext';
import { toast } from 'react-toastify';

const Register = () => {

  const { createUser, setUser, signinWithGoogle } = useContext(AuthContext);

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const newUser = { name, photo, email, password };
    console.log(newUser);

    createUser(email, password)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.log(error.massage);
      })
  }

  const handleGoogleSignIn = () => {
    signinWithGoogle()
      .then(res => {
        setUser(res.user)
        toast.success("Register Successfully Done")
      })
      .catch(error => {
        toast.error('Unable To Register')
        console.log('Error msg', error);
      })
  }


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6 text-center">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>

          <p className="text-center">Already Have An Account ? <Link className="text-[#f85e00] font-semibold" to="/singIn" > Login</Link> </p>

          <div className="divider divider-success"></div>

          <div onClick={handleGoogleSignIn} className='px-4 text-center pb-4'>
            <button className="btn bg-white text-black border-[#e5e5e5]">
              <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;