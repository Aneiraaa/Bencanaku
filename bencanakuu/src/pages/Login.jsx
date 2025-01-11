import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userLoginSelector, resetLoginState } from "@/store/auth";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, message } = useSelector(userLoginSelector);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  const handleOnSubmit = (formData) => {
    dispatch(userLogin(formData));
  };

  useEffect(() => {
    if (status === "success") {
      navigate("/dashboard/information");
    }

    if (status === "failed") {
      const timer = setTimeout(() => {
        dispatch(resetLoginState());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status, dispatch, navigate]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="wrapper border p-10 rounded-[10px] shadow-sm w-[400px]">
        <div className="wrapper-text">
          <p className="capitalize font-semibold tracking-wider text-3xl text-center">
            login
          </p>
          <p className="text-lg font-thin capitalize text-center my-5 mx-auto">
            silahkan masukan akun yang sudah ada
          </p>
        </div>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div className="wrapper mt-10 mb-5">
            <div className="wrapper flex flex-col gap-2 mt-5">
              <Controller
                name="username"
                control={control}
                defaultValue=""
                rules={{ required: "Username is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    className="p-5 border rounded-[5px]"
                    type="text"
                    autoComplete="off"
                    placeholder="Username"
                  />
                )}
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="wrapper flex flex-col gap-2 mt-5">
              <div className="wrapper relative border rounded-[5px]">
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Password is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      className="p-5 rounded-[5px] border-0 w-full"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                    />
                  )}
                />
                <button
                  className="absolute right-0 top-0 p-5 z-10 duration-300 hover:text-blue-700 hover:font-semibold"
                  onClick={handleShowPassword}
                  type="button"
                >
                  {showPassword ? (
                    <IoEyeOffOutline className="text-2xl" />
                  ) : (
                    <IoEyeOutline className="text-2xl" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            {status === "failed" && (
              <p className="text-red-500 text-sm text-center mt-5">{message}</p>
            )}
          </div>

          <p className="font-thin text-lg">
            tidak mempunyai akun?{" "}
            <span>
              <Link
                to="/register"
                className="italic duration-300 text-blue-700 font-semibold hover:text-blue-400"
              >
                register
              </Link>{" "}
            </span>
          </p>
          <button
            className={`text-center w-full mt-10 border px-10 py-5 rounded-[5px] uppercase tracking-widest text-xl duration-300 ${
              status === "loading"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-slate-400"
            }`}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
