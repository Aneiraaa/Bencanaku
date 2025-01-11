import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import { getInformationSelector } from "@/store/information";
import { patchInformation } from "@/store/information";
import { useNavigate, useParams } from "react-router-dom";
export default function FormEditInformation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: information, status } = useSelector(getInformationSelector);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (information?.length > 0) {
      const itemToEdit = information.find((item) => item._id === id);
      if (itemToEdit) {
        reset(itemToEdit);
      }
    }
  }, [id, information, reset, status]);

  const handleOnSubmit = (data) => {
    console.log(data)
    dispatch(patchInformation({ data, id }))
    .unwrap()
    .then(() => {
      navigate("/dashboard/information")
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error while submitting form: ", error);
    });


  };


  return (
    <div className="form-container">
      <h2 className="text-2xl font-semibold mb-4">Edit Informasi</h2>
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
                type="text"
                id="title"
                {...field}
                className="w-full p-2 border rounded-md"
              />
            )}
          />
          {errors.title && <p className="text-red-600">{errors.title.message}</p>}
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
                id="desc"
                {...field}
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
                type="text"
                id="author"
                {...field}
                className="w-full p-2 border rounded-md"
              />
            )}
          />
          {errors.author && <p className="text-red-600">{errors.author.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full mt-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Update Information
        </button>
      </form>
    </div>
  );
}
