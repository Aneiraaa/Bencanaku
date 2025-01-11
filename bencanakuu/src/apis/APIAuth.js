import { axiosInstance } from "@/config/axiosInstance";

export const APIAuth = {
  login: async (data) => {
    try {
      const response = await axiosInstance.post("/auth/login", data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  register: async (data) => {
    try {
      const response = await axiosInstance.post("/auth/register", data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};
