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
  createUser: function(user){
    return axios.post("/auth/signup", user)
  },
  updateUser: (id, user) => (axios.put("/api/user/" + id, user))
  ,
  loginUser: function(user){
    return axios.post("/auth/login", user)
  },
  checkForSession: credentials => ( axios.get('/session') )
};