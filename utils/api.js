import axios from "axios";
//https://ustar-backend.herokuapp.com/api/children/3/tasks/
export const fetchTasksByChild = (child_id) => {
  return axios
    .get(`https://ustar-backend.herokuapp.com/api/children/${child_id}/tasks/`)
    .then((res) => {
      return res.data.tasks;
    });
};

export const updateTask = (task_id, status) => {
  // console.log(status, "<--- api");
  // console.log(task_id , "<--- api");
  return axios
    .patch(`https://ustar-backend.herokuapp.com/api/tasks/${task_id}`, {
      task_status: status,
    })
    .then((res) => {
      return res.data.task;
    });
  // .catch(console.log);
};
