import { Link, useNavigate } from "react-router-dom";
import registerImg from "../../assets/login image/img.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  //use react hook from
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.mail, data.password).then((result) => {
      const loggedUser = result.user;
      //update user profile and post server user data
      updateUserProfile(data.firstName, data.photoURL, data.accessToken).then(() => {
        const saveUser = {name: data.firstName, email: data.mail, photo: data.photoURL, token: data.accessToken}
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              reset();
              Swal.fire({
                title: "Good job!",
                text: "You successfully create an account",
                icon: "success",
              });
              navigate("/");
            }
          });
      });
    });
  };

  return (
    <>
      <Helmet>
        <title>Happy shop | Register</title>
      </Helmet>
      {/* register page title section */}
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-5 ml-7">Create Account</h1>
            <img src={registerImg} alt="image" />
          </div>
          {/* register page title section close  */}
          <div className="card shrink-0 w-full max-w-sm border-2 bg-base-100">
            {/* react hook from start  */}
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="flex gap-2">
                <div className="form-control">
                  {/* first name and last name field  */}
                  <label className="label">
                    <span className="label-text">First name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="input input-bordered w-40"
                    {...register("firstName", { required: true })}
                    aria-invalid={errors.firstName ? "true" : "false"}
                  />
                  {errors.firstName?.type === "required" && (
                    <p role="alert">First name is required</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="input input-bordered w-40"
                    {...register("lastName", { required: true })}
                    aria-invalid={errors.firstName ? "true" : "false"}
                  />
                  {errors.lastName?.type === "required" && (
                    <p role="alert">Last name is required</p>
                  )}
                </div>
              </div>
              {/* first name and last name field close  */}

              {/* email field  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="E-mail address"
                  className="input input-bordered w-[327px]"
                  {...register("mail", {
                    required: "Email Address is required",
                  })}
                  aria-invalid={errors.mail ? "true" : "false"}
                />
                {errors.mail && <p role="alert">{errors.mail.message}</p>}
              </div>
              {/* password field  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered w-[327px]"
                  {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password && <span>Inter must me password</span>}
                {errors.password?.type === "minLength" && (
                  <span>Password must be 6 characters</span>
                )}
              </div>
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              {/* file input  */}
              <input
                type="file"
                className="file-input file-input-bordered file-input-md w-[327px]"
                {...register("photo")}
              />
              {/* submit button here  */}
              <div className="form-control mt-6">
                <input
                  className="btn rounded-none bg-[#ffd90c] hover:bg-slate-800 hover:text-white"
                  type="submit"
                />
              </div>
              <div className="divider">OR</div>
              <p className="text-center">
                Have an account?{" "}
                <Link className="underline font-medium" to="/login">
                  Please login
                </Link>
              </p>
            </form>
            {/* react hook from  close  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
