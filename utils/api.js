import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://ustar-backend.herokuapp.com/api/",
});

export const getParent = (parent_email, parent_name) => {
  return axiosInstance
    .get(`parents/${parent_email}`, { parent_email, parent_name })
    .then(({ data }) => {
      return data;
    });
};

export const getChildrenByParent = (parent_email) => {
  return axiosInstance
    .get(`parents/a@outlook.com/children`)
    .then(({ data: { children } }) => {
      return children;
    });
};

export const postParent = (parent_email, parent_name) => {
  return axiosInstance
    .post("parents", { parent_email, parent_name })
    .then((parents) => {
      return parents;
    });
};

export const postChildren = (parent_email, star_count, child_name) => {
  return axiosInstance
    .post("parents/a@outlook.com/children", {
      parent_email,
      star_count,
      child_name,
    })
    .then((child) => {
      console.log(child);
      return child;
    });
};
