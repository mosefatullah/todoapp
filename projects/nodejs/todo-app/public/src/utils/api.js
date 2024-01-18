export const getTodos = async (error, callback) => {
 return await fetch("http://localhost:3000/api/todo", {
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

export const signUp = async (data, error, callback) => {
 return await fetch("http://localhost:3000/api/user/signup", {
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
 return await fetch("http://localhost:3000/api/user/login", {
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
 return await fetch("http://localhost:3000/api/user/verify", {
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
  console.log(localStorage.getItem("lxoxg"));
   error(err);
  });
};
