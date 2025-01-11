import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  userRegister,
  userRegisterSelector,
  resetRegisterState,
} from "@/store/auth";

export default function Register() {
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, message } = useSelector(userRegisterSelector);

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  const handleOnSubmit = (data) => {
    dispatch(userRegister(data));
  };

  useEffect(() => {
    if (status === "success") {
      dispatch(resetRegisterState());
      navigate("/login");
    }
    return () => {
      dispatch(resetRegisterState());
    };
  }, [status, dispatch, navigate]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="wrapper border p-10 rounded-[10px] shadow-sm w-[400px]">
        <div className="wrapper-text">
          <p className="capitalize font-semibold tracking-wider text-3xl text-center">
            Register
          </p>
          <p className="text-lg font-thin capitalize text-center my-5 mx-auto">
            Silahkan buat akun anda
          </p>
        </div>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div className="wrapper my-10">
            <Controller
              name="fullname"
              control={control}
              defaultValue=""
              rules={{ required: "Fullname is required" }}
              render={({ field }) => (
                <input
                  className="p-5 border rounded-[5px] w-full"
                  type="text"
                  autoComplete="off"
                  placeholder="Fullname"
                  {...field}
                />
              )}
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm">{errors.fullname.message}</p>
            )}

            <Controller
              name="username"
              control={control}
              defaultValue=""
              rules={{ required: "Username is required" }}
              render={({ field }) => (
                <input
                  className="p-5 mt-5 border rounded-[5px] w-full"
                  type="text"
                  autoComplete="off"
                  placeholder="Username"
                  {...field}
                />
              )}
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}

            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: "Password is required",
                minLength: {
                  message: "Password must be at least 6 characters",
                },
              }}
              render={({ field }) => (
                <div className="wrapper relative border rounded-[5px] mt-5">
                  <input
                    className="p-5 rounded-[5px] border-0 w-full"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...field}
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
              )}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <Controller
              name="confirm_password"
              control={control}
              defaultValue=""
              rules={{
                required: "Confirm Password is required",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              }}
              render={({ field }) => (
                <div className="wrapper relative border rounded-[5px] mt-5">
                  <input
                    className="p-5 rounded-[5px] border-0 w-full"
                    type={showPassword ? "text" : "password"}
                    placeholder="Re-Password"
                    {...field}
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
              )}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {status === "failed" && (
            <p className="text-red-500 text-sm text-center mt-5">{message}</p>
          )}
          {status === "loading" && (
            <p className="text-blue-500 text-sm text-center mt-5">
              Registrasi sedang diproses...
            </p>
          )}
          <button
            className="text-center w-full border px-10 py-5 rounded-[5px] uppercase tracking-widest text-xl duration-300 bg-blue-600 text-white hover:bg-slate-400"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Processing..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
