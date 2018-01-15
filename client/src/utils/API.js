import axios from "axios";

export default {
  // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // Gets the book with the given id
  getProfile: function(id) {
    return axios.get("/api/profile/" + id);
  },
  saveProfile: function(profileData) {
    return axios.post("/api/profile", profileData);
  }
};