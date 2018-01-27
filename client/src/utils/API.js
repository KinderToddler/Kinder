import axios from "axios";

export default {
  // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  getAllUsers: function(){
    return axios.get("/api/user")
  },
  createUser: function(user){
    return axios.post("/auth/signup", user)
  },
  updateUser: (id, user) => (axios.put("/api/user/" + id, user))
  ,
  loginUser: function(user){
   return axios.post("/auth/login", user)
  },
  checkForSession: credentials => ( axios.get('/session') )
  ,
  createAMatch: (matchesObj) => {
    return axios.post("/api/user/match", matchesObj)
  },
  logUserOut: credentials => {
    return axios.get("/auth/logout")
  },
  sendEmail: (email) => {
    return axios.post("/api/user/sendemail", email)
  }
};