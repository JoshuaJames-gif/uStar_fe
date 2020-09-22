import axios from "axios";
//https://ustar-backend.herokuapp.com/api/children/3/tasks/
export const fetchTasksByChild = (child_id) => {
  return axios
    .get(`https://ustar-backend.herokuapp.com/api/children/${child_id}/tasks/`)
    .then((res) => {
      return res.data.tasks;
    });
};

export const updateTaskByChild = (task_id, task_status) => {
  return axios
    .patch(`https://ustar-backend.herokuapp.com/api/tasks/${task_id}`, {
      task_status,
    })
    .then((res) => {
      return res.data.task;
    });
};
export const removeTask = (task_id) => {
  return axios.delete(
    `https://ustar-backend.herokuapp.com/api/tasks/${task_id}`
  );
};
export const createTask = (child_id, task_description, stars_worth) => {
  return axios.post(
    `https://ustar-backend.herokuapp.com/api/children/${child_id}/tasks`,
    { task_description, stars_worth }
  );
};
