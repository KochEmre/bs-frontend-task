import axios from "axios";

const apiEndPoint = "http://localhost:3001/";

export const getAllProject = async () =>
    await axios.get(apiEndPoint + "project");

export const getProjects = async (currentPage, pageSize) =>
    await axios.get(apiEndPoint + `project?_start=${currentPage * pageSize}&_end=${
        (currentPage + 1) * pageSize
      }`);