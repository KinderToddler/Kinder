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
  saveProfile: function(profileData) {
    return axios.post("/api/profile", profileData);
  },
  createUser: function(user){
    return axios.post("/auth/signup", user)
  },
  loginUser: function(user){
    return axios.post("/auth/login", user)
  },
  getUserData: function(){
    return axios.get("/auth/user_data", function(req,res){
      console.log(req)
    })
  },
  checkForSession: credentials => ( axios.get('/session') )
};