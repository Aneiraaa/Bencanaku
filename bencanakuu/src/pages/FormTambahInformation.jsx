import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { postInformation } from "@/store/information";
import { useNavigate } from "react-router-dom";

export default function FormTambahInformation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleOnSubmit = (data) => {
    dispatch(postInformation(data))
      .unwrap()
      .then(() => {
        navigate("/dashboard/information")
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error while submitting form: ", error);
      });
      reset();
  };


  return (
    <div className="form-container">
      <h2 className="text-2xl font-semibold mb-4">Tambah Informasi</h2>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="space-y-4 bg-white p-6 rounded-md shadow-md"
      >
        <div>
          <label htmlFor="title" className="block text-gray-700">
            Title
          </label>
          <Controller
            name="title"
            control={control}
            rules={{ required: "Title is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="title"
                className="w-full p-2 border rounded-md"
              />
            )}
          />
          {errors.title && (
            <p className="text-red-600">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="desc" className="block text-gray-700">
            Description
          </label>
          <Controller
            name="desc"
            control={control}
            rules={{ required: "Description is required" }}
            render={({ field }) => (
              <textarea
                {...field}
                id="desc"
                className="w-full p-2 border rounded-md"
                rows="4"
              ></textarea>
            )}
          />
          {errors.desc && <p className="text-red-600">{errors.desc.message}</p>}
        </div>

        <div>
          <label htmlFor="author" className="block text-gray-700">
            Author
          </label>
          <Controller
            name="author"
            control={control}
            rules={{ required: "Author is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="author"
                className="w-full p-2 border rounded-md"
              />
            )}
          />
          {errors.author && (
            <p className="text-red-600">{errors.author.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full mt-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Add Information
        </button>
      </form>
    </div>
  );
}
