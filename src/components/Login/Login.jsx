
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContexts } from "../Providers/AuthProviders";



const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {signIn} = useContext(AuthContexts);

  

  const handleLogin = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form =new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email,password);
    signIn(email,password)
    .then(result =>{
      console.log(result.user)
      navigate(location?.state ? location.state : '/')
    })
    .catch(error =>{
      console.error(error);
    })

  }
    return (
        <div>
       <div className="text-center text-3xl mt-10 mb-8 font-semibold text-green-800">
       <h1 className="text-3xl font-bold" > Please Login</h1>
       </div>
        <div className="flex justify-center items-center shadow-2xl bg-green-100 w-1/2 mx-auto">
      <form onSubmit={handleLogin}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-green-800 text-white">Login</button>
        </div>
        <h1 className="mt-10">Do not have an account <Link className="text-green-800 font-bold" to='/register'>Register</Link></h1>
      </form>
    </div>
    </div>
    );
};

export default Login;