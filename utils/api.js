import axios from "axios";
//https://ustar-backend.herokuapp.com/api/children/3/tasks/

export const fetchChildByChildId = (child_id) => {
  return axios
    .get(`https://ustar-backend.herokuapp.com/api/children/${child_id}/`)
    .then((res) => {
      return res.data.child;
    });
};
export const fetchTasksByChild = (child_id) => {
  return axios
    .get(`https://ustar-backend.herokuapp.com/api/children/${child_id}/tasks/`)
    .then((res) => {
      return res.data.tasks;
    });
};
export const fetchRewardsByChild = (child_id) => {
  return axios
    .get(
      `https://ustar-backend.herokuapp.com/api/children/${child_id}/rewards/`
    )
    .then((res) => {
      return res.data.rewards;
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
export const removeReward = (reward_id) => {
  return axios.delete(
    `https://ustar-backend.herokuapp.com/api/rewards/${reward_id}`
  );
};
export const createTask = (child_id, task_description, stars_worth) => {
  return axios.post(
    `https://ustar-backend.herokuapp.com/api/children/${child_id}/tasks`,
    { task_description, stars_worth }
  );
};
export const createReward = (child_id, reward_description, star_cost) => {
  return axios.post(
    `https://ustar-backend.herokuapp.com/api/children/${child_id}/rewards`,
    { reward_description, star_cost }
  );
};
export const patchChild = (child_id, star_inc) => {
  return axios.patch(
    `https://ustar-backend.herokuapp.com/api/children/${child_id}/`,
    { star_inc }
  );
};
