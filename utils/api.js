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

export const getChildByLogin = (login_code) => {
  const newCode = Number(login_code);
  console.log(" in api", typeof newCode);
  return axiosInstance
    .get("children/", { params: { login_code: newCode } })
    .then((child) => {
      return child;
    });
};

export const getChildrenByParent = (parent_email) => {
  return axiosInstance
    .get(`parents/${parent_email}/children`)
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
  console.log(parent_email, star_count, child_name);
  return axiosInstance
    .post(`parents/${parent_email}/children`, {
      star_count,
      child_name,
    })
    .then((child) => {
      return child;
    });
};

export const deleteChild = (child_id) => {
  return axiosInstance.delete(`children/${child_id}`);
};
