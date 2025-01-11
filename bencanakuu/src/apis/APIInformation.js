import { axiosInstance } from "@/config/axiosInstance";
import { AxiosError } from "axios";

export const APIInformation = {
  getData: async (data) => {
    try {
      const response = await axiosInstance.get("/article", data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) throw new Error(error.message);
      throw new Error(error.message || "Unexpected error occurred");
    }
  },
  getDataById: async (id) => {
    try {
      const response = await axiosInstance.get(`/article/${id}`);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) throw new Error(error.message);
      throw new Error(error.message || "Unexpected error occurred");
    }
  },
  postData: async (data) => {
    try {
      const response = await axiosInstance.post(
        "/article/create-article",
        data
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) throw new Error(error.message);
      throw new Error(error.message || "Unexpected error occurred");
    }
  },
  patchData: async ({ data, id }) => {
    try {
      const response = await axiosInstance.patch(
        `/article/patch-article/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) throw new Error(error.message);
      throw new Error(error.message || "Unexpected error occurred");
    }
  },
  deleteData: async (id) => {
    try {
      const response = await axiosInstance.delete(`/article/delete/${id}`);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) throw new Error(error.message);
      throw new Error(error.message || "Unexpected error occurred");
    }
  },
};
