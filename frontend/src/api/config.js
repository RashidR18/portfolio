import axios from "axios";

const api = axios.create({
  baseURL: "https://portfolio-7301.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});


// Contact endpoints
export const contactAPI = {
  // Send a new contact message
  sendMessage: (data) => api.post("/contact", data),

  // Get all contact messages
  getMessages: () => api.get("/contact"),

  // Get a single message
  getMessage: (id) => api.get(`/contact/${id}`),

  // Update message status
  updateMessage: (id, data) => api.put(`/contact/${id}`, data),

  // Delete a message
  deleteMessage: (id) => api.delete(`/contact/${id}`),
};

export default api;
