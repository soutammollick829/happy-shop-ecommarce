import { useForm } from "react-hook-form";
import loginImg from "../../assets/login image/ecommerce-estore.png";
import { Link } from "react-router-dom";

const Login = () => {
    //use react hook from
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);


  return (
    //login title
    <div className="hero min-h-screen -mt-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="space-y-5">
          <h1 className="text-5xl font-bold mt-8 ml-5">Login now!</h1>
          <img className="w-[500px]" src={loginImg} alt="image" />
        </div>
        {/* login title close  */}

        {/* login from here  */}
        <div className="card shrink-0 w-full max-w-sm border-2 bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              {/* email input  */}
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email" , { required: true })}
              />
              {errors.email && <span className="mt-2 text-red-500">Email field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              {/* password input  */}
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="mt-2 text-red-500">Password  is required</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn rounded-none bg-[#ffd90c] hover:bg-slate-800 hover:text-white" type="submit" />
            </div>
            <div className="divider">OR</div>
            <p className="text-center">Create an new account? <Link className="underline font-medium" to="/register">Register Now</Link></p>
          </form>
        </div>
      </div>
    </div>
    //login from close
  );
};

export default Login;
