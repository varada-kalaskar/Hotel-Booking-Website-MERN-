import axios from "axios";

export const register = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/register`, user);

export const login = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/login`, user);

// update user in local storage
export const updateUserInLocalStorage = (user, next) => { //in the callback we redirect the user
  if (window.localStorage.getItem("auth")) { // if we have this item, auth in local storage then we want to update
    let auth = JSON.parse(localStorage.getItem("auth")); // in local storage, data is stored in the form of JSON
    auth.user = user; //we save the updated user
    localStorage.setItem("auth", JSON.stringify(auth)); //we save the updated one back
    next();
  }
};
