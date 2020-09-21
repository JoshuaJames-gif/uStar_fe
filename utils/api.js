import axios from "axios";
//https://ustar-backend.herokuapp.com/api/children/3/tasks/
export const fetchTasksByChild = () => {
  return axios
    .get("https://ustar-backend.herokuapp.com/api/children/3/tasks/")
    .then((res) => {
      return res;
    });
};
