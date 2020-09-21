import axios from "axios";
//https://ustar-backend.herokuapp.com/api/children/3/tasks/
export const fetchTasksByChild = (child_id) => {
  return axios
    .get(`https://ustar-backend.herokuapp.com/api/children/${child_id}/tasks/`)
    .then((res) => {
      return res.data.tasks;
    });
};

export const updateTaskByChild = (task_id) => {
  return axios
    .patch(`https://ustar-backend.herokuapp.com/api/tasks/${task_id}`, {
      task_status: "pending",
    })
    .then((res) => {
      return res.data.task;
    });
};
