const root = "http://localhost:3000";

export const getTodos = async (error, callback) => {
 return await fetch(root + "/api/todo", {
  method: "GET",
  headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
   Authorization: `Bearer ${localStorage.getItem("lxoxg")}`,
  },
 })
  .then((res) => res.json())
  .then((data) => {
   if (data.error) {
    error(data);
   } else {
    callback(data);
   }
  })
  .catch((err) => {
   error(err);
  });
};

export const addTodo = async (data, error, callback) => {
 return await fetch(root + "/api/todo", {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
   Authorization: `Bearer ${localStorage.getItem("lxoxg")}`,
  },
  body: JSON.stringify(data),
 })
  .then((res) => res.json())
  .then((data) => {
   if (data.error) {
    error(data);
   } else {
    callback(data);
   }
  })
  .catch((err) => {
   error(err);
  });
};

export const deleteTodo = async (id, error, callback) => {
 return await fetch(root + "/api/todo/" + id, {
  method: "DELETE",
  headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
   Authorization: `Bearer ${localStorage.getItem("lxoxg")}`,
  },
 })
  .then((res) => res.json())
  .then((data) => {
   if (data.error) {
    error(data);
   } else {
    callback(data);
   }
  })
  .catch((err) => {
   error(err);
  });
};

export const updateTodo = async (id, data, error, callback) => {
 return await fetch(root + "/api/todo/" + id, {
  method: "PUT",
  headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
   Authorization: `Bearer ${localStorage.getItem("lxoxg")}`,
  },
  body: JSON.stringify(data),
 })
  .then((res) => res.json())
  .then((data) => {
   if (data.error) {
    error(data);
   } else {
    callback(data);
   }
  })
  .catch((err) => {
   error(err);
  });
};

export const changeTodoStatus = async (id, status, error, callback) => {
 return await fetch(root + "/api/todo/status/" + id, {
  method: "PUT",
  headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
   Authorization: `Bearer ${localStorage.getItem("lxoxg")}`,
  },
  body: JSON.stringify({ status }),
 })
  .then((res) => res.json())
  .then((data) => {
   if (data.error) {
    error(data);
   } else {
    callback(data);
   }
  })
  .catch((err) => {
   error(err);
  });
};

export const signUp = async (data, error, callback) => {
 return await fetch(root + "/api/user/signup", {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify(data),
 })
  .then((res) => res.json())
  .then((data) => {
   if (data.error) {
    error(data);
   } else {
    localStorage.setItem("lxoxg", data.accessToken);
    callback(data);
   }
  })
  .catch((err) => {
   error(err);
  });
};

export const logIn = async (data, error, callback) => {
 return await fetch(root + "/api/user/login", {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
   Authorization: "Bearer " + localStorage.getItem("lxoxg"),
  },
  body: JSON.stringify(data),
 })
  .then((res) => res.json())
  .then((data) => {
   if (data.error) {
    error(data);
   } else {
    localStorage.setItem("lxoxg", data.accessToken);
    callback(data);
   }
  })
  .catch((err) => {
   error(err);
  });
};

export const verifyToken = async (error, callback) => {
 return await fetch(root + "/api/user/verify", {
  method: "GET",
  headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
   Authorization: `Bearer ${localStorage.getItem("lxoxg")}`,
  },
 })
  .then((res) => res.json())
  .then((data) => {
   if (data.error) {
    error(data);
   } else {
    callback(data);
   }
  })
  .catch((err) => {
   error(err);
  });
};
