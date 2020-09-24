import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://ustar-backend.herokuapp.com/api/",
});

export const getParent = (parent_email, parent_name) => {
  return axiosInstance
    .get(`parents/${parent_email}`, { parent_email, parent_name })
    .then(({ data: { parent } }) => {
      return parent;
    });
};

export const getChildByLogin = (login_code) => {
  return axiosInstance
    .get(`login_code/${login_code}`)
    .then(({ data: { child } }) => {
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
  return axiosInstance
    .post(`parents/${parent_email}/children`, {
      star_count,
      child_name,
    })
    .then((res) => {
      return res.data.child;
    });
};

export const deleteChild = (child_id) => {
  return axiosInstance.delete(`children/${child_id}`);
};

export const fetchChildByChildId = (child_id) => {
  return axiosInstance.get(`children/${child_id}/`).then((res) => {
    return res.data.child;
  });
};
export const fetchTasksByChild = (child_id) => {
  return axiosInstance.get(`children/${child_id}/tasks/`).then((res) => {
    return res.data.tasks;
  });
};
export const fetchRewardsByChild = (child_id) => {
  return axiosInstance.get(`children/${child_id}/rewards/`).then((res) => {
    return res.data.rewards;
  });
};

export const updateTaskByChild = (task_id, task_status) => {
  return axiosInstance
    .patch(`tasks/${task_id}`, {
      task_status,
    })
    .then((res) => {
      return res.data.task;
    });
};

export const removeTask = (task_id) => {
  return axiosInstance.delete(`tasks/${task_id}`);
};
export const removeReward = (reward_id) => {
  return axiosInstance.delete(`rewards/${reward_id}`);
};
export const createTask = (child_id, task_description, stars_worth) => {
  return axiosInstance.post(`children/${child_id}/tasks`, {
    task_description,
    stars_worth,
  });
};
export const createReward = (child_id, reward_description, star_cost) => {
  return axiosInstance.post(`children/${child_id}/rewards`, {
    reward_description,
    star_cost,
  });
};
export const patchChild = (child_id, star_inc) => {
  return axiosInstance.patch(`children/${child_id}/`, { star_inc });
};
