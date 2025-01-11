import { TablesInformation } from "@/components/tables/TablesInformation";
import { useSelector, useDispatch } from "react-redux";
import {
  getInformationSelector,
  getInformation,
  deleteInformation,
  resetGetInformationState,
} from "@/store/information";
import { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

export default function DashboardInformation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data } = useSelector(getInformationSelector);
  console.log("data", data);

  const fetchData = useCallback(() => {
    dispatch(getInformation());
  }, [dispatch]);

  useEffect(() => {
    fetchData();
    return () => {
      dispatch(resetGetInformationState());
    };
  }, [fetchData, dispatch]);

  const handleEdit = (id) => {
    if (id) {
      navigate(`/dashboard/information/edit/${id}`);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      dispatch(deleteInformation(id)).then(() => {
        window.location.reload();
      });
    }
  };

  return (
    <div className="wrapper">
      <div className="wrapper flex items-center justify-between">
        <p className="capitalize text-2xl">Manajemen Informasi</p>
        <Link
          to={"tambah"}
          className="text-sm flex items-center gap-3 p-2 border border-blue-600 bg-blue-600 text-white font-normal capitalize duration-300 rounded-[5px] hover:bg-white hover:border-blue-600 hover:text-blue-600"
        >
          <FaPlus />
          <span>Create</span>
        </Link>
      </div>
      <TablesInformation
        className="mt-5"
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
